var Games;
(function (Games) {
    //======================
    //读取图片
    //----------------------
    var WarLoadPic = /** @class */ (function () {
        function WarLoadPic() {
        }
        /**
         * 图标赋值
         * @param loader 图标装载器
         * @param val property需求：1102,1101
         */
        WarLoadPic.setIcon = function (loader, val) {
            if (val === 0) {
                loader.visible = false;
            }
            else {
                var propertyConfig = Game.config.property.getConfig(val);
                if (propertyConfig) {
                    loader.icon = Game.config.avatar.getConfig(propertyConfig.icon).iconUrl;
                }
                else {
                    loader.visible = false;
                }
            }
        };
        /**
         * 半身像赋值
         */
        WarLoadPic.getActorIcon = function (avatar) {
            return Game.config.avatar.getConfig(avatar).bodyIconUrl;
        };
        return WarLoadPic;
    }());
    Games.WarLoadPic = WarLoadPic;
})(Games || (Games = {}));
//# sourceMappingURL=WarLoadPic.js.map