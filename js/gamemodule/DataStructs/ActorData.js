var Games;
(function (Games) {
    var ActorData = /** @class */ (function () {
        function ActorData() {
            /**场面 */
            this.spectacle = 0;
            /**表演 */
            this.perform = 0;
            /**剧情 */
            this.plot = 0;
            /**艺术 */
            this.art = 0;
            /**娱乐 */
            this.entertainment = 0;
            /**人气值 */
            this.popularValue = 0;
        }
        /**
         *设置id
         * @param value id数据
         */
        ActorData.prototype.setId = function (value) {
            this.id = value;
            this.config = Game.config.actor.getConfig(value);
            this.props = [];
            if (this.config.spectacle > 0) {
                this.props.push(1601);
            }
            if (this.config.perform > 0) {
                this.props.push(1602);
            }
            if (this.config.plot > 0) {
                this.props.push(1603);
            }
            if (this.config.art > 0) {
                this.props.push(1604);
            }
            if (this.config.entertainment > 0) {
                this.props.push(1605);
            }
        };
        /**
         * 设置等级
         * @param value 等级
         */
        ActorData.prototype.setLevel = function (value) {
            this.level = value;
            this.levelConfig = Game.config.actorLevel.getConfigByIdLv(this.id, value);
        };
        Object.defineProperty(ActorData.prototype, "star", {
            /**
             * 获取的是星星数量
             */
            get: function () {
                return this.config.starNum;
            },
            enumerable: true,
            configurable: true
        });
        //四种属性
        ActorData.prototype.getProps = function () {
            return this.props;
        };
        //技能数据
        ActorData.prototype.setSkills = function () {
            if (this.skills == null) {
                this.skills = new Array();
            }
        };
        //资产数据
        ActorData.prototype.setAssets = function () {
            if (this.assets == null) {
                this.assets = new Array();
            }
            for (var index = 0; index < Games.ActorModel.assetLenth; index++) {
                //
                var data;
                if (index < this.assets.length) {
                    data = this.assets[index];
                }
                else {
                    data = new Games.AssetData();
                    data.actorId = this.id;
                    data.type = index + 1;
                }
                data.update(this.giveAssetsList[index]);
                this.assets.push(data);
            }
        };
        //获取当前等级上限
        ActorData.prototype.getMaxLv = function () {
            return Game.config.actorLoyalty.getConfigByIdLv(this.id, this.loyaltyLevel).max_lv;
        };
        //等级是否达到最大
        ActorData.prototype.isMaxLv = function () {
            var lv = this.loyaltyLevel + 1;
            var loyConfig = Game.config.actorLoyalty.getConfigByIdLv(this.id, lv);
            var isMax = true;
            if (loyConfig) {
                isMax = false;
            }
            return isMax;
        };
        //获取下一等级提升的忠诚度
        ActorData.prototype.getNextLvUpLoyaltyLv = function () {
            var lv = this.loyaltyLevel;
            var curMaxLv = this.getMaxLv();
            while (true) {
                lv = lv + 1;
                var loyConfig = Game.config.actorLoyalty.getConfigByIdLv(this.id, lv);
                if (loyConfig) {
                    if (loyConfig.max_lv > curMaxLv) {
                        break;
                    }
                }
                else {
                    break;
                }
            }
            return lv;
        };
        //获取下一等级提升的最大等级
        ActorData.prototype.getNextLvUpLv = function () {
            var lv = this.loyaltyLevel;
            var curMaxLv = this.getMaxLv();
            var nextMaxLv;
            while (true) {
                lv = lv + 1;
                var loyConfig = Game.config.actorLoyalty.getConfigByIdLv(this.id, lv);
                if (loyConfig) {
                    if (loyConfig.max_lv > curMaxLv) {
                        nextMaxLv = loyConfig.max_lv;
                        break;
                    }
                }
                else {
                    break;
                }
            }
            return nextMaxLv;
        };
        return ActorData;
    }());
    Games.ActorData = ActorData;
})(Games || (Games = {}));
//# sourceMappingURL=ActorData.js.map