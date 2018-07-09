/**
 *  MADE BY GENERATOR AT 2018-7-6 23:23:12,
 *  PLEASE DO NOT REWRITE.
 */
var Proto;
(function (Proto) {
    var SE;
    (function (SE) {
        var EError;
        (function (EError) {
            EError[EError["NoError"] = 0] = "NoError";
            EError[EError["ServerError"] = 1] = "ServerError";
            EError[EError["DataError"] = 2] = "DataError";
            EError[EError["UnknownError"] = 3] = "UnknownError";
            EError[EError["DataBusy"] = 4] = "DataBusy";
            EError[EError["NoUsrId"] = 5] = "NoUsrId";
            EError[EError["Frozen"] = 6] = "Frozen";
            EError[EError["Dropped"] = 7] = "Dropped";
        })(EError = SE.EError || (SE.EError = {}));
        var EMoneyType;
        (function (EMoneyType) {
            EMoneyType[EMoneyType["Money"] = 1] = "Money";
            EMoneyType[EMoneyType["Diamond"] = 2] = "Diamond";
            EMoneyType[EMoneyType["Gold"] = 3] = "Gold";
            EMoneyType[EMoneyType["Coin"] = 4] = "Coin";
        })(EMoneyType = SE.EMoneyType || (SE.EMoneyType = {}));
        var EGoodsFlag;
        (function (EGoodsFlag) {
            EGoodsFlag[EGoodsFlag["None"] = 0] = "None";
            EGoodsFlag[EGoodsFlag["New"] = 1] = "New";
            EGoodsFlag[EGoodsFlag["Hot"] = 2] = "Hot";
            EGoodsFlag[EGoodsFlag["Discount"] = 3] = "Discount";
            EGoodsFlag[EGoodsFlag["SoldOut"] = 4] = "SoldOut";
        })(EGoodsFlag = SE.EGoodsFlag || (SE.EGoodsFlag = {}));
        var EAcceptCondition;
        (function (EAcceptCondition) {
            EAcceptCondition[EAcceptCondition["acceptcondition_front_id"] = 1] = "acceptcondition_front_id";
            EAcceptCondition[EAcceptCondition["acceptcondition_level"] = 2] = "acceptcondition_level";
        })(EAcceptCondition = SE.EAcceptCondition || (SE.EAcceptCondition = {}));
        var ECompleteCondition;
        (function (ECompleteCondition) {
            ECompleteCondition[ECompleteCondition["completecondition_score"] = 1] = "completecondition_score";
            ECompleteCondition[ECompleteCondition["completecondition_kill"] = 2] = "completecondition_kill";
        })(ECompleteCondition = SE.ECompleteCondition || (SE.ECompleteCondition = {}));
        var ECompleteReward;
        (function (ECompleteReward) {
            ECompleteReward[ECompleteReward["completereward_exp"] = 1] = "completereward_exp";
            ECompleteReward[ECompleteReward["completereward_item"] = 2] = "completereward_item";
            ECompleteReward[ECompleteReward["completereward_gold"] = 3] = "completereward_gold";
        })(ECompleteReward = SE.ECompleteReward || (SE.ECompleteReward = {}));
        var EUsrState;
        (function (EUsrState) {
            EUsrState[EUsrState["uninit"] = 1] = "uninit";
            EUsrState[EUsrState["usual"] = 2] = "usual";
            EUsrState[EUsrState["frozen"] = 3] = "frozen";
            EUsrState[EUsrState["dropped"] = 4] = "dropped";
        })(EUsrState = SE.EUsrState || (SE.EUsrState = {}));
        var EItemNumber;
        (function (EItemNumber) {
            EItemNumber[EItemNumber["diamond"] = 1] = "diamond";
            EItemNumber[EItemNumber["gold"] = 2] = "gold";
        })(EItemNumber = SE.EItemNumber || (SE.EItemNumber = {}));
        var EPublishTypeCode;
        (function (EPublishTypeCode) {
            EPublishTypeCode[EPublishTypeCode["sdknotice"] = 1] = "sdknotice";
            EPublishTypeCode[EPublishTypeCode["usrmail"] = 2] = "usrmail";
            EPublishTypeCode[EPublishTypeCode["gamemail"] = 9] = "gamemail";
            EPublishTypeCode[EPublishTypeCode["gamenotice"] = 10] = "gamenotice";
        })(EPublishTypeCode = SE.EPublishTypeCode || (SE.EPublishTypeCode = {}));
        var EUserSex;
        (function (EUserSex) {
            EUserSex[EUserSex["boy"] = 2001] = "boy";
            EUserSex[EUserSex["girl"] = 2002] = "girl";
        })(EUserSex = SE.EUserSex || (SE.EUserSex = {}));
        var EItemCategory;
        (function (EItemCategory) {
            EItemCategory[EItemCategory["diamond"] = 1] = "diamond";
            EItemCategory[EItemCategory["gold"] = 2] = "gold";
            EItemCategory[EItemCategory["dollar"] = 3] = "dollar";
            EItemCategory[EItemCategory["other"] = 4] = "other";
            EItemCategory[EItemCategory["normal"] = 5] = "normal";
            EItemCategory[EItemCategory["assets"] = 6] = "assets";
            EItemCategory[EItemCategory["contract"] = 7] = "contract";
            EItemCategory[EItemCategory["giftbag"] = 8] = "giftbag";
        })(EItemCategory = SE.EItemCategory || (SE.EItemCategory = {}));
        var EItemId;
        (function (EItemId) {
            EItemId[EItemId["diamond"] = 1] = "diamond";
            EItemId[EItemId["gold"] = 2] = "gold";
            EItemId[EItemId["dollar"] = 3] = "dollar";
            EItemId[EItemId["licence"] = 4] = "licence";
            EItemId[EItemId["fans"] = 5] = "fans";
            EItemId[EItemId["praise"] = 6] = "praise";
            EItemId[EItemId["player_rename_card"] = 5008] = "player_rename_card";
        })(EItemId = SE.EItemId || (SE.EItemId = {}));
        var EGameDataRename;
        (function (EGameDataRename) {
            EGameDataRename[EGameDataRename["renameLengthMin"] = 4] = "renameLengthMin";
            EGameDataRename[EGameDataRename["renameLengthMax"] = 18] = "renameLengthMax";
            EGameDataRename[EGameDataRename["rePerSignatureLengthMax"] = 100] = "rePerSignatureLengthMax";
        })(EGameDataRename = SE.EGameDataRename || (SE.EGameDataRename = {}));
        var EStoryStack;
        (function (EStoryStack) {
            EStoryStack[EStoryStack["daily_times"] = 1] = "daily_times";
            EStoryStack[EStoryStack["search_cost"] = 2] = "search_cost";
            EStoryStack[EStoryStack["cd_stage_cost"] = 3] = "cd_stage_cost";
            EStoryStack[EStoryStack["cd_stage_type"] = 4] = "cd_stage_type";
            EStoryStack[EStoryStack["cd_stage_length"] = 5] = "cd_stage_length";
            EStoryStack[EStoryStack["cd_stages"] = 6] = "cd_stages";
        })(EStoryStack = SE.EStoryStack || (SE.EStoryStack = {}));
        var EStoryModule;
        (function (EStoryModule) {
            EStoryModule[EStoryModule["noFinish"] = 0] = "noFinish";
            EStoryModule[EStoryModule["finish"] = 1] = "finish";
            EStoryModule[EStoryModule["hadGet"] = 2] = "hadGet";
            EStoryModule[EStoryModule["randomLength"] = 3] = "randomLength";
            EStoryModule[EStoryModule["shootTime"] = 5] = "shootTime";
            EStoryModule[EStoryModule["score"] = 8] = "score";
        })(EStoryModule = SE.EStoryModule || (SE.EStoryModule = {}));
        var EMovieState;
        (function (EMovieState) {
            EMovieState[EMovieState["chooseScript"] = 1] = "chooseScript";
            EMovieState[EMovieState["chooseActor"] = 2] = "chooseActor";
            EMovieState[EMovieState["chooseType"] = 3] = "chooseType";
            EMovieState[EMovieState["propaganda"] = 4] = "propaganda";
            EMovieState[EMovieState["actorUpdate"] = 5] = "actorUpdate";
            EMovieState[EMovieState["complete"] = 6] = "complete";
            EMovieState[EMovieState["chooseTheater"] = 7] = "chooseTheater";
            EMovieState[EMovieState["result"] = 8] = "result";
            EMovieState[EMovieState["contineTransceiver"] = 9] = "contineTransceiver";
        })(EMovieState = SE.EMovieState || (SE.EMovieState = {}));
        var EGlobalId;
        (function (EGlobalId) {
            EGlobalId[EGlobalId["maxMovieNum"] = 9] = "maxMovieNum";
            EGlobalId[EGlobalId["tempActor"] = 9999] = "tempActor";
        })(EGlobalId = SE.EGlobalId || (SE.EGlobalId = {}));
        var EMovieType;
        (function (EMovieType) {
        })(EMovieType = SE.EMovieType || (SE.EMovieType = {}));
        var EGameDataOps;
        (function (EGameDataOps) {
            EGameDataOps[EGameDataOps["init"] = 1] = "init";
            EGameDataOps[EGameDataOps["add"] = 2] = "add";
            EGameDataOps[EGameDataOps["update"] = 4] = "update";
            EGameDataOps[EGameDataOps["remove"] = 8] = "remove";
        })(EGameDataOps = SE.EGameDataOps || (SE.EGameDataOps = {}));
        var ECommon = /** @class */ (function () {
            function ECommon() {
            }
            ECommon.MaxNameLenth = 20; //名字最大长度
            ECommon.DefaultName = "Brad Pitt"; // 默认名字
            ECommon.MoveSpeed = 1.3; // 移动速度
            ECommon.CanJump = false; // 开启跳跃
            return ECommon;
        }());
        SE.ECommon = ECommon;
        var EChannel = /** @class */ (function () {
            function EChannel() {
            }
            EChannel.facebook = "1";
            EChannel.google = "2";
            return EChannel;
        }());
        SE.EChannel = EChannel;
        var ProtoVersion = /** @class */ (function () {
            function ProtoVersion() {
            }
            ProtoVersion.versionCode = 52; //协议版本号数字表示
            ProtoVersion.versionName = "0.5.2"; //协议版本号字符表示
            return ProtoVersion;
        }());
        SE.ProtoVersion = ProtoVersion;
        var DBOType = /** @class */ (function () {
            function DBOType() {
            }
            DBOType.UsrData = "UsrData";
            DBOType.GameInfo = "GameInfo";
            DBOType.GameInfoExt = "GameInfoExt";
            DBOType.GMMsgLog = "GMMsgLog";
            DBOType.OrderData = "OrderData";
            DBOType.ItemData = "ItemData";
            DBOType.StorySuitData = "StorySuitData";
            DBOType.StoryData = "StoryData";
            DBOType.ActorData = "ActorData";
            DBOType.GameOrderData = "GameOrderData";
            DBOType.CityData = "CityData";
            DBOType.ActorSkillEffect = "ActorSkillEffect";
            DBOType.TempData = "TempData";
            DBOType.MovieData = "MovieData";
            return DBOType;
        }());
        SE.DBOType = DBOType;
    })(SE = Proto.SE || (Proto.SE = {}));
})(Proto || (Proto = {}));
//# sourceMappingURL=SharedEnum.js.map