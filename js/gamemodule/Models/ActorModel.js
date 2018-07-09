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
var Games;
(function (Games) {
    var ActorModel = /** @class */ (function (_super) {
        __extends(ActorModel, _super);
        function ActorModel() {
            var _this = _super.call(this) || this;
            /** 更新演员信息 */
            _this.sUpdateActorInfo = new TypedSignal();
            /** 添加演员 */
            _this.sAddActorList = new TypedSignal();
            _this.artistList = new Array();
            _this.frozenList = new Array();
            _this.artistMap = new Dictionary();
            return _this;
        }
        ActorModel.prototype.setup = function () {
            clearTimeout(this.resetTimeOut);
            clearTimeout(this.leaveTimeOut);
            var nowTimes = getTimeStamp();
            //探查时间CD
            var otherTime = GlobalConfig.getValue(GlobalKey.KEY_1002) + GlobalConfig.getValue(GlobalKey.KEY_1003) * (User.info.noseIntoNum - 1);
            var resetTimes = User.info.noseIntoTime + otherTime * 60;
            this.resetTimes = 0;
            if (resetTimes > nowTimes) {
                this.resetTimes = resetTimes - nowTimes;
                this.resetTimeOut = setTimeout(function () {
                    User.sGameInfoUpdate.dispatch();
                }, this.resetTimes * 1000);
            }
            //艺人离开时间
            var leaveTimes = User.info.noseIntoActorEffectTime;
            if (leaveTimes > nowTimes) {
                this.leaveTimes = leaveTimes - nowTimes;
                this.leaveTimeOut = setTimeout(function () {
                    User.info.noseIntoActorList.splice(0, User.info.noseIntoActorList.length);
                    User.sGameInfoUpdate.dispatch();
                }, this.leaveTimes * 1000);
            }
        };
        /**
         * 排序
         */
        ActorModel.prototype.sortArtist = function () {
            this.artistList.sort(this.descActor);
        };
        //降序排列
        ActorModel.prototype.descActor = function (b, a) {
            var result = a.star - b.star;
            if (result == 0) {
                result = a.level - b.level;
                if (result == 0) {
                    result = a.id - b.id;
                }
            }
            return result;
        };
        //是否含有该演员
        ActorModel.prototype.hasActor = function (id) {
            var b = this.artistMap.hasKey(id);
            return b;
        };
        //获取指定演员
        ActorModel.prototype.getActor = function (id) {
            return this.artistMap.getValue(id);
        };
        //获取所有
        ActorModel.prototype.getActors = function () {
            return this.artistList;
        };
        /**
         * 获取雪藏艺人
         */
        ActorModel.prototype.getHideActors = function () {
            return this.frozenList;
        };
        //获取雪藏艺人数量
        ActorModel.prototype.getHideActorLen = function () {
            return this.frozenList.length;
        };
        //获取使用艺人数量
        ActorModel.prototype.getActorLen = function () {
            return this.artistList.length;
        };
        //获取所有艺人数量
        ActorModel.prototype.getAllActorLen = function () {
            return this.getActorLen() + this.getHideActorLen();
        };
        Object.defineProperty(ActorModel.prototype, "actorIsMax", {
            /**
             * 艺人是否到最大数
             */
            get: function () {
                return User.info.maxActor <= this.artistList.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "actorHideIsMax", {
            /**
             * 获取是否雪藏到最大数
             */
            get: function () {
                return User.info.maxHideActor <= this.addToFrozen.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 添加到艺人收藏列表中
         * @param id 艺人id
         */
        ActorModel.prototype.addToFrozen = function (id) {
            var data = this.artistMap.getValue(id);
            if (this.frozenList.indexOf(data) < 0) {
                this.frozenList.push(data);
            }
            this.removeFromArtistList(id);
        };
        /**
         * 从列表中删除
         * @param id 艺人id
         */
        ActorModel.prototype.removeFromArtistList = function (id) {
            var data = this.artistMap.getValue(id);
            var index = this.artistList.indexOf(data);
            if (index >= 0) {
                this.artistList.splice(index, 1);
            }
        };
        /**
         * 从雪藏列表中删除
         * @param id 艺人id
         */
        ActorModel.prototype.removeFromFrozenList = function (id) {
            var data = this.artistMap.getValue(id);
            var index = this.frozenList.indexOf(data);
            if (index >= 0) {
                this.frozenList.splice(index, 1);
            }
        };
        /**
         * 根据服务器传的信息解析
         * @param msg 数据
         */
        ActorModel.prototype.addActorData = function (msg) {
            var data = this.getActor(msg.actorId);
            if (data == null) {
                data = new Games.ActorData();
            }
            data.uuid = msg.uuid;
            data.art = msg.art;
            data.hide = msg.hide;
            data.payCheck = msg.payCheck;
            data.stamina = msg.stamina; //体力
            data.staminaLimit = msg.staminaLimit; //体力上限
            data.loyaltyExp = msg.LoyaltyExp; //忠诚度经验
            data.loyaltyLevel = msg.LoyaltyLevel; //忠诚度等级
            data.cultivateCount = msg.cultivateCount; //培养次数
            data.cultivateCountLimit = msg.cultivateCountLimit; //培养次数上限
            data.giveAssetsCount = msg.giveAssetsCount; //赠送资产次数
            data.giveAssetsCountLimit = msg.giveAssetsCountLimit; //赠送资产次数上限
            data.giveAssetsList = msg.giveAssetsList; //赠送资产列表
            data.skillExp = msg.skillExp; //技能经验
            data.skillList = msg.skillList; //技能信息列表
            data.shootTypeList = msg.shootTypeList; //拍摄类型熟练度
            data.spectacle = msg.spectacle; //场面属性
            data.perform = msg.perform; //表演属性
            data.plot = msg.plot; //剧情属性
            data.art = msg.art; //艺术属性
            data.entertainment = msg.entertainment; //娱乐属性
            data.setId(msg.actorId);
            data.setLevel(msg.level);
            data.setSkills(); //技能
            data.setAssets(); //设置资产
            this.addActor(msg.actorId, data);
            this.sortArtist();
            if (isNullOrEmpty(msg.name)) {
                data.name = data.config.name;
            }
            else {
                data.name = msg.name;
            }
            return data;
        };
        /**
         * 添加艺人数据
         * @param id 艺人id
         * @param data
         */
        ActorModel.prototype.addActor = function (id, data) {
            this.artistMap.add(id, data);
            if (data.hide) {
                this.addToFrozen(id);
            }
            else {
                this.addToArist(id);
            }
        };
        /**
         *添加正在使用的列表中
         * @param id
         */
        ActorModel.prototype.addToArist = function (id) {
            var data = this.artistMap.getValue(id);
            if (this.artistList.indexOf(data) < 0) {
                this.artistList.push(data);
            }
            this.removeFromFrozenList(id);
        };
        /**
         * 移除艺人
         * @param id 艺人
         */
        ActorModel.prototype.removeActor = function (id) {
            var actor = this.getActor(id);
            if (actor) {
                this.artistMap.remove(id);
            }
            //从使用的列表中删除
            this.removeFromArtistList(id);
            //从雪藏列表中删除
            this.removeFromFrozenList(id);
        };
        Object.defineProperty(ActorModel.prototype, "isCanNoseActor", {
            /**
             * 是否可以使用星探卡
             */
            get: function () {
                var isRed = false;
                if (User.info.noseIntoTime > 0) {
                    //有探查时间CD
                    var otherTime = GlobalConfig.getValue(GlobalKey.KEY_1002) + GlobalConfig.getValue(GlobalKey.KEY_1003) * (User.info.noseIntoNum - 1);
                    var resetTimes = User.info.noseIntoTime + otherTime * 60;
                    var nowTimes = getTimeStamp();
                    if (resetTimes <= nowTimes && this.actorIsMax == false && this.isMaxNose == false) {
                        //cd
                        isRed = true;
                    }
                }
                else {
                    //没有cd 
                    if (this.isMaxNose == false && this.actorIsMax == false) {
                        isRed = true;
                    }
                }
                return isRed;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "isMaxNose", {
            //返回是否最大探查次数了 true 最大
            get: function () {
                return User.info.noseIntoNum >= GlobalConfig.getValue(GlobalKey.KEY_1004);
            },
            enumerable: true,
            configurable: true
        });
        //资产类型数量
        ActorModel.assetLenth = 0;
        return ActorModel;
    }(Games.MModel));
    Games.ActorModel = ActorModel;
})(Games || (Games = {}));
//# sourceMappingURL=ActorModel.js.map