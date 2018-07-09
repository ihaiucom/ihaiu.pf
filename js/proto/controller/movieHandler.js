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
    // 消息处理器 -- 账号
    //--------------------
    var movieHandler = /** @class */ (function (_super) {
        __extends(movieHandler, _super);
        function movieHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleMames.movie;
            return _this;
        }
        /**
         * 拍摄请求返回结果
         */
        movieHandler.prototype.MakeFilm = function (msg) {
            Game.moduleModel.warData.handlerMakeFilm();
        };
        /**
         * 修改名称返回结果
         * @param msg
         */
        movieHandler.prototype.SetMovieName = function (msg) {
            Game.moduleModel.warData.handleReName();
        };
        /**
         * 设置艺人返回结果
         */
        movieHandler.prototype.SetActor = function (msg) {
            Game.moduleModel.warData.HandleSetActor(msg);
        };
        /**
         * 确认艺人选择结束回调
         * @param msg
         */
        movieHandler.prototype.ConfirmSetActor = function (msg) {
            Game.moduleModel.warData.HandleConfirmSetActor(msg);
        };
        /**
         * 设置电影类型返回结果
         */
        movieHandler.prototype.ChoseType = function (msg) {
            Game.moduleModel.warData.HandleSetSelectType(msg);
        };
        /**
         * 院线选择结果返回
         * @param msg
         */
        movieHandler.prototype.PublishMovie = function (msg) {
            console.log("--------PublishMovie");
            Game.moduleModel.warData.PublishMovie(msg);
        };
        /**
         * 上映结束请求反馈
         */
        movieHandler.prototype.BattleOver = function (msg) {
            Game.moduleModel.warData.HandlersetBattleOver(msg);
        };
        movieHandler.prototype.AcceptMediaVisit = function (msg) {
            Game.moduleModel.warData.handleAcceptMediaVisit(msg);
        };
        return movieHandler;
    }(Games.ProtoHandler));
    Games.movieHandler = movieHandler;
})(Games || (Games = {}));
//# sourceMappingURL=movieHandler.js.map