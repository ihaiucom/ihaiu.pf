/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
var fgui;
(function (fgui) {
    var PfSkin;
    (function (PfSkin) {
        var MarketOccupyPanel = /** @class */ (function (_super) {
            __extends(MarketOccupyPanel, _super);
            function MarketOccupyPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.ItemPointList = [];
                _this.NAME_BTNCITYPOINT = "BtnCityPoint";
                return _this;
            }
            MarketOccupyPanel.prototype.InitView = function (mWindow) {
                this.window = mWindow;
                this.m_btnRoadShow.onClick(this, this.OnBtnRoadShowClick);
                this.m_btnZhanling.onClick(this, this.OnBtnOccupyClick);
                this.m_listReward.itemRenderer = new Handler(this, this.RenderRewardItem, null, false);
            };
            MarketOccupyPanel.prototype.UpdateView = function () {
                this.cityData = Game.moduleModel.market.GetLastCity();
                this.pointDatas = Game.moduleModel.market.GetStreetList();
                // this.rewardList = Game.moduleModel.market.GetCityReward(this.cityData.id);
                this.rewardList = Game.config.city.getConfig(this.cityData.id).hold_reward;
                var numItems = this.ItemPointList.length;
                for (var index = 0; index < this.pointDatas.length; index++) {
                    var item = this.ItemPointList[index];
                    if (item == undefined) {
                        item = fgui.PfSkin.BtnCityPoint.createInstance();
                        item.name = this.NAME_BTNCITYPOINT + index;
                        item.onClick(this, this.OnItemClick);
                        this.ItemPointList[index] = item;
                    }
                    var data = this.pointDatas[index];
                    this.addChild(item);
                    item.setPivot(0.5, 1);
                    var maxX = this.m_mapCityPoint.width;
                    var maxY = this.m_mapCityPoint.height;
                    // let x = Math.floor(data.pos.x * maxX);
                    // let y = Math.floor(data.pos.y * maxY);
                    // let pos = Game.config.street.getConfig(data.id).position
                    var x = data.pos.x * maxX;
                    var y = data.pos.y * maxY;
                    // let x = 0.3 * index * maxX;
                    // let y = 0.4 * index * maxY;
                    item.setXY(x, y);
                    item.title = data.name;
                    if (data.state == Games.StreetStateEnum.NotOccupy) {
                        item.m_state.setSelectedIndex(0);
                    }
                    else if (data.state == Games.StreetStateEnum.InOccupy) {
                        item.m_progress.value = data.progress;
                        item.m_state.setSelectedIndex(1);
                        item.m_tranOccupy.play();
                    }
                    if (data.state == Games.StreetStateEnum.HasOccupy) {
                        item.m_state.setSelectedIndex(2);
                    }
                    else {
                    }
                    item.visible = true;
                }
                for (var index = this.pointDatas.length; index < numItems; index++) {
                    var item = this.ItemPointList[index];
                    item.visible = false;
                }
                if (this.cityData.state == Games.CityStateEnum.InOccupy) {
                    this.m_state.setSelectedIndex(0);
                }
                else if (this.cityData.state == Games.CityStateEnum.FinishPublicity) {
                    this.m_btnRoadShow.enabled = true;
                    this.m_state.setSelectedIndex(1);
                }
                else if (this.cityData.state == Games.CityStateEnum.FinishRoadShow) {
                    this.m_state.setSelectedIndex(2);
                }
                else {
                    this.m_state.setSelectedIndex(0);
                }
                // this.m_btnRoadShow.title = Game.moduleModel.market.GetRoadShowCost().toString();
                this.m_labCost.title = Game.moduleModel.market.GetRoadShowCost().toString();
                this.m_labAniCost.title = Game.moduleModel.market.GetRoadShowCost().toString();
                this.m_listReward.numItems = this.rewardList.length;
                this.m_cityName.text = this.cityData.name + "市场占有率";
                this.m_progress.value = Game.moduleModel.market.GetCityProgress();
                this.m_country.url = Game.moduleModel.market.GetCountry(this.cityData.country).flagUrl;
                this.m_btnRoadShow.enabled = true;
            };
            MarketOccupyPanel.prototype.RenderRewardItem = function (index, obj) {
                var item = obj;
                var data = this.rewardList[index];
                item.setPivot(0.5, 0.5);
                item.icon = Game.moduleModel.item.getItem(data.itemId).itemIconUrl;
                item.title = data.itemNum.toString();
            };
            MarketOccupyPanel.prototype.Show = function () {
                this.visible = true;
            };
            MarketOccupyPanel.prototype.Hide = function () {
                this.visible = false;
            };
            MarketOccupyPanel.prototype.OnItemClick = function (evt) {
                var index = Number(fairygui.GObject.cast(evt.currentTarget).name.substr(12));
                var data = this.pointDatas[index];
                if (data.state == Games.StreetStateEnum.InOccupy) {
                    this.window.ShowPublicity(data);
                }
            };
            MarketOccupyPanel.prototype.OnBtnRoadShowClick = function () {
                var cost = Game.moduleModel.market.GetRoadShowCost();
                if (Game.moduleModel.item.hasItemNum(3, cost)) {
                    this.m_btnRoadShow.enabled = false;
                    Game.protosender.city.Roadshow("", this.cityData.id, 0);
                }
                else {
                    Game.system.alertText("美元不足");
                }
            };
            MarketOccupyPanel.prototype.OnsRoadshow = function () {
                var _this = this;
                this.m_tCostMove.play(new Handler(this, function () { _this.window.ShowRoadShow(); _this.UpdateView(); }));
            };
            MarketOccupyPanel.prototype.OnBtnOccupyClick = function () {
                Game.protosender.city.HoldCity("", this.cityData.id);
            };
            MarketOccupyPanel.prototype.OnsHoldCity = function () {
                this.window.OnOccupyFinish(this.cityData);
            };
            return MarketOccupyPanel;
        }(PfSkin.MarketOccupyPanelStruct));
        PfSkin.MarketOccupyPanel = MarketOccupyPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketOccupyPanel.js.map