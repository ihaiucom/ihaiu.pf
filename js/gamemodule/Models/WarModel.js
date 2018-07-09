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
    //======================
    // 战斗 数据模型
    //----------------------
    var WarModel = /** @class */ (function (_super) {
        __extends(WarModel, _super);
        function WarModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 通告引起的电影期待值
            _this.filmExpectations = new Dictionary();
            // 当前玩家选择的剧本类型
            _this.curFilmType = -1;
            // 类型契合度
            _this.storyShootType = -1;
            _this.theaterId = -1;
            // 当前电影使用中的艺人字典
            _this._curYRList = new Dictionary();
            // 协议接受数据
            // ========================================
            // 服务器传来的拍摄列表
            _this.movieDataList = new Array();
            // 用于显示电影详情的配置信息
            _this.filmInfoConfig = null;
            // 剧本列表
            _this.curStoryList = new Array();
            return _this;
        }
        /**
         * 拍摄请求
         */
        WarModel.prototype.MakeFilm = function (windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.MakeFilm();
        };
        /**
         * 拍摄请求返回
         */
        WarModel.prototype.handlerMakeFilm = function () {
            this.windowCallBack();
        };
        // 发送修改剧本名称协议
        WarModel.prototype.SendReName = function (newName, windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.SetMovieName(newName);
        };
        // 修改名称结果返回，进入市场反馈界面
        WarModel.prototype.handleReName = function () {
            this.windowCallBack();
        };
        /**
        * 设置当前电影的艺人
        * @param index 艺人在第几个位置
        * @param actorId 艺人id
        * @param setActorOver 设置艺人结束的回调函数，等待服务器反馈
        */
        WarModel.prototype.sendSetActor = function (index, actorId, windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.SetActor(index, actorId);
        };
        /**
         * 设置艺人返回结果
         */
        WarModel.prototype.HandleSetActor = function (msg) {
            this.windowCallBack();
        };
        // 确认艺人全部选择完毕
        WarModel.prototype.ConfirmSetActor = function (windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.ConfirmSetActor();
        };
        // 确认返回
        WarModel.prototype.HandleConfirmSetActor = function (msg) {
            this.windowCallBack();
        };
        WarModel.prototype.AcceptMediaVisit = function (mediaId, windowCallBack) {
            this.windowCallBack = windowCallBack;
        };
        WarModel.prototype.handleAcceptMediaVisit = function (msg) {
            this.windowCallBack(msg.addExpection);
        };
        WarModel.prototype.setSelectType = function (value, windowCallBack) {
            this.windowCallBack = windowCallBack;
            this.curFilmType = value;
            Game.protosender.movie.ChoseType(value);
        };
        /**
         * 设置艺人返回结果
         */
        WarModel.prototype.HandleSetSelectType = function (msg) {
            this.storyShootType = msg.storyShootType;
            this.windowCallBack();
        };
        /**
         * 向服务器发送院线请求
         * @param index
         */
        WarModel.prototype.setPublishMovie = function (index, windowCallBack) {
            this.windowCallBack = windowCallBack;
            this.theaterId = index;
            Game.protosender.movie.PublishMovie(index);
        };
        /**
         * 院线返回结果
         * @param msg
         */
        WarModel.prototype.PublishMovie = function (msg) {
            this.windowCallBack();
        };
        WarModel.prototype.setBattleOver = function (windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.BattleOver();
        };
        WarModel.prototype.HandlersetBattleOver = function (msg) {
            this.dropList = msg.dropout;
            this.windowCallBack();
        };
        Object.defineProperty(WarModel.prototype, "curYRList", {
            get: function () {
                var actorList = Game.moduleModel.actor.getActors();
                this._curYRList = new Dictionary();
                for (var i = 0; i < this.moveData.data.length; i++) {
                    if (this.moveData.data[i] > 0) {
                        if (this.moveData.data[i] === 9999) {
                            var temActor = new Games.ActorData();
                            temActor.setId(9999);
                            temActor.name = temActor.config.name;
                            this._curYRList.add(i, temActor);
                        }
                        else {
                            for (var j = 0; j < actorList.length; j++) {
                                if (actorList[j].id == this.moveData.data[i]) {
                                    this._curYRList.add(i, actorList[j]);
                                }
                            }
                        }
                    }
                }
                return this._curYRList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WarModel.prototype, "getRealYRList", {
            get: function () {
                var ryList = new Dictionary();
                var allList = this.curYRList;
                var keys = allList.getKeys();
                for (var i = 0; i < keys.length; i++) {
                    var val = allList.getValue(keys[i]);
                    if (val.id != 9999) {
                        ryList.add(ryList.count, val);
                    }
                }
                return ryList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WarModel.prototype, "moveStory", {
            /**
             * 当前选择的剧本配置表信息(合并服务器协议，更新为用户自定义名称)
             */
            get: function () {
                if (this.moveData.movieId > 0) {
                    this._moveStory = Game.config.story.getConfig(this.moveData.movieId);
                    this._moveStory.filmName = this.moveData.name;
                }
                return this._moveStory;
            },
            enumerable: true,
            configurable: true
        });
        WarModel.prototype.getListForFilmYR = function (data) {
            // 艺人列表信息
            var actorList = Game.moduleModel.actor.getActors();
            var resList = new Array();
            for (var i = 0; i < actorList.length; i++) {
                // 性别需求
                if (data.sex === 0 || data.sex === actorList[i].config.sex) {
                    // 国籍需求
                    if (data.country === 0 || data.country === actorList[i].config.country) {
                        // 表演类型需求
                        if (data.show_type === 0 || data.show_type === actorList[i].config.show_type) {
                            // 年龄需求
                            if (data.age_type === 0 || data.age_type === actorList[i].config.age_type) {
                                resList.push(actorList[i]);
                            }
                        }
                    }
                }
            }
            return resList;
        };
        // 配置表数据
        // =========================
        WarModel.prototype.cinemaList = function () {
            return Game.config.cinema.getConfigList();
        };
        Object.defineProperty(WarModel.prototype, "getStoryList", {
            get: function () {
                return this.curStoryList;
            },
            enumerable: true,
            configurable: true
        });
        // 设置当前可选择剧本列表
        WarModel.prototype.setStoryList = function () {
            if (this.moveData.state == EMovieState.chooseScript && this.moveData.data.length > 0) {
                this.curStoryList = new Array();
                for (var i = 0; i < this.moveData.data.length; i++) {
                    var item = Game.config.story.getConfig(this.moveData.data[i]);
                    this.curStoryList.push(item);
                }
            }
        };
        return WarModel;
    }(Games.MModel));
    Games.WarModel = WarModel;
})(Games || (Games = {}));
//# sourceMappingURL=WarModel.js.map