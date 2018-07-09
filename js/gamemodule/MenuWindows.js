var Games;
(function (Games) {
    //======================
    // 模块配置
    //----------------------
    var MenuWindows = /** @class */ (function () {
        function MenuWindows() {
        }
        MenuWindows.get = function (menuId) {
            return MenuWindows.dict.getValue(menuId);
        };
        MenuWindows.add = function (menuId, windowClass) {
            // 请在该地方配置menuId对应的 MWindow
            MenuWindows.dict.add(menuId, new Games.ModuleConfig(menuId, windowClass));
        };
        MenuWindows.install = function () {
            MenuWindows.add(Games.MenuId.Login, Games.LoginWindow);
            MenuWindows.add(Games.MenuId.Market, Games.MarketWindow);
            MenuWindows.add(Games.MenuId.Bag, Games.BagWindow);
            MenuWindows.add(Games.MenuId.CreateRole, Games.CreateRoleWindow);
            MenuWindows.add(Games.MenuId.Home, Games.HomeWindow);
            MenuWindows.add(Games.MenuId.ArtistList, Games.ArtistListWindow); //艺人列表
            MenuWindows.add(Games.MenuId.ArtistDetail, Games.ArtistDetailWindow); //艺人详情
            MenuWindows.add(Games.MenuId.ActorDetail, Games.ActorDetailWindow); //艺人介绍
            MenuWindows.add(Games.MenuId.ArtistFrozen, Games.ArtistFrozenWindow); //艺人雪藏
            MenuWindows.add(Games.MenuId.ArtistScoutResult, Games.ArtistScoutResultWindow); //艺人招募结果
            MenuWindows.add(Games.MenuId.ArtistScoutSuccess, Games.ArtistScoutSuccessWindow); //艺人招募成功
            MenuWindows.add(Games.MenuId.ArtistTrain, Games.ArtistTrainWindow); //艺人培训
            MenuWindows.add(Games.MenuId.ArtistTrainResult, Games.ArtistTrainResultWindow); //艺人培训结果
            MenuWindows.add(Games.MenuId.PlayerInfo, Games.PlayerInfoWindow);
            MenuWindows.add(Games.MenuId.War, Games.WarWindow);
        };
        MenuWindows.dict = new Dictionary();
        return MenuWindows;
    }());
    Games.MenuWindows = MenuWindows;
})(Games || (Games = {}));
//# sourceMappingURL=MenuWindows.js.map