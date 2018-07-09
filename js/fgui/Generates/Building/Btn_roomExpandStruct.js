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
        var Btn_roomExpandStruct = /** @class */ (function (_super) {
            __extends(Btn_roomExpandStruct, _super);
            function Btn_roomExpandStruct() {
                return _super.call(this) || this;
            }
            Btn_roomExpandStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "btn_roomExpand"));
            };
            Btn_roomExpandStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_Title = (this.getChild("Title"));
            };
            Btn_roomExpandStruct.URL = "ui://d062jvkgcpc911k";
            Btn_roomExpandStruct.DependPackages = ["Building"];
            return Btn_roomExpandStruct;
        }(fairygui.GButton));
        Building.Btn_roomExpandStruct = Btn_roomExpandStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_roomExpandStruct.js.map