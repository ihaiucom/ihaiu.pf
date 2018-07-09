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
    //====================
    // 消息发送器 -- 账号
    //--------------------
    var movieSender = /** @class */ (function (_super) {
        __extends(movieSender, _super);
        function movieSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleMames.movie;
            return _this;
        }
        // 添加门票
        // onAddItem(id: number, val: number): void
        // {
        //     let items = new Proto.API.test.AddItemRequest();
        //     items.itemId = id;
        //     items.amount = val;
        //     this.sendByCommand(items, "test/AddItem");
        // }
        // onAddActor(id: number, name: string): void
        // {
        //     let items = new Proto.API.test.AddActorRequest();
        //     items.actorId = id;
        //     items.name = name;
        //     this.sendByCommand(items, "test/AddActor");
        // }
        // onAddFans(): void
        // {
        //     let items = new Proto.API.test.AddFansRequest();
        //     items.amount = 10;
        // }
        /**
         * 发送拍摄请求
         */
        movieSender.prototype.MakeFilm = function () {
            var reqData = new Proto.API.movie.MakeFilmRequest();
            this.sendByCommand(reqData, "movie/MakeFilm");
        };
        /**
         * 修改剧本名称
         * @param newName
         */
        movieSender.prototype.SetMovieName = function (newName) {
            var reqData = new Proto.API.movie.SetMovieNameRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            reqData.index = Game.moduleModel.warData.filmIndexOf;
            reqData.name = newName;
            this.sendByCommand(reqData, "movie/SetMovieName");
        };
        /**
         * 设置当前电影的艺人
         * @param index 艺人在第几个位置
         * @param actorId 艺人id
         */
        movieSender.prototype.SetActor = function (index, actorId) {
            var reqData = new Proto.API.movie.SetActorRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            reqData.index = index;
            reqData.actorId = actorId;
            this.sendByCommand(reqData, "movie/SetActor");
        };
        /**
         * 确认艺人选择全部结束
         */
        movieSender.prototype.ConfirmSetActor = function () {
            var reqData = new Proto.API.movie.ConfirmSetActorRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            this.sendByCommand(reqData, "movie/ConfirmSetActor");
        };
        /**
         * 电影类型选择
         * @param type
         */
        movieSender.prototype.ChoseType = function (type) {
            var reqData = new Proto.API.movie.ChoseTypeRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            reqData.type = type;
            this.sendByCommand(reqData, "movie/ChoseType");
        };
        /**
         * 院线选择请求
         */
        movieSender.prototype.PublishMovie = function (theaterId) {
            var reqData = new Proto.API.movie.PublishMovieRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            reqData.theaterId = theaterId;
            this.sendByCommand(reqData, "movie/PublishMovie");
        };
        /**
         * 上映结束，准备进入持续收益阶段
         */
        movieSender.prototype.BattleOver = function () {
            var reqData = new Proto.API.movie.BattleOverRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            // reqData.theaterId = Game.moduleModel.warData.theaterId;
            this.sendByCommand(reqData, "movie/BattleOver");
        };
        /**
         * 请求通告
         * @param mediaId
         */
        movieSender.prototype.AcceptMediaVisit = function (mediaId) {
            var reqData = new Proto.API.movie.AcceptMediaVisitRequest();
            reqData.uuid = Game.moduleModel.warData.moveData.uuid;
            reqData.mediaId = mediaId;
            this.sendByCommand(reqData, "movie/AcceptMediaVisit");
        };
        return movieSender;
    }(Games.ProtoSender));
    Games.movieSender = movieSender;
})(Games || (Games = {}));
//# sourceMappingURL=movieSender.js.map