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
    // 游戏主界面
    //----------------------
    var HomeWindow = /** @class */ (function (_super) {
        __extends(HomeWindow, _super);
        function HomeWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Main.Main);
            _this.addAssetForFguiComponent(fgui.Building.Main);
            return _this;
        }
        // 生成动态预加载资源
        HomeWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(2001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(2201));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(7101));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(6001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(8001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(1001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(3001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(9999));
        };
        // 菜单创建
        HomeWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Main.Main.createInstance();
            this.contentPane = this.conent;
            this.center();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        HomeWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        HomeWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
            User.sGameInfoUpdate.add(this.onUpdateGameInfo, this);
            Game.moduleModel.actor.sUpdateActorInfo.add(this.onUpdateActorInfo, this);
            Game.moduleModel.actor.sAddActorList.add(this.onAddActorInfo, this);
            this.updatRed();
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        HomeWindow.prototype.onHideComplete = function () {
            Game.moduleModel.actor.sUpdateActorInfo.remove(this.onUpdateActorInfo, this);
            Game.moduleModel.actor.sAddActorList.remove(this.onAddActorInfo, this);
            User.sGameInfoUpdate.remove(this.onUpdateGameInfo, this);
            _super.prototype.onHideComplete.call(this);
        };
        /**
         * 更新info信息
         */
        HomeWindow.prototype.onUpdateGameInfo = function () {
            this.updatRed();
        };
        HomeWindow.prototype.onAddActorInfo = function () {
            this.updatRed();
        };
        HomeWindow.prototype.onUpdateActorInfo = function () {
            this.updatRed();
        };
        /**
         * 更新红点
         */
        HomeWindow.prototype.updatRed = function () {
            this.conent.updateRed();
        };
        return HomeWindow;
    }(Games.MWindow));
    Games.HomeWindow = HomeWindow;
})(Games || (Games = {}));
//# sourceMappingURL=HomeWindow.js.map