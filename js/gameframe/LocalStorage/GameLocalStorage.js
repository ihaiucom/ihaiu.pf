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
    //======================
    // 游戏本地数据缓存
    //----------------------
    var GameLocalStorage = /** @class */ (function (_super) {
        __extends(GameLocalStorage, _super);
        function GameLocalStorage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(GameLocalStorage.prototype, "password", {
            get: function () {
                if (!this._password) {
                    this._password = this.getItem("password");
                }
                return this._password;
            },
            set: function (value) {
                this._password = value;
                this.setItem("password", value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "isGuest", {
            get: function () {
                if (this._isGuest === undefined) {
                    this._isGuest = this.getBoolean("isGuest", true);
                }
                return this._isGuest;
            },
            set: function (value) {
                this._isGuest = value;
                this.setBoolean("isGuest", value, true);
            },
            enumerable: true,
            configurable: true
        });
        return GameLocalStorage;
    }(Games.LocalStorage));
    Games.GameLocalStorage = GameLocalStorage;
})(Games || (Games = {}));
//# sourceMappingURL=GameLocalStorage.js.map