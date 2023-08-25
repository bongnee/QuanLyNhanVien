var dsnv = new DanhSachNhanVien();
var validation = new Validation();


function queryELE(query) {
    return document.querySelector(query);
}
function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}
function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiDSNV(dsnv.mangNV);
    }
}
getLocalStorage();


// thêm nhân viên 
function themNhanVien() {
    var tk = queryELE("#tknv").value;
    var ten = queryELE("#name").value;
    var email = queryELE("#email").value;
    var password = queryELE("#password").value;
    var ngay = queryELE("#datepicker").value;
    var luong = queryELE("#luongCB").value;
    var chucVu = queryELE("#chucvu").value;
    var gioLam = queryELE("#gioLam").value;
    

    var isValid = true;


    // tài khoản 
    isValid &= validation.checkEmpty(tk, "Tài khoản nhân viên không được để trống", "tbTKNV") && validation.checkTK(tk, "Tài khoản không được trùng", "tbTKNV", dsnv.mangNV) && validation.checkTKValue(tk, "Tài khoản không hợp lệ", "tbTKNV");

    // tên nhân viên 
    isValid &= validation.checkEmpty(ten, "Tên nhân viên không để trống", "tbTen") && validation.checkName(ten, "Tên nhân viên không hợp lệ", "tbTen");
    // email 

    isValid &= validation.checkEmpty(email, "Email không được để trống", "tbEmail") && validation.checkEmail(email, "Email không hợp lệ", "tbEmail");
    // password
    isValid &= validation.checkEmpty(password, "Password không được để trống", "tbMatKhau") && validation.checkPassword(password, "Password không hợp lệ", "tbMatKhau");

    // ngày làm 
    isValid &= validation.checkEmpty(ngay, "Ngày làm không được để trống", "tbNgay")&& validation.checkDay(ngay, "Ngày làm không hợp lệ", "tbNgay") ;
    // lương 
    isValid &= validation.checkEmpty(luong, "Lương không được để trống", "tbLuongCB") && validation.checkLuong(luong, "Lương không hợp lệ", "tbLuongCB");

    // Chức vụ 
    var chucVuIndex = queryELE("#chucvu").selectedIndex;
    isValid &= validation.checkChucVu(chucVuIndex, "Vui lòng chọn chức vụ","tbChucVu");
    // giờ làm 
    isValid &= validation.checkEmpty(gioLam, "Giờ làm không được để trống", "tbGiolam") && validation.checkGioLam(gioLam, "Giờ làm không hợp lệ", "tbGiolam");




    if (isValid) {
        var nv = new NhanVien(tk, ten, email, password, ngay, luong, chucVu, gioLam);

        nv.tinhLuong();

        nv.xepLoai();

        dsnv.themNV(nv);

        hienThiDSNV(dsnv.mangNV);

        setLocalStorage();
        queryELE("#btnDong").click();
    }



}

document.getElementById("btnThemNV").onclick = themNhanVien;

function hienThiDSNV(mang) {
    var content = "";
    mang.map(function (nv, index) {

        var trELE = `<tr>
        <td>${nv.tk}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.loaiNhanVien}</td>
        <td>
        <button class="btn btn-danger" onclick="xoaNhanVien('${nv.tk}')"   >Xóa</button>
        <button class="btn btn-info" onclick="hienThiChiTiet('${nv.tk}')"     >Xem</button>
        </td>
        </tr> `
        content += trELE;
    })
    console.log(content);

    queryELE("#tableDanhSach").innerHTML = content;
}

function xoaNhanVien(maXoa) {
    dsnv.xoaNV(maXoa);
    setLocalStorage();
    getLocalStorage();
}
function hienThiChiTiet(maXem) {
    var nvFind = dsnv.xemNV(maXem);

    queryELE("#tknv").value= nvFind.tk; 
    queryELE("#tknv").disabled= true; 
    queryELE("#name").value = nvFind.hoTen;
    queryELE("#email").value = nvFind.email;
    queryELE("#password").value = nvFind.matKhau;
    queryELE("#datepicker").value = nvFind.ngayLam;
    queryELE("#luongCB").value = nvFind.luongCoBan;
    queryELE("#chucvu").value = nvFind.chucVu;
    queryELE("#gioLam").value = nvFind.gioLam;

    queryELE("#btnThem").click();

}

function capNhatNV() {
    var tk = queryELE("#tknv").value;
    var ten = queryELE("#name").value;
    var email = queryELE("#email").value;
    var password = queryELE("#password").value;
    var ngay = queryELE("#datepicker").value;
    var luong = queryELE("#luongCB").value;
    var chucVu = queryELE("#chucvu").value;
    var gioLam = queryELE("#gioLam").value;


    var nvUpdate = new NhanVien(tk, ten, email, password, ngay, luong, chucVu, gioLam);
    nvUpdate.tinhLuong();

    nvUpdate.xepLoai();

    dsnv.capNhat(nvUpdate);
    setLocalStorage();
    getLocalStorage();
    queryELE("#btnDong").click();


}
queryELE("#btnCapNhat").onclick = capNhatNV;


queryELE("#btnTimNV").onclick = function(){
    var tuTK = queryELE("#searchName").value;
    var mangTK = dsnv.searchByName(tuTK);
    hienThiDSNV(mangTK);
}
queryELE("#searchName").onkeydown = function(){
    var tuTK = queryELE("#searchName").value;
    var mangTK =  dsnv.searchByName(tuTK);
    hienThiDSNV(mangTK); 
}