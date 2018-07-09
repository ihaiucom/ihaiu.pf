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
    var PfSkin;
    (function (PfSkin) {
        var SystemGetItemMessageStruct = /** @class */ (function (_super) {
            __extends(SystemGetItemMessageStruct, _super);
            function SystemGetItemMessageStruct() {
                return _super.call(this) || this;
            }
            SystemGetItemMessageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "SystemGetItemMessage"));
            };
            SystemGetItemMessageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_labItem = (this.getChild("labItem"));
                this.m_tOpen = this.getTransition("tOpen");
            };
            SystemGetItemMessageStruct.URL = "ui://s33x8418pdkm1nx";
            SystemGetItemMessageStruct.DependPackages = ["PfSkin"];
            return SystemGetItemMessageStruct;
        }(fairygui.GComponent));
        PfSkin.SystemGetItemMessageStruct = SystemGetItemMessageStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemGetItemMessageStruct.js.map