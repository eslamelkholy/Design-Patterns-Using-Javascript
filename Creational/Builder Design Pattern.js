// 1-Traditional Way
// class Address{
//     constructor(zip, street)
//     {
//         this.zip = zip;
//         this.street = street;
//     }
// }

// class User{
//     constructor(name)
//     {
//         this.name = name;
//     }
// }

// class UserBuilder{
//     constructor(name)
//     {
//         this.user = new User(name);
//     }
//     setAge(age)
//     {
//         this.user.age = age;
//         return this;
//     }
//     setPhone(phone)
//     {
//         this.user.phone = phone;
//         return this;
//     }
//     setAddress(address)
//     {
//         this.user.address = address;
//         return this;
//     }
//     build()
//     {
//         return this.user;
//     }
// }

// let user = new UserBuilder('eslam').build();
// let user = new UserBuilder('eslam').setAge(23).build();
// let user = new UserBuilder('eslam').setAge(23).setPhone(0101111).build();
// console.log(user)

// Now The Effective Way in Javascript
class Address{
    constructor(zip, street)
    {
        this.zip = zip;
        this.street = street;
    }
}

// In Javascript we will pass Optionals Parameters
// As JSON Object
class User{
    constructor(name, { age, phone, address } = {})
    {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}
let user = new User('Eslam', {age : 20});
console.log(user);