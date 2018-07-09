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
    var Sprite = laya.display.Sprite;
    var UnitType;
    (function (UnitType) {
        UnitType[UnitType["E_Avatar"] = 0] = "E_Avatar";
        UnitType[UnitType["E_Hero"] = 1] = "E_Hero";
    })(UnitType = Games.UnitType || (Games.UnitType = {}));
    var AvatarInfo = /** @class */ (function () {
        function AvatarInfo() {
        }
        return AvatarInfo;
    }());
    Games.AvatarInfo = AvatarInfo;
    var Avatar = /** @class */ (function (_super) {
        __extends(Avatar, _super);
        function Avatar() {
            var _this = _super.call(this) || this;
            _this.animator = new Games.CAnimation();
            return _this;
        }
        Object.defineProperty(Avatar.prototype, "CAnimation", {
            get: function () {
                return this.animator;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 创建Avatar
         * @param info
         */
        Avatar.Creat = function (info) {
            var avatar = new Avatar();
            Avatar.id++;
            avatar.id = Avatar.id;
            avatar.init(info);
            return avatar;
        };
        Avatar.prototype.init = function (info) {
            var _this = this;
            this.info = info;
            this.animator.loadAnim(info.texturePath, info.skeletonPath, this, false, function () {
                // this.animator.crossFade(3, true); //idle
                _this.animator.crossFade("zhanli2", true); //idle
            });
        };
        Avatar.prototype.executeAction = function (nameOrIndex) {
            this.animator.play(nameOrIndex, true);
        };
        Avatar.prototype.dispose = function () {
            this.destroy();
        };
        return Avatar;
    }(Sprite));
    Games.Avatar = Avatar;
})(Games || (Games = {}));
//# sourceMappingURL=Avatar.js.map