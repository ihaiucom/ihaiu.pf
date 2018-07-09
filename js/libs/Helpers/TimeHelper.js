var Games;
(function (Games) {
    var TimeHelper = /** @class */ (function () {
        function TimeHelper() {
        }
        /**
         * 返回格式 00:00:00
         * @param time 秒
         */
        TimeHelper.TimeFormat = function (time) {
            var str = "";
            var hours = Math.floor(time / 3600);
            var minutes = Math.floor((time % 3600) / 60);
            var seconds = Math.floor(time % 60);
            str += hours < 10 ? "0" + hours : hours;
            str += ":" + (minutes < 10 ? "0" + minutes : minutes);
            str += ":" + (seconds < 10 ? "0" + seconds : seconds);
            return str;
        };
        /**
         * 返回格式 x小时x分x秒
         * @param time 秒
         */
        TimeHelper.TimeFormat2 = function (time) {
            var str = "";
            var hours = Math.floor(time / 3600);
            var minutes = Math.floor((time % 3600) / 60);
            var seconds = Math.floor(time % 60);
            if (hours > 0)
                str += hours + Games.TEXT.Hour;
            str += minutes + Games.TEXT.Minute;
            str += seconds + Games.TEXT.Second;
            return str;
        };
        return TimeHelper;
    }());
    Games.TimeHelper = TimeHelper;
})(Games || (Games = {}));
//# sourceMappingURL=TimeHelper.js.map