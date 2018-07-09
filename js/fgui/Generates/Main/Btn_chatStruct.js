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
    var Main;
    (function (Main) {
        var Btn_chatStruct = /** @class */ (function (_super) {
            __extends(Btn_chatStruct, _super);
            function Btn_chatStruct() {
                return _super.call(this) || this;
            }
            Btn_chatStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Main", "btn_chat"));
            };
            Btn_chatStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            Btn_chatStruct.URL = "ui://7ecreso0ua2b2u";
            Btn_chatStruct.DependPackages = ["Main"];
            return Btn_chatStruct;
        }(fairygui.GButton));
        Main.Btn_chatStruct = Btn_chatStruct;
    })(Main = fgui.Main || (fgui.Main = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_chatStruct.js.map