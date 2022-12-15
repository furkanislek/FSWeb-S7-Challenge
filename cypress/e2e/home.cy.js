/* eslint-disable no-undef */



describe("Pizza Form Yönlendirme", () => {
  it("Pizza Buton Form Yönlendirme", () => {
    cy.visit("http://localhost:3000/");
    cy.get('.link > button').click();
    cy.location().should((location) => {
      expect(location.href).to.eq("http://localhost:3000/pizza");
    });
  });
});

describe("Link Ile Yönlendirme", () => {
  it("Pizza Form Yönlendirme Link İle" , () => {
    cy.visit("http://localhost:3000/");
    cy.get('.links > [href="/pizza"]')
    .click()
    cy.location().should((location) => {
        expect(location.href).to.eq("http://localhost:3000/pizza");
      });
  });
});

describe("Slider Link Ile Yönlendirme", () => {
  it("Pizza Form Yönlendirme Slider İle", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-index="0"] > div > #pizza-form > img').click();
    cy.location().should((location) => {
      expect(location.href).to.eq("http://localhost:3000/pizza");
    });
  });
});

