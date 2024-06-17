describe("BookDetailsPage", () => {
  it("should display a list of books and go to details", () => {
    cy.visit("/books");
    cy.get('[data-testid="books-list"]').should("exist");
    cy.get('[data-testid="search-input"]').type("Book 90");
    cy.get('[data-testid="books-list-row"]').should("have.length", 1);
    cy.get('[data-testid="show-details"]').first().click();
    cy.contains("Book 90");
  });
});
