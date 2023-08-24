function DanhSachNhanVien() {
    this.mangNV = [];

    this.themNV = function(nv) {
        this.mangNV.push(nv);
        
    }
    this.xoaNV = function (maXoa) {
        var indexXoa = this.mangNV.findIndex(function(nv){
            return nv.tk == maXoa;
        })
        this.mangNV.splice(indexXoa,1);
    }
    this.xemNV = function(maXem){
        var  nvFind = this.mangNV.find(function(nv){
            return nv.tk == maXem
        });
        return nvFind;
    }
}