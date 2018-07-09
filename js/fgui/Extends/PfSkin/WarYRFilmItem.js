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
        var WarYRFilmItem = /** @class */ (function (_super) {
            __extends(WarYRFilmItem, _super);
            function WarYRFilmItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarYRFilmItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_attributeList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
            };
            WarYRFilmItem.prototype.setData = function (data, index, aggreementList) {
                this.m_icon.setData(data, 1);
                if (aggreementList) {
                    var str = Game.config.msg.getConfig(MsgKey.movie_none_coordination).notice;
                    if (aggreementList.length > 0) {
                        this.attributeUpTip = new Array();
                        var haveStory = false;
                        var haveCharter = false;
                        for (var i = 0; i < aggreementList.length; i++) {
                            var canAdd = true;
                            for (var k = 0; k < this.attributeUpTip.length; k++) {
                                if (this.attributeUpTip[k].icon === aggreementList[i].attribute) {
                                    canAdd = false;
                                }
                            }
                            if (aggreementList[i].type === 1 || aggreementList[i].type === 2) {
                                haveStory = true;
                                var aut = new AttributeUpTip();
                                aut.icon = aggreementList[i].attribute;
                                aut.str = "剧本契合";
                                this.attributeUpTip.push(aut);
                            }
                            if (aggreementList[i].type === 3) {
                                haveCharter = true;
                                var aut = new AttributeUpTip();
                                aut.icon = aggreementList[i].attribute;
                                aut.str = "角色契合";
                                this.attributeUpTip.push(aut);
                            }
                        }
                        if (haveStory && haveCharter) {
                            str = Game.config.msg.getConfig(MsgKey.movie_story_character_coordination).notice;
                        }
                        else if (haveStory) {
                            str = Game.config.msg.getConfig(MsgKey.movie_story_coordination).notice;
                        }
                        else {
                            str = Game.config.msg.getConfig(MsgKey.movie_character_coordination).notice;
                        }
                        this.m_attributeList.numItems = aggreementList.length;
                    }
                    this.m_title.text = str;
                }
                else {
                    this.m_title.text = "";
                }
            };
            // warAttributeUpTip
            WarYRFilmItem.prototype.initItem = function (index, obj) {
                var item = obj;
                item.setData(this.attributeUpTip[index]);
            };
            return WarYRFilmItem;
        }(PfSkin.WarYRFilmItemStruct));
        PfSkin.WarYRFilmItem = WarYRFilmItem;
        // 属性是否契合
        var AttributeUpTip = /** @class */ (function () {
            function AttributeUpTip() {
            }
            return AttributeUpTip;
        }());
        PfSkin.AttributeUpTip = AttributeUpTip;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRFilmItem.js.map