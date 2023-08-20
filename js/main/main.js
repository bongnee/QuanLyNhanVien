var dsnv = new DanhSachNhanVien();



function queryELE(query) {
    return document.querySelector(query);
}


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
    
    var nv = new NhanVien(tk,ten,email,password,ngay,luong,chucVu,gioLam)
    nv.tinhLuong();
    nv.xepLoai();
    dsnv.themNV();


    hienThiDSNV(dsnv.mangNV);

    

}
document.getElementById("btnThemNV").onclick = themNhanVien;

function hienThiDSNV(mang) {
    var content = "";
    mang.map(function (nv,index) {
        
    })
}