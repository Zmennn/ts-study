"use strict";
const root = document.getElementById('root');
class Cat {
    constructor(name) {
        this.name = name;
    }
}
const kitty = new Cat('Svifsick');
if (root) {
    root.innerHTML = 'Lora\'s kat name is ' + kitty.name;
}
let array = [111, 222, 333];
for (let index = 0; index < array.length; index++) {
    setTimeout(() => console.log(array[index]), 500);
}
let numbers = [25, 69, 87, 45];
let res = numbers.filter((val) => { val == 69; });
var LifeParts;
(function (LifeParts) {
    LifeParts[LifeParts["slipping"] = 0] = "slipping";
    LifeParts["eating"] = "Eating";
    LifeParts["codding"] = "Codding";
    LifeParts[LifeParts["doNothing"] = 4] = "doNothing";
})(LifeParts || (LifeParts = {}));
const stage = {
    type: LifeParts.codding
};
let product = {
    // id: 'string',
    id: 5,
    sku: 'add string',
    name: 'name string',
    price: 4,
    description: 444
};
const typedProduct = product;
const typedProduct2 = product;
let prodDescription = product.description;
let prodDescription2 = product.description;
const newProduct = {
    id: 'string',
    sku: 'string',
    name: 'string',
    price: 25,
    description: 555,
    color: 'string',
    weight: 898
};
const partData = {
    name: 'string',
    price: 25,
};
const textField = document.getElementById('text-field');
const textField2 = document.getElementById('text-field2');
const textField3 = document.getElementById('text-field2');
class User {
    constructor(name, surname, _isAdmin = false) {
        this.name = name;
        this.surname = surname;
        this._isAdmin = _isAdmin;
    }
    get fullName() { return this.name + ' ' + this.surname; }
    ;
    set fullName(fullName) { [this.name, this.surname] = fullName.split(' '); }
    ;
    isUserAdmin(isAdmin) {
        this._isAdmin = isAdmin;
        if (this._isAdmin) {
            return 'Hi admin ' + this.name + ' ' + this.surname + User.addName;
        }
        return 'Hi user ' + this.name + ' ' + this.surname;
    }
}
User.addName = 'Her';
class Admin extends User {
    constructor() {
        super(...arguments);
        this._isAdmin = true;
    }
}
const max = new User('Vasya', 'Pupkin');
const admin = new Admin('Vasya', 'Pupkin');
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
class ConsoleLogger {
    constructor() {
        this.data = 3;
    }
    info(message) {
        console.log(message);
    }
    warning(message) {
        console.log(message);
    }
    critical(message) {
        console.log(message);
    }
}
class DateConsoleLogger extends ConsoleLogger {
    getDateMessage(message) {
        return (new Date()).toLocaleString() + ': ' + message;
    }
    info(message) {
        super.info(this.getDateMessage(message));
    }
    warning(message) {
        super.warning(this.getDateMessage(message));
    }
    critical(message) {
        super.critical(this.getDateMessage(message));
    }
}
class BaseLogger {
    constructor() {
        this.level = 1;
        this.data = 5;
    }
    info(message) {
        if (this.level <= 1) {
            this.log(message);
        }
    }
    warning(message) {
        if (this.level <= 2) {
            this.log(message);
        }
    }
    critical(message) {
        if (this.level <= 3) {
            this.log(message);
        }
    }
}
class ConsoleLogger2 extends BaseLogger {
    constructor(level) {
        super();
        this.level = level;
    }
    log(message) {
        console.log(message);
    }
}
class DateConsoleLogger2 extends ConsoleLogger2 {
    getDateMessage(message) {
        return (new Date()).toLocaleString() + ': ' + message;
    }
    log(message) {
        super.log(this.getDateMessage(message));
    }
}
class Job {
    constructor(logger) {
        this.logger = logger;
    }
    // constructor(private baseLogger:BaseLogger){}
    run() {
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
    }
}
// const job = new Job(new ConsoleLogger())
// const job = new Job(new DateConsoleLogger())
// const job = new Job(new DateConsoleLogger2(1))
// const job = new Job(new ConsoleLogger2(2))
// job.run()
function getId(id, addText) {
    // if (typeof (id) === 'number') {
    //   return  id.toString()+addText
    // } else if (typeof (id) === 'string') {
    //     return id+addText
    // }
    // return 'her'
    console.log(id, addText);
}
console.log(getId('rtt', 'rty'));
console.log(getId(444, 456));
class Customer {
    constructor(id, info) {
        this.id = id;
        this.info = info;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return this.info;
    }
}
const customer = new Customer(345, 'think:mouth');
class Collection {
    constructor(items) {
        this.items = items;
    }
    find(id) {
        const first = this.items.find((model) => model.id === id);
        // return first?first:null
        return first;
    }
}
const collection1 = new Collection([
    {
        id: 34,
        test: 'rty',
    },
    {
        id: 35,
        test: 'xnty'
    },
    {
        id: 37,
        test: "world"
    }
]);
const collection = new Collection([
    {
        id: 34,
        test: 'rty',
        tttt: "dfdf"
    },
    {
        id: 35,
        test: 'xnty'
    },
    {
        id: 37,
        test: "world"
    }
]);
console.log(collection.find(35), "35");
console.log(collection.find(88), "88");
