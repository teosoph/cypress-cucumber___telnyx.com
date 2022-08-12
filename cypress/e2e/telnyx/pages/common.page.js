class CommonPage {
  // ================= Random Data ==========================
  chars = "abcsefghijklmnopqrstuvwxyz1234567890";
  string = "";
  mathRandom = Math.random() * 15;

  getRandomData(mathRandom) {
    for (let i = 0; i <= 10; i++) {
      this.string += this.chars[Math.floor(Math.random() * this.chars.length)];
    }
    return this.string;
  }
  // ===============================

  validUserData = {
    testEmail: "test123test@test.com",
    fullName: "Igor Kirich",
    password: "Test1234567890-",
    firstName: "Igor",
    lastName: "Kirich",
    phoneNumber: "677206363",
    companyWebsite: "https://www.ukr.net",
  };

  invalidUserData = {
    testEmail: "test45r@",
    fullName: "Igour66 Kirich66",
    password: "Test1234567890",
    firstName: "Igor44",
    lastName: "Kirich55",
    phoneNumber: "67720636w",
    companyWebsite: "https:www.ukr.net",
  };

  checkLinkForContains(urlSignUpPage) {
    cy.url().should("not.include", urlSignUpPage);
  }
}

module.exports = new CommonPage();
