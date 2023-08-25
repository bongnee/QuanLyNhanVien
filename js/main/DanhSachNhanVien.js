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
    this.capNhat = function (nvUpdate) {
        var indexUpdate = this.mangNV.findIndex(function (nv) {
            return nv.tk == nvUpdate.tk
        });
        if (indexUpdate > -1) {
            this.mangNV[indexUpdate] = nvUpdate;
        }
    }
}


DanhSachNhanVien.prototype.searchByName = function (tuTK) {
    var mangTK = [];
    var tuTKXoaSpace = tuTK.toLowerCase().replace(/\s/g, "");
    this.mangNV.map(function (nv) {
        var indexTK = nv.loaiNhanVien.toLowerCase().replace(/\s/g, "").indexOf(tuTKXoaSpace);
        if (indexTK > -1) {
            mangTK.push(nv);
        }
       
    })
    return mangTK;
}