var Games;
(function (Games) {
    var StreetData = /** @class */ (function () {
        function StreetData(id, state, progress) {
            if (state === void 0) { state = Games.StreetStateEnum.NotOccupy; }
            if (progress === void 0) { progress = 0; }
            this.id = id;
            var cfg = Game.config.street.getConfig(id);
            this.name = cfg.zh_cn_name;
            this.city = cfg.city;
            this.pos = cfg.position;
            this.pre = cfg.pre_id;
            this.next = cfg.next_stage;
            this.state = state;
            this.progress = progress;
        }
        Object.defineProperty(StreetData.prototype, "Config", {
            get: function () {
                return Game.config.street.getConfig(this.id);
            },
            enumerable: true,
            configurable: true
        });
        return StreetData;
    }());
    Games.StreetData = StreetData;
})(Games || (Games = {}));
//# sourceMappingURL=StreetData.js.map