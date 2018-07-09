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
        var ArtistSkillItem = /** @class */ (function (_super) {
            __extends(ArtistSkillItem, _super);
            function ArtistSkillItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistSkillItem.prototype.updateView = function (data, index) {
                var skill = data.config.skill[index];
                if (skill) {
                    this.config = Game.config.skill.getConfigByGroupIdAndLv(skill.group_id, 1);
                    if (skill.lv > data.level) {
                        //未解锁
                        this.m_unLockGroup.visible = false;
                        this.m_lockGroup.visible = true;
                        this.m_condition.text = format(Games.TEXT.UnlockSkill, skill.lv);
                    }
                    else {
                        //解锁
                        this.m_unLockGroup.visible = true;
                        this.m_lockGroup.visible = false;
                        //技能名字
                        this.m_skillName.text = this.config.cn_name;
                        //描述
                        this.m_desc.text = this.config.cn_tips;
                        //经验
                        this.m_cost.text = this.config.exp + "";
                    }
                }
            };
            return ArtistSkillItem;
        }(PfSkin.ArtistSkillItemStruct));
        PfSkin.ArtistSkillItem = ArtistSkillItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistSkillItem.js.map