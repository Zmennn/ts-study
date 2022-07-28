"use strict";
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
var root = document.getElementById('root');
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    return Cat;
}());
var kitty = new Cat('Svifsick');
if (root) {
    root.innerHTML = 'Lora\'s kat name is ' + kitty.name;
}
var array = [111, 222, 333];
var _loop_1 = function (index) {
    setTimeout(function () { return console.log(array[index]); }, 500);
};
for (var index = 0; index < array.length; index++) {
    _loop_1(index);
}
var numbers = [25, 69, 87, 45];
var res = numbers.filter(function (val) { val == 69; });
var LifeParts;
(function (LifeParts) {
    LifeParts[LifeParts["slipping"] = 0] = "slipping";
    LifeParts["eating"] = "Eating";
    LifeParts["codding"] = "Codding";
    LifeParts[LifeParts["doNothing"] = 4] = "doNothing";
})(LifeParts || (LifeParts = {}));
var stage = {
    type: LifeParts.codding
};
var product = {
    // id: 'string',
    id: 5,
    sku: 'add string',
    name: 'name string',
    price: 4,
    description: 444
};
var typedProduct = product;
var typedProduct2 = product;
var prodDescription = product.description;
var prodDescription2 = product.description;
var newProduct = {
    id: 'string',
    sku: 'string',
    name: 'string',
    price: 25,
    description: 555,
    color: 'string',
    weight: 898
};
var partData = {
    name: 'string',
    price: 25,
};
var textField = document.getElementById('text-field');
var textField2 = document.getElementById('text-field2');
var textField3 = document.getElementById('text-field2');
var User = /** @class */ (function () {
    function User(name, surname, _isAdmin) {
        if (_isAdmin === void 0) { _isAdmin = false; }
        this.name = name;
        this.surname = surname;
        this._isAdmin = _isAdmin;
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () { return this.name + ' ' + this.surname; },
        set: function (fullName) {
            var _a;
            _a = fullName.split(' '), this.name = _a[0], this.surname = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    User.prototype.isUserAdmin = function (isAdmin) {
        this._isAdmin = isAdmin;
        if (this._isAdmin) {
            return 'Hi admin ' + this.name + ' ' + this.surname + User.addName;
        }
        return 'Hi user ' + this.name + ' ' + this.surname;
    };
    User.addName = 'Her';
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isAdmin = true;
        return _this;
    }
    return Admin;
}(User));
var max = new User('Vasya', 'Pupkin');
var admin = new Admin('Vasya', 'Pupkin');
console.log(admin);
// console.log(max.name + ' ' + max.surname);
if (textField) {
    textField.innerText = max.fullName;
}
max.fullName = 'Lora Avdeenco';
if (textField2) {
    textField2.innerText = max.fullName;
}
if (textField3) {
    textField3.innerText = max.isUserAdmin(true);
}
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
        this.data = 3;
    }
    ConsoleLogger.prototype.info = function (message) {
        console.log(message);
    };
    ConsoleLogger.prototype.warning = function (message) {
        console.log(message);
    };
    ConsoleLogger.prototype.critical = function (message) {
        console.log(message);
    };
    return ConsoleLogger;
}());
var DateConsoleLogger = /** @class */ (function (_super) {
    __extends(DateConsoleLogger, _super);
    function DateConsoleLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateConsoleLogger.prototype.getDateMessage = function (message) {
        return (new Date()).toLocaleString() + ': ' + message;
    };
    DateConsoleLogger.prototype.info = function (message) {
        _super.prototype.info.call(this, this.getDateMessage(message));
    };
    DateConsoleLogger.prototype.warning = function (message) {
        _super.prototype.warning.call(this, this.getDateMessage(message));
    };
    DateConsoleLogger.prototype.critical = function (message) {
        _super.prototype.critical.call(this, this.getDateMessage(message));
    };
    return DateConsoleLogger;
}(ConsoleLogger));
var BaseLogger = /** @class */ (function () {
    function BaseLogger() {
        this.level = 1;
        this.data = 5;
    }
    BaseLogger.prototype.info = function (message) {
        if (this.level <= 1) {
            this.log(message);
        }
    };
    BaseLogger.prototype.warning = function (message) {
        if (this.level <= 2) {
            this.log(message);
        }
    };
    BaseLogger.prototype.critical = function (message) {
        if (this.level <= 3) {
            this.log(message);
        }
    };
    return BaseLogger;
}());
var ConsoleLogger2 = /** @class */ (function (_super) {
    __extends(ConsoleLogger2, _super);
    function ConsoleLogger2(level) {
        var _this = _super.call(this) || this;
        _this.level = level;
        return _this;
    }
    ConsoleLogger2.prototype.log = function (message) {
        console.log(message);
    };
    return ConsoleLogger2;
}(BaseLogger));
var DateConsoleLogger2 = /** @class */ (function (_super) {
    __extends(DateConsoleLogger2, _super);
    function DateConsoleLogger2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateConsoleLogger2.prototype.getDateMessage = function (message) {
        return (new Date()).toLocaleString() + ': ' + message;
    };
    DateConsoleLogger2.prototype.log = function (message) {
        _super.prototype.log.call(this, this.getDateMessage(message));
    };
    return DateConsoleLogger2;
}(ConsoleLogger2));
var Job = /** @class */ (function () {
    function Job(logger) {
        this.logger = logger;
    }
    // constructor(private baseLogger:BaseLogger){}
    Job.prototype.run = function () {
        try {
            this.logger.info("i started work");
            this.logger.warning("i have warning");
            this.logger.critical('i have error');
            this.logger.info(this.logger.data.toString());
            this.logger.info('i finished work');
        }
        catch (error) {
            this.logger.critical('i have error' + error);
        }
    };
    return Job;
}());
// const job = new Job(new ConsoleLogger())
// const job = new Job(new DateConsoleLogger())
// const job = new Job(new DateConsoleLogger2(1))
var job = new Job(new ConsoleLogger2(2));
job.run();
