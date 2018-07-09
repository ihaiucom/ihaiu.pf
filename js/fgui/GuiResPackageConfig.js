var Games;
(function (Games) {
    // =====================
    // fgui包资源配置
    // ---------------------
    var GuiResPackageConfig = /** @class */ (function () {
        function GuiResPackageConfig() {
            // xxx@atlasX.png
            this.resAtlas = [];
        }
        Object.defineProperty(GuiResPackageConfig.prototype, "loadList", {
            // 获取加载列表
            get: function () {
                if (!this._loadList) {
                    var list_1 = [];
                    list_1.push({ url: Games.GuiSetting.getResPath(this.resBin, this.resDir), type: Loader.BUFFER });
                    if (this.resAtlas) {
                        for (var i = 0; i < this.resAtlas.length; i++) {
                            list_1.push({ url: Games.GuiSetting.getResPath(this.resAtlas[i], this.resDir), type: Loader.IMAGE });
                        }
                    }
                    this._loadList = list_1;
                }
                return this._loadList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GuiResPackageConfig.prototype, "packagePath", {
            get: function () {
                return Games.GuiSetting.getResPackagePath(this.packageName, this.resDir);
            },
            enumerable: true,
            configurable: true
        });
        return GuiResPackageConfig;
    }());
    Games.GuiResPackageConfig = GuiResPackageConfig;
})(Games || (Games = {}));
//# sourceMappingURL=GuiResPackageConfig.js.map