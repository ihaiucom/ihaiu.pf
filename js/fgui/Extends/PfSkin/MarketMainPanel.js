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
        var MarketMainPanel = /** @class */ (function (_super) {
            __extends(MarketMainPanel, _super);
            function MarketMainPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MarketMainPanel.prototype.onWindowInited = function () {
                this.m_topPanel.InitView(this, this.OnCloseClick, [1, 2, 3]);
                this.m_cityInfoPanel.InitView(this.moduleWindow);
                this.m_occupyPanel.InitView(this.moduleWindow);
                this.m_roadShowPanel.InitView(this.moduleWindow);
                this.m_publicityPanel.InitView(this.moduleWindow);
                this.m_countryListPanel.InitView(this.moduleWindow);
                this.m_selectActorPanel.InitView(this.moduleWindow);
                this.m_btnCountry.onClick(this, this.ShowCountryList);
                this.InitCityList();
            };
            MarketMainPanel.prototype.onWindowShow = function () {
                this.Open();
                this.m_roadShowPanel.onWindowShow();
            };
            MarketMainPanel.prototype.onWindowHide = function () {
                this.OnClose();
                this.m_roadShowPanel.onWindowHide();
            };
            MarketMainPanel.prototype.Open = function () {
                this.UpdateView();
                var currentCity = this.cityDatas.length - 2;
                this.m_list.selectedIndex = currentCity;
                this.m_list.scrollToView(currentCity);
                this.ShowCity();
            };
            MarketMainPanel.prototype.UpdateView = function (countryId) {
                this.m_topPanel.updateAsset();
                if (countryId == null) {
                    countryId = Game.moduleModel.market.GetLastCountryId();
                }
                this.countryId = countryId;
                this.cityDatas = Game.moduleModel.market.GetCityList(this.countryId);
                var cfg = Game.config.country.getConfig(this.countryId);
                this.m_txtCountry.text = cfg.number + ". " + cfg.zh_cn_name + " " + Game.moduleModel.market.GetCountryProgress(this.countryId) + "/" + cfg.city_num;
                this.m_list.numItems = this.cityDatas.length;
                this.m_list.refreshVirtualList();
                this.ShowCity();
            };
            MarketMainPanel.prototype.InitCityList = function () {
                this.m_list.setVirtual();
                this.m_list.itemRenderer = Handler.create(this, this.RenderCityListItem, null, false);
                this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.OnCityItemClick);
                this.m_list.numItems = 0;
            };
            MarketMainPanel.prototype.OnCloseClick = function () {
                this.moduleWindow.menuClose();
            };
            MarketMainPanel.prototype.OnClose = function () {
                this.m_cityInfoPanel.OnClose();
            };
            MarketMainPanel.prototype.OnDestory = function () {
                this.m_cityInfoPanel.OnDestory();
            };
            MarketMainPanel.prototype.OnCityItemClick = function (obj) {
                this.ShowCity();
            };
            MarketMainPanel.prototype.RenderCityListItem = function (index, obj) {
                var item = obj;
                var data = this.cityDatas[index];
                item.setPivot(0.5, 0.5);
                item.title = data.cfg.city_num + ". " + data.name;
                item.m_state.setSelectedIndex(data.state == Games.CityStateEnum.Lock ? 0 : 1);
                item.enabled = data.state != Games.CityStateEnum.Lock;
                item.m_isHome.setSelectedIndex(data.isHome ? 1 : 0);
            };
            MarketMainPanel.prototype.ShowCity = function (index) {
                if (index == null) {
                    index = this.m_list.selectedIndex;
                }
                if (index == null || index < 0) {
                    return;
                }
                var data = this.cityDatas[index];
                if (data.state == Games.CityStateEnum.Lock) {
                    return;
                }
                if (data.state == Games.CityStateEnum.hasOccupy) {
                    // TODO 展示城市信息
                    this.ShowCityInfo();
                }
                else {
                    this.ShowOccupyPanel();
                }
            };
            MarketMainPanel.prototype.ShowOccupyPanel = function () {
                this.m_cityInfoPanel.OnClose();
                this.m_occupyPanel.UpdateView();
                this.m_trSelect.setSelectedIndex(0);
            };
            MarketMainPanel.prototype.ShowCityInfo = function () {
                var data = this.cityDatas[this.m_list.selectedIndex];
                this.m_cityInfoPanel.UpdateView(data.id);
                this.m_trSelect.setSelectedIndex(1);
            };
            MarketMainPanel.prototype.OnPublicityFinish = function () {
                // this.ShowCity();
                this.UpdateView();
            };
            MarketMainPanel.prototype.OnOccupyFinish = function (cityData) {
                // this.cityDatas = Game.moduleModel.market.GetCityList(this.countryId);
                // this.ShowCity();
                this.UpdateView();
            };
            MarketMainPanel.prototype.ShowPublicity = function (data) {
                this.m_publicityPanel.UpdateView();
                this.m_publicityPanel.Show();
            };
            MarketMainPanel.prototype.ShowRoadShow = function () {
                var cityData;
                this.m_roadShowPanel.UpdateView();
                this.m_roadShowPanel.Show();
            };
            MarketMainPanel.prototype.OnRoadShowFinish = function () {
                this.UpdateView();
            };
            MarketMainPanel.prototype.ShowSelectActor = function (onSelect, demandList, dispatch) {
                this.m_selectActorPanel.UpdateView(onSelect, demandList, dispatch);
                this.m_selectActorPanel.Show();
            };
            MarketMainPanel.prototype.ShowCountryList = function () {
                this.m_cityInfoPanel.OnClose();
                this.m_countryListPanel.UpdateView();
                this.m_countryListPanel.Show();
            };
            MarketMainPanel.prototype.OnSelectCountry = function (country) {
                this.UpdateView(country);
            };
            return MarketMainPanel;
        }(PfSkin.MarketMainPanelStruct));
        PfSkin.MarketMainPanel = MarketMainPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketMainPanel.js.map