var Games;
(function (Games) {
    var CityData = /** @class */ (function () {
        function CityData(id, state, isHome) {
            this.id = id;
            this.state = state;
            this.isHome = isHome;
            var config = Game.config.city.getConfig(id);
            this.num = config.city_num;
            this.name = config.zh_cn_name;
            this.country = this.cfg.country;
        }
        Object.defineProperty(CityData.prototype, "cfg", {
            get: function () {
                return Game.config.city.getConfig(this.id);
            },
            enumerable: true,
            configurable: true
        });
        return CityData;
    }());
    Games.CityData = CityData;
})(Games || (Games = {}));
//# sourceMappingURL=CityData.js.map