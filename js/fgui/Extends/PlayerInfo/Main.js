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
    var PlayerInfo;
    (function (PlayerInfo) {
        var Event = laya.events.Event;
        var Main = /** @class */ (function (_super) {
            __extends(Main, _super);
            function Main() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.ITEM_RENAME_ID = 5008;
                _this.tabNameList = ["HOME", "CAREER", "TROPHY", "FILMS", "ACTORS"];
                return _this;
            }
            Main.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.init();
            };
            Main.prototype.onWindowShow = function () {
                this.setTopAsset();
                this.setPersonInfo();
                this.openTab(0);
                Game.protoOkEvent.add(ProtoAPIEventKey.GameData_RenameGameData, this.onServerRename, this);
                Game.protoOkEvent.add(ProtoAPIEventKey.GameData_RePerSignatureGameData, this.onServerRenameSignature, this);
                Game.protoOkEvent.add(ProtoAPIEventKey.GameData_RePortraitGameData, this.onServerChangeHeadAvatar, this);
            };
            Main.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoAPIEventKey.GameData_RenameGameData, this.onServerRename, this);
                Game.protoOkEvent.remove(ProtoAPIEventKey.GameData_RePerSignatureGameData, this.onServerRenameSignature, this);
                Game.protoOkEvent.remove(ProtoAPIEventKey.GameData_RePortraitGameData, this.onServerChangeHeadAvatar, this);
            };
            //服务器通知改头像
            Main.prototype.onServerChangeHeadAvatar = function (proto) {
                if (proto.result == 0) {
                    if (Game.moduleModel.playerInfo.portraitType == Games.PortraitType.Dress) {
                        User.info.portrait = Game.moduleModel.playerInfo.portraitId;
                        this.updatePortrait();
                    }
                    else if (Game.moduleModel.playerInfo.portraitType == Games.PortraitType.Buy) {
                        this.setTopAsset();
                    }
                }
            };
            //服务器通知改名
            Main.prototype.onServerRename = function (proto) {
                if (proto.result == 0) {
                    User.info.name = Game.moduleModel.playerInfo.playerName;
                    this.m_PersonInfo.m_headName.text = User.info.name;
                }
            };
            //服务器通知改签名
            Main.prototype.onServerRenameSignature = function (proto) {
                if (proto.result == 0) {
                    this.m_PersonInfo.m_btn_touch_desc.visible = true;
                    this.m_PersonInfo.m_self_introduction.visible = true;
                    this.m_PersonInfo.m_self_introduction_input.visible = false;
                    User.infoExt.perSignature = Game.moduleModel.playerInfo.playerSign;
                    this.m_PersonInfo.m_self_introduction.text = User.infoExt.perSignature;
                    if (User.infoExt.perSignature == "") {
                        this.m_PersonInfo.m_self_introduction.text = "Edit Self-Introduction";
                    }
                }
            };
            //更新头像
            Main.prototype.updatePortrait = function () {
                var portraitId = User.info.portrait;
                if (portraitId == 0) {
                    portraitId = this.getDefaultPortrait();
                }
                var portraitCfg = Game.config.headPortrait.getConfig(portraitId);
                if (portraitCfg) {
                    portraitId = portraitCfg.icon;
                    var avatarConfig = Game.config.avatar.getConfig(portraitCfg.icon);
                    if (avatarConfig) {
                        this.m_PersonInfo.m_headIcon.url = avatarConfig.iconUrl;
                    }
                }
            };
            //获取默认头像
            Main.prototype.getDefaultPortrait = function () {
                var portraitCfgList = Game.config.headPortrait.getConfigList();
                var portraitSexList = portraitCfgList.filter(function (value, index, array) {
                    return value.sex == User.info.sex;
                });
                for (var _i = 0, portraitSexList_1 = portraitSexList; _i < portraitSexList_1.length; _i++) {
                    var portrait = portraitSexList_1[_i];
                    if (portrait.unlock.itemId == 0 && portrait.unlock.itemNum == 0) {
                        return portrait.id;
                    }
                }
                return 0;
            };
            Main.prototype.init = function () {
                var index = 0;
                for (var _i = 0, _a = this.tabNameList; _i < _a.length; _i++) {
                    var tabName = _a[_i];
                    index++;
                    var tab = this.m_tabPanel.getChild("tab" + index);
                    var txtTitle = tab.getChild("title");
                    var txtSelectTitle = tab.getChild("select_title");
                    txtTitle.y += 12;
                    txtSelectTitle.y += 12;
                    txtTitle.text = tabName;
                    txtSelectTitle.text = tabName;
                    tab.onClick(this, this.onTabChange);
                }
                this.recordRankListPosition();
                this.m_topAssetList.m_btn_topClose.onClick(this, this.onCloseWindow);
            };
            Main.prototype.setTopAsset = function () {
                this.m_topAssetList.m_assetList.removeChildrenToPool();
                var assetItem = this.m_topAssetList.m_assetList.addItemFromPool();
                assetItem.setAsset(Games.AssetType.Diamond);
                this.m_topAssetList.m_assetList.addChild(assetItem);
                assetItem = this.m_topAssetList.m_assetList.addItemFromPool();
                assetItem.setAsset(Games.AssetType.Thumb);
                this.m_topAssetList.m_assetList.addChild(assetItem);
                assetItem = this.m_topAssetList.m_assetList.addItemFromPool();
                assetItem.setAsset(Games.AssetType.Gold);
                this.m_topAssetList.m_assetList.addChild(assetItem);
                assetItem = this.m_topAssetList.m_assetList.addItemFromPool();
                assetItem.setAsset(Games.AssetType.Dollar);
                this.m_topAssetList.m_assetList.addChild(assetItem);
            };
            Main.prototype.setPersonInfo = function () {
                this.updatePortrait();
                this.m_PersonInfo.m_headName.text = User.info.name;
                this.m_PersonInfo.m_level.text = "LV." + User.info.level;
                this.m_PersonInfo.m_self_introduction_input.input.maxChars = 100;
                this.m_PersonInfo.m_self_introduction.text = User.infoExt.perSignature; //个性签名
                this.m_PersonInfo.m_self_introduction_input.input.on(Event.BLUR, this, this.onSignatureInputBlur);
                if (User.infoExt.perSignature == "") {
                    this.m_PersonInfo.m_self_introduction.text = "Edit Self-Introduction";
                }
                //exp
                var prevExp = 0;
                for (var i = 0; i < User.info.level; i++) {
                    var cfg = Game.config.playerLevel.getConfig(i);
                    if (cfg != null) {
                        prevExp += cfg.fans;
                    }
                }
                var a = User.info;
                var curExp = User.info.fans; // - prevExp;
                var upgradeExp = Game.config.playerLevel.getConfig(User.info.level).fans;
                this.m_PersonInfo.m_progressBarText.text = curExp + "/" + upgradeExp;
                this.m_PersonInfo.m_progressBar.value = ((curExp * 100) / upgradeExp);
                this.m_PersonInfo.m_headIcon.onClick(this, this.onChooseAvatarClick);
                this.m_PersonInfo.m_btn_editor_name.onClick(this, this.onEditorNameClick);
                this.m_PersonInfo.m_btn_editor_desc.onClick(this, this.onEditorSignClick);
                this.m_PersonInfo.m_btn_touch_desc.onClick(this, this.onEditorSignClick);
            };
            Main.prototype.recordRankListPosition = function () {
                this.orignalY = this.m_rankList.y;
                this.orignalHeight = this.m_rankList.height;
            };
            //头像选择
            Main.prototype.onChooseAvatarClick = function () {
                var chooseAvatar = PlayerInfo.ChooseAvatar.createInstance();
                chooseAvatar.showForParent(this.parent);
                chooseAvatar.setInfo();
            };
            //修改公司名
            Main.prototype.onEditorNameClick = function () {
                if (Game.moduleModel.item.getItemNum(this.ITEM_RENAME_ID) == 0) {
                    var itemBuy = PlayerInfo.ItemBuy.createInstance();
                    itemBuy.showForParent(this.parent);
                    return;
                }
                var renameCompany = PlayerInfo.RenameCompany.createInstance();
                renameCompany.showForParent(this.parent);
                renameCompany.setInfo();
            };
            //修改签名
            Main.prototype.onEditorSignClick = function () {
                this.m_PersonInfo.m_btn_touch_desc.visible = false;
                this.m_PersonInfo.m_self_introduction.visible = false;
                var editorName = this.m_PersonInfo.m_self_introduction.text;
                this.m_PersonInfo.m_self_introduction_input.text = editorName;
                this.m_PersonInfo.m_self_introduction_input.visible = true;
                this.m_PersonInfo.m_self_introduction_input.input.focus = true;
                if (User.infoExt.perSignature == "") {
                    this.m_PersonInfo.m_self_introduction_input.text = "";
                }
            };
            //签名输入文本失去焦点		
            Main.prototype.onSignatureInputBlur = function () {
                var editorName = this.m_PersonInfo.m_self_introduction_input.text;
                if (this.checkRenameSignature(editorName)) {
                    Game.moduleModel.playerInfo.playerSign = editorName;
                    Game.protosender.GameData.RePerSignatureGameData(editorName);
                }
                else {
                    this.m_PersonInfo.m_btn_touch_desc.visible = true;
                    this.m_PersonInfo.m_self_introduction.visible = true;
                    this.m_PersonInfo.m_self_introduction_input.visible = false;
                }
            };
            //验证修改签名是否合法
            Main.prototype.checkRenameSignature = function (name) {
                var oldName = this.m_PersonInfo.m_self_introduction.text;
                if (name == oldName) {
                    return false;
                }
                var words = Game.config.blockWords.getConfigList();
                for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
                    var word = words_1[_i];
                    if (name.indexOf(word.text) != -1) {
                        Game.system.toastText(Game.config.msg.getTxt(MsgKey.account_name_blockword));
                        return false;
                    }
                }
                return true;
            };
            Main.prototype.onTabChange = function () {
                this.showContent(this.tabIndex - 1);
            };
            //0 start
            Main.prototype.openTab = function (index) {
                this.showContent(index);
                this.tabIndex = index + 1;
            };
            /**
             * 显示对应标签内容
             * @param tab
             */
            Main.prototype.showContent = function (tab) {
                this.m_rankList.removeChildrenToPool();
                switch (tab) {
                    case 0:
                        this.showTabHome();
                        break;
                    case 1:
                        this.showTabCareer();
                        break;
                    case 2:
                        this.showTabTrophy();
                        break;
                    case 3:
                        this.showTabFilms();
                        break;
                    case 4:
                        this.showTabActors();
                        break;
                }
            };
            Object.defineProperty(Main.prototype, "tabIndex", {
                get: function () {
                    return this.m_tabPanel.m_tabctrl.selectedIndex + 1;
                },
                set: function (value) {
                    this.m_tabPanel.m_tabctrl.setSelectedIndex(value - 1);
                },
                enumerable: true,
                configurable: true
            });
            //首页
            Main.prototype.showTabHome = function () {
                var blockCfg = Game.config.blockLevel.getConfig(User.info.stall);
                this.m_homeRankTop.m_stLevel.text = "ST." + User.info.stall % 1000;
                this.m_homeRankTop.m_stRankValue.text = blockCfg.name;
                this.m_homeRankTop.visible = true;
                this.m_rankList.y = this.orignalY;
                this.m_rankList.height = this.orignalHeight;
                var rankInfoList = [];
                var info = { title: "建筑层数", value: User.info.extendFloor };
                rankInfoList.push(info);
                //
                info = { title: "艺人数量", value: Game.moduleModel.actor.getAllActorLen() };
                rankInfoList.push(info);
                info = { title: "好友数量", value: 0 };
                rankInfoList.push(info);
                var maxMarket = Game.moduleModel.market.GetMaxCity();
                var kvalue = "0";
                if (maxMarket) {
                    kvalue = maxMarket.num + "." + maxMarket.name;
                }
                info = { title: "市场占领", value: kvalue };
                rankInfoList.push(info);
                info = { title: "宝物数量", value: 0 };
                rankInfoList.push(info);
                info = { title: "仓库容量", value: 0 };
                rankInfoList.push(info);
                //set list
                for (var _i = 0, rankInfoList_1 = rankInfoList; _i < rankInfoList_1.length; _i++) {
                    var rankInfo = rankInfoList_1[_i];
                    var rankItem = this.m_rankList.addItemFromPool();
                    rankItem.setInfo(rankInfo);
                    this.m_rankList.addChild(rankItem);
                }
            };
            //职业生涯
            Main.prototype.showTabCareer = function () {
                this.rePosRankList();
                var rankInfoList = [];
                var info = { title: "拍摄过的电影数", value: User.infoExt.totalFilm };
                rankInfoList.push(info);
                info = { title: "上映电影总数", value: User.infoExt.numBoxOffice }; //add
                rankInfoList.push(info);
                info = { title: "得到的票房总数", value: User.infoExt.numBoxOffice };
                rankInfoList.push(info);
                info = { title: "完成的订单数量", value: User.infoExt.numOrders };
                rankInfoList.push(info);
                info = { title: "解锁过的最高档生产线", value: User.infoExt.numProductionLine };
                rankInfoList.push(info);
                info = { title: "完成公务次数", value: User.infoExt.numOfficialBusiness };
                rankInfoList.push(info);
                info = { title: "会议达成协议次数", value: User.infoExt.numMeeting };
                rankInfoList.push(info);
                info = { title: "粉丝成功拜访次数", value: User.infoExt.numVisit };
                rankInfoList.push(info);
                info = { title: "得到过多少次分组第一", value: User.infoExt.numGroupBest };
                rankInfoList.push(info);
                //set list
                for (var _i = 0, rankInfoList_2 = rankInfoList; _i < rankInfoList_2.length; _i++) {
                    var rankInfo = rankInfoList_2[_i];
                    var rankItem = this.m_rankList.addItemFromPool();
                    rankItem.setInfo(rankInfo);
                    this.m_rankList.addChild(rankItem);
                }
            };
            //奖杯统计
            Main.prototype.showTabTrophy = function () {
                this.rePosRankList();
                var rankInfoList = [];
                var info = { title: "最佳艺术电影得奖次数", value: User.infoExt.numBestArtDirection };
                rankInfoList.push(info);
                info = { title: "最佳表演电影得奖次数", value: User.infoExt.numBestPerformer };
                rankInfoList.push(info);
                info = { title: "金橄榄奖得奖次数", value: User.infoExt.numGoldenOliveAward };
                //set list
                for (var _i = 0, rankInfoList_3 = rankInfoList; _i < rankInfoList_3.length; _i++) {
                    var rankInfo = rankInfoList_3[_i];
                    var rankItem = this.m_rankList.addItemFromPool();
                    rankItem.setInfo(rankInfo);
                    this.m_rankList.addChild(rankItem);
                }
            };
            //电影统计
            Main.prototype.showTabFilms = function () {
                this.rePosRankList();
                var rankInfoList = [];
                var info = { title: "\u5927\u4F17\u53E3\u7891\u6700\u9AD8\u7684\u7535\u5F71 " + User.infoExt.bestWordOfMouthFilm, value: User.infoExt.bestWordOfMouth };
                rankInfoList.push(info);
                info = { title: "\u7968\u623F\u6700\u9AD8\u7684\u7535\u5F71 " + User.infoExt.bestBoxOfficeFilm, value: User.infoExt.bestBoxOffice };
                rankInfoList.push(info);
                info = { title: "拍摄过的恐怖片数量", value: User.infoExt.numHorrorFilm };
                rankInfoList.push(info);
                info = { title: "拍摄过的悬疑片数量", value: 0 };
                rankInfoList.push(info);
                info = { title: "拍摄过的歌舞片数量", value: User.infoExt.numMusicalFilm };
                rankInfoList.push(info);
                info = { title: "拍摄过的喜剧片数量", value: User.infoExt.numComedyFilm };
                rankInfoList.push(info);
                info = { title: "拍摄过的动画片数量", value: User.infoExt.numCartoonFilm };
                rankInfoList.push(info);
                info = { title: "拍摄过的叙事片数量", value: User.infoExt.numNarrativeFilm };
                rankInfoList.push(info);
                info = { title: "拍摄过的爱情片数量", value: User.infoExt.numAffectionalFilm };
                rankInfoList.push(info);
                info = { title: "拍摄过的动作片数量", value: User.infoExt.numActionFilm };
                rankInfoList.push(info);
                //set list
                for (var _i = 0, rankInfoList_4 = rankInfoList; _i < rankInfoList_4.length; _i++) {
                    var rankInfo = rankInfoList_4[_i];
                    var rankItem = this.m_rankList.addItemFromPool();
                    rankItem.setInfo(rankInfo);
                    this.m_rankList.addChild(rankItem);
                }
            };
            //艺人统计
            Main.prototype.showTabActors = function () {
                this.rePosRankList();
                var rankInfoList = [];
                var info = { title: "票房号召力最强的艺人", value: 0 };
                rankInfoList.push(info);
                info = { title: "\u5F97\u5956\u6700\u591A\u7684\u827A\u4EBA", value: 0 };
                rankInfoList.push(info);
                info = { title: "\u62CD\u6444\u7535\u5F71\u6700\u591A\u7684\u827A\u4EBA", value: 0 };
                rankInfoList.push(info);
                info = { title: "\u6700\u504F\u7231\u7684\u827A\u4EBA", value: 0 };
                rankInfoList.push(info);
                info = { title: "\u6700\u4FE1\u8D56\u7684\u827A\u4EBA", value: 0 };
                rankInfoList.push(info);
                //set list
                for (var _i = 0, rankInfoList_5 = rankInfoList; _i < rankInfoList_5.length; _i++) {
                    var rankInfo = rankInfoList_5[_i];
                    var rankItem = this.m_rankList.addItemFromPool();
                    rankItem.setInfo(rankInfo);
                    this.m_rankList.addChild(rankItem);
                }
            };
            Main.prototype.rePosRankList = function () {
                this.m_homeRankTop.visible = false;
                this.m_rankList.y = this.orignalY - 100;
                this.m_rankList.height = this.orignalHeight + 100;
            };
            //关闭界面
            Main.prototype.onCloseWindow = function () {
                Game.menu.close(MenuId.PlayerInfo);
            };
            Main.DependPackages = ["PlayerInfo", "Common"];
            return Main;
        }(PlayerInfo.MainStruct));
        PlayerInfo.Main = Main;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Main.js.map