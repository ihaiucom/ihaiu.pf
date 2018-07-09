var Res = /** @class */ (function () {
    function Res() {
    }
    // 获取骨骼动画 -- 骨骼
    Res.getSpineSKPath = function (path) {
        return Res.root + "spine/" + path + ".sk";
    };
    // 获取骨骼动画 -- 皮肤
    Res.getSpinePngPath = function (path) {
        return Res.root + "spine/" + path + ".png";
    };
    // 获取贴图路径
    Res.getTexturePath = function (path) {
        return Res.root + "texture/" + path + ".png";
    };
    Res.getRoom = function (id) {
        if (id > 3)
            id = 3;
        return Res.getTexturePath("Room/" + id);
    };
    Res.root = "res/";
    return Res;
}());
//# sourceMappingURL=Res.js.map