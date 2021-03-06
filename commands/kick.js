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
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
exports.default = {
    category: 'Moderation',
    description: 'Kicks a user',
    requireRoles: true,
    slash: true,
    minArgs: 2,
    expectedArgs: '<user> <reason>',
    expectedArgsTypes: ['USER', 'STRING'],
    callback: function (_a) {
        var message = _a.message, interaction = _a.interaction, args = _a.args;
        return __awaiter(void 0, void 0, void 0, function () {
            var target, noTagEmbed, CannotKickEmbed, reason, noReasonEmbed, DMembed, KickEmbed;
            return __generator(this, function (_b) {
                target = interaction.options.getMember('user');
                console.log(target.nickname);
                if (!target) {
                    noTagEmbed = new discord_js_1.MessageEmbed()
                        .setTitle("**No user provided**")
                        .setDescription("Please tag the user you are trying to kick.")
                        .setFooter("Cereza Moderation")
                        .setColor("RED");
                    return [2 /*return*/, noTagEmbed];
                }
                if (!target.kickable) {
                    CannotKickEmbed = new discord_js_1.MessageEmbed()
                        .setTitle("**Unable to kick**")
                        .setDescription("You can't kick this user.")
                        .setFooter("Cereza Moderation")
                        .setColor("RED");
                    return [2 /*return*/, CannotKickEmbed];
                }
                args.shift();
                reason = args.join(' ');
                if (!reason) {
                    noReasonEmbed = new discord_js_1.MessageEmbed()
                        .setTitle("**No reason provided**")
                        .setDescription("You can't kick this user without a valid reason.")
                        .setFooter("Cereza Moderation")
                        .setColor("RED");
                    return [2 /*return*/, noReasonEmbed];
                }
                DMembed = new discord_js_1.MessageEmbed()
                    .setTitle("**Cereza Moderation**")
                    .setDescription("You have been kicked from Cereza for " + reason + ". \n \n Moderator: " + interaction.user.username)
                    .setFooter("Cereza Moderation")
                    .setColor("ORANGE");
                /* try{
                    await target.send({embeds: [DMembed]})
             
                 }catch(error){
                     console.log(error)
             
                 }*/
                target.kick(reason);
                KickEmbed = new discord_js_1.MessageEmbed()
                    .setTitle("**Kicked Succesfully**")
                    .setDescription(target.user.username + " had been kicked. \n \n **Reason: ** " + reason + " \n **Moderator:** " + interaction.user.username)
                    .setFooter("Cereza Moderation")
                    .setColor("PURPLE");
                return [2 /*return*/, KickEmbed];
            });
        });
    },
};
