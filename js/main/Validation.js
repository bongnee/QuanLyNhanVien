function Validation() {
    this.checkEmpty = function (value, message, tknv) {
        if (value != "") {
            document.getElementById(tknv).innerHTML = "";
            document.getElementById(tknv).style.display = "none";
            return true;
        }
        document.getElementById(tknv).innerHTML = message;
        document.getElementById(tknv).style.display = "block";
        return false;
    }
    this.checkTK = function (value,message,tknv, mangNV) {
        var isExist = mangNV.some(function (nv) {
            return nv.tk == value
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
}