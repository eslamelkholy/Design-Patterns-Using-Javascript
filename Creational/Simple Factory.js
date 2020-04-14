
// We can't Consider This As A Pattern Any Way
class MyDoor{
    constructor(width, height)
    {
        this.width = width;
        this.height = height;
    }
    getWidth(){return this.width}
    getHeight(){return this.height}
}

let DoorFactory = {
    makeDoor : (width, height) => new MyDoor(width, height)
}

let door = DoorFactory.makeDoor(100,200);
console.log(door.getHeight(), door.getWidth())
