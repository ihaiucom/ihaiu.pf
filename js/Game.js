var AssetManager = Games.AssetManager;
var ConfigManager = configs.ConfigManager;
var ModelManager = Games.ModelManager;
var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
var Game = /** @class */ (function () {
    function Game() {
    }
    // 初始化
    Game.install = function () {
        var stage = Laya.stage;
        var fstage = fairygui.GRoot.inst;
        if (Games.LoaderManager.instance) {
            Game.loader = Games.LoaderManager.instance;
        }
        else {
            Game.loader = Games.LoaderManager.instance = new Games.LoaderManager();
        }
        Game.installer.install();
        // Game.installProto("172.16.0.187");
        Game.installProto("172.16.0.187", 80);
        // Game.installProto("172.16.52.101");
        // Game.installProto("172.16.50.169", 8360);
        // Game.installProto("172.16.0.187", 80);
        // Game.installProto("172.16.52.101");
    };
    // 初始化协议
    Game.installProto = function (ip, port, useHttps) {
        if (ip === void 0) { ip = "172.16.0.116"; }
        if (port === void 0) { port = 8360; }
        if (useHttps === void 0) { useHttps = false; }
        Game.protosender.install();
        Game.protohandler.install();
        Game.proto.install(ip, port, useHttps);
    };
    // 安装完成
    Game.onInstallComplete = function () {
        console.log("Game.onInstallComplete");
        Game.menu.open(MenuId.Login);
        // 生成GlobalConfig.Key
        // Game.config.global.outKeyCode();
        // Game.config.msg.outKeyCode();
        // 全局参数配置获取
        // let val: number = GlobalConfig.getValue(GlobalConfigKey.KEY_1001);
        // let val1: number[] = GlobalConfig.getValue1(GlobalConfigKey.KEY_1001);
        // let val2: DTlValue2[] = GlobalConfig.getValue2(GlobalConfigKey.KEY_1001);
        // let val3: DTlValue3[] = GlobalConfig.getValue3(GlobalConfigKey.Gold_Convert_Count);
        //==================
        // 字符窜格式化
        //------------------
        // let str1 = "我是{0}, 年龄{1}";
        // let rst1 = str1.format("ZF", 18); // 对象方法方式；该方式,如果str1==undefine, null， 将会报错
        // let rst2 = format(str1, "静态方法", 18); // 静态方法方式
        // console.log(rst1);
        // console.log(rst2);
    };
    Game.test1 = function () {
    };
    Game.installer = new Games.GameInstaller();
    Game.menu = new Games.MenuManager();
    Game.guiRes = new Games.GuiResPackageConfigReader();
    Game.spriteRes = new Games.SpriteResPackageConfigReader();
    Game.system = new Games.SystemMessag;
    Game.localStorage = new Games.GameLocalStorage();
    Game.proto = new Games.ProtoManager();
    Game.protosender = new Games.ProtoSenderList();
    Game.protohandler = new Games.ProtoHandlerList();
    // 协议--事件--成功
    Game.protoOkEvent = new Emitter();
    // 协议--事件--失败
    Game.protoFailEvent = new Emitter();
    // 游戏--事件
    Game.event = new Emitter();
    // 游戏时间
    Game.time = new Games.GameTimeData;
    Game.asset = new AssetManager();
    Game.config = new ConfigManager();
    Game.moduleModel = new ModelManager();
    return Game;
}());
var User = new Games.UserData();
var list = [1, 2, 3];
console.log(list.indexOf(4));
setTimeout(function () {
    Game.install();
}, 500);
//# sourceMappingURL=Game.js.map