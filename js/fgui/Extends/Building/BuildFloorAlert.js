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
        var BuildFloorAlert = /** @class */ (function (_super) {
            __extends(BuildFloorAlert, _super);
            function BuildFloorAlert() {
                return _super.call(this) || this;
            }
            BuildFloorAlert.prototype.show = function (floor, confirmCall) {
                this.floor = floor;
                var floorCfg = Game.config.floor.getConfig(floor);
                var itemCfg = Game.config.item.getConfig(floorCfg.cost.itemId);
                var userItem = Game.moduleModel.item.getItem(floorCfg.cost.itemId);
                this.m_assetIcon.url = userItem.itemIconUrl;
                this.m_assetNum.text = floorCfg.cost.itemNum.toString();
                this.confirmCall = confirmCall;
                this.m_btn_close.onClick(this, this.onClose);
                this.m_btn_confirm.onClick(this, this.onConfirm);
            };
            BuildFloorAlert.prototype.onConfirm = function () {
                //请求扩建楼层
                Game.protosender.CinemaBuild.ExtendFloor(this.floor);
                if (this.confirmCall != null) {
                    this.confirmCall.apply(null);
                }
                this.onClose();
            };
            BuildFloorAlert.prototype.onClose = function () {
                this.confirmCall = null;
                this.parent.removeChild(this);
            };
            return BuildFloorAlert;
        }(Building.BuildFloorAlertStruct));
        Building.BuildFloorAlert = BuildFloorAlert;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildFloorAlert.js.map