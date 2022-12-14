
const root = document.getElementById('root');



class Cat{
    name;
    constructor(name:string) {
        this.name = name;
    }
}

const kitty = new Cat('Svifsick');

if (root) {
    root.innerHTML = 'Lora\'s kat name is ' + kitty.name;
}



let array=[111,222,333]
for (let index = 0; index < array.length; index++) {
    setTimeout(()=>console.log(array[index]),500)    
}

let numbers: Array<number> = [25, 69, 87, 45]

let res = numbers.filter((val) => { val == 69 })

enum LifeParts {
    slipping = 0,
    eating = 'Eating',
    codding = 'Codding',
    doNothing = 4

}

const stage: { type: LifeParts } = {
    type:LifeParts.codding
}

// console.log(stage);

type TypedProduct={
    id: string,
    sku: string,
    name: string,
    price: number,
    description:any
}

type NumberString = number | string

type Product={
    id: number | string,
    sku: string,
    name: string,
    price: number,
    description:any
}

let product: Product = {
    // id: 'string',
    id:5,
    sku: 'add string',
    name: 'name string',
    price: 4,
    description:444
}

const typedProduct: TypedProduct = <TypedProduct>product;
const typedProduct2: TypedProduct = product as TypedProduct;

let prodDescription = <string>product.description
let prodDescription2 = product.description as string;



type AdditionalAttributes = {
    color: string,
    weight: number
}

type AdvancedProduct = TypedProduct & AdditionalAttributes

const newProduct: AdvancedProduct = {
     id: 'string',
    sku: 'string',
    name: 'string',
    price:25,
    description: 555,
    color: 'string',
    weight: 898
}

const partData: Partial<AdvancedProduct> = {
    name: 'string',
    price:25,
}

const textField = document.getElementById('text-field')  
const textField2 = document.getElementById('text-field2')
const textField3=document.getElementById('text-field2')



class User{

    static addName = 'Her';

    get fullName() { return this.name + ' ' + this.surname };

    set fullName(fullName: string) { [this.name, this.surname] = fullName.split(' ') };

    constructor(private name: string, private surname: string, protected _isAdmin: boolean = false) { }
    
    

    isUserAdmin(isAdmin: boolean): string {
        this._isAdmin=isAdmin
        if (this._isAdmin) {
        return 'Hi admin '+this.name + ' ' + this.surname+User.addName
        }
        return 'Hi user '+this.name + ' ' + this.surname
    }

}

class Admin extends User{
    protected _isAdmin: boolean = true
    
}

const max = new User('Vasya','Pupkin')
const admin = new Admin('Vasya','Pupkin')
console.log(admin);
// console.log(max.name + ' ' + max.surname);



if (textField) {
    textField.innerText=max.fullName
}

max.fullName='Lora Avdeenco'

if (textField2) {
    textField2.innerText=max.fullName
}

if (textField3) {
    textField3.innerText=max.isUserAdmin(true)
}




interface Logger{
    info(message: string): void,
    warning(message: string): void,
    critical(message: string): void,
    data:number
}




class ConsoleLogger implements Logger{
    info(message: string) {
        console.log(message);
    }
    warning(message: string): void {
        console.log(message)
    }
    critical(message: string): void {
         console.log(message)
    }
    data: number=3;
}

class DateConsoleLogger extends ConsoleLogger {

    getDateMessage(message: string):string {
   return (new Date()).toLocaleString()+': '+message
}

    info(message: string): void {
        super.info( this.getDateMessage(message))
    }
    warning(message: string): void {
        super.warning( this.getDateMessage(message))
    }
    critical(message: string): void {
        super.critical( this.getDateMessage(message))
    }

}




abstract class BaseLogger implements Logger{
 protected level=1
data=5
    
    info(message: string): void {
        if (this.level <= 1) {
            this.log(message);
        }   
    }

    warning(message: string): void {
        if (this.level <= 2) {
            this.log(message);
        }  
    }

    critical(message: string): void {
        if (this.level <= 3) {
            this.log(message);
        }     
    }

   protected abstract  log(message:string):void
}


class ConsoleLogger2 extends BaseLogger{
     
    constructor(level:number) {
        super();
        this.level=level
    }

   protected log(message: string) {      
                console.log(message);
                 
}
}


class DateConsoleLogger2 extends ConsoleLogger2 {

    getDateMessage(message: string):string {
   return (new Date()).toLocaleString()+': '+message
}

     log(message: string): void{
      super.log( this.getDateMessage(message));    
  }

}






class Job{

    constructor(private logger: Logger) { }
    // constructor(private baseLogger:BaseLogger){}
    

    run():void {
         try {
             this.logger.info("i started work");
             this.logger.warning ("i have warning");
            
             this.logger.critical('i have error');
             this.logger.info(this.logger.data.toString());

             this.logger.info('i finished work');



    } catch (error) {
        this.logger.critical('i have error'+error);
    }
    } 
}



// const job = new Job(new ConsoleLogger())
// const job = new Job(new DateConsoleLogger())

// const job = new Job(new DateConsoleLogger2(1))
// const job = new Job(new ConsoleLogger2(2))

// job.run()



function getId<T,H>(id:T,addText:H):void {
    // if (typeof (id) === 'number') {
    //   return  id.toString()+addText
    // } else if (typeof (id) === 'string') {
    //     return id+addText
    // }
    // return 'her'

    console.log(id,addText);
}

console.log(getId<string,string>('rtt','rty'));
console.log(getId<number, number>(444, 456));


class Customer<T, B>{
    constructor(private id: T, private info: B) { }
    
    getId(): T{
        return this.id
    }
    getInfo(): B{
        return this.info
    }

}

const customer = new Customer<number, string>(345, 'think:mouth')

interface IModel{
    id:number
}

class Collection<T extends IModel> {
    constructor(private items: T[]) { }
    
    find(id: number): T | undefined{
        const first = this.items.find((model) => model.id === id);
        // return first?first:null
        return first
    }
}

const collection1 = new Collection<{test:string,id:number}>([
    {
        id: 34,
        test: 'rty',
        
    },
    {
        id: 35,
        test:'xnty'
    },
    {
        id: 37, 
        test:"world"
    }
])

const collection = new Collection([
    {
        id: 34,
        test: 'rty',
        tttt:"dfdf"
    },
    {
        id: 35,
        test:'xnty'
    },
    {
        id: 37, 
        test:"world"
    }
])

console.log(collection.find(35), "35");
console.log(collection.find(88),"88");