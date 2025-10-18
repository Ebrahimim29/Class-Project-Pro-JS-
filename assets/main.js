class Animal{

    //Field
    // type = "animal";

    //Private Field
    #type = "animal";

    //Property
    constructor(name){
        this.name = name;
    }

    //Method
    speak(){
        console.log(`${this.name} makes a sound.`);        
    }
}

const a = new Animal("Generic Animal");
console.log(a);
a.speak();

//Dog Class
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed;
    }
    speak(){
        console.log(`${this.name} barks. It is a ${this.breed}`);        
    }
}

const dog = new Dog("Rex", "German shepherd");
dog.speak();

//Cat Class
class Cat extends Animal{
    constructor(name,color,breed){
        super(name);
        this.color = color;
        this.breed = breed;
    }
    speak(){
        console.log(`${this.name} meows.Its color is ${this.color} and
            its breed is ${this.breed}`);        
    }
}

const cat = new Cat("Whiskers","white","persian");
cat.speak();
console.log(cat);
console.log(cat.type);


const animals = [new Dog("Rex"), new Cat("Kitty"), new Animal("Lion")];

// Polymorphism
animals.forEach(animal => animal.speak());

//-----------Getter/Setter------------
class BankAccount{
    #balance=0;
    // _balance=0;

    //Getter برای گرفتن مقدار موجودی- Get: با صدا زدن پراپرتی ازش استفاده می شود
    get balance(){
        return this.#balance;
    }

    //Setter برای تغییر مقدار موجودی- Set:تونستیم مقدار بالانس رو تغییر بدیم و ازش استفاده کنیم،فقط با صدازدن پراپرتی بالانس
    set balance(amount){
        console.log(amount); 
        if(amount<0){
            console.log("موجودی منفی مجاز نیست❌");            
        }else{
            this.#balance = amount;
            console.log(`موجودی تغییر کرد✅: ${this.#balance}`);            
        }
    }
}

const account = new BankAccount();
console.log(`موجودی فعلی: ${account.balance}`); //undefined: بدون پراپرتی Getter

account.balance = 1000;
console.log(`موجودی فعلی: ${account.balance}`);

account.balance = -500;
console.log(`موجودی فعلی: ${account.balance}`);

// part249 5:37
