// Класи

// class User {
//   #password;
//   constructor(name, surname, password) {
//     this.name = name;
//     this.surname = surname;
//     this.#password = password;
//   }
//   getName() {
//     return this.name;
//   }
//   changeName(newName) {
//     this.name = newName;
//   }
//   get password() {
//     return this.#password;
//   }
//   set password(newPassword) {
//     this.#password = newPassword;
//   }
// }

// const firstUser = new User('Anna', 'Kozak', 'qwerty');
// console.log(firstUser);
// firstUser.changeName('Hanna');
// console.log(firstUser.getName());

// console.log(User.prototype);
// // console.log(firstUser.#password); помилка, недоступно.

// class Car {
//   static myProp = 'value';
//   #brand;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });
// console.log(nissan);

class User1 {
  email;
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User1 {
  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor(params) {
    super(params.email);
    this.access = params.access;
    this.blacklistedEmails = [];
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: 'mango@mail.com',
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true
