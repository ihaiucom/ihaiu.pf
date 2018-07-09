var Games;
(function (Games) {
    //======================
    // 游戏时间 数据
    //----------------------
    var GameTimeData = /** @class */ (function () {
        function GameTimeData() {
            // 本地， 登录时间， unix时间戳 毫秒
            this._localLoginTime = new Date().getTime();
            // 服务器， 登录时间， unix时间戳 毫秒
            this._serverLoginTime = new Date().getTime();
        }
        Object.defineProperty(GameTimeData.prototype, "localTime", {
            // 	本地，当前时间， unix时间戳 毫秒
            get: function () {
                return new Date().getTime();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "localLoginTime", {
            get: function () {
                return this._localLoginTime;
            },
            set: function (value) {
                this._localLoginTime = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "localGameTime", {
            // 本地 游戏时间， unix时间戳 毫秒
            get: function () {
                return this.localTime - this.localLoginTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "serverLoginTime", {
            get: function () {
                return this._serverLoginTime;
            },
            set: function (value) {
                this._serverLoginTime = value;
                this.localLoginTime = this.localTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "serverSeconds", {
            // 	服务器，当前时间， unix时间戳 秒
            get: function () {
                return this.serverMilliseconds / 1000;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "serverMilliseconds", {
            // 	服务器，当前时间， unix时间戳 毫秒
            get: function () {
                return this.serverLoginTime + this.localGameTime;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 服务器当前时间和之前的一个时间差 秒
         * @param preunix 之前的时间
         */
        GameTimeData.prototype.getSubSecondsPre = function (preunixSeconds) {
            return this.serverSeconds - preunixSeconds;
        };
        /**
         * 服务器当前时间和之后的一个时间差 秒
         * @param afterunix 之后的时间
         */
        GameTimeData.prototype.getSubSecondsAfter = function (afterunixSeconds) {
            return afterunixSeconds - this.serverSeconds;
        };
        /**
         * 服务器当前时间和之前的一个时间差 毫秒
         * @param preunix 之前的时间
         */
        GameTimeData.prototype.getSubMillisecondsPre = function (preunixMilliseconds) {
            return this.serverMilliseconds - preunixMilliseconds;
        };
        /**
         * 服务器当前时间和之后的一个时间差 毫秒
         * @param afterunix 之后的时间
         */
        GameTimeData.prototype.getSubMillisecondsAfter = function (afterunixMilliseconds) {
            return afterunixMilliseconds - this.serverMilliseconds;
        };
        return GameTimeData;
    }());
    Games.GameTimeData = GameTimeData;
})(Games || (Games = {}));
// // 	服务器，当前时间， unix时间戳 秒
// Game.time.serverSeconds;
// // 	服务器，当前时间， unix时间戳 毫秒
// Game.time.serverMilliseconds;
// // 上次操作时间， unix时间戳 秒
// let preOpsTime: number;
// // 服务器当前时间和之前的一个时间差 秒
// let s1 = Game.time.getSubSecondsPre(preOpsTime);
// // 下次操作时间， unix时间戳 秒
// let afterOpsTime: number;
// // 服务器当前时间和之前的一个时间差 秒
// let s2 = Game.time.getSubSecondsAfter(afterOpsTime);
// // 上次操作时间， unix时间戳 毫秒
// let preOpsTime2: number;
// // 服务器当前时间和之前的一个时间差 毫秒
// let ms1 = Game.time.getSubMillisecondsPre(preOpsTime);
// // 下次操作时间， unix时间戳 毫秒
// let afterOpsTime2: number;
// // 服务器当前时间和之后的一个时间差 毫秒
// let ms2 = Game.time.getSubMillisecondsAfter(afterOpsTime);
//# sourceMappingURL=GameTimeData.js.map