import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Head from "next/head";

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
	return (
		<div>
			<Head>
				<Script src="/js/navbar.js"></Script>
			</Head>
			<nav className="navbar is-spaced">
				<div className="navbar-brand">
					<a className="navbar-item" Link="/">
						<Image src="/images/is-light.png" width={250} height={50} />
					</a>
					<a
						onClick={toggleNavbar}
						role="button"
						id="navBurger"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navMenu"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				<div className="navbar-menu" id="navMenu">
					<div className="navbar-start">
						<Link href="/">
							<a className="navbar-item">Home</a>
						</Link>
						<Link href="/blog">
							<a className="navbar-item">Blog</a>
						</Link>
					</div>
					<div className="navbar-end">
						<button className="button">Theme</button>
					</div>
				</div>
			</nav>
		</div>
	);
}

function toggleNavbar() {
	// document.addEventListener("DOMContentLoaded", () => {
	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(
		document.querySelectorAll(".navbar-burger"),
		0
	);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
		// Add a click event on each of them
		$navbarBurgers.forEach((el) => {
			el.addEventListener("click", () => {
				// Get the target from the "data-target" attribute
				const target = el.dataset.target;
				const $target = document.getElementById(target);

				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle("is-active");
				$target.classList.toggle("is-active");
			});
		});
	}
	// });
}
