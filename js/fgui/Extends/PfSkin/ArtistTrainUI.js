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
        var ArtistTrainUI = /** @class */ (function (_super) {
            __extends(ArtistTrainUI, _super);
            function ArtistTrainUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistTrainUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.itemRenderer = Handler.create(this, this.onUpdateItem, null, false);
                this.m_actorList.itemRenderer = Handler.create(this, this.onUpdateActorItem, null, false);
                this.m_actorList.on(fairygui.Events.CLICK_ITEM, this, this.onClickActorItem);
                this.m_checkbox.on(fairygui.Events.STATE_CHANGED, this, this.onChangedState);
                this.m_actorList.setVirtual();
                this.m_list.setVirtual();
            };
            ArtistTrainUI.prototype.onChangedState = function () {
                this.m_list.refreshVirtualList();
            };
            ArtistTrainUI.prototype.onClickActorItem = function (item) {
                var index = this.m_actorList.getChildIndex(item);
                var realIndex = this.m_actorList.childIndexToItemIndex(index);
                this.currentActor = this.actors[realIndex];
                this.refreshView();
            };
            ArtistTrainUI.prototype.refreshView = function () {
                this.m_attrLabel1.text = this.currentActor.spectacle.toString();
                this.m_attrLabel2.text = this.currentActor.perform.toString();
                this.m_attrLabel3.text = this.currentActor.plot.toString();
                this.m_attrLabel4.text = this.currentActor.art.toString();
                this.m_list.numItems = 4;
            };
            /**
             * 更新演员培养属性
             * @param index
             * @param item
             */
            ArtistTrainUI.prototype.onUpdateItem = function (index, item) {
                var item2 = item;
                item2.updateView(this.currentActor, index, this.m_checkbox.selected);
            };
            /**
             *
             * @param index 更新演员
             * @param item
             */
            ArtistTrainUI.prototype.onUpdateActorItem = function (index, item) {
                var item2 = item;
                item2.updateView(this.actors[index]);
            };
            ArtistTrainUI.prototype.updateView = function (id) {
                this.selectedIndex = 0;
                this.actors = Game.moduleModel.actor.getActors();
                if (id != null) {
                    var actorData = Game.moduleModel.actor.getActor(id);
                    this.selectedIndex = this.actors.indexOf(actorData);
                }
                this.m_actorList.numItems = this.actors.length;
                this.m_actorList.addSelection(this.selectedIndex, true);
                this.currentActor = this.actors[this.selectedIndex];
                this.refreshView();
            };
            return ArtistTrainUI;
        }(PfSkin.ArtistTrainUIStruct));
        PfSkin.ArtistTrainUI = ArtistTrainUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTrainUI.js.map