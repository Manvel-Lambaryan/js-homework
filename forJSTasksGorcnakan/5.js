var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Alert = /** @class */ (function () {
    function Alert() {
    }
    Alert.prototype.send = function (message) {
        throw new Error("This method must be implemented by concrete classes.");
    };
    return Alert;
}());
var EmailAlert = /** @class */ (function (_super) {
    __extends(EmailAlert, _super);
    function EmailAlert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailAlert.prototype.send = function (message) {
        console.log("Email Alert: ".concat(message));
    };
    return EmailAlert;
}(Alert));
var SMSAlert = /** @class */ (function (_super) {
    __extends(SMSAlert, _super);
    function SMSAlert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSAlert.prototype.send = function (message) {
        console.log("SMS Alert: ".concat(message));
    };
    return SMSAlert;
}(Alert));
var SlackAlert = /** @class */ (function (_super) {
    __extends(SlackAlert, _super);
    function SlackAlert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlackAlert.prototype.send = function (message) {
        console.log("Slack Alert: ".concat(message));
    };
    return SlackAlert;
}(Alert));
var ServerMonitor = /** @class */ (function () {
    function ServerMonitor(alertHandler) {
        this.alertHandler = alertHandler;
    }
    ServerMonitor.prototype.checkServer = function () {
        var isServerDown = Math.random() < 0.5;
        if (isServerDown) {
            this.alertHandler.send("Server is down!");
        }
        else {
            console.log("Server is running smoothly.");
        }
    };
    return ServerMonitor;
}());
var emailMonitor = new ServerMonitor(new EmailAlert());
emailMonitor.checkServer();
var smsMonitor = new ServerMonitor(new SMSAlert());
smsMonitor.checkServer();
var slackMonitor = new ServerMonitor(new SlackAlert());
slackMonitor.checkServer();
