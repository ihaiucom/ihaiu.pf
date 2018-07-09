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
var Games;
(function (Games) {
    var PortraitType;
    (function (PortraitType) {
        PortraitType[PortraitType["Dress"] = 0] = "Dress";
        PortraitType[PortraitType["Buy"] = 1] = "Buy";
    })(PortraitType = Games.PortraitType || (Games.PortraitType = {}));
    var PlayerInfoModel = /** @class */ (function (_super) {
        __extends(PlayerInfoModel, _super);
        function PlayerInfoModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PlayerInfoModel;
    }(Games.MModel));
    Games.PlayerInfoModel = PlayerInfoModel;
})(Games || (Games = {}));
//# sourceMappingURL=PlayerInfoModel.js.map