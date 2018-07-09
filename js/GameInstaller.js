var Games;
(function (Games) {
    // 游戏初始化
    var GameInstaller = /** @class */ (function () {
        function GameInstaller() {
        }
        // 初始化
        GameInstaller.prototype.install = function () {
            // 初始化UI层级容器
            // MenuLayer.install();
            // 初始化UI窗口配置
            Games.MenuWindows.install();
            // 初始化 fgui资源列表
            Game.guiRes.install();
            // 初始化 fsprite资源列表
            Game.spriteRes.install();
            this.installSystem();
        };
        // 初始化系统
        GameInstaller.prototype.installSystem = function () {
            // 设置fgui文件后缀
            fairygui.UIConfig["packageFileExtension"] = Games.GuiSetting.packageFileExtension;
            // 设置字体
            fairygui.UIConfig.defaultFont = "Arial";
            // 绑定组件
            fguiBinderAll();
            // 加载系统UI
            Game.asset.loadFguiByPackagename(Games.GuiPackageNames.System, this, this.onLoadedSystemUI);
            Game.asset.loadFguiByPackagename(Games.GuiPackageNames.Common);
        };
        // 加载完系统UI
        GameInstaller.prototype.onLoadedSystemUI = function () {
            // 初始化转圈
            fairygui.UIConfig.globalModalWaiting = fairygui.UIPackage.getItemURL("System", "GlobalModalWaiting");
            fairygui.UIConfig.windowModalWaiting = fairygui.UIPackage.getItemURL("System", "WindowModalWaiting");
            Game.circle = new Games.Circle();
            // 初始化加载面板
            Game.loader.install();
            Game.loader.open(Games.LoaderId.Launch);
            this.loadConfig();
        };
        // 加载配置
        GameInstaller.prototype.loadConfig = function () {
            Game.loader.setProgress(0);
            Game.loader.setMax(1);
            Game.config.configLoader = Game.asset;
            Game.config.sLoadProgress.add(this.onLoadConfigProgress, this);
            Game.config.sLoaded.add(this.onLoadedConfig, this);
            Game.config.initList();
            Game.config.loadAll();
        };
        // 加载配置进度
        GameInstaller.prototype.onLoadConfigProgress = function (rate) {
            Game.loader.setProgress(rate);
        };
        // 加载配置完成
        GameInstaller.prototype.onLoadedConfig = function () {
            console.log("\u914D\u7F6E \u52A0\u8F7D\u5B8C\u6210\u6240\u6709");
            // 初始化数据模型
            Game.moduleModel.install();
            // 关闭启动加载界面
            Game.loader.close(Games.LoaderId.Launch);
            // 调安装完成
            Game.onInstallComplete();
        };
        return GameInstaller;
    }());
    Games.GameInstaller = GameInstaller;
})(Games || (Games = {}));
//# sourceMappingURL=GameInstaller.js.map