describe("/blog Search", () => {
	before(() => {
		cy.visit(`${Cypress.config("baseUrl")}/blog`);
	});

	it("Year checkboxes are in descending order", () => {
		const labels = [];
		cy.get("[data-cy=yearLabels]")
			.find("label")
			.each((label) => {
				labels.push(label[0].innerText);
			})
			.then(() => {
				const sortedLabels = [...labels];
				sortedLabels.sort();
				expect(labels).to.have.deep.ordered.members(sortedLabels);
			});
	});

	it("Post categories are in descending alphabetical order", () => {
		const labels = [];
		cy.get("[data-cy=postCategoryLabels]")
			.find("label")
			.each((label) => {
				labels.push(label[0].innerText);
			})
			.then(() => {
				const sortedLabels = [...labels];
				sortedLabels.sort();
				expect(labels).to.have.deep.ordered.members(sortedLabels);
			});
	});
});
