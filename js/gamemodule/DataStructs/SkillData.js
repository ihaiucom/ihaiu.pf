var Games;
(function (Games) {
    var SkillData = /** @class */ (function () {
        function SkillData() {
        }
        /**
         *
         * @param id 设置id
         */
        SkillData.prototype.setId = function (id) {
            this.id = id;
            this.config = Game.config.skill.getConfig(id);
        };
        return SkillData;
    }());
    Games.SkillData = SkillData;
})(Games || (Games = {}));
//# sourceMappingURL=SkillData.js.map