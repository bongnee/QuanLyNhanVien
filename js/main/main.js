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
    var tk  = queryELE("#tknv").value; 
    var ten = queryELE("#name").value; 
    var email = queryELE("#email").value; 
    var password = queryELE("#password").value; 
    var ngay = queryELE("#datepicker").value; 
    var luong = queryELE("#luongCB").value; 
    var chucVu = queryELE("#chucvu").value; 
    var gioLam = queryELE("#gioLam").value; 

    var isValid = true;


    // tài khoản 
    isValid &= validation.checkEmpty(tk, "Tài khoản nhân viên không được để trống", "tbTKNV")&& validation.checkTK(tk, "Tài khoản không được trùng", "tbTKNV", dsnv.mangNV)&& validation.checkTKValue(tk,"Tài khoản không hợp lệ","tbTKNV" );

    // tên nhân viên 
    isValid &= validation.checkEmpty(ten,"Tên nhân viên không để trống","tbTen")&& validation.checkName(ten,"Tên nhân viên không hợp lệ", "tbTen");
    // email 

    isValid &= validation.checkEmpty(email,"Email không được để trống", "tbEmail")&& validation.checkEmail(email,"Email không hợp lệ", "tbEmail");
    // password
    isValid &= validation.checkEmpty(password,"Password không được để trống", "tbMatKhau")&& validation.checkPassword(password,"Password không hợp lệ", "tbMatKhau");

    // ngày làm 
    isValid &= validation.checkEmpty(ngay,"Ngày làm không được để trống", "tbMatKhau")&& validation.checkPassword(ngay,"Password không hợp lệ", "tbMatKhau");
    
    


    if (isValid) {
    var nv = new NhanVien(tk,ten,email,password,ngay,luong,chucVu,gioLam);

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
    mang.map(function (nv,index) {
       
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
        content +=trELE;
    })
    
    queryELE("#tableDanhSach").innerHTML = content;                                                      
}