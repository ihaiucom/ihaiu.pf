/**
 *  MADE BY GENERATOR AT 2018-7-6 23:23:12,
 *  PLEASE DO NOT REWRITE.
 */
var Proto;
(function (Proto) {
    var API;
    (function (API) {
        var GameData;
        (function (GameData) {
            var InitGameDataRequest = /** @class */ (function () {
                function InitGameDataRequest() {
                    this.name = ""; //公司名字
                    this.sex = 0; //性别
                }
                return InitGameDataRequest;
            }());
            GameData.InitGameDataRequest = InitGameDataRequest;
            var InitGameDataResponse = /** @class */ (function () {
                function InitGameDataResponse() {
                    this.result = 0; //返回 0成功 1失败
                }
                return InitGameDataResponse;
            }());
            GameData.InitGameDataResponse = InitGameDataResponse;
            var GetLoginGameDataRequest = /** @class */ (function () {
                function GetLoginGameDataRequest() {
                    this.channel = ""; //客户端的渠道代码
                }
                return GetLoginGameDataRequest;
            }());
            GameData.GetLoginGameDataRequest = GetLoginGameDataRequest;
            var GetLoginGameDataResponse = /** @class */ (function () {
                function GetLoginGameDataResponse() {
                    this.serverCode = ""; //服务器编号
                    this.serverName = ""; //服务器名称
                    this.noticeList = null;
                }
                return GetLoginGameDataResponse;
            }());
            GameData.GetLoginGameDataResponse = GetLoginGameDataResponse;
            var RefreshDiamondRequest = /** @class */ (function () {
                function RefreshDiamondRequest() {
                }
                return RefreshDiamondRequest;
            }());
            GameData.RefreshDiamondRequest = RefreshDiamondRequest;
            var RefreshDiamondResponse = /** @class */ (function () {
                function RefreshDiamondResponse() {
                    this.diamond = 0;
                }
                return RefreshDiamondResponse;
            }());
            GameData.RefreshDiamondResponse = RefreshDiamondResponse;
            var GetInitGameDataRequest = /** @class */ (function () {
                function GetInitGameDataRequest() {
                    this.nameList = null; //需要获取的类型的string描述 DBOType枚举
                }
                return GetInitGameDataRequest;
            }());
            GameData.GetInitGameDataRequest = GetInitGameDataRequest;
            var GetInitGameDataResponse = /** @class */ (function () {
                function GetInitGameDataResponse() {
                }
                return GetInitGameDataResponse;
            }());
            GameData.GetInitGameDataResponse = GetInitGameDataResponse;
            var RenameGameDataRequest = /** @class */ (function () {
                function RenameGameDataRequest() {
                    this.playerName = ""; //更改后的名字
                }
                return RenameGameDataRequest;
            }());
            GameData.RenameGameDataRequest = RenameGameDataRequest;
            var RenameGameDataResponse = /** @class */ (function () {
                function RenameGameDataResponse() {
                    this.result = 0; //返回 0成功 1失败 2无须更改
                }
                return RenameGameDataResponse;
            }());
            GameData.RenameGameDataResponse = RenameGameDataResponse;
            var RePerSignatureGameDataRequest = /** @class */ (function () {
                function RePerSignatureGameDataRequest() {
                    this.perSignature = ""; //修改玩家的个性签名
                }
                return RePerSignatureGameDataRequest;
            }());
            GameData.RePerSignatureGameDataRequest = RePerSignatureGameDataRequest;
            var RePerSignatureGameDataResponse = /** @class */ (function () {
                function RePerSignatureGameDataResponse() {
                    this.result = 0; //返回 0成功 1失败
                }
                return RePerSignatureGameDataResponse;
            }());
            GameData.RePerSignatureGameDataResponse = RePerSignatureGameDataResponse;
            var RePortraitGameDataRequest = /** @class */ (function () {
                function RePortraitGameDataRequest() {
                    this.type = 0; //0表示穿戴 1表示购买
                    this.portraitId = 0; //头像ID
                }
                return RePortraitGameDataRequest;
            }());
            GameData.RePortraitGameDataRequest = RePortraitGameDataRequest;
            var RePortraitGameDataResponse = /** @class */ (function () {
                function RePortraitGameDataResponse() {
                    this.result = 0; //返回 0成功 1失败 2无须更改
                }
                return RePortraitGameDataResponse;
            }());
            GameData.RePortraitGameDataResponse = RePortraitGameDataResponse;
            var GetGameInfoExtRequest = /** @class */ (function () {
                function GetGameInfoExtRequest() {
                }
                return GetGameInfoExtRequest;
            }());
            GameData.GetGameInfoExtRequest = GetGameInfoExtRequest;
            var GetGameInfoExtResponse = /** @class */ (function () {
                function GetGameInfoExtResponse() {
                }
                return GetGameInfoExtResponse;
            }());
            GameData.GetGameInfoExtResponse = GetGameInfoExtResponse;
        })(GameData = API.GameData || (API.GameData = {}));
        var CinemaBuild;
        (function (CinemaBuild) {
            var ExtendFloorRequest = /** @class */ (function () {
                function ExtendFloorRequest() {
                    this.floor = 0; //楼层数
                }
                return ExtendFloorRequest;
            }());
            CinemaBuild.ExtendFloorRequest = ExtendFloorRequest;
            var ExtendFloorResponse = /** @class */ (function () {
                function ExtendFloorResponse() {
                    this.result = 0; //0,成功，非0，错误码
                    this.floor = 0; //当前扩充的楼层数
                }
                return ExtendFloorResponse;
            }());
            CinemaBuild.ExtendFloorResponse = ExtendFloorResponse;
            var BuildRoomRequest = /** @class */ (function () {
                function BuildRoomRequest() {
                    this.floor = 0; //楼层数
                    this.roomType = 0; //建筑类型
                }
                return BuildRoomRequest;
            }());
            CinemaBuild.BuildRoomRequest = BuildRoomRequest;
            var BuildRoomResponse = /** @class */ (function () {
                function BuildRoomResponse() {
                    this.result = 0; //0,成功，非0，错误码
                    this.floor = 0; //楼层数
                    this.roomId = 0; //建筑id
                }
                return BuildRoomResponse;
            }());
            CinemaBuild.BuildRoomResponse = BuildRoomResponse;
            var UpgradeRoomRequest = /** @class */ (function () {
                function UpgradeRoomRequest() {
                    this.roomId = 0; //建筑id
                }
                return UpgradeRoomRequest;
            }());
            CinemaBuild.UpgradeRoomRequest = UpgradeRoomRequest;
            var UpgradeRoomResponse = /** @class */ (function () {
                function UpgradeRoomResponse() {
                    this.result = 0; //0,成功，非0，错误码
                    this.preRoomId = 0; //升级前的房间id
                    this.roomId = 0; //建筑id
                }
                return UpgradeRoomResponse;
            }());
            CinemaBuild.UpgradeRoomResponse = UpgradeRoomResponse;
        })(CinemaBuild = API.CinemaBuild || (API.CinemaBuild = {}));
        var test;
        (function (test) {
            var AddItemRequest = /** @class */ (function () {
                function AddItemRequest() {
                    this.itemId = 0; //道具id
                    this.amount = 0; //道具数量
                }
                return AddItemRequest;
            }());
            test.AddItemRequest = AddItemRequest;
            var AddItemResponse = /** @class */ (function () {
                function AddItemResponse() {
                }
                return AddItemResponse;
            }());
            test.AddItemResponse = AddItemResponse;
            var AddFansRequest = /** @class */ (function () {
                function AddFansRequest() {
                    this.amount = 0; //粉丝数量
                }
                return AddFansRequest;
            }());
            test.AddFansRequest = AddFansRequest;
            var AddFansResponse = /** @class */ (function () {
                function AddFansResponse() {
                }
                return AddFansResponse;
            }());
            test.AddFansResponse = AddFansResponse;
            var DeleteMovieRequest = /** @class */ (function () {
                function DeleteMovieRequest() {
                    this.uuid = ""; //电影id
                }
                return DeleteMovieRequest;
            }());
            test.DeleteMovieRequest = DeleteMovieRequest;
            var DeleteMovieResponse = /** @class */ (function () {
                function DeleteMovieResponse() {
                }
                return DeleteMovieResponse;
            }());
            test.DeleteMovieResponse = DeleteMovieResponse;
        })(test = API.test || (API.test = {}));
        var item;
        (function (item) {
            var SellOutRequest = /** @class */ (function () {
                function SellOutRequest() {
                    this.uuid = ""; //道具唯一编号
                    this.itemId = 0; //道具id
                    this.amount = 0; //道具数量
                }
                return SellOutRequest;
            }());
            item.SellOutRequest = SellOutRequest;
            var SellOutResponse = /** @class */ (function () {
                function SellOutResponse() {
                    this.uuid = ""; //道具唯一编号
                }
                return SellOutResponse;
            }());
            item.SellOutResponse = SellOutResponse;
            var CompoundRequest = /** @class */ (function () {
                function CompoundRequest() {
                    this.uuid = ""; //道具唯一编号
                    this.itemId = 0; //道具id
                    this.amount = 0; //道具数量
                }
                return CompoundRequest;
            }());
            item.CompoundRequest = CompoundRequest;
            var CompoundResponse = /** @class */ (function () {
                function CompoundResponse() {
                    this.uuid = ""; //道具唯一编号
                }
                return CompoundResponse;
            }());
            item.CompoundResponse = CompoundResponse;
            var SplitRequest = /** @class */ (function () {
                function SplitRequest() {
                    this.uuid = ""; //道具唯一编号
                    this.itemId = 0; //道具id
                    this.amount = 0; //道具数量
                }
                return SplitRequest;
            }());
            item.SplitRequest = SplitRequest;
            var SplitResponse = /** @class */ (function () {
                function SplitResponse() {
                    this.uuid = ""; //道具唯一编号
                }
                return SplitResponse;
            }());
            item.SplitResponse = SplitResponse;
            var UseRequest = /** @class */ (function () {
                function UseRequest() {
                    this.uuid = ""; //道具唯一编号
                    this.itemId = 0; //道具id
                    this.amount = 0; //道具数量
                }
                return UseRequest;
            }());
            item.UseRequest = UseRequest;
            var UseResponse = /** @class */ (function () {
                function UseResponse() {
                    this.uuid = ""; //道具唯一编号
                }
                return UseResponse;
            }());
            item.UseResponse = UseResponse;
            var CompoundActorRequest = /** @class */ (function () {
                function CompoundActorRequest() {
                    this.uuid = ""; //道具唯一编号
                    this.itemId = 0; //道具id
                }
                return CompoundActorRequest;
            }());
            item.CompoundActorRequest = CompoundActorRequest;
            var CompoundActorResponse = /** @class */ (function () {
                function CompoundActorResponse() {
                    this.uuid = ""; //道具唯一编号
                }
                return CompoundActorResponse;
            }());
            item.CompoundActorResponse = CompoundActorResponse;
        })(item = API.item || (API.item = {}));
        var city;
        (function (city) {
            var SetPropagandaActorRequest = /** @class */ (function () {
                function SetPropagandaActorRequest() {
                    this.uuid = ""; //道具唯一编号
                    this.cityId = 0; //城市id
                    this.areaId = 0; //区域id
                    this.actorId = 0; //艺人id
                }
                return SetPropagandaActorRequest;
            }());
            city.SetPropagandaActorRequest = SetPropagandaActorRequest;
            var SetPropagandaActorResponse = /** @class */ (function () {
                function SetPropagandaActorResponse() {
                    this.uuid = ""; //道具唯一编号
                }
                return SetPropagandaActorResponse;
            }());
            city.SetPropagandaActorResponse = SetPropagandaActorResponse;
            var PropagandaRequest = /** @class */ (function () {
                function PropagandaRequest() {
                    this.uuid = ""; //道具唯一编号
                    this.cityId = 0; //城市id
                    this.areaId = 0; //区域id
                }
                return PropagandaRequest;
            }());
            city.PropagandaRequest = PropagandaRequest;
            var PropagandaResponse = /** @class */ (function () {
                function PropagandaResponse() {
                    this.uuid = ""; //道具唯一编号
                }
                return PropagandaResponse;
            }());
            city.PropagandaResponse = PropagandaResponse;
            var RoadshowRequest = /** @class */ (function () {
                function RoadshowRequest() {
                    this.uuid = ""; //道具唯一编号
                    this.cityId = 0; //城市id
                    this.areaId = 0; //区域id
                }
                return RoadshowRequest;
            }());
            city.RoadshowRequest = RoadshowRequest;
            var RoadshowResponse = /** @class */ (function () {
                function RoadshowResponse() {
                    this.uuid = ""; //道具唯一编号
                    this.result = 0; // 0成功 1失败
                }
                return RoadshowResponse;
            }());
            city.RoadshowResponse = RoadshowResponse;
            var SetAmbassadorRequest = /** @class */ (function () {
                function SetAmbassadorRequest() {
                    this.uuid = ""; //道具唯一编号
                    this.cityId = 0; //城市id
                    this.psition = 0; //位置1,2,3,4....
                    this.actuuid = ""; //艺人唯一ID
                }
                return SetAmbassadorRequest;
            }());
            city.SetAmbassadorRequest = SetAmbassadorRequest;
            var SetAmbassadorResponse = /** @class */ (function () {
                function SetAmbassadorResponse() {
                    this.uuid = ""; //道具唯一编号
                }
                return SetAmbassadorResponse;
            }());
            city.SetAmbassadorResponse = SetAmbassadorResponse;
            var GetRewardRequest = /** @class */ (function () {
                function GetRewardRequest() {
                    this.uuid = ""; //唯一编号
                    this.cityId = 0; //城市id
                }
                return GetRewardRequest;
            }());
            city.GetRewardRequest = GetRewardRequest;
            var GetRewardResponse = /** @class */ (function () {
                function GetRewardResponse() {
                    this.uuid = ""; //唯一编号
                }
                return GetRewardResponse;
            }());
            city.GetRewardResponse = GetRewardResponse;
            var HoldCityRequest = /** @class */ (function () {
                function HoldCityRequest() {
                    this.uuid = ""; //道具唯一编号
                }
                return HoldCityRequest;
            }());
            city.HoldCityRequest = HoldCityRequest;
            var HoldCityResponse = /** @class */ (function () {
                function HoldCityResponse() {
                    this.uuid = ""; //道具唯一编号
                }
                return HoldCityResponse;
            }());
            city.HoldCityResponse = HoldCityResponse;
        })(city = API.city || (API.city = {}));
        var movie;
        (function (movie) {
            var MakeFilmRequest = /** @class */ (function () {
                function MakeFilmRequest() {
                    this.uuid = ""; //唯一编号
                }
                return MakeFilmRequest;
            }());
            movie.MakeFilmRequest = MakeFilmRequest;
            var MakeFilmResponse = /** @class */ (function () {
                function MakeFilmResponse() {
                    this.uuid = ""; //唯一编号
                }
                return MakeFilmResponse;
            }());
            movie.MakeFilmResponse = MakeFilmResponse;
            var SetMovieNameRequest = /** @class */ (function () {
                function SetMovieNameRequest() {
                    this.uuid = ""; //电影唯一编号
                    this.index = 0; //选择的电影下标, 从0开始
                    this.name = ""; //名字
                }
                return SetMovieNameRequest;
            }());
            movie.SetMovieNameRequest = SetMovieNameRequest;
            var SetMovieNameResponse = /** @class */ (function () {
                function SetMovieNameResponse() {
                    this.uuid = ""; //电影唯一编号
                }
                return SetMovieNameResponse;
            }());
            movie.SetMovieNameResponse = SetMovieNameResponse;
            var SetActorRequest = /** @class */ (function () {
                function SetActorRequest() {
                    this.uuid = ""; //电影唯一编号
                    this.index = 0; //选择的电影下标, 从0开始
                    this.actorId = 0; //艺人id
                }
                return SetActorRequest;
            }());
            movie.SetActorRequest = SetActorRequest;
            var SetActorResponse = /** @class */ (function () {
                function SetActorResponse() {
                    this.uuid = ""; //电影唯一编号
                }
                return SetActorResponse;
            }());
            movie.SetActorResponse = SetActorResponse;
            var ConfirmSetActorRequest = /** @class */ (function () {
                function ConfirmSetActorRequest() {
                    this.uuid = ""; //电影唯一编号
                }
                return ConfirmSetActorRequest;
            }());
            movie.ConfirmSetActorRequest = ConfirmSetActorRequest;
            var ConfirmSetActorResponse = /** @class */ (function () {
                function ConfirmSetActorResponse() {
                    this.uuid = ""; //电影唯一编号
                }
                return ConfirmSetActorResponse;
            }());
            movie.ConfirmSetActorResponse = ConfirmSetActorResponse;
            var ChoseTypeRequest = /** @class */ (function () {
                function ChoseTypeRequest() {
                    this.uuid = ""; //电影唯一编号
                    this.type = 0; //电影类型
                }
                return ChoseTypeRequest;
            }());
            movie.ChoseTypeRequest = ChoseTypeRequest;
            var ChoseTypeResponse = /** @class */ (function () {
                function ChoseTypeResponse() {
                    this.uuid = ""; //电影唯一编号
                    this.storyShootType = 0; //类型契合度
                }
                return ChoseTypeResponse;
            }());
            movie.ChoseTypeResponse = ChoseTypeResponse;
            var AcceptMediaVisitRequest = /** @class */ (function () {
                function AcceptMediaVisitRequest() {
                    this.uuid = ""; //电影唯一编号
                    this.mediaId = 0; //媒体id
                }
                return AcceptMediaVisitRequest;
            }());
            movie.AcceptMediaVisitRequest = AcceptMediaVisitRequest;
            var AcceptMediaVisitResponse = /** @class */ (function () {
                function AcceptMediaVisitResponse() {
                    this.uuid = ""; //电影唯一编号
                    this.addExpection = 0;
                }
                return AcceptMediaVisitResponse;
            }());
            movie.AcceptMediaVisitResponse = AcceptMediaVisitResponse;
            var PublishMovieRequest = /** @class */ (function () {
                function PublishMovieRequest() {
                    this.uuid = ""; //电影唯一编号
                    this.theaterId = 0; //院线id
                }
                return PublishMovieRequest;
            }());
            movie.PublishMovieRequest = PublishMovieRequest;
            var PublishMovieResponse = /** @class */ (function () {
                function PublishMovieResponse() {
                    this.uuid = ""; //电影唯一编号
                }
                return PublishMovieResponse;
            }());
            movie.PublishMovieResponse = PublishMovieResponse;
            var BattleOverRequest = /** @class */ (function () {
                function BattleOverRequest() {
                    this.uuid = ""; //电影唯一编号
                }
                return BattleOverRequest;
            }());
            movie.BattleOverRequest = BattleOverRequest;
            var BattleOverResponse = /** @class */ (function () {
                function BattleOverResponse() {
                    this.uuid = ""; //电影唯一编号
                    this.dropout = null; //掉落
                }
                return BattleOverResponse;
            }());
            movie.BattleOverResponse = BattleOverResponse;
            var SpreadMovieRequest = /** @class */ (function () {
                function SpreadMovieRequest() {
                    this.uuid = ""; //电影唯一编号
                }
                return SpreadMovieRequest;
            }());
            movie.SpreadMovieRequest = SpreadMovieRequest;
            var SpreadMovieResponse = /** @class */ (function () {
                function SpreadMovieResponse() {
                    this.uuid = ""; //电影唯一编号
                }
                return SpreadMovieResponse;
            }());
            movie.SpreadMovieResponse = SpreadMovieResponse;
            var GetRewardMovieRequest = /** @class */ (function () {
                function GetRewardMovieRequest() {
                    this.uuid = ""; //电影唯一编号
                }
                return GetRewardMovieRequest;
            }());
            movie.GetRewardMovieRequest = GetRewardMovieRequest;
            var GetRewardMovieResponse = /** @class */ (function () {
                function GetRewardMovieResponse() {
                    this.uuid = ""; //电影唯一编号
                }
                return GetRewardMovieResponse;
            }());
            movie.GetRewardMovieResponse = GetRewardMovieResponse;
            var SwitchCityRequest = /** @class */ (function () {
                function SwitchCityRequest() {
                    this.uuid = ""; //电影唯一编号
                    this.cityId = 0; //城市ID
                }
                return SwitchCityRequest;
            }());
            movie.SwitchCityRequest = SwitchCityRequest;
            var SwitchCityResponse = /** @class */ (function () {
                function SwitchCityResponse() {
                    this.uuid = ""; //电影唯一编号
                }
                return SwitchCityResponse;
            }());
            movie.SwitchCityResponse = SwitchCityResponse;
        })(movie = API.movie || (API.movie = {}));
        var Actor;
        (function (Actor) {
            var NoseInfoActorRequest = /** @class */ (function () {
                function NoseInfoActorRequest() {
                    this.isUseCard = false; //是否使用星探卡，强制查探
                }
                return NoseInfoActorRequest;
            }());
            Actor.NoseInfoActorRequest = NoseInfoActorRequest;
            var NoseInfoActorResponse = /** @class */ (function () {
                function NoseInfoActorResponse() {
                    this.result = 0; //0,成功，非0，错误码
                }
                return NoseInfoActorResponse;
            }());
            Actor.NoseInfoActorResponse = NoseInfoActorResponse;
            var RecruitActorRequest = /** @class */ (function () {
                function RecruitActorRequest() {
                    this.actorId = 0; //艺人ID
                }
                return RecruitActorRequest;
            }());
            Actor.RecruitActorRequest = RecruitActorRequest;
            var RecruitActorResponse = /** @class */ (function () {
                function RecruitActorResponse() {
                    this.result = 0; //0,成功，非0，错误码
                    this.actorId = 0; //艺人ID
                    this.isNewActor = false; //是否新加艺人
                }
                return RecruitActorResponse;
            }());
            Actor.RecruitActorResponse = RecruitActorResponse;
            var HideActorRequest = /** @class */ (function () {
                function HideActorRequest() {
                    this.actorId = 0; //艺人ID
                    this.isHide = false; //是否雪藏艺人，true雪藏，false取消雪藏
                }
                return HideActorRequest;
            }());
            Actor.HideActorRequest = HideActorRequest;
            var HideActorResponse = /** @class */ (function () {
                function HideActorResponse() {
                    this.result = 0; //0,成功，非0，错误码
                }
                return HideActorResponse;
            }());
            Actor.HideActorResponse = HideActorResponse;
            var AddActorSlotRequest = /** @class */ (function () {
                function AddActorSlotRequest() {
                }
                return AddActorSlotRequest;
            }());
            Actor.AddActorSlotRequest = AddActorSlotRequest;
            var AddActorSlotResponse = /** @class */ (function () {
                function AddActorSlotResponse() {
                    this.result = 0; //0,成功，非0，错误码
                }
                return AddActorSlotResponse;
            }());
            Actor.AddActorSlotResponse = AddActorSlotResponse;
            var UpgradeActorRequest = /** @class */ (function () {
                function UpgradeActorRequest() {
                    this.actorId = 0; //艺人ID
                }
                return UpgradeActorRequest;
            }());
            Actor.UpgradeActorRequest = UpgradeActorRequest;
            var UpgradeActorResponse = /** @class */ (function () {
                function UpgradeActorResponse() {
                    this.result = 0; //0,成功，非0，错误码
                }
                return UpgradeActorResponse;
            }());
            Actor.UpgradeActorResponse = UpgradeActorResponse;
            var GiveActorAssetsRequest = /** @class */ (function () {
                function GiveActorAssetsRequest() {
                    this.actorId = 0; //艺人ID
                    this.giveType = 0; //赠送类型
                    this.giveLevel = 0; //赠送等级
                    this.giveNum = 0; //赠送数量
                }
                return GiveActorAssetsRequest;
            }());
            Actor.GiveActorAssetsRequest = GiveActorAssetsRequest;
            var GiveActorAssetsResponse = /** @class */ (function () {
                function GiveActorAssetsResponse() {
                    this.result = 0; //0,成功，非0，错误码
                }
                return GiveActorAssetsResponse;
            }());
            Actor.GiveActorAssetsResponse = GiveActorAssetsResponse;
            var UpgradeActorSkillRequest = /** @class */ (function () {
                function UpgradeActorSkillRequest() {
                    this.actorId = 0; //艺人ID
                    this.skillId = 0; //技能ID
                }
                return UpgradeActorSkillRequest;
            }());
            Actor.UpgradeActorSkillRequest = UpgradeActorSkillRequest;
            var UpgradeActorSkillResponse = /** @class */ (function () {
                function UpgradeActorSkillResponse() {
                    this.result = 0; //0,成功，非0，错误码
                }
                return UpgradeActorSkillResponse;
            }());
            Actor.UpgradeActorSkillResponse = UpgradeActorSkillResponse;
            var ActorTrainRequest = /** @class */ (function () {
                function ActorTrainRequest() {
                    this.actorId = 0; //艺人ID
                    this.trainType = 0; //培养类型
                    this.useDiamond = false; //使用钻石
                }
                return ActorTrainRequest;
            }());
            Actor.ActorTrainRequest = ActorTrainRequest;
            var ActorTrainResponse = /** @class */ (function () {
                function ActorTrainResponse() {
                    this.result = 0; //0,成功，非0，错误码
                }
                return ActorTrainResponse;
            }());
            Actor.ActorTrainResponse = ActorTrainResponse;
            var ActorChangeNameRequest = /** @class */ (function () {
                function ActorChangeNameRequest() {
                    this.actorId = 0; //艺人ID
                    this.name = ""; //艺人名字
                }
                return ActorChangeNameRequest;
            }());
            Actor.ActorChangeNameRequest = ActorChangeNameRequest;
            var ActorChangeNameResponse = /** @class */ (function () {
                function ActorChangeNameResponse() {
                    this.result = 0; //0,成功，非0，错误码
                }
                return ActorChangeNameResponse;
            }());
            Actor.ActorChangeNameResponse = ActorChangeNameResponse;
        })(Actor = API.Actor || (API.Actor = {}));
        var story;
        (function (story) {
            var findStoryRequest = /** @class */ (function () {
                function findStoryRequest() {
                }
                return findStoryRequest;
            }());
            story.findStoryRequest = findStoryRequest;
            var findStoryResponse = /** @class */ (function () {
                function findStoryResponse() {
                    this.type = 0; //搜罗类型 1剧本 2物品
                    this.id = 0; //物品ID 剧本ID
                    this.num = 0; //数量
                    this.time = 0; //已经搜罗次数
                    this.refreshTime = 0; //上次免费搜罗时间
                }
                return findStoryResponse;
            }());
            story.findStoryResponse = findStoryResponse;
            var cleanFindStoryRequest = /** @class */ (function () {
                function cleanFindStoryRequest() {
                }
                return cleanFindStoryRequest;
            }());
            story.cleanFindStoryRequest = cleanFindStoryRequest;
            var cleanFindStoryResponse = /** @class */ (function () {
                function cleanFindStoryResponse() {
                    this.result = 0; //0 成功 1 失败 
                    this.refreshTime = 0; //上次免费搜罗时间
                }
                return cleanFindStoryResponse;
            }());
            story.cleanFindStoryResponse = cleanFindStoryResponse;
            var getRewardRequest = /** @class */ (function () {
                function getRewardRequest() {
                    this.storySuitId = 0; //剧本组ID
                }
                return getRewardRequest;
            }());
            story.getRewardRequest = getRewardRequest;
            var getRewardResponse = /** @class */ (function () {
                function getRewardResponse() {
                    this.result = 0; //0 成功 1 失败
                }
                return getRewardResponse;
            }());
            story.getRewardResponse = getRewardResponse;
        })(story = API.story || (API.story = {}));
        var account;
        (function (account) {
            var authRequest = /** @class */ (function () {
                function authRequest() {
                    this.account = "";
                }
                return authRequest;
            }());
            account.authRequest = authRequest;
            var authResponse = /** @class */ (function () {
                function authResponse() {
                    this.account = "";
                    this.token = "";
                }
                return authResponse;
            }());
            account.authResponse = authResponse;
            var loginRequest = /** @class */ (function () {
                function loginRequest() {
                    this.account = "";
                    this.token = "";
                }
                return loginRequest;
            }());
            account.loginRequest = loginRequest;
            var loginResponse = /** @class */ (function () {
                function loginResponse() {
                    this.jwt = "";
                    this.userId = 0;
                    this.timestamp = 0;
                }
                return loginResponse;
            }());
            account.loginResponse = loginResponse;
            var refreshTokenRequest = /** @class */ (function () {
                function refreshTokenRequest() {
                }
                return refreshTokenRequest;
            }());
            account.refreshTokenRequest = refreshTokenRequest;
            var refreshTokenResponse = /** @class */ (function () {
                function refreshTokenResponse() {
                    this.jwt = "";
                }
                return refreshTokenResponse;
            }());
            account.refreshTokenResponse = refreshTokenResponse;
        })(account = API.account || (API.account = {}));
    })(API = Proto.API || (Proto.API = {}));
})(Proto || (Proto = {}));
//# sourceMappingURL=API.js.map