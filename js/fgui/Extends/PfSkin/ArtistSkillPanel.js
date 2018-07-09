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
        var ArtistSkillPanel = /** @class */ (function (_super) {
            __extends(ArtistSkillPanel, _super);
            function ArtistSkillPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistSkillPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.itemRenderer = Handler.create(this, this.onUpdateItem, null, false);
                this.m_list.setVirtual();
            };
            /**
             * 刷新界面
             * @param data 艺人数据
             */
            ArtistSkillPanel.prototype.updateView = function (data) {
                this.currentActor = data;
                this.skills = data.config.skill;
                this.m_list.numItems = this.skills.length;
                //体力
                this.m_energyBar.value = data.stamina;
                this.m_energyBar.max = data.staminaLimit;
            };
            /**
             * 更新单条
             * @param index 索引
             * @param item
             */
            ArtistSkillPanel.prototype.onUpdateItem = function (index, item) {
                var aitem = item;
                aitem.updateView(this.currentActor, index);
            };
            return ArtistSkillPanel;
        }(PfSkin.ArtistSkillPanelStruct));
        PfSkin.ArtistSkillPanel = ArtistSkillPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistSkillPanel.js.map