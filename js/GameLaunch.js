var Games;
(function (Games) {
    var GameLaunch = /** @class */ (function () {
        function GameLaunch() {
        }
        GameLaunch.prototype.install = function () {
            Laya.init(720, 1280, Laya.WebGL);
            // Laya.init(document.body.clientWidth, document.body.clientHeight, Laya.WebGL);
            // laya.utils.Stat.show(0, 0);
            //设置适配模式
            Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            // Laya.stage.scaleMode = "showall";
            Laya.stage.alignH = "center";
            Laya.stage.alignV = "top";
            //设置横竖屏
            // Laya.stage.screenMode = "vertical";
            // 初始化UI层级容器
            Games.MenuLayer.install();
            this.installSystem();
        };
        // 初始化系统
        GameLaunch.prototype.installSystem = function () {
            // 设置fgui文件后缀
            fairygui.UIConfig["packageFileExtension"] = Games.GuiSetting.packageFileExtension;
            // 设置字体
            fairygui.UIConfig.defaultFont = "Arial";
            // 绑定组件
            fgui.System.SystemBinder.bindAll();
            // 注册Loader类
            fairygui.UIObjectFactory.setLoaderExtension(FGLoader);
            // 加载系统UI
            Laya.loader.load([
                { url: "res/fgui/System.bin", type: Laya.Loader.BUFFER },
                { url: "res/fgui/System@atlas0.png", type: Laya.Loader.IMAGE },
                { url: "res/fgui/Common.bin", type: Laya.Loader.BUFFER },
                { url: "res/fgui/Common@atlas0.png", type: Laya.Loader.IMAGE }
            ], Laya.Handler.create(this, this.onLoadedSystem));
        };
        // 加载完系统UI
        GameLaunch.prototype.onLoadedSystem = function () {
            fairygui.UIPackage.addPackage("res/fgui/System");
            // 初始化转圈
            fairygui.UIConfig.globalModalWaiting = fairygui.UIPackage.getItemURL("System", "GlobalModalWaiting");
            fairygui.UIConfig.windowModalWaiting = fairygui.UIPackage.getItemURL("System", "WindowModalWaiting");
            Games.LoaderManager.instance = new Games.LoaderManager();
            // 创建GM按钮
            var gm = fgui.System.GMLanuchButton.createInstance();
            gm.draggable = true;
            gm.dragBounds = new laya.maths.Rectangle(-50, -50, Laya.stage.width + 100, Laya.stage.height + 100);
            gm.y = 100;
            Games.MenuLayer.floatMsg.addChild(gm);
            fairygui.GTextField;
        };
        return GameLaunch;
    }());
    Games.GameLaunch = GameLaunch;
})(Games || (Games = {}));
new Games.GameLaunch().install();
//# sourceMappingURL=GameLaunch.js.map