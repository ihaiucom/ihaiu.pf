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
        var WarFilmTypeSelectItem = /** @class */ (function (_super) {
            __extends(WarFilmTypeSelectItem, _super);
            function WarFilmTypeSelectItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.proficiencyTotal = 0;
                _this.curIndex = 0;
                return _this;
            }
            WarFilmTypeSelectItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.proficiencyTotal = 0;
                // 刷新演员列表
                this.m_proficiencyList.itemRenderer = Laya.Handler.create(this, this.inityrListItem, null, false);
            };
            WarFilmTypeSelectItem.prototype.setData = function (data, index, select) {
                this.curIndex = index;
                this.m_filmType.text = data.getName;
                this.m_lovePeople.text = data.getLove;
                this.m_filmIcon.icon = Game.config.avatar.getConfig(data.pic).iconUrl;
                // this.m_rewardIcon =
                if (select) {
                    this.m_proficiencyList.numItems = Game.moduleModel.warData.getRealYRList.count;
                }
                else {
                    this.m_proficiencyList.numItems = 0;
                }
                this.m_proficiency.text = this.proficiencyTotal.toString();
            };
            // 艺人列表单个赋值
            WarFilmTypeSelectItem.prototype.inityrListItem = function (index, obj) {
                var item = obj;
                var rd = this.getShootType(index);
                item.title = rd.toString();
                var actor = Game.moduleModel.warData.getRealYRList.getValue(index);
                var config = Game.config.actor.getConfig(actor.id);
                item.icon = Game.config.avatar.getConfig(config.avatar).bodyIconUrl;
                this.proficiencyTotal += rd;
            };
            WarFilmTypeSelectItem.prototype.getShootType = function (index) {
                var aaa = Game.moduleModel.warData.getRealYRList.getValue(index);
                var shootTypeList = aaa.shootTypeList;
                if (shootTypeList.length > 0) {
                    for (var i = 0; i < shootTypeList.length; i++) {
                        if (shootTypeList[i].type == this.curIndex) {
                            return shootTypeList[i].proficiencyLevel;
                        }
                    }
                }
                return 0;
            };
            return WarFilmTypeSelectItem;
        }(PfSkin.WarFilmTypeSelectItemStruct));
        PfSkin.WarFilmTypeSelectItem = WarFilmTypeSelectItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmTypeSelectItem.js.map