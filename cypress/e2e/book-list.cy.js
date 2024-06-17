describe("BookListPage", () => {
  it("should load main page", () => {
    cy.visit("/");
    cy.contains("Books-app");
  });

  it("should display a list of books", () => {
    cy.visit("/books");
    cy.get('[data-testid="books-list"]').should("exist");
  });

  it("should display at least one book on list", () => {
    cy.visit("/books");
    cy.get('[data-testid="books-list-row"]').should(
      "have.length.greaterThan",
      0
    );
  });

  it("should display add button", () => {
    cy.visit("/books");
    cy.contains("Add book");
  });

  it("should go to create page", () => {
    cy.visit("/books");
    cy.contains("Add book").click();
    cy.url().should("include", "/books/new");
  });

  it("should display pagination", () => {
    cy.visit("/books");
    cy.get('[data-testid="pagination"]').should("exist");
    cy.get('[data-testid="pagination"]').contains("1");
  });

  it("should go to 2 page of pagination", () => {
    cy.visit("/books");
    cy.get('[data-testid="pagination"]').should("not.contain", "3");
    cy.get('[data-testid="pagination"]').contains("2").click();
    cy.get('[data-testid="pagination"]').contains("3");
  });

  it("should display search input", () => {
    cy.visit("/books");
    cy.get('[data-testid="search-input"]').should("exist");
  });

  it("should search for a book", () => {
    cy.visit("/books");
    cy.get('[data-testid="search-input"]').type("Book 90");
    cy.get('[data-testid="books-list-row"]').should("have.length", 1);
  });
});
