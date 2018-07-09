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
    //====================
    // 消息处理器
    //--------------------
    var cityHandler = /** @class */ (function (_super) {
        __extends(cityHandler, _super);
        function cityHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleMames.City;
            // sSetPropagandaActor: Signal = new Signal();
            // sPropaganda: Signal = new Signal();
            // sRoadshow: Signal = new Signal();
            _this.sSetAmbassador = new Signal();
            _this.sGetReward = new Signal();
            _this.sHoldCity = new Signal();
            return _this;
        }
        /**
         * 设置宣传大使
         * @param resData
         */
        cityHandler.prototype.SetPropagandaActor = function (resData) {
            // this.sSetPropagandaActor.dispatch();
        };
        /**
         * 宣传
         * @param resData
         */
        cityHandler.prototype.Propaganda = function (resData) {
            // this.sPropaganda.dispatch();
        };
        /**
         * 路演
         * @param resData
         */
        cityHandler.prototype.Roadshow = function (resData) {
            // let ret = resData.result;
            // this.sRoadshow.dispatch();
        };
        /**
         * 设置形象大使
         * @param resData
         */
        cityHandler.prototype.SetAmbassador = function (resData) {
            this.sSetAmbassador.dispatch();
        };
        /**
         * 领取收益
         * @param resData
         */
        cityHandler.prototype.GetReward = function (resData) {
            this.sGetReward.dispatch();
        };
        cityHandler.prototype.HoldCity = function (resData) {
            this.sHoldCity.dispatch();
        };
        return cityHandler;
    }(Games.ProtoHandler));
    Games.cityHandler = cityHandler;
})(Games || (Games = {}));
//# sourceMappingURL=CityHandler.js.map