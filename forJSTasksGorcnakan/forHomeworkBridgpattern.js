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
var BlackColor = /** @class */ (function () {
    function BlackColor() {
    }
    BlackColor.prototype.applyModel = function () {
        return "This car is Black";
    };
    return BlackColor;
}());
var WhiteColor = /** @class */ (function () {
    function WhiteColor() {
    }
    WhiteColor.prototype.applyModel = function () {
        return "This car is White";
    };
    return WhiteColor;
}());
var GrayColor = /** @class */ (function () {
    function GrayColor() {
    }
    GrayColor.prototype.applyModel = function () {
        return "This car is Gray";
    };
    return GrayColor;
}());
var IModel = /** @class */ (function () {
    function IModel(car) {
        this.car = car;
    }
    return IModel;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw(car) {
        return _super.call(this, car) || this;
    }
    Bmw.prototype.draw = function () {
        console.log("Bmw --> ".concat(this.car.applyModel()));
    };
    return Bmw;
}(IModel));
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(car) {
        return _super.call(this, car) || this;
    }
    Mercedes.prototype.draw = function () {
        console.log("Mercedes --> ".concat(this.car.applyModel()));
    };
    return Mercedes;
}(IModel));
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(car) {
        return _super.call(this, car) || this;
    }
    Audi.prototype.draw = function () {
        console.log("Audi --> ".concat(this.car.applyModel()));
    };
    return Audi;
}(IModel));
var blackColor = new BlackColor();
var whiteColor = new WhiteColor();
var blackBmw = new Bmw(blackColor);
var whiteAudi = new Audi(whiteColor);
blackBmw.draw();
whiteAudi.draw();
