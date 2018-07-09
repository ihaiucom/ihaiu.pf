/////////////////////////////////////
// ihaiu.GenerateFguiResPackageConfig生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    // =====================
    // fgui包资源配置列表
    // ---------------------
    var GuiResPackageConfigReader = /** @class */ (function () {
        function GuiResPackageConfigReader() {
            // 字典
            this.dict = new Dictionary();
        }
        // 添加配置
        GuiResPackageConfigReader.prototype.addconfig = function (config) {
            this.dict.add(config.packageName, config);
        };
        // 获取配置
        GuiResPackageConfigReader.prototype.getconfig = function (packageName) {
            return this.dict.getValue(packageName);
        };
        // 初始化
        GuiResPackageConfigReader.prototype.install = function () {
            var config;
            config = new Games.GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "BlackSkin";
            config.resBin = "BlackSkin.bin";
            config.resAtlas.push("BlackSkin@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Building";
            config.resBin = "Building.bin";
            config.resAtlas.push("Building@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Common";
            config.resBin = "Common.bin";
            config.resAtlas.push("Common@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Fx";
            config.resBin = "Fx.bin";
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GM";
            config.resBin = "GM.bin";
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Login";
            config.resBin = "Login.bin";
            config.resAtlas.push("Login@atlas0.png");
            config.resAtlas.push("Login@atlas0_1.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Main";
            config.resBin = "Main.bin";
            config.resAtlas.push("Main@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "PfSkin";
            config.resBin = "PfSkin.bin";
            config.resAtlas.push("PfSkin@atlas0.png");
            config.resAtlas.push("PfSkin@atlas0_1.png");
            config.resAtlas.push("PfSkin@atlas0_2.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "PlayerInfo";
            config.resBin = "PlayerInfo.bin";
            config.resAtlas.push("PlayerInfo@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "System";
            config.resBin = "System.bin";
            config.resAtlas.push("System@atlas0.png");
            this.addconfig(config);
        };
        return GuiResPackageConfigReader;
    }());
    Games.GuiResPackageConfigReader = GuiResPackageConfigReader;
})(Games || (Games = {}));
//# sourceMappingURL=GuiResPackageConfigReader.js.map