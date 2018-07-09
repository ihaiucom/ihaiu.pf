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
        var ArtistTrainResultUIStruct = /** @class */ (function (_super) {
            __extends(ArtistTrainResultUIStruct, _super);
            function ArtistTrainResultUIStruct() {
                return _super.call(this) || this;
            }
            ArtistTrainResultUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistTrainResultUI"));
            };
            ArtistTrainResultUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bedGroup = (this.getChild("bedGroup"));
                this.m_normalGroup = (this.getChild("normalGroup"));
                this.m_goodGroup = (this.getChild("goodGroup"));
                this.m_prefectGroup = (this.getChild("prefectGroup"));
                this.m_group = (this.getChild("group"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_vipCheckBox = (this.getChild("vipCheckBox"));
            };
            ArtistTrainResultUIStruct.URL = "ui://s33x8418jazc1ld";
            ArtistTrainResultUIStruct.DependPackages = ["PfSkin"];
            return ArtistTrainResultUIStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistTrainResultUIStruct = ArtistTrainResultUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTrainResultUIStruct.js.map