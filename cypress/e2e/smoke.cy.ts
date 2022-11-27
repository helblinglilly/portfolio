describe("All pages can load successfully", () => {
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
			cy.visit(`${Cypress.config("baseUrl")}/blog/2022`);
			cy.url().should("not.contain", `${Cypress.config("baseUrl")}/2022`);
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

	it("A blog post is shown", () => {
		cy.get(".column.is-two-third").find(".blogPost");
	});
});

describe("Navbar - Desktop", () => {
	it("Logo", () => {
		cy.viewport(1920, 1080);
		cy.visit(`${Cypress.config("baseUrl")}/blog`);
		cy.get("#navbar-logo").click();
		cy.location("pathname").then((location) => {
			location === `${Cypress.config("baseUrl")}/`;
		});
	});

	it("Home", () => {
		cy.viewport(1920, 1080);
		cy.get("#navbar-home").click();
		cy.location("pathname").then((location) => {
			location === `${Cypress.config("baseUrl")}/`;
		});
	});

	it("Blog", () => {
		cy.viewport(1920, 1080);
		cy.get("#navbar-blog").click();
		cy.location("pathname").then((location) => {
			location === `${Cypress.config("baseUrl")}/blog`;
		});
	});

	it("Background", () => {
		cy.viewport(1920, 1080);
		cy.get("#navbar-background").click();
		cy.location("pathname").then((location) => {
			location === `${Cypress.config("baseUrl")}/background`;
		});
	});

	it("Change Theme", () => {
		cy.viewport(1920, 1080);
		cy.get("#navbar-theme").click();

		// TODO Make sure certain colours have changed
	});
});
