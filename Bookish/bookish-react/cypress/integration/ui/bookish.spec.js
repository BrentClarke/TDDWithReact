describe("Bookish Applicaton", () => {
    it("Visits the Bookish", () => {
        cy.visit('http://localhost:3000/');
        cy.get('h2[data-test="heading"]').contains('Bookish')
    })

    it("Shows a Booklist", () => {
        cy.visit('http://localhost:3000/');
        cy.get('div[data-test="book-list"]').should('exist');
        cy.get('div.book-item').should('have.length',2);

        cy.get('div.book-item').should((books) => {

            expect(books).to.have.length(2);


            let titles = [...books].map(x => x.querySelector('h2').innerHTML)

            expect(titles).to.deep.equal(['Refactoring','Domain Driven Design'])
        });

    })
})