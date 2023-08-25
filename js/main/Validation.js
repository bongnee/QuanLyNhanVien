function Validation() {
    this.checkEmpty = function (value, message, tknv) {
        if (value.trim() != "") {
            document.getElementById(tknv).innerHTML = "";
            document.getElementById(tknv).style.display = "none";
            return true;
        }
        document.getElementById(tknv).innerHTML = message;
        document.getElementById(tknv).style.display = "block";
        return false;
    }

    // tài khoản 
    this.checkTK = function (value,message,tknv, mangNV) {
        var isExist = mangNV.some(function (nv) {
            return nv.tk == value.trim()
        });
        if(isExist){
            document.getElementById(tknv).innerHTML = message;
            document.getElementById(tknv).style.display = "block";
            return false;
            
        }
        document.getElementById(tknv).innerHTML = "";
        document.getElementById(tknv).style.display = "none";
        return true;
        
        
    }
    this.checkTKValue = function (value, message, tknv) {
        if (value.length >= 4 && value.length <= 6) {
            document.getElementById(tknv).innerHTML = "";
            document.getElementById(tknv).style.display = "none";
            return true;
        }
        document.getElementById(tknv).innerHTML = message;
        document.getElementById(tknv).style.display = "block";
        return false;
    }
    // tên nhân viên 
    this.checkName = function (value, message, tknv) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

        // match đem chuỗi cần kt đi so sánh với định dạng dữ liệu của biểu thức chính quy (pattern, regexp)
        // var result = value.match(pattern);
        if (value.match(pattern)) {
            //hợp lệ
            document.getElementById(tknv).innerHTML = "";
            document.getElementById(tknv).style.display = "none";
            return true;
        }

        // không hợp lệ
        document.getElementById(tknv).innerHTML = message;
        document.getElementById(tknv).style.display = "block";
        return false;

    }
    // email 
    this.checkEmail = function (value, message, tknv) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (value.match(pattern)) {
            
            document.getElementById(tknv).innerHTML = "";
            document.getElementById(tknv).style.display = "none";
            return true;
        }
       
        document.getElementById(tknv).innerHTML = message;
        document.getElementById(tknv).style.display = "block";
        return false;

    }

    // mật khẩu 
    this.checkPassword = function (value, message, tknv) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

        if (value.match(pattern)) {
            
            document.getElementById(tknv).innerHTML = "";
            document.getElementById(tknv).style.display = "none";
            return true;
        }
       
        document.getElementById(tknv).innerHTML = message;
        document.getElementById(tknv).style.display = "block";
        return false;

    }
    // ngày làm 
    this.checkDay = function (value, message, tknv) {
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;

        if (value.match(pattern)) {
            
            document.getElementById(tknv).innerHTML = "";
            document.getElementById(tknv).style.display = "none";
            return true;
        }
       
        document.getElementById(tknv).innerHTML = message;
        document.getElementById(tknv).style.display = "block";
        return false;

    }
    // lương 
    this.checkLuong = function (value, message, tknv) {
        var pattern = /^[0-9]+$/; 

        if (value.match(pattern)&& value >= 1000000 && value <= 20000000) {
            
            document.getElementById(tknv).innerHTML = "";
            document.getElementById(tknv).style.display = "none";
            return true;
        }
       
        document.getElementById(tknv).innerHTML = message;
        document.getElementById(tknv).style.display = "block";
        return false;

    }
    // chức vụ 
    this.checkChucVu = function (value, message, tknv) {
        // var index = document.getElementById(value).selectedIndex;

        if (value != 0) {
            document.getElementById(tknv).innerHTML = "";
            document.getElementById(tknv).style.display = "none";
            return true;
                 
        }
        document.getElementById(tknv).innerHTML = message;
        document.getElementById(tknv).style.display = "block";
        return false;  
      
       
        
    }
    // giờ làm 
    this.checkGioLam = function (value, message, tknv) {
        var pattern = /^[0-9]+$/; 

        if (value.match(pattern)&& value >= 80 && value <= 200) {
            
            document.getElementById(tknv).innerHTML = "";
            document.getElementById(tknv).style.display = "none";
            return true;
        }
       
        document.getElementById(tknv).innerHTML = message;
        document.getElementById(tknv).style.display = "block";
        return false;

    }




}
