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
        var WarYRForFilm = /** @class */ (function (_super) {
            __extends(WarYRForFilm, _super);
            function WarYRForFilm() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.currIndexOf = 0;
                _this.curBulleIndexOf = 0;
                _this.haveShowYRIndexOf = -1;
                // 切合度字典
                _this.agreDic = new Dictionary();
                return _this;
            }
            WarYRForFilm.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 艺人列表
                this.m_resultList.itemRenderer = Laya.Handler.create(this, this.yrForFilmItem, null, false);
                // 当前艺人属性契合列表
                this.m_bubbleList.itemRenderer = Laya.Handler.create(this, this.initBubbleItem, null, false);
                // 关闭
                this.m_okBtn.onClick(this, this.onClickOkBtn);
            };
            WarYRForFilm.prototype.onClickOkBtn = function () {
                this.moduleWindow.closeSelf();
                // 返回，回到状态判断
                this.moduleMain.conent.otherCloseToWarMain(PfSkin.WarStatus.filming);
            };
            WarYRForFilm.prototype.onClickClose = function () {
                this.moduleWindow.closeSelf();
            };
            WarYRForFilm.prototype.onWindowShow = function () {
                this.setData();
            };
            WarYRForFilm.prototype.onWindowHide = function () {
            };
            WarYRForFilm.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.currIndexOf = 0;
                this.m_bubbleList.numItems = 0;
                this.m_resultList.numItems = 0;
                this.showYRNext();
            };
            WarYRForFilm.prototype.showYRNext = function () {
                var _this = this;
                if (this.currIndexOf <= Game.moduleModel.warData.getRealYRList.count) {
                    if (this.currIndexOf < Game.moduleModel.warData.getRealYRList.count) {
                        this.m_resultList.numItems = this.currIndexOf + 1;
                        this.m_curYR.text = Game.moduleModel.warData.moveStory.characterProperty[this.currIndexOf].getType;
                        this.m_curYR.m_icon.url = Games.WarLoadPic.getActorIcon(Game.moduleModel.warData.getRealYRList.getValue(this.currIndexOf).config.avatar);
                        this.curBulleIndexOf = 0;
                        setTimeout(function () { _this.showBubbleList(); }, 500);
                    }
                    else {
                        this.m_resultList.numItems = this.currIndexOf;
                    }
                }
            };
            WarYRForFilm.prototype.showBubbleList = function () {
                var _this = this;
                this.curBulleIndexOf++;
                var agreementList = this.checkBubble();
                this.agreDic.add(this.currIndexOf, agreementList);
                if (this.curBulleIndexOf < agreementList.length) {
                    this.m_bubbleList.numItems = this.curBulleIndexOf;
                    setTimeout(function () { _this.showBubbleList(); }, 1000);
                }
                else {
                    this.currIndexOf++;
                    this.showYRNext();
                }
            };
            // 艺人契合度列表单个赋值
            WarYRForFilm.prototype.yrForFilmItem = function (index, obj) {
                var item = obj;
                item.setData(Game.moduleModel.warData.getRealYRList.getValue(index), index, this.agreDic.getValue(index));
            };
            // 契合度单个赋值
            WarYRForFilm.prototype.initBubbleItem = function (index, obj) {
                var item = obj;
                var agreementlist = this.agreDic.getValue(this.currIndexOf);
                item.setData(agreementlist[index]);
            };
            // 判断当前艺人的契合度		
            WarYRForFilm.prototype.checkBubble = function () {
                var agreementList = new Array();
                // 艺人信息
                var actor = Game.moduleModel.warData.getRealYRList.getValue(this.currIndexOf);
                var actorType = actor.config.story_type;
                var actorFeature = actor.config.story_feature;
                var actorCharacter = actor.config.character;
                // 剧本信息
                var story = Game.moduleModel.warData.moveStory;
                // 角色信息
                var reqCaracters = Game.moduleModel.warData.moveStory.characterProperty[this.currIndexOf];
                var cTags = reqCaracters.tags;
                for (var i = 0; i < actorType.length; i++) {
                    if (actorType[i].id === story.type) {
                        var canAdd = true;
                        for (var k = 0; k < agreementList.length; k++) {
                            if (agreementList[k].id === actorType[i].story) {
                                canAdd = false;
                            }
                        }
                        var aggree = new Agreement();
                        aggree.type = 1;
                        aggree.id = actorType[i].story;
                        aggree.lv = actorType[i].lv;
                        aggree.strTip = Game.config.property.getConfig(actorType[i].story).name;
                        aggree.attribute = actorType[i].property;
                        agreementList.push(aggree);
                    }
                }
                for (var i = 0; i < actorFeature.length; i++) {
                    for (var j = 0; j < story.tags.length; j++) {
                        if (story.tags[j] === actorFeature[i].id) {
                            var canAdd = true;
                            for (var k = 0; k < agreementList.length; k++) {
                                if (agreementList[k].id === actorFeature[i].feature) {
                                    canAdd = false;
                                }
                            }
                            if (canAdd) {
                                var aggree = new Agreement();
                                aggree.type = 2;
                                aggree.id = actorFeature[i].feature;
                                aggree.lv = actorFeature[i].lv;
                                aggree.strTip = Game.config.property.getConfig(actorFeature[i].feature).name;
                                aggree.attribute = actorFeature[i].property;
                                agreementList.push(aggree);
                            }
                        }
                    }
                }
                for (var i = 0; i < actorCharacter.length; i++) {
                    for (var j = 0; j < cTags.length; j++) {
                        if (cTags[j] === actorCharacter[i].id) {
                            var canAdd = true;
                            for (var k = 0; k < agreementList.length; k++) {
                                if (agreementList[k].id === actorCharacter[i].character) {
                                    canAdd = false;
                                }
                            }
                            if (canAdd) {
                                var aggree = new Agreement();
                                aggree.type = 3;
                                aggree.id = actorCharacter[i].character;
                                aggree.lv = actorCharacter[i].lv;
                                aggree.strTip = Game.config.property.getConfig(actorCharacter[i].character).name;
                                aggree.attribute = actorCharacter[i].property;
                                agreementList.push(aggree);
                            }
                        }
                    }
                }
                return agreementList;
            };
            return WarYRForFilm;
        }(PfSkin.WarYRForFilmStruct));
        PfSkin.WarYRForFilm = WarYRForFilm;
        var Agreement = /** @class */ (function () {
            function Agreement() {
            }
            return Agreement;
        }());
        PfSkin.Agreement = Agreement;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRForFilm.js.map