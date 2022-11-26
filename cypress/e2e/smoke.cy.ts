describe.skip("All pages can load successfully", () => {
	it("/", () => {
		cy.visit(`${Cypress.config("baseUrl")}`);
	});
	describe("/blog", () => {
		it("/", () => {
			cy.visit(`${Cypress.config("baseUrl")}/blog`);
		});

		describe("2022 Posts", () => {
			it("R has a problem", () => {
				cy.visit(
					`${Cypress.config("baseUrl")}/blog/2022/r-has-a-problem`
				);
			});
			it("AWS Summit", () => {
				cy.visit(`${Cypress.config("baseUrl")}/blog/2022/aws-summit`);
			});
			it("Pi", () => {
				cy.visit(
					`${Cypress.config("baseUrl")}/blog/2022/homeserver-pi`
				);
			});
			it("Vercel", () => {
				cy.visit(`${Cypress.config("baseUrl")}/blog/2022/vercel`);
			});
		});

		it("/2022 redirects to root", () => {
			// TODO
		});
	});
	it("/background", () => {
		cy.visit(`${Cypress.config("baseUrl")}/background`);
	});
});

describe("Homepage checks", () => {
	beforeEach("", () => {
		cy.visit(`${Cypress.config("baseUrl")}/`);
	});

	it("Sidebar contains basic information", () => {
		const aboutMeSidebar = cy.get(".sidebar");
		aboutMeSidebar.contains("About me");
	});

	it("Social Media links all work", () => {
		const socials = cy.get("#socialLinks");
		socials.contains("Socials");

		cy.get("#socialLinks")
			.find(".icon-text")
			.each((link) => {
				if (link.prop("href")) {
					cy.request({
						url: link.prop("href"),
						failOnStatusCode: false,
					});
				}
			});
	});
});
