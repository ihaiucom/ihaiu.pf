/**
 *  MADE BY GENERATOR AT 2018-7-6 23:23:12,
 *  PLEASE DO NOT REWRITE.
 */
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
var Proto;
(function (Proto) {
    var SS;
    (function (SS) {
        var DBBase = /** @class */ (function () {
            function DBBase() {
            }
            return DBBase;
        }());
        SS.DBBase = DBBase;
        var DBObject = /** @class */ (function (_super) {
            __extends(DBObject, _super);
            function DBObject() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.uuid = "";
                return _this;
            }
            return DBObject;
        }(DBBase));
        SS.DBObject = DBObject;
        var ShardDBObject = /** @class */ (function (_super) {
            __extends(ShardDBObject, _super);
            function ShardDBObject() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.uuid = "";
                _this.entityId = 0;
                return _this;
            }
            return ShardDBObject;
        }(DBBase));
        SS.ShardDBObject = ShardDBObject;
        var UsrData = /** @class */ (function (_super) {
            __extends(UsrData, _super);
            function UsrData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.usrName = ""; //玩家名字
                _this.channel = ""; // 渠道代码
                _this.registerTime = 0; //注册时间 unix时间戳
                _this.registerIP = ""; //注册IP
                _this.lastLoginTime = 0; // 次登录时间 unix时间戳
                _this.lastLoginIP = ""; //上次登录IP
                _this.usrState = 0; //玩家状态
                _this.usrRemark = ""; //状态注释
                _this.usrFreezeTime = 0; //冻结的到期时间 0是永久冻结 unix时间戳
                return _this;
            }
            return UsrData;
        }(ShardDBObject));
        SS.UsrData = UsrData;
        var RoomInfo = /** @class */ (function () {
            function RoomInfo() {
                this.roomId = 0; //房间ID
                this.floor = 0; //房间所在楼层
            }
            return RoomInfo;
        }());
        SS.RoomInfo = RoomInfo;
        var GameInfo = /** @class */ (function (_super) {
            __extends(GameInfo, _super);
            function GameInfo() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.name = ""; //玩家名字
                _this.portrait = 0; //头像id
                _this.sex = 0; //性别
                _this.level = 0; //等级
                _this.fans = 0; //粉丝数量
                _this.stall = 0; //比赛档次
                _this.vipLevel = 0; //vip等级
                _this.vipExp = 0; //vip经验
                _this.extendFloor = 0; // 扩建的楼层
                _this.buildRoomInfo = null; //建造的房间信息
                _this.maxActor = 0; //最大艺人数
                _this.maxHideActor = 0; //最大隐藏艺人数
                _this.noseIntoNum = 0; //查探次数
                _this.noseIntoTime = 0; //查探时间
                _this.resetNoseIntoTime = 0; //查探次数,时间重置时间
                _this.noseIntoActorEffectTime = 0; //查探的艺人生效时间
                _this.noseIntoActorList = null; //查探的艺人ID
                _this.expected = 0; //期待值
                return _this;
            }
            return GameInfo;
        }(ShardDBObject));
        SS.GameInfo = GameInfo;
        var GameInfoExt = /** @class */ (function (_super) {
            __extends(GameInfoExt, _super);
            function GameInfoExt() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.perSignature = ""; //个性签名
                _this.totalFilm = 0; //拍摄过的电影数
                _this.numBoxOffice = 0; //票房总数
                _this.numOrders = 0; //订单总数
                _this.numProductionLine = 0; //最高档生产线
                _this.numOfficialBusiness = 0; //公务次数
                _this.numMeeting = 0; //会议次数
                _this.numVisit = 0; //拜访次数
                _this.numGroupBest = 0; //分组第一次数
                _this.numBestArtDirection = 0; //获得最佳艺术指导奖次数
                _this.numBestPerformer = 0; //获得最佳表演奖次数
                _this.numGoldenOliveAward = 0; //获得金橄榄奖次数
                _this.bestWordOfMouth = 0; //最高口碑
                _this.bestWordOfMouthFilm = ""; //口碑最高的电影
                _this.bestBoxOffice = 0; //最高票房
                _this.bestBoxOfficeFilm = ""; //票房最高的电影
                _this.numNarrativeFilm = 0; //叙事片数量
                _this.numActionFilm = 0; //动作片数量
                _this.numAffectionalFilm = 0; //爱情片数量
                _this.numCartoonFilm = 0; //动画片数量
                _this.numComedyFilm = 0; //喜剧片数量
                _this.numMusicalFilm = 0; //歌舞片数量
                _this.numHorrorFilm = 0; //恐怖片数量
                _this.portraitList = null; //头像ID列表
                _this.findStoryTime = 0; //搜罗次数
                _this.lastTimeFindStory = 0; //上次搜罗时间
                return _this;
            }
            return GameInfoExt;
        }(ShardDBObject));
        SS.GameInfoExt = GameInfoExt;
        var ItemDesc = /** @class */ (function () {
            function ItemDesc() {
                this.itemId = 0; //配置表id
                this.amount = 0; //奖励物品数量
            }
            return ItemDesc;
        }());
        SS.ItemDesc = ItemDesc;
        var GMMsgLog = /** @class */ (function (_super) {
            __extends(GMMsgLog, _super);
            function GMMsgLog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.messageId = 0;
                _this.publishTypeCode = 0;
                _this.receiveCount = 0; //接受次数
                _this.receiveTime = 0; // unix时间戳
                return _this;
            }
            return GMMsgLog;
        }(ShardDBObject));
        SS.GMMsgLog = GMMsgLog;
        var OrderData = /** @class */ (function (_super) {
            __extends(OrderData, _super);
            function OrderData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.orderId = 0; //订单号
                _this.outerOrderId = ""; //三方订单id
                _this.productId = ""; //商品编号
                _this.productNum = 0; //商品数量
                _this.createTime = 0; //Unix时间戳
                _this.paymentTime = 0; //Unix时间戳 (收到第三方支付系统成功支付的回调的时间)
                _this.handleCount = 0; //处理次数
                return _this;
            }
            return OrderData;
        }(ShardDBObject));
        SS.OrderData = OrderData;
        var Notice = /** @class */ (function () {
            function Notice() {
                this.title = ""; //标题
                this.content = ""; //内容
                this.messageDetailUrl = "";
                this.itemList = null; //奖励列表
            }
            return Notice;
        }());
        SS.Notice = Notice;
        var MailDesc = /** @class */ (function () {
            function MailDesc() {
                this.title = ""; //标题
                this.content = ""; //内容
                this.itemList = null; //奖励列表
                this.createTime = 0; //创建时间
                this.IsRewardGot = false;
                this.isNew = false; //是否是新邮件
            }
            return MailDesc;
        }());
        SS.MailDesc = MailDesc;
        var ItemData = /** @class */ (function (_super) {
            __extends(ItemData, _super);
            function ItemData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.itemId = 0; //对应的策划表id
                _this.amount = 0; //物品的数量
                _this.createTime = 0; //创建(获得)时间
                return _this;
            }
            return ItemData;
        }(ShardDBObject));
        SS.ItemData = ItemData;
        var StorySuitData = /** @class */ (function (_super) {
            __extends(StorySuitData, _super);
            function StorySuitData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.storySuitId = 0; //剧本套id
                _this.progress = 0; // 进度
                _this.status = 0; //状态
                return _this;
            }
            return StorySuitData;
        }(ShardDBObject));
        SS.StorySuitData = StorySuitData;
        var StoryData = /** @class */ (function (_super) {
            __extends(StoryData, _super);
            function StoryData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.storyId = 0; //剧本id
                _this.storyProgressInfo = null; //每个剧本所要达成的目标列表
                _this.status = 0; //状态
                _this.progress = 0; // 进度
                _this.maxScore = 0; //最高票房
                _this.shootLastTime = 0; //上次拍摄时间
                return _this;
            }
            return StoryData;
        }(ShardDBObject));
        SS.StoryData = StoryData;
        var StoryProgress = /** @class */ (function () {
            function StoryProgress() {
                this.id = 0; //  1拍摄剧本 2媒体评分 3票房大卖以上
                this.progress = 0; // 进度
                this.status = 0; //是否完成
            }
            return StoryProgress;
        }());
        SS.StoryProgress = StoryProgress;
        var Assets = /** @class */ (function () {
            function Assets() {
                this.giveType = 0; //赠送的类型
                this.giveLevel = 0; //赠送的等级
                this.giveItemList = null; //赠送的物品
            }
            return Assets;
        }());
        SS.Assets = Assets;
        var shootInfo = /** @class */ (function () {
            function shootInfo() {
                this.type = 0; //拍摄类型
                this.proficiencyExp = 0; //熟练经验
                this.proficiencyLevel = 0; //熟练等级
            }
            return shootInfo;
        }());
        SS.shootInfo = shootInfo;
        var skillTriggerCondition = /** @class */ (function () {
            function skillTriggerCondition() {
                this.type = 0; //触发条件类型
                this.value = 0; //触发条件数值
            }
            return skillTriggerCondition;
        }());
        SS.skillTriggerCondition = skillTriggerCondition;
        var skillInfo = /** @class */ (function () {
            function skillInfo() {
                this.skillId = 0; //技能ID
                this.isEffect = false; //是否生效
                this.triggerCondition = null; //触发技能的条件,多个条件，有一个满足就生效
            }
            return skillInfo;
        }());
        SS.skillInfo = skillInfo;
        var ActorData = /** @class */ (function (_super) {
            __extends(ActorData, _super);
            function ActorData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.actorId = 0; //艺人id
                _this.name = ""; //艺人名字
                _this.hide = false; //是否雪藏
                _this.level = 0; //等级
                _this.payCheck = 0; //片酬
                _this.stamina = 0; //体力
                _this.staminaLimit = 0; //体力上限
                _this.LoyaltyExp = 0; //忠诚度经验
                _this.LoyaltyLevel = 0; //忠诚度等级
                _this.cultivateCount = 0; //培养次数
                _this.cultivateCountLimit = 0; //培养次数上限
                _this.giveAssetsCount = 0; //赠送资产次数
                _this.giveAssetsCountLimit = 0; //赠送资产次数上限
                _this.giveAssetsList = null; //赠送资产列表
                _this.skillExp = 0; //技能经验
                _this.skillList = null; //技能信息列表
                _this.shootTypeList = null; //拍摄类型熟练度
                _this.spectacle = 0; //场面属性
                _this.perform = 0; //表演属性
                _this.plot = 0; //剧情属性
                _this.art = 0; //艺术属性
                _this.entertainment = 0; //娱乐属性
                return _this;
            }
            return ActorData;
        }(ShardDBObject));
        SS.ActorData = ActorData;
        var GameOrderData = /** @class */ (function (_super) {
            __extends(GameOrderData, _super);
            function GameOrderData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.orderId = 0; //订单id
                _this.itemList = null; //订单需求
                _this.rewards = null; //订单奖励
                _this.endTime = 0; //订单过期时间
                return _this;
            }
            return GameOrderData;
        }(ShardDBObject));
        SS.GameOrderData = GameOrderData;
        var CityData = /** @class */ (function (_super) {
            __extends(CityData, _super);
            function CityData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.lastCity = 0; //最后一个城市
                _this.headquarters = 0; //总部城市
                _this.ambassador = null; //形象大使
                _this.maxGold = 0; //金币上限
                _this.maxFans = 0; //粉丝上限
                _this.speedGold = 0; //金币掉落速度
                _this.speedFans = 0; //粉丝掉落速度
                _this.lastGold = 0; //上次更新掉落的金币
                _this.lastFans = 0; //上次更新掉落的粉丝
                _this.lastDropTimestamp = 0; //上次更新掉落的时间戳
                _this.lastTime = 0; //上次结算时间
                _this.dropList = null; //掉落列表
                _this.lastArea = 0; //当前宣传的地区
                _this.lastAreaProgress = 0; //当前宣传进度
                _this.propagandaActor = 0; //宣传大使
                _this.roadShowFlag = false; //路演成功标记    
                return _this;
            }
            return CityData;
        }(ShardDBObject));
        SS.CityData = CityData;
        var skillEffectInfo = /** @class */ (function () {
            function skillEffectInfo() {
                this.actId = 0; //技能ID
                this.value = 0.0; //增加的数值%
            }
            return skillEffectInfo;
        }());
        SS.skillEffectInfo = skillEffectInfo;
        var ActorSkillEffect = /** @class */ (function (_super) {
            __extends(ActorSkillEffect, _super);
            function ActorSkillEffect() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.getGoldSpeed = 0.0; //获得金币速度
                _this.productionEarnings = 0.0; //生产线收益
                _this.actorPaycheck = null; //演员片酬
                _this.boxOfficeEarnings = null; //收益票房
                _this.cityGetGoldTime = 0.0; //城市获取金币时间
                _this.upgradeGoldCost = null; //升级金币消耗
                _this.shootTotalAttrIncrease = null; //拍摄时全属性增加
                return _this;
            }
            return ActorSkillEffect;
        }(ShardDBObject));
        SS.ActorSkillEffect = ActorSkillEffect;
        var TempData = /** @class */ (function (_super) {
            __extends(TempData, _super);
            function TempData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.lastResetTime = 0; //上次重置时间
                return _this;
            }
            return TempData;
        }(ShardDBObject));
        SS.TempData = TempData;
        var MovieData = /** @class */ (function (_super) {
            __extends(MovieData, _super);
            function MovieData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.movieId = 0; //电影id
                _this.name = ""; //电影名字
                _this.state = 0; //当前状态
                _this.data = null; //艺人选择 / 剧本选择
                _this.movieCost = null; //电影成本
                _this.expected = null; //市场期待
                _this.battleData = null; //战斗过程
                _this.type = 0; //拍摄类型
                _this.mediaVisit = null; //媒体访问
                _this.mExpected = 0; //期待值
                _this.mediaCommend = 0; //平均媒体评价
                _this.mediaCommendArr = null; //媒体评价
                _this.praise = 0; //媒体评价获得的点赞数
                _this.premiereBoxOffice = 0; //首映票房
                _this.extBoxOffice = 0; //额外票房
                _this.publicPraise = 0; //观众口碑
                _this.runDays = null; //上映天数
                _this.totalBoxOffice = 0; //总票房
                _this.totalMovieCost = 0; //总成本
                _this.evaluationCon = 0; //评价系数
                _this.attribute = null; // 依次对应5种属性结果, 场面, 表演, 剧情, 艺术, 娱乐
                _this.maxAttribute = null; // 5种属性最大值, 场面, 表演, 剧情, 艺术, 娱乐
                _this.avrAttribute = null; // 5种属性平均值, 场面, 表演, 剧情, 艺术, 娱乐
                _this.dropCount = 0; //随机次数
                _this.extendCity = 0; //推广城市id
                _this.attentionValue = 0; //推广关注度
                _this.dropItemList = null; //掉落物品
                _this.contineTransceiver = 0; //持续收益
                _this.startTime = 0; //线下推广开始时间戳
                _this.lastTime = 0; //上次切换城市的时间
                return _this;
            }
            return MovieData;
        }(ShardDBObject));
        SS.MovieData = MovieData;
        var BattleData = /** @class */ (function () {
            function BattleData() {
                this.actorId = 0; //艺人id
                this.propertyId = 0; //属性id
                this.value = 0; //属性值
            }
            return BattleData;
        }());
        SS.BattleData = BattleData;
        var CityGainsInfo = /** @class */ (function () {
            function CityGainsInfo() {
                this.itemId = 0; //物品ID
                this.speed = 0;
                this.limit = 0; //上限
                this.baseNum = 0; //基础值
            }
            return CityGainsInfo;
        }());
        SS.CityGainsInfo = CityGainsInfo;
        var MediaVisitDesc = /** @class */ (function () {
            function MediaVisitDesc() {
                this.mediaId = 0; //媒体id
                this.level = 0; // 媒体等级
                this.bAccept = false; //是否接受
            }
            return MediaVisitDesc;
        }());
        SS.MediaVisitDesc = MediaVisitDesc;
    })(SS = Proto.SS || (Proto.SS = {}));
})(Proto || (Proto = {}));
//# sourceMappingURL=SharedStruct.js.map