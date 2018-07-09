var Games;
(function (Games) {
    //=================
    // 模块管理器
    //------------------
    var MenuManager = /** @class */ (function () {
        function MenuManager() {
            this.dict = new Dictionary();
        }
        // 初始化
        MenuManager.prototype.install = function () {
        };
        // 获取模块控制器
        MenuManager.prototype.getMenuCtl = function (menuId) {
            return this.dict.getValue(menuId);
        };
        // 打开模块的tab面板
        MenuManager.prototype.openTab = function (menuId, tabIndex) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return this._open(menuId, { openType: Games.MenuOpenType.Tab, openIndex: tabIndex, args: args });
        };
        // 打开模块的子窗口
        MenuManager.prototype.openSubWindow = function (menuId, subwindowIndex) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return this._open(menuId, { openType: Games.MenuOpenType.Subwindow, openIndex: subwindowIndex, args: args });
        };
        // 打开模块
        MenuManager.prototype.open = function (menuId) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return this._open(menuId, { openType: Games.MenuOpenType.None, openIndex: 0, args: args });
        };
        // 打开模块
        MenuManager.prototype._open = function (menuId, parametar) {
            var ctl = this.getMenuCtl(menuId);
            if (!ctl) {
                var menuConfig = Game.config.menu.getConfig(menuId);
                if (!menuConfig) {
                    error("MenuManager.open \u6CA1\u6709\u627E\u5230menuConfig, menuId=" + menuId);
                    return null;
                }
                var menuWindowConfig = Games.MenuWindows.get(menuId);
                if (!menuWindowConfig) {
                    error("MenuManager.open \u6CA1\u6709\u627E\u5230menuWindowConfig, menuId=" + menuId);
                    return null;
                }
                if (!menuWindowConfig.windowClass) {
                    error("MenuManager.open menuWindowConfig.windowClass=" + menuWindowConfig.windowClass + ", menuId=" + menuId);
                    return null;
                }
                ctl = new Games.MenuCtl();
                ctl.menuId = menuId;
                ctl.menuConfig = menuConfig;
                ctl.menuWindowConfig = menuWindowConfig;
                this.dict.add(menuId, ctl);
            }
            ctl.open(parametar);
            return ctl;
        };
        // 关闭模块
        MenuManager.prototype.close = function (menuId) {
            var ctl = this.getMenuCtl(menuId);
            if (ctl) {
                ctl.close();
            }
        };
        return MenuManager;
    }());
    Games.MenuManager = MenuManager;
})(Games || (Games = {}));
//# sourceMappingURL=MenuManager.js.map