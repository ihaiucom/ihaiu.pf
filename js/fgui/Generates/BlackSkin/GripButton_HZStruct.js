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
    var BlackSkin;
    (function (BlackSkin) {
        var GripButton_HZStruct = /** @class */ (function (_super) {
            __extends(GripButton_HZStruct, _super);
            function GripButton_HZStruct() {
                return _super.call(this) || this;
            }
            GripButton_HZStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "GripButton_HZ"));
            };
            GripButton_HZStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            GripButton_HZStruct.URL = "ui://s1uxc7tgjmop31";
            GripButton_HZStruct.DependPackages = ["BlackSkin"];
            return GripButton_HZStruct;
        }(fairygui.GButton));
        BlackSkin.GripButton_HZStruct = GripButton_HZStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GripButton_HZStruct.js.map