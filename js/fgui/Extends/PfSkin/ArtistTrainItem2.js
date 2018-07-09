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
        var ArtistTrainItem2 = /** @class */ (function (_super) {
            __extends(ArtistTrainItem2, _super);
            function ArtistTrainItem2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             *
             * @param data
             * @param index
             */
            ArtistTrainItem2.prototype.updateView = function (data, index, isMax) {
                if (isMax === void 0) { isMax = false; }
                this.isMax = isMax;
                this.m_attrList.numItems = 3;
                this.m_desc.text = "随机获取两种属性提升";
                if (index % 2 == 0) {
                    this.m_title.text = "演员的自我修养";
                }
                else {
                    this.m_title.text = "艺人的自我训练";
                }
            };
            ArtistTrainItem2.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_lockGroup.visible = false;
                this.m_attrList.itemRenderer = Handler.create(this, this.onUpdateAttrItem, null, false);
            };
            ArtistTrainItem2.prototype.onUpdateAttrItem = function (index, item) {
                var item1 = item;
                if (this.isMax) {
                    item1.title = "+ 3 ~ 3";
                    this.m_upgradeBtn.m_gold.text = "10000";
                    this.m_upgradeBtn.m_page.text = "1000";
                }
                else {
                    item1.title = "+ 1 ~ 3";
                    this.m_upgradeBtn.m_gold.text = "10";
                    this.m_upgradeBtn.m_page.text = "10";
                }
            };
            return ArtistTrainItem2;
        }(PfSkin.ArtistTrainItem2Struct));
        PfSkin.ArtistTrainItem2 = ArtistTrainItem2;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTrainItem2.js.map