/* eslint-disable no-undef */

describe("Select False Form Control", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("Form Name Control", () => {
    cy.get("#name-input")
      .type("F")
      .should("have.attr", "id", "name-input");

    cy.get("#errName").should("have.text", "İsim en az 2 karakter olmalıdır");
  });

  it("Form Adress Control", () => {
    cy.get("#adres-input")
      .type("F")
      .should("have.attr", "id", "adres-input");

    cy.get("#errAdress").should(
      "have.text",
      "Your Adress must be more than 2 letters"
    );
  });

  it("Form Number Dropdown Control", () => {
    cy.get("#siparisAdet")
      .clear()
      .type("0");

    cy.get("#errSiparisAdet").should("have.text", "Must be more than 1");
  });
});

describe("Select False Form Control For Inputs", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("Form Unless Name Control", () => {
    cy.get("#name-input")
      .type("F")
      .should("have.attr", "id", "name-input");

    cy.get("#errName").should("have.text", "İsim en az 2 karakter olmalıdır");

    cy.get("#adres-input").type("Gaziantep");

    cy.get("#size-dropdown").select("Klasik Pizza");

    for (var i = 1; i < 5; i++) {
      cy.get(`.boyutFlex > :nth-child(${i}) >label`).click();
    }

    for (var j = 1; j < 2; j++) {
      cy.get(`.ekMalzemelerDiv > :nth-child(${j}) > label > input`)
        .check()
        .should("be.checked");
    }

    cy.get("#special-text")
      .type("Kolay Gelsin")
      .should("have.attr", "id", "special-text");

    cy.get("#siparisAdet")
      .clear()
      .type("1")
      .should("have.value", "1")
      .should("have.attr", "id", "siparisAdet");

    cy.get("#submit").should("be.disabled");
  });
  
  it("Form Unless Adress Control", () => {
    cy.get("#name-input")
      .type("Furkan Akif")
      .should("have.attr", "id", "name-input");

    cy.get("#adres-input")
      .type("F")
      .should("have.attr", "id", "adres-input");

    cy.get("#errAdress").should(
      "have.text",
      "Your Adress must be more than 2 letters"
    );

    cy.get("#size-dropdown").select("Klasik Pizza");

    for (var i = 1; i < 5; i++) {
      cy.get(`.boyutFlex > :nth-child(${i}) >label`).click();
    }

    for (var j = 1; j < 2; j++) {
      cy.get(`.ekMalzemelerDiv > :nth-child(${j}) > label > input`)
        .check()
        .should("be.checked");
    }

    cy.get("#special-text")
      .type("Kolay Gelsin")
      .should("have.attr", "id", "special-text");

    cy.get("#siparisAdet")
      .clear()
      .type("1")
      .should("have.value", "1")
      .should("have.attr", "id", "siparisAdet");

    cy.get("#submit").should("be.disabled");
  });

  it("Form Unless Pizza Select Control", () => {
    cy.get("#name-input")
      .type("Furkan Akif")
      .should("have.attr", "id", "name-input");

      cy.get("#adres-input")
      .type("Gaziantep")
      .should("have.attr", "id", "adres-input")

    cy.get("#size-dropdown").select("Seçiniz");

    for (var i = 1; i < 5; i++) {
      cy.get(`.boyutFlex > :nth-child(${i}) >label`).click();
    }

    for (var j = 1; j < 3; j++) {
      cy.get(`.ekMalzemelerDiv > :nth-child(${j}) > label > input`)
        .check()
        .should("be.checked");
    }

    cy.get("#special-text")
      .type("Kolay Gelsin")
      .should("have.attr", "id", "special-text");

    cy.get("#siparisAdet")
      .clear()
      .type("1")
      .should("have.value", "1")
      .should("have.attr", "id", "siparisAdet");

    cy.get("#submit").should("be.disabled");
  });

  it("Form Unless Pizza Size Control", () => {
    cy.get("#name-input")
      .type("Furkan Akif")
      .should("have.attr", "id", "name-input");

      cy.get("#adres-input")
      .type("Gaziantep")
      .should("have.attr", "id", "adres-input")

    cy.get("#size-dropdown").select("Klasik Pizza");


    for (var j = 1; j < 3; j++) {
      cy.get(`.ekMalzemelerDiv > :nth-child(${j}) > label > input`)
        .check()
        .should("be.checked");
    }

    cy.get("#special-text")
      .type("Kolay Gelsin")
      .should("have.attr", "id", "special-text");

    cy.get("#siparisAdet")
      .clear()
      .type("1")
      .should("have.value", "1")
      .should("have.attr", "id", "siparisAdet");

    cy.get("#submit").should("be.disabled");
  });

  it("Form Unless Pizza Pieces Control", () => {
    cy.get("#name-input")
      .type("Furkan Akif")
      .should("have.attr", "id", "name-input");

      cy.get("#adres-input")
      .type("Gaziantep")
      .should("have.attr", "id", "adres-input")

    cy.get("#size-dropdown").select("Klasik Pizza");

    for (var i = 1; i < 5; i++) {
        cy.get(`.boyutFlex > :nth-child(${i}) >label`).click();
      }

    for (var j = 1; j < 3; j++) {
      cy.get(`.ekMalzemelerDiv > :nth-child(${j}) > label > input`)
        .check()
        .should("be.checked");
    }

    cy.get("#special-text")
      .type("Kolay Gelsin")
      .should("have.attr", "id", "special-text");

    cy.get("#siparisAdet")
      .clear()
      .type("0")

    cy.get("#submit").should("be.disabled");
  });
});
