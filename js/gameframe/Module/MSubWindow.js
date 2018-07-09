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
var Games;
(function (Games) {
    //======================
    // 模块子窗口
    //----------------------
    var MSubwindow = /** @class */ (function (_super) {
        __extends(MSubwindow, _super);
        function MSubwindow(subwindowIndex, mainWindow) {
            var _this = _super.call(this) || this;
            // 自己显示时，是否关闭其他子窗口
            _this.whenOpenCloseOthersubwindow = true;
            // 自己显示时，是否隐藏主窗口内容
            _this.whenOpenCloseMainwindow = true;
            _this.subwindowIndex = subwindowIndex;
            _this.mainWindow = mainWindow;
            return _this;
        }
        // 添加依赖资源--fgui 包名
        MSubwindow.prototype.addAssetForFguiPackagename = function (packagename) {
            var item = { url: packagename, type: Games.AssetItemType.FguiPackage };
            this._loadAssets.push(item);
            this.mainWindow.addAssetForFguiPackagename(packagename);
        };
        // 菜单显示
        MSubwindow.prototype.menuShow = function (root) {
            this.showOn(root);
        };
        // 关闭, 包括主窗口都会关闭
        MSubwindow.prototype.menuClose = function () {
            this.mainWindow.menuClose();
        };
        // 返回, 调用主窗口的返回之前打开该模块的界面
        MSubwindow.prototype.menuBack = function () {
            this.mainWindow.menuBack();
        };
        // 返回, 关闭自己，打开主窗口
        MSubwindow.prototype.backToMainWindow = function () {
            this.mainWindow.onSubwindowBack(this);
        };
        // 仅关闭自己
        MSubwindow.prototype.closeSelf = function () {
            this.hide();
        };
        // 菜单打开事件，传递参数
        MSubwindow.prototype.onMenuOpen = function (parameter) {
            this.menuParameter = parameter;
        };
        return MSubwindow;
    }(Games.MWindow));
    Games.MSubwindow = MSubwindow;
})(Games || (Games = {}));
//# sourceMappingURL=MSubWindow.js.map