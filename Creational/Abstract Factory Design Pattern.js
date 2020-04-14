// Let's Make Our Interface First
// So Now We Will Encapsulate Theese Group Of Factories
// Wooden And Iron Doors
// To Get The Abstraction Level That we Need
class WoodenDooor{
    getDescription()
    {
        console.log("Hello This The Wooden Door");
    }
}

class IronDoor{
    getDescription()
    {
        console.log("Hello This The Iron Door");
    }
}

// Another Interfaces
class Welder{
    getDescription()
    {
        console.log("i Can Fit iron Doors Only");
    }
}

class Carpenter{
    getDescription()
    {
        console.log("i Can Fit Wooden Doors Only");
    }
}

// Now we have out Abstract Factory
// Let's build Our Login

class WoodenDoorFactory{
    makeDoor()
    {
        return new WoodenDooor();
    }
    makeFittingExpert()
    {
        return new Carpenter();
    }
}

class IronDoorFactory{
    makeDoor()
    {
        return new IronDoor();
    }
    makeFittingExpert()
    {
        return new Welder();
    }
}

// Every Thing now is Fine
let woodenFactory = new WoodenDoorFactory();

let door = woodenFactory.makeDoor();
let expert = woodenFactory.makeFittingExpert();

door.getDescription();
expert.getDescription();

let ironFactory = new IronDoorFactory();

let door = ironFactory.makeDoor();
let expert = ironFactory.makeFittingExpert();

door.getDescription();
expert.getDescription();