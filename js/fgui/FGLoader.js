var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FGLoader = /** @class */ (function (_super) {
    __extends(FGLoader, _super);
    function FGLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FGLoader.prototype.loadContent = function () {
        _super.prototype.loadContent.call(this);
    };
    FGLoader.prototype.getPackagenameByUrl = function (url) {
        return url.replace("ui://", "").split("/")[0];
    };
    FGLoader.prototype.loadFromPackage = function (itemURL) {
        var packageItem = fairygui.UIPackage.getItemByURL(itemURL);
        if (packageItem) {
            _super.prototype.loadFromPackage.call(this, itemURL);
        }
        else {
            var packagename = this.getPackagenameByUrl(itemURL);
            var config = Game.spriteRes.getconfig(packagename);
            if (!config) {
                config = Game.guiRes.getconfig(packagename);
            }
            if (config) {
                Game.asset.loadFgui(config, this, this.onLoadPackage);
            }
        }
    };
    FGLoader.prototype.onLoadPackage = function () {
        _super.prototype.loadFromPackage.call(this, this.url);
    };
    FGLoader.prototype.loadExternal = function () {
        /*
        开始外部载入，地址在url属性
        载入完成后调用OnExternalLoadSuccess
        载入失败调用OnExternalLoadFailed
        注意：如果是外部载入，在载入结束后，调用OnExternalLoadSuccess或OnExternalLoadFailed前，
        比较严谨的做法是先检查url属性是否已经和这个载入的内容不相符。
        如果不相符，表示loader已经被修改了。
        这种情况下应该放弃调用OnExternalLoadSuccess或OnExternalLoadFailed。
        */
        _super.prototype.loadExternal.call(this);
    };
    //释放外部载入的资源
    FGLoader.prototype.freeExternal = function (texture) {
        _super.prototype.freeExternal.call(this, texture);
    };
    // 载入完成后调用
    FGLoader.prototype.onExternalLoadSuccess = function (texture) {
        _super.prototype.onExternalLoadSuccess.call(this, texture);
    };
    // 载入失败调用
    FGLoader.prototype.onExternalLoadFailed = function () {
        _super.prototype.onExternalLoadFailed.call(this);
    };
    return FGLoader;
}(fairygui.GLoader));
//# sourceMappingURL=FGLoader.js.map