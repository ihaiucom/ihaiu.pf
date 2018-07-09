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
        var SystemSelectActorPanel = /** @class */ (function (_super) {
            __extends(SystemSelectActorPanel, _super);
            function SystemSelectActorPanel() {
                var _this = _super.call(this) || this;
                _this.NAME_ITEM = "ActorItem";
                return _this;
            }
            SystemSelectActorPanel.prototype.open = function (actorList, _onselect, caller, title) {
                this.m_btnClose.onClick(this, this.OnCloseClick);
                this.m_list.setVirtual();
                this.m_list.itemRenderer = Handler.create(this, this.RenderListItem, null, false);
                this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.OnSelect);
                this.m_list.selectNone();
                this.onSelect = _onselect;
                this.caller = caller;
                this.m_title.text = title;
                this.actorList = actorList;
                this.m_list.numItems = this.actorList.length;
                this.m_list.refreshVirtualList();
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
            };
            SystemSelectActorPanel.prototype.OnSelect = function (obj) {
                var itemIndex = obj.name.substr(this.NAME_ITEM.length);
                var actor = this.actorList[itemIndex];
                if (this.onSelect) {
                    if (this.caller) {
                        this.onSelect.apply(this.caller, [actor.id]);
                    }
                    else {
                        this.onSelect(actor.id);
                    }
                }
                this.close();
            };
            SystemSelectActorPanel.prototype.RenderListItem = function (index, obj) {
                var item = obj;
                item.name = this.NAME_ITEM + index;
                var data = this.actorList[index];
                item.setPivot(0.5, 0.5);
                item.title = data.name;
                item.icon = Game.moduleModel.market.GetActorIcon(data.id);
                item.m_labDemand1.visible = false;
                item.m_labDemand2.visible = false;
                item.m_star.starNum = data.star;
                item.m_txtLv.text = data.level + "级";
            };
            SystemSelectActorPanel.prototype.OnCloseClick = function () {
                this.close();
            };
            SystemSelectActorPanel.prototype.close = function () {
                Games.MenuLayer.hideDialogModel();
                // this.m_t1.play(Handler.create(this, this.onHide));
                this.onHide();
            };
            SystemSelectActorPanel.prototype.onHide = function () {
                this.removeFromParent();
            };
            return SystemSelectActorPanel;
        }(PfSkin.SystemSelectActorPanelStruct));
        PfSkin.SystemSelectActorPanel = SystemSelectActorPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemSelectActorPanel.js.map