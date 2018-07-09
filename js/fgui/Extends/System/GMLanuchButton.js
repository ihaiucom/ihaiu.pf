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
    var System;
    (function (System) {
        var GMLanuchButton = /** @class */ (function (_super) {
            __extends(GMLanuchButton, _super);
            function GMLanuchButton() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GMLanuchButton.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.onClickButton);
            };
            GMLanuchButton.prototype.onClickButton = function () {
                Games.GM.visiable = !Games.GM.visiable;
            };
            return GMLanuchButton;
        }(System.GMLanuchButtonStruct));
        System.GMLanuchButton = GMLanuchButton;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMLanuchButton.js.map