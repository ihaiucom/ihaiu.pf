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
        var MarketSelectActorPanel = /** @class */ (function (_super) {
            __extends(MarketSelectActorPanel, _super);
            function MarketSelectActorPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.dispatchList = [];
                _this.NAME_ITEM = "ActorItem";
                return _this;
            }
            MarketSelectActorPanel.prototype.InitView = function (mWindow) {
                this.window = mWindow;
                this.m_btnClose.onClick(this, this.OnCloseClick);
                this.m_list.setVirtual();
                this.m_list.itemRenderer = Handler.create(this, this.RenderListItem, null, false);
                this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.OnSelect);
                this.Hide();
            };
            MarketSelectActorPanel.prototype.UpdateView = function (_onselect, demandList, dispatchList) {
                this.onSelect = _onselect;
                this.demandList = demandList;
                this.dispatchList = dispatchList;
                this.m_txtTip.text = Game.moduleModel.market.GetDemandListText(this.demandList);
                this.actorList = Game.moduleModel.market.GetActorList();
                this.m_list.selectNone();
                this.m_list.numItems = this.actorList.length;
                this.m_list.refreshVirtualList();
            };
            MarketSelectActorPanel.prototype.OnSelect = function (obj) {
                var item = obj;
                var itemIndex = item.name.substr(this.NAME_ITEM.length);
                var data = this.actorList[itemIndex];
                var actDemand = Game.moduleModel.market.GetActorRequire(data.id);
                for (var index = 0; index < this.demandList.length; index++) {
                    var demand = this.demandList[index];
                    if (!Game.moduleModel.market.IsDemandConform(demand, actDemand[demand.type])) {
                        this.ShowMsgTip(demand);
                        return;
                    }
                }
                var rect = this.localToGlobalRect(item.x, item.y, item.width, item.height);
                this.onSelect(data.id, rect);
                // this.Hide();
            };
            MarketSelectActorPanel.prototype.ShowMsgTip = function (demand) {
                switch (demand.type) {
                    case Games.ActorRequireEnum.age:
                        Game.system.toastMsg(MsgKey.market_envoy_wrong3);
                        break;
                    case Games.ActorRequireEnum.Continents:
                        Game.system.toastMsg(MsgKey.market_envoy_wrong1);
                        break;
                    case Games.ActorRequireEnum.type:
                        Game.system.toastMsg(MsgKey.market_envoy_wrong2);
                    case Games.ActorRequireEnum.sex:
                        Game.system.toastMsg(MsgKey.market_envoy_wrong4);
                        break;
                    case Games.ActorRequireEnum.art:
                    case Games.ActorRequireEnum.entertainment:
                    case Games.ActorRequireEnum.performance:
                    case Games.ActorRequireEnum.plot:
                    case Games.ActorRequireEnum.scene:
                        Game.system.toastMsg(MsgKey.market_envoy_wrong4);
                    default:
                        break;
                }
            };
            MarketSelectActorPanel.prototype.RenderListItem = function (index, obj) {
                var item = obj;
                item.name = this.NAME_ITEM + index;
                var data = this.actorList[index];
                item.setPivot(0.5, 0.5);
                item.title = data.name;
                item.m_state.setSelectedIndex(this.IsDispatch(data.id) ? 1 : 0);
                var demand = this.demandList[0];
                var actDemand = Game.moduleModel.market.GetActorRequire(data.id);
                if (demand != null) {
                    item.m_labDemand1.visible = true;
                    item.m_labDemand1.title = Game.moduleModel.market.GetActorDemandText(demand, actDemand[demand.type]);
                    item.m_labDemand1.m_trColor.setSelectedIndex(Game.moduleModel.market.IsDemandConform(demand, actDemand[demand.type]) ? 2 : 0);
                    item.m_labDemand1.icon = "";
                }
                else {
                    item.m_labDemand1.visible = false;
                }
                demand = this.demandList[1];
                if (demand != null) {
                    item.m_labDemand2.visible = true;
                    item.m_labDemand2.title = Game.moduleModel.market.GetActorDemandText(demand, actDemand[demand.type]);
                    item.m_labDemand2.m_trColor.setSelectedIndex(Game.moduleModel.market.IsDemandConform(demand, actDemand[demand.type]) ? 2 : 0);
                    item.m_labDemand2.icon = "";
                }
                else {
                    item.m_labDemand2.visible = false;
                }
                item.icon = Game.moduleModel.market.GetActorIcon(data.id);
            };
            MarketSelectActorPanel.prototype.IsDispatch = function (id) {
                for (var index = 0; index < this.dispatchList.length; index++) {
                    var dispatch = this.dispatchList[index];
                    if (dispatch == id) {
                        return true;
                    }
                }
                return false;
            };
            MarketSelectActorPanel.prototype.OnCloseClick = function () {
                this.Hide();
                this.onSelect();
            };
            MarketSelectActorPanel.prototype.Show = function () {
                this.visible = true;
            };
            MarketSelectActorPanel.prototype.Hide = function () {
                this.visible = false;
            };
            return MarketSelectActorPanel;
        }(PfSkin.MarketSelectActorPanelStruct));
        PfSkin.MarketSelectActorPanel = MarketSelectActorPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketSelectActorPanel.js.map