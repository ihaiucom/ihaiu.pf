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
        var MarketCountryListPanel = /** @class */ (function (_super) {
            __extends(MarketCountryListPanel, _super);
            function MarketCountryListPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MarketCountryListPanel.prototype.InitView = function (mWindow) {
                this.window = mWindow;
                this.m_btnShow.onClick(this, this.OnBtnShowClick);
                this.m_listCountry.setVirtual();
                this.m_listCountry.itemRenderer = Handler.create(this, this.RenderListItem, null, false);
                this.Hide();
            };
            MarketCountryListPanel.prototype.UpdateView = function () {
                this.countryList = Game.moduleModel.market.GetCountryList();
                this.m_listCountry.numItems = this.countryList.length;
                this.m_listCountry.refreshVirtualList();
            };
            MarketCountryListPanel.prototype.Show = function () {
                this.visible = true;
            };
            MarketCountryListPanel.prototype.Hide = function () {
                this.visible = false;
            };
            MarketCountryListPanel.prototype.OnBtnShowClick = function () {
                var selectIndex = this.m_listCountry.selectedIndex;
                if (selectIndex == null || selectIndex < 0) {
                    this.Hide();
                    this.window.conent.UpdateView();
                    return;
                }
                var data = this.countryList[selectIndex];
                this.Hide();
                this.window.OnSelectCountry(data.id);
            };
            MarketCountryListPanel.prototype.RenderListItem = function (index, obj) {
                var item = obj;
                var data = this.countryList[index];
                item.m_txtName.text = data.cfg.number + ". " + data.name;
                item.m_imgHome.visible = data.isHome;
                var progress = Game.moduleModel.market.GetCountryProgress(data.id);
                item.m_txtProgress.text = "已占领城市 ：" + progress + "/" + Game.config.country.getConfig(data.id).city_num;
                item.m_imgCountryIcon.url = data.flagUrl;
            };
            return MarketCountryListPanel;
        }(PfSkin.MarketCountryListPanelStruct));
        PfSkin.MarketCountryListPanel = MarketCountryListPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketCountryListPanel.js.map