describe("BookListPage", () => {
  it("should load form", () => {
    cy.visit("/books/new");
    cy.contains("Add New Book");
    cy.contains("Title");
    cy.contains("Author");
    cy.contains("ISBN");
    cy.contains("Page Numbers");
    cy.contains("Rate (1-5)");
    cy.contains("Submit");
  });

  it("should fill form wrongly", () => {
    cy.visit("/books/new");
    cy.get('input[name="title"]').type("title");
    cy.get('input[name="author"]').type("author");
    cy.get('input[name="isbn"]').type("Invalid ISBN");
    cy.get('input[name="pagesNumber"]').type(0);
    cy.get('input[name="rate"]').type(0);
    cy.contains("ISBN must be a valid 10 or 13 digit number");
    cy.contains("Page numbers must be at least 1");
    cy.contains("Rate must be at least 1");
    cy.get('input[name="rate"]').type(6);
    cy.contains("Rate cannot be more than 5");
  });

  it("should fill form properly", () => {
    const randomTitle = Math.random().toString(36).substring(7);

    cy.visit("/books/new");
    cy.get('input[name="title"]').type(randomTitle);
    cy.get('input[name="author"]').type("Proper Author");
    cy.get('input[name="isbn"]').type("1234567890");
    cy.get('input[name="pagesNumber"]').type(100);
    cy.get('input[name="rate"]').type(4);
    cy.contains("Submit").click();

    cy.get("h1").contains(randomTitle);
  });
});
