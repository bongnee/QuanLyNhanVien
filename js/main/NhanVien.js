function NhanVien(tk,ten,email,password,ngay,luong,chucVu,gioLam) {
    this.tk = tk;
    this.hoTen = ten;
    this.email = email;
    this.matKhau = password
    this.ngayLam = ngay;
    this.luongCoBan = luong;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.loaiNhanVien = "";
    this.tinhLuong = function(){
        if (this.chucVu === "Sếp") {
            this.tongLuong = this.luongCoBan *3;
        }else if (this.chucVu === "Trưởng phòng") {
            this.tongLuong = this.luongCoBan *2;
        }else if (this.chucVu === "Nhân viên") {
            this.tongLuong = this.luongCoBan *1;
        }else{
            this.tongLuong = 0;
        }
    }
    this.xepLoai = function () {
        if (this.gioLam >= 192) {
            this.loaiNhanVien = "xuất sắc";
        }else if (this.gioLam >= 176 && this.gioLam < 192) {
            this.loaiNhanVien = "giỏi";
        }else if (this.gioLam >= 160 && this.gioLam < 176) {
            this.loaiNhanVien = "khá";
        }else {
            this.loaiNhanVien = "trung bình";
        }
    }

}

