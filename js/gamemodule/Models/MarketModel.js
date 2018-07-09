var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Games;
(function (Games) {
    //======================
    // 剧情 数据模型
    //----------------------
    var MarketModel = /** @class */ (function (_super) {
        __extends(MarketModel, _super);
        function MarketModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.occupyCitys = [];
            return _this;
        }
        Object.defineProperty(MarketModel.prototype, "Info", {
            get: function () {
                if (this.info == null) {
                    // this.info = this.createLocalInfo();
                    // this.UpdateOccupyCitys();
                    console.log("Proto CityData is NULL!");
                    return new Proto.SS.CityData();
                }
                return this.info;
            },
            enumerable: true,
            configurable: true
        });
        MarketModel.prototype.createLocalInfo = function () {
            var info = new Proto.SS.CityData();
            info.lastCity = 1103;
            info.headquarters = 1102;
            info.lastArea = 11014;
            info.ambassador = [1001, 1002, 1003, 1004, 0];
            info.lastAreaProgress = 0;
            // let actor = new Proto.SS.ActorData();
            // actor.actorId = 1001;
            // this.ActorList.push(actor)
            // actor.actorId = 1002;
            // this.ActorList.push(actor)
            // actor.actorId = 1003;
            // this.ActorList.push(actor)
            return info;
        };
        /**
         * 占领的最大市场
         */
        MarketModel.prototype.GetMaxCity = function () {
            var lastCity = this.GetLastCity();
            if (lastCity == null) {
                return null;
            }
            var maxCityId = lastCity.cfg.pre_id;
            if (maxCityId == 0) {
                return null;
            }
            return this.GetCity(maxCityId);
        };
        MarketModel.prototype.UpdateCityData = function (msg) {
            this.info = msg;
            this.occupyCitys = this.UpdateOccupyCitys();
        };
        MarketModel.prototype.AddActorData = function (msg) {
            // this.ActorList.push(msg);
        };
        MarketModel.prototype.UpdateOccupyCitys = function () {
            var list = [];
            var id = this.Info.lastCity;
            if (this.Info.lastAreaProgress == 100) {
                list.push(id);
            }
            var cfg = this.GetCityCfg(id);
            var lastCountry = cfg.country;
            while (cfg.pre_id != 0) {
                list.push(cfg.pre_id);
                cfg = this.GetCityCfg(cfg.pre_id);
            }
            return list;
        };
        MarketModel.prototype.GetCityCfg = function (id) {
            return Game.config.city.getConfig(id);
        };
        MarketModel.prototype.GetCityState = function (id) {
            var state = Games.CityStateEnum.Lock;
            if (id == this.Info.lastCity) {
                if (this.Info.roadShowFlag) {
                    return Games.CityStateEnum.FinishRoadShow;
                }
                var progress = this.GetCityProgress();
                if (progress == 100) {
                    return Games.CityStateEnum.FinishPublicity;
                }
                return Games.CityStateEnum.InOccupy;
            }
            else {
                for (var index = 0; index < this.occupyCitys.length; index++) {
                    var ocId = this.occupyCitys[index];
                    if (ocId == id) {
                        return Games.CityStateEnum.hasOccupy;
                    }
                }
            }
            return Games.CityStateEnum.Lock;
        };
        MarketModel.prototype.GetCity = function (id) {
            return new Games.CityData(id, this.GetCityState(id), id == this.Info.headquarters);
        };
        MarketModel.prototype.GetHomeCity = function () {
            if (this.Info.headquarters == 0) {
                return null;
            }
            return this.GetCity(this.Info.headquarters);
        };
        MarketModel.prototype.GetLastCity = function () {
            if (this.Info.lastCity == 0) {
                return null;
            }
            return this.GetCity(this.Info.lastCity);
        };
        MarketModel.prototype.GetLastStreet = function () {
            var state = Games.StreetStateEnum.InOccupy;
            if (this.Info.lastAreaProgress == 100) {
                state = Games.StreetStateEnum.HasOccupy;
            }
            return new Games.StreetData(this.Info.lastArea, state, this.Info.lastAreaProgress);
        };
        MarketModel.prototype.GetPublicRewards = function (street) {
            var list = [];
            var item = new DTItemNum();
            item.itemId = 2;
            item.itemNum = street.Config.once_reward;
            list.push(item);
            return list;
        };
        MarketModel.prototype.GetCityGoldSpeed = function () {
            return this.Info.speedGold / 100;
        };
        MarketModel.prototype.GetCityFansSpeed = function () {
            return this.Info.speedFans;
        };
        MarketModel.prototype.GetCurGold = function () {
            var time = Game.time.getSubSecondsPre(this.Info.lastDropTimestamp);
            var speed = this.GetCityGoldSpeed();
            return Math.ceil(this.Info.lastGold + time * speed);
        };
        MarketModel.prototype.GetCurFans = function () {
            var time = Game.time.getSubSecondsPre(this.Info.lastDropTimestamp);
            var speed = this.GetCityFansSpeed();
            return Math.ceil(this.Info.lastFans + time * speed);
        };
        MarketModel.prototype.GetGoldLimit = function () {
            return this.Info.maxGold;
        };
        MarketModel.prototype.GetFansLimit = function () {
            return this.Info.maxFans;
        };
        MarketModel.prototype.GetCityReward = function (cityId) {
            var random_out = Game.config.city.getConfig(cityId).random_out;
            return random_out;
        };
        MarketModel.prototype.IsCityRewardUnlock = function (id) {
            return true;
        };
        MarketModel.prototype.GetAmbassadorNum = function () {
            var num = 0;
            for (var index = 0; index < this.Info.ambassador.length; index++) {
                var element = this.Info.ambassador[index];
                if (element != 0) {
                    num++;
                }
            }
            return num;
        };
        MarketModel.prototype.GetAmbassador = function () {
            return this.Info.ambassador;
        };
        MarketModel.prototype.GetRoadShowCost = function () {
            return this.GetCityCfg(this.Info.lastCity).show_cost;
        };
        // public GetStreetProgress(id)
        // {
        //     if (id == this.Info.lastArea)
        //     {
        //         return this.Info.lastAreaProgress;
        //     }
        // }
        MarketModel.prototype.GetCityProgress = function () {
            if (this.Info.lastArea == 0) {
                return 0;
            }
            var occupyNum = 0;
            var cfg = Game.config.street.getConfig(this.Info.lastArea);
            if (this.Info.lastAreaProgress == 100) {
                occupyNum = 1;
            }
            var id = cfg.pre_id;
            while (id != 0) {
                cfg = Game.config.street.getConfig(id);
                if (cfg.city != this.Info.lastCity) {
                    break;
                }
                occupyNum++;
                id = cfg.pre_id;
            }
            var streetNum = this.GetCityCfg(this.Info.lastCity).street_num;
            return occupyNum / streetNum * 100;
        };
        MarketModel.prototype.GetCountry = function (id) {
            return new Games.CountryData(id);
        };
        MarketModel.prototype.GetCountryProgress = function (countryId) {
            var lastCountry = this.GetLastCountryId();
            if (countryId != lastCountry) {
                return Game.config.country.getConfig(countryId).city_num;
            }
            if (this.Info.lastCity == 0) {
                return 0;
            }
            var cfg = Game.config.city.getConfig(this.Info.lastCity);
            var id = cfg.pre_id;
            var occupyNum = 0;
            while (id != 0) {
                cfg = Game.config.city.getConfig(id);
                if (cfg.country != lastCountry) {
                    break;
                }
                occupyNum++;
                id = cfg.pre_id;
            }
            return occupyNum;
        };
        MarketModel.prototype.GetPublicityCost = function () {
            return Game.config.street.getConfig(this.Info.lastArea).publicize_cost;
        };
        MarketModel.prototype.GetStreetDemand = function () {
            return Game.config.street.GetRequire(this.Info.lastArea);
        };
        MarketModel.prototype.GetCityDemand = function (cityId, index) {
            var list = Game.config.city.GetCityRequire(cityId);
            return list[index];
        };
        MarketModel.prototype.GetPublicityDemandText = function () {
            var demandList = this.GetStreetDemand();
            if (demandList.length == 0) {
                return "";
            }
            var demand = this.GetDemandExplain(demandList[demandList.length - 1]);
            return "\u6839\u636E\u8C03\u67E5\uFF0C\u5F53\u5730\u89C2\u4F17\u6BD4\u8F83\u9752\u7750" + demand + "\n\u82E5\u80FD\u627E\u5230\u76F8\u5173\u827A\u4EBA\u6765\u8FDB\u884C\u5E02\u573A\u4EE3\u8A00\uFF0C\u5C06\u4F1A\u4E8B\u534A\u529F\u500D\uFF01";
        };
        MarketModel.prototype.GetStreetDemandText = function () {
            return this.GetDemandListText(this.GetStreetDemand());
        };
        MarketModel.prototype.GetDemandListText = function (list) {
            // let list = this.GetStreetDemand();
            var str = "";
            for (var index = 0; index < list.length; index++) {
                var data = list[index];
                var demand = data;
                var value = data.value;
                str += this.GetActorDemandText(demand, demand.value);
                if (index < list.length - 1) {
                    str += "\n";
                }
            }
            return str;
        };
        MarketModel.prototype.GetPropertyName = function (id) {
            if (id == 0) {
                return "error";
            }
            return Game.config.property.getConfig(id).zh_cn_name;
        };
        MarketModel.prototype.GetDemandExplain = function (demand) {
            var name = "";
            switch (demand.type) {
                case Games.ActorRequireEnum.age:
                case Games.ActorRequireEnum.sex:
                case Games.ActorRequireEnum.type:
                case Games.ActorRequireEnum.Continents:
                    name = this.GetPropertyName(demand.value);
                    break;
                case Games.ActorRequireEnum.art:
                case Games.ActorRequireEnum.entertainment:
                case Games.ActorRequireEnum.performance:
                case Games.ActorRequireEnum.plot:
                case Games.ActorRequireEnum.scene:
                    name = this.GetDemandTypeName(demand.type);
                    break;
                default:
                    break;
            }
            return name;
        };
        MarketModel.prototype.GetDemandTypeName = function (type) {
            var name = "";
            switch (type) {
                case Games.ActorRequireEnum.age:
                    name = "年龄";
                    break;
                case Games.ActorRequireEnum.sex:
                    name = "性别";
                    break;
                case Games.ActorRequireEnum.type:
                    name = "类型";
                    break;
                case Games.ActorRequireEnum.Continents:
                    name = "国籍";
                    break;
                case Games.ActorRequireEnum.art:
                    name = this.GetPropertyName(1604); //"艺术:";
                    break;
                case Games.ActorRequireEnum.entertainment:
                    name = this.GetPropertyName(1605); //"娱乐:";
                    break;
                case Games.ActorRequireEnum.performance:
                    name = this.GetPropertyName(1602); //"表演:";
                    break;
                case Games.ActorRequireEnum.plot:
                    name = this.GetPropertyName(1603); //"剧情:";
                    break;
                case Games.ActorRequireEnum.scene:
                    name = this.GetPropertyName(1601); //"场面:";
                    break;
                default:
                    break;
            }
            return name;
        };
        MarketModel.prototype.GetActorDemandText = function (demand, value) {
            var type = demand.type;
            var name;
            var strValue;
            name = this.GetDemandTypeName(demand.type) + ":";
            switch (type) {
                case Games.ActorRequireEnum.age:
                case Games.ActorRequireEnum.Continents:
                case Games.ActorRequireEnum.sex:
                case Games.ActorRequireEnum.type:
                    strValue = this.GetPropertyName(value);
                    break;
                case Games.ActorRequireEnum.art:
                case Games.ActorRequireEnum.entertainment:
                case Games.ActorRequireEnum.performance:
                case Games.ActorRequireEnum.plot:
                case Games.ActorRequireEnum.scene:
                    strValue = value.toString();
                    break;
                default:
                    break;
            }
            // strValue = demand.value == value ? this.GetGreeTxt(strValue):this.GetWhiteTxt(strValue);
            return name + strValue;
        };
        MarketModel.prototype.GetLastCountryId = function () {
            var cfg = this.GetCityCfg(this.Info.lastCity);
            if (cfg == null) {
                return 0;
            }
            return cfg.country;
        };
        MarketModel.prototype.GetHomeCountryId = function () {
            if (this.Info.headquarters == 0) {
                return 0;
            }
            return this.GetCityCfg(this.Info.headquarters).country;
        };
        MarketModel.prototype.IsHomeCountry = function (countryId) {
            return this.GetHomeCountryId() == countryId;
        };
        MarketModel.prototype.IsLastCountry = function (countryId) {
            return this.GetLastCountryId() == countryId;
        };
        MarketModel.prototype.IsHomeCity = function (cityId) {
            return this.Info.headquarters == cityId;
        };
        MarketModel.prototype.IsLastCity = function (cityId) {
            return this.Info.lastCity == cityId;
        };
        MarketModel.prototype.GetPropagandaActor = function () {
            return this.Info.propagandaActor;
        };
        MarketModel.prototype.GetCityList = function (countryId) {
            var lastCountry = this.GetLastCountryId();
            if (countryId == null || lastCountry == countryId) {
                return this.GetLastCityList();
            }
            var cityList = [];
            var cfgList = Game.config.city.getCitysByCountry(countryId);
            for (var index = 0; index < cfgList.length; index++) {
                var cfg = cfgList[index];
                cityList.push(new Games.CityData(cfg.id, Games.CityStateEnum.hasOccupy, cfg.id == this.Info.headquarters));
            }
            cityList = cityList.sort(function (a, b) { return b.num - a.num; });
            return cityList;
        };
        MarketModel.prototype.GetLastCityList = function () {
            var cityList = [];
            if (this.Info.lastCity == 0)
                return cityList;
            var city = this.GetLastCity();
            var lastCountry = city.country;
            cityList.push(city);
            if (city.cfg.next_city != 0) {
                var nextCity = new Games.CityData(city.cfg.next_city, Games.CityStateEnum.Lock, false);
                if (nextCity.country == lastCountry) {
                    cityList.push(nextCity);
                }
            }
            var id = city.cfg.pre_id;
            while (id != 0) {
                city = new Games.CityData(id, Games.CityStateEnum.hasOccupy, id == this.Info.headquarters);
                if (city.country != lastCountry) {
                    break;
                }
                cityList.push(city);
                id = city.cfg.pre_id;
            }
            cityList = cityList.sort(function (a, b) { return a.num - b.num; });
            return cityList;
        };
        MarketModel.prototype.GetCountryList = function () {
            var CountryList = [];
            var id = this.GetLastCountryId();
            var country = new Games.CountryData(id);
            var homeId = this.GetHomeCountryId();
            country.isHome = id == homeId;
            CountryList.push(country);
            id = country.preCountry;
            while (id != 0) {
                country = new Games.CountryData(id);
                country.isHome = id == this.info.headquarters;
                CountryList.push(country);
                id = country.preCountry;
            }
            CountryList = CountryList.sort(function (a, b) { return b.num - a.num; });
            return CountryList;
        };
        MarketModel.prototype.GetStreetList = function () {
            var cityId = this.Info.lastCity;
            var streetList = [];
            var id = this.Info.lastArea;
            var street = this.GetLastStreet();
            streetList.push(street);
            if (street.next != 0) {
                var nextStreet = new Games.StreetData(street.next, Games.StreetStateEnum.NotOccupy, 0);
                if (nextStreet.city == cityId) {
                    streetList.push(nextStreet);
                }
            }
            id = street.pre;
            while (id != 0) {
                street = new Games.StreetData(id, Games.StreetStateEnum.HasOccupy, 100);
                if (street.city != cityId) {
                    break;
                }
                streetList.push(street);
                id = street.pre;
            }
            return streetList;
        };
        // TODO 接入演员模块
        MarketModel.prototype.GetActorList = function () {
            return Game.moduleModel.actor.getActors();
        };
        MarketModel.prototype.SendSetAmbassador = function (uuid, cityId, index, actId) {
            var actuuid = Game.moduleModel.market.GetActor(actId).uuid;
            Game.protosender.city.SetAmbassador(uuid, cityId, index, actuuid);
        };
        MarketModel.prototype.GetActor = function (id) {
            return Game.moduleModel.actor.getActor(id);
        };
        MarketModel.prototype.GetActorRequire = function (id) {
            var actor = Game.moduleModel.actor.getActor(id);
            if (actor == null) {
                return [];
            }
            var map = Game.config.actor.GetRequire(id);
            map[Games.ActorRequireEnum.scene.toString()] = actor.spectacle;
            map[Games.ActorRequireEnum.performance.toString()] = actor.perform;
            map[Games.ActorRequireEnum.plot.toString()] = actor.plot;
            map[Games.ActorRequireEnum.art.toString()] = actor.art;
            map[Games.ActorRequireEnum.entertainment.toString()] = actor.entertainment;
            return map;
        };
        MarketModel.prototype.IsDemandConform = function (demand, value) {
            switch (demand.type) {
                case Games.ActorRequireEnum.age:
                case Games.ActorRequireEnum.Continents:
                case Games.ActorRequireEnum.sex:
                case Games.ActorRequireEnum.type:
                    return demand.value == value;
                case Games.ActorRequireEnum.art:
                case Games.ActorRequireEnum.entertainment:
                case Games.ActorRequireEnum.performance:
                case Games.ActorRequireEnum.plot:
                case Games.ActorRequireEnum.scene:
                    return demand.value <= value;
                default:
                    break;
            }
            return false;
        };
        MarketModel.prototype.GetActorIcon = function (id) {
            if (id == null) {
                return "";
            }
            var actor = Game.moduleModel.actor.getActor(id);
            if (actor == null) {
                return "";
            }
            var cfg = actor.config;
            var avatarCfg = Game.config.avatar.getConfig(cfg.avatar);
            var iconUrl = avatarCfg.bodyIconUrl;
            return iconUrl;
        };
        return MarketModel;
    }(Games.MModel));
    Games.MarketModel = MarketModel;
})(Games || (Games = {}));
//# sourceMappingURL=MarketModel.js.map