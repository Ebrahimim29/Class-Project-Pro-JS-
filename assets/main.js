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