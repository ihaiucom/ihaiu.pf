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
    // 登录窗口
    //----------------------
    var MarketWindow = /** @class */ (function (_super) {
        __extends(MarketWindow, _super);
        function MarketWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.PfSkin.MarketMainPanel);
            return _this;
        }
        // 生成动态预加载资源
        MarketWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(1001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(6101));
        };
        // 菜单创建
        MarketWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.PfSkin.MarketMainPanel.createInstance();
            this.contentPane = this.conent;
            this.center();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        MarketWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
            // Game.protohandler.city.sSetPropagandaActor.add(this.OnsSetPropagandaActor, this);
            // Game.protohandler.city.sPropaganda.add(this.OnsPropaganda, this);
            // Game.protohandler.city.sRoadshow.add(this.OnsRoadshow, this);
            // Game.protohandler.city.sSetAmbassador.add(this.OnsSetAmbassador, this);
            // Game.protohandler.city.sGetReward.add(this.OnsGetReward, this);
            // Game.protohandler.city.sHoldCity.add(this.OnsHoldCity, this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        MarketWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
            // Game.protohandler.city.sSetPropagandaActor.remove(this.OnsSetPropagandaActor, this);
            // Game.protohandler.city.sPropaganda.remove(this.OnsPropaganda, this);
            // Game.protohandler.city.sRoadshow.remove(this.OnsRoadshow, this);
            Game.protohandler.city.sSetAmbassador.remove(this.OnsSetAmbassador, this);
            Game.protohandler.city.sGetReward.remove(this.OnsGetReward, this);
            Game.protohandler.city.sHoldCity.remove(this.OnsHoldCity, this);
        };
        MarketWindow.prototype.destory = function () {
            console.log("destory");
            _super.prototype.destory.call(this);
            this.conent.OnDestory();
        };
        // // 设置宣传大使res
        // private OnsSetPropagandaActor()
        // {
        //     // this.conent.m_publicityPanel.OnsSetPropagandaActor();
        // }
        // // 宣传 res
        // private OnsPropaganda()
        // {
        //     // this.conent.m_publicityPanel.OnsPropaganda();
        // }
        // // 路演 res
        // private OnsRoadshow()
        // {
        //     // this.conent.m_occupyPanel.OnsRoadshow();
        // }
        // 设置形象大使 res
        MarketWindow.prototype.OnsSetAmbassador = function () {
            this.conent.m_cityInfoPanel.OnsSetAmbassador();
        };
        // 领取收益 res
        MarketWindow.prototype.OnsGetReward = function () {
            this.conent.m_cityInfoPanel.OnGetReward();
        };
        MarketWindow.prototype.OnsHoldCity = function () {
            this.conent.m_occupyPanel.OnsHoldCity();
        };
        MarketWindow.prototype.ShowOccupyPanel = function () {
            this.conent.ShowOccupyPanel();
        };
        MarketWindow.prototype.ShowCityInfo = function () {
            this.conent.ShowCityInfo();
        };
        MarketWindow.prototype.OnPublicityFinish = function () {
            this.conent.OnPublicityFinish();
        };
        MarketWindow.prototype.OnOccupyFinish = function (cityData) {
            this.conent.OnOccupyFinish(cityData);
        };
        MarketWindow.prototype.ShowPublicity = function (data) {
            this.conent.ShowPublicity(data);
        };
        MarketWindow.prototype.ShowRoadShow = function () {
            this.conent.ShowRoadShow();
        };
        MarketWindow.prototype.OnRoadShowFinish = function () {
            this.conent.OnRoadShowFinish();
        };
        MarketWindow.prototype.OnSelectCountry = function (countryId) {
            this.conent.OnSelectCountry(countryId);
        };
        MarketWindow.prototype.ShowSelectActor = function (onSelect, demandList, dispatch) {
            this.conent.ShowSelectActor(onSelect, demandList, dispatch);
        };
        return MarketWindow;
    }(Games.MWindow));
    Games.MarketWindow = MarketWindow;
})(Games || (Games = {}));
//# sourceMappingURL=MarketWindow.js.map