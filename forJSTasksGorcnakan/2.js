
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.send = function (message) {
        console.log("Sending EMAIL with message: ".concat(message));
    };
    return EmailNotification;
}());
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.send = function (message) {
        console.log("Sending SMS with message: ".concat(message));
    };
    return SMSNotification;
}());
var PushNotification = /** @class */ (function () {
    function PushNotification() {
    }
    PushNotification.prototype.send = function (message) {
        console.log("Sending PUSH notification with message: ".concat(message));
    };
    return PushNotification;
}());
var SlackNotification = /** @class */ (function () {
    function SlackNotification() {
    }
    SlackNotification.prototype.send = function (message) {
        console.log("Sending SLACK message: ".concat(message));
    };
    return SlackNotification;
}());
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
    }
    NotificationFactory.register = function (type, notificationClass) {
        this.registry[type] = notificationClass;
    };
    NotificationFactory.create = function (type) {
        var NotificationClass = this.registry[type];
        if (!NotificationClass) {
            throw new Error("Notification type \"".concat(type, "\" is not supported."));
        }
        return new NotificationClass();
    };
    NotificationFactory.registry = {
        email: EmailNotification,
        sms: SMSNotification,
        push: PushNotification,
    };
    return NotificationFactory;
}());
var notifier = NotificationFactory.create('email');
notifier.send("Welcome to our platform!");
