// const { faker } = require('@faker-js/faker');

class CommonPage {
  // ================= Random Data ==========================
  chars = 'abcsefghijklmnopqrstuvwxyz1234567890';
  string = '';
  mathRandom = Math.random() * 15;

  generateRandomData(mathRandom) {
    if (mathRandom > 1) {
      for (let i = 0; i <= mathRandom; i++) {
        this.string +=
          this.chars[Math.floor(Math.random() * this.chars.length)];
      }
      return this.string;
    } else {
      for (let i = 0; i <= 2; i++) {
        this.string +=
          this.chars[Math.floor(Math.random() * this.chars.length)];
      }
      return this.string;
    }
  }
  // ===============================

  validUserData = {
    workEmail: 'test123test@test.com',
    fullName: 'Igor Kirich',
    password: 'Test1234567890-',
    firstName: 'Igor',
    lastName: 'Kirich',
    phoneNumber: '677206363',
    companyWebsite: 'https://www.ukr.net',
  };
  // validUserData = {
  //   workEmail: 'test123test@test.com',
  //   fullName: faker.name.fullName(),
  //   password: faker.internet.password(20, /[A-Z]/, /[0-9]/),
  //   firstName: faker.name.firstname(),
  //   lastName: faker.name.lastname(),
  //   phoneNumber: faker.phone.number('+38 91 ### ## ##'),
  //   companyWebsite: 'https://www.ukr.net',
  // };

  invalidUserData = {
    workEmail: this.getRandomData(6) + '@test.ua',
    fullName: 'Igour Kirich' + this.getRandomData(4),
    password: 'Test' + this.getRandomData(),
    firstName: 'Igor' + this.getRandomData(3),
    lastName: 'Kirich' + this.getRandomData(3),
    phoneNumber: this.getRandomData(7),
    companyWebsite: 'https:www.ukr.net',
  };

  checkLinkForContains(urlSignUpPage) {
    cy.url().should('not.include', urlSignUpPage);
  }
}

module.exports = new CommonPage();
