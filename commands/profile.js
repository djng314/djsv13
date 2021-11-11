"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var noblox_js_1 = __importDefault(require("noblox.js"));
var account_1 = __importDefault(require("../models/account"));
var cash_1 = __importDefault(require("../models/cash"));
var gamebans_1 = __importDefault(require("../models/gamebans"));
var discord_js_1 = require("discord.js");
exports.default = {
    category: 'Utility',
    description: "Return with the user's profile",
    slash: false,
    expectedArgs: '<target>',
    minArgs: 0,
    maxArgs: 1,
    callback: function (_a) {
        var message = _a.message, args = _a.args, interaction = _a.interaction;
        return __awaiter(void 0, void 0, void 0, function () {
            var target, data1, username, rank, avatar, embed, cashdata, bandata, embed1, embed2, bandata, embed1, embed2, embedNodata, target;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!message) return [3 /*break*/, 11];
                        target = (_b = message.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
                        if (!!target) return [3 /*break*/, 11];
                        return [4 /*yield*/, account_1.default.findOne({ DiscordID: "" + message.author.id })];
                    case 1:
                        data1 = _c.sent();
                        if (!data1) return [3 /*break*/, 10];
                        return [4 /*yield*/, noblox_js_1.default.getUsernameFromId(data1.RobloxUserID)];
                    case 2:
                        username = _c.sent();
                        return [4 /*yield*/, noblox_js_1.default.getRankNameInGroup(5206353, Number(data1.RobloxUserID))];
                    case 3:
                        rank = _c.sent();
                        return [4 /*yield*/, noblox_js_1.default.getPlayerThumbnail(Number(data1.RobloxUserID), "100x100")];
                    case 4:
                        avatar = _c.sent();
                        embed = new discord_js_1.MessageEmbed();
                        return [4 /*yield*/, cash_1.default.findOne({ RobloxUserID: "" + Number(data1.RobloxUserID) })];
                    case 5:
                        cashdata = _c.sent();
                        if (!cashdata) return [3 /*break*/, 7];
                        return [4 /*yield*/, gamebans_1.default.findOne({ RobloxUserID: "" + Number(data1.RobloxUserID) })];
                    case 6:
                        bandata = _c.sent();
                        if (bandata) {
                            embed1 = new discord_js_1.MessageEmbed()
                                .setTitle("__Profile__")
                                .setDescription("Here's your profile. \n \n **Username:** " + username + " \n **User ID: **" + data1.RobloxUserID + " \n **Rank: **" + rank + " \n **Cash: **" + cashdata.Cash + " \n \n __**Ban Information**__\n **Status: ** Banned \n **Reason: **" + bandata.Reason + "\n**Moderator: **" + bandata.Moderator)
                                .setFooter("Cereza Profile")
                                .setThumbnail("" + avatar[0].imageUrl)
                                .setColor("BLUE");
                            message.reply({ embeds: [embed1] });
                        }
                        else {
                            embed2 = new discord_js_1.MessageEmbed()
                                .setTitle("__Profile__")
                                .setDescription("Here's your profile. \n \n **Username:** " + username + " \n **User ID: **" + data1.RobloxUserID + " \n **Rank: **" + rank + " \n **Cash: **" + cashdata.Cash + " \n \n __**Ban Information**__\n **Status: ** No ban data found.")
                                .setFooter("Cereza Profile")
                                .setThumbnail("" + avatar[0].imageUrl)
                                .setColor("BLUE");
                            message.reply({ embeds: [embed2] });
                        }
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, gamebans_1.default.findOne({ RobloxUserID: "" + Number(data1.RobloxUserID) })];
                    case 8:
                        bandata = _c.sent();
                        if (bandata) {
                            embed1 = new discord_js_1.MessageEmbed()
                                .setTitle("__Profile__")
                                .setDescription("Here's your profile. \n \n **Username:** " + username + " \n **User ID: **" + data1.RobloxUserID + " \n **Rank: **" + rank + " \n **Cash: ** 0 \n \n __**Ban Information**__\n **Status: ** Banned \n **Reason: **" + bandata.Reason + "\n**Moderator: **" + bandata.Moderator)
                                .setFooter("Cereza Profile")
                                .setThumbnail("" + avatar[0].imageUrl)
                                .setColor("BLUE");
                            message.reply({ embeds: [embed1] });
                        }
                        else {
                            embed2 = new discord_js_1.MessageEmbed()
                                .setTitle("__Profile__")
                                .setDescription("Here's your profile. \n \n **Username:** " + username + " \n **User ID: **" + data1.RobloxUserID + " \n **Rank: **" + rank + " \n **Cash: ** 0 \n \n __**Ban Information**__\n **Status: ** No ban data found.")
                                .setFooter("Cereza Profile")
                                .setThumbnail("" + avatar[0].imageUrl)
                                .setColor("BLUE");
                            message.reply({ embeds: [embed2] });
                        }
                        _c.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        embedNodata = new discord_js_1.MessageEmbed()
                            .setTitle("__No Data Found__")
                            .setDescription("\n Please ensure that you are verified.")
                            .setFooter("Cereza Profile")
                            .setColor("RED");
                        message.reply({ embeds: [embedNodata] });
                        _c.label = 11;
                    case 11:
                        if (interaction) {
                            target = interaction.options.getMember('target');
                            interaction.reply(interaction.user.username + " testing");
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
};