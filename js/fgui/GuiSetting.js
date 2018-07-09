var Games;
(function (Games) {
    // =====================
    // fgui 设置
    // ---------------------
    var GuiSetting = /** @class */ (function () {
        function GuiSetting() {
        }
        GuiSetting.getResPackagePath = function (packageName, dir) {
            if (isNullOrEmpty(dir)) {
                return "" + GuiSetting.resRoot + packageName;
            }
            else {
                return "" + GuiSetting.resRoot + dir + "/" + packageName;
            }
        };
        GuiSetting.getResPath = function (filename, dir) {
            if (isNullOrEmpty(dir)) {
                return "" + GuiSetting.resRoot + filename;
            }
            else {
                return "" + GuiSetting.resRoot + dir + "/" + filename;
            }
        };
        // 资源根目录
        GuiSetting.resRoot = "res/";
        // 后缀
        GuiSetting.packageFileExtension = "bin";
        return GuiSetting;
    }());
    Games.GuiSetting = GuiSetting;
})(Games || (Games = {}));
//# sourceMappingURL=GuiSetting.js.map