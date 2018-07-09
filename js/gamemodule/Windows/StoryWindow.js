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
    // 剧情窗口
    //----------------------
    var StoryWindow = /** @class */ (function (_super) {
        __extends(StoryWindow, _super);
        function StoryWindow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return StoryWindow;
    }(Games.MWindow));
    Games.StoryWindow = StoryWindow;
})(Games || (Games = {}));
//# sourceMappingURL=StoryWindow.js.map