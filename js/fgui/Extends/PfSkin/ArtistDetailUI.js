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
        var ArtistDetailUI = /** @class */ (function (_super) {
            __extends(ArtistDetailUI, _super);
            function ArtistDetailUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.floatpos = [
                    new laya.maths.Point(200, 180),
                    new laya.maths.Point(450, 180),
                    new laya.maths.Point(200, 300),
                    new laya.maths.Point(450, 300)
                ];
                return _this;
            }
            ArtistDetailUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.attrlist = new Array();
                this.m_upgradeBtn.onClick(this, this.onClickUpgradeBtn);
                this.m_upgradeBtn.text = Games.TEXT.Upgrade;
                this.preProps = new Dictionary();
            };
            /**升级 */
            ArtistDetailUI.prototype.onClickUpgradeBtn = function () {
                var _this = this;
                var levelLimit = this.actorData.getMaxLv();
                if (levelLimit > this.actorData.level) {
                    if (Games.ItemHelper.checkItemEnough(this.actorData.levelConfig.cost)) {
                        //升级艺人
                        Game.protosender.Actor.upgradeActor(this.actorData.id);
                    }
                    else {
                        Game.system.toastText(format(Games.TEXT.ToastTextItemNotEnough, Game.config.item.getConfig(this.actorData.levelConfig.cost.itemId).name));
                    }
                }
                else {
                    //到达上限
                    if (this.actorData.isMaxLv()) {
                        Game.system.toastText(Games.TEXT.LvUpMax);
                    }
                    else {
                        if (this.levelupLimit == null) {
                            this.levelupLimit = PfSkin.LevelUpLimitUI.createInstance();
                        }
                        this.levelupLimit.open(Games.TEXT.UpLvLimit, format(Games.TEXT.LvUpTo, this.actorData.name, this.actorData.level, this.actorData.getNextLvUpLv()), format(Games.TEXT.NeedLoyalty, this.actorData.getNextLvUpLoyaltyLv()), null, function () {
                            _this.moduleWindow.effectAsset();
                        });
                    }
                }
            };
            /**
             * 更新艺人数据
             * @param data 艺人数据
             */
            ArtistDetailUI.prototype.updateView = function (data) {
                var lvUp = false;
                this.lv = data.level;
                this.actorData = data;
                this.m_renqiLabel.text = data.popularValue + "";
                this.m_name.text = this.actorData.name;
                this.m_level.text = format(Games.TEXT.Lv, this.actorData.level);
                this.m_gold.text = formatNumberUnit(Game.moduleModel.item.getItemNum(EItemId.gold));
                this.m_icon.icon = Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl;
                this.m_starList.itemRenderer = Handler.create(this, function (index, item) {
                    item.icon = data.config.starUrl;
                }, null, false);
                this.m_starList.numItems = this.actorData.star;
                this.m_sex.icon = Game.config.avatar.getConfig(Game.config.property.getConfig(this.actorData.config.sex).icon).iconUrl;
                this.m_contory.icon = Game.config.avatar.getConfig(Game.config.property.getConfig(this.actorData.config.country).icon).iconUrl;
                this.m_biaoqian1.text = Game.config.property.getConfig(this.actorData.config.show_type).name;
                this.m_biaoqian2.text = Game.config.property.getConfig(this.actorData.config.age_type).name;
                this.m_srcName.text = format(Games.TEXT.SrcActorName, this.actorData.config.name);
                //升级
                if (data.levelConfig) {
                    this.m_needGold.text = format(Games.TEXT.UpgradeNeedGold, formatNumberUnit(data.levelConfig.cost.itemNum));
                    this.m_upgradeBtn.visible = true;
                }
                else {
                    this.m_needGold.text = "";
                    this.m_upgradeBtn.visible = false;
                }
                var props = data.getProps();
                var pos = 0;
                for (var index = 0; index < props.length; index++) {
                    var id = props[index];
                    var config = Game.config.property.getConfig(id);
                    var field = config.field;
                    var value = data[field];
                    //升级
                    if (this.preProps.hasKey(id) && this.actorId == data.id) {
                        var preValue = this.preProps.getValue(id);
                        if (value > preValue) {
                            var url = Game.config.avatar.getConfig(config.icon).iconUrl;
                            this.floatAddAttrView(value - preValue, url, this.floatpos[pos]);
                            pos++;
                        }
                    }
                    this.preProps.add(id, value);
                }
                this.actorId = data.id;
            };
            /**
             *新增属性 漂浮特效
             */
            ArtistDetailUI.prototype.floatAddAttrView = function (value, url, pos) {
                var _this = this;
                var attr;
                if (this.attrlist.length > 0) {
                    attr = this.attrlist.pop();
                }
                else {
                    attr = PfSkin.AttrUpView.createInstance();
                    this.addChild(attr);
                }
                if (this.targetPos == null) {
                    this.targetPos = new laya.maths.Point();
                }
                this.targetPos.x = pos.x + (Math.random() > 0.5 ? -1 : 1) * 10;
                this.targetPos.y = pos.y + (Math.random() > 0.5 ? -1 : 1) * 20;
                attr.setXY(pos.x, pos.y);
                attr.text = "+" + value;
                attr.visible = true;
                attr.icon = url;
                laya.utils.Tween.to(attr, { y: pos.y - 40 }, 500, Laya.Ease.quadIn, Handler.create(this, function () {
                    _this.attrlist.push(attr);
                    attr.visible = false;
                }));
            };
            //
            ArtistDetailUI.prototype.clearProps = function () {
                this.preProps.clear();
            };
            return ArtistDetailUI;
        }(PfSkin.ArtistDetailUIStruct));
        PfSkin.ArtistDetailUI = ArtistDetailUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistDetailUI.js.map