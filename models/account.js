"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = new mongoose_1.default.Schema({
    RobloxUserID: String,
    DiscordID: String,
    Donator: Boolean
});
module.exports = mongoose_1.default.model("Account", Schema);
