/* eslint-disable no-undef */
// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })



describe("Select True Form Control", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("Form Control", () => {

    cy.get("#name-input")
      .type("Furkan Akif")
      .should("have.attr", "id", "name-input");

    cy.get("#adres-input")
      .type("Gaziantep")
      .should("have.attr", "id", "adres-input");

    cy.get("#size-dropdown")
      .select("Klasik Pizza")
      .should("have.attr", "id", "size-dropdown");

    for(var i = 1 ; i<5 ;  i++){
      cy.get(`.boyutFlex > :nth-child(${i}) >label`).click();
    }

    for (var j = 1; j < 28; j++) {
      cy.get(`.ekMalzemelerDiv > :nth-child(${j}) > label > input`)
        .check()
        .should("be.checked");
    }

    cy.get('#special-text')
    .type("Kolay Gelsin")
    .should("have.attr", "id", "special-text")

    cy.get("#siparisAdet")
      .clear()
      .type("1")
      .should("have.value", "1")
      .should("have.attr", "id", "siparisAdet");

    cy.get("#submit")
    .click()

    cy.get('p').should("have.text" , "Tebrikler! Pizza'nız yola çıktı")

  });
});