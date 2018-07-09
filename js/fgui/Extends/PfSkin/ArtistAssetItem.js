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
        var ArtistAssetItem = /** @class */ (function (_super) {
            __extends(ArtistAssetItem, _super);
            function ArtistAssetItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistAssetItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_sendBtn.onClick(this, this.onClickSendBtn);
                this.m_starList.itemRenderer = Handler.create(this, this.onUpdateStarItem, null, false);
                this.m_sendBtn.text = Games.TEXT.Send;
                this.m_lockGroup.visible = false;
            };
            /**
             * 星级
             * @param index 索引
             * @param item
             */
            ArtistAssetItem.prototype.onUpdateStarItem = function (index, item) {
                item.icon = Game.config.avatar.getConfig(Game.config.property.getConfig(this.itemConfig.star).icon).iconUrl;
            };
            /**
             * 更新界面
             * @param data 艺人数据
             */
            ArtistAssetItem.prototype.updateView = function (data, index) {
                this.actorData = data;
                this.assetData = data.assets[index];
                //
                if (this.itemView == null) {
                    this.itemView = fgui.Common.ItemCellView.createInstance();
                    this.addChild(this.itemView);
                    this.itemView.setXY(22, 62);
                }
                var itemId = this.assetData.config.item;
                var itemConfig = Game.config.item.getConfig(itemId);
                //道具配置
                this.itemConfig = itemConfig;
                //道具
                if (itemConfig) {
                    //道具icon
                    this.itemView.icon = itemConfig.iconUrl;
                    //道具名字
                    this.m_name.text = itemConfig.name;
                    //属性表
                    var propertyConfig = Game.config.property.getConfig(itemConfig.star);
                    if (propertyConfig) {
                        this.m_starList.numItems = parseInt(propertyConfig.field);
                    }
                }
                //属性图标
                this.m_picon.icon = Game.config.avatar.getConfig(Game.config.property.getConfig(this.assetData.config.actor_property).icon).iconUrl;
                //+x
                this.m_value.text = format("+{0}", this.assetData.config.value);
                //描述信息 每得到10个即可
                this.m_desc.text = format(Games.TEXT.GetAssetToGetProp, this.assetData.config.number);
                //最大可以赠送
                var sendMax = this.assetData.max;
                //当前已经赠送
                var currMax = this.assetData.getItemNum(itemId);
                //个数 
                this.itemView.title = format("{0}/{1}", currMax, sendMax);
                //可以赠送数量
                var remain = sendMax - currMax;
                //当前拥有数量
                var curr = Game.moduleModel.item.getItemNum(itemId);
                //可数量
                this.max = Math.min(curr, remain);
                //是否灰态
                this.m_sendBtn.grayed = this.max <= 0;
                //当前等级最大数量
                this.m_bar.max = this.assetData.config.number;
                //当前等级已经赠送的数量
                this.m_bar.value = this.assetData.getCurLvItemNum(itemId);
            };
            /**
             * 点击赠送
             */
            ArtistAssetItem.prototype.onClickSendBtn = function () {
                var _this = this;
                if (this.max > 0) {
                    Game.system.setNumText(this.max, Games.TEXT.ChooseSendAssetNum, "", null, function (num) {
                        //赠送资产
                        Game.protosender.Actor.giveActorAssets(_this.actorData.id, _this.assetData.type, _this.assetData.lv, num);
                    });
                }
                else {
                    //道具不足
                    Game.system.toastItemNotEnough(this.itemConfig.id);
                }
            };
            return ArtistAssetItem;
        }(PfSkin.ArtistAssetItemStruct));
        PfSkin.ArtistAssetItem = ArtistAssetItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistAssetItem.js.map