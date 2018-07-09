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
    var Building;
    (function (Building) {
        var BuildRoomUpgradeSuccess = /** @class */ (function (_super) {
            __extends(BuildRoomUpgradeSuccess, _super);
            function BuildRoomUpgradeSuccess() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BuildRoomUpgradeSuccess.prototype.init = function (info) {
                var level = Game.config.buildingLevel.getConfig(info.id).level;
                this.m_roomName.text = info.name + "升级至" + level + "级";
                var effects = Game.config.buildingLevel.getConfig(info.id).effect_id;
                for (var _i = 0, effects_1 = effects; _i < effects_1.length; _i++) {
                    var effectId = effects_1[_i];
                    var cfg = Game.config.buildingEffect.getConfig(effectId);
                    var propItem = this.m_porpList.addItemFromPool();
                    propItem.getChild("title").text = "[color=#ff9900]" + cfg.zh_cn_effect_des + "[/color]";
                    this.m_porpList.addChild(propItem);
                }
                this.m_btn_confirm.onClick(this, this.onConfirm);
            };
            BuildRoomUpgradeSuccess.prototype.onConfirm = function () {
                this.parent.removeChild(this);
            };
            return BuildRoomUpgradeSuccess;
        }(Building.BuildRoomUpgradeSuccessStruct));
        Building.BuildRoomUpgradeSuccess = BuildRoomUpgradeSuccess;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildRoomUpgradeSuccess.js.map