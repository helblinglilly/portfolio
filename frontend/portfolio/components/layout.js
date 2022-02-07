import Image from "next/image";
import Script from "next/script";
import Head from "next/head";
import { useTheme } from 'next-themes'

export const siteTitle = "Joel Helbling";

export default function Layout({ children, home }) {
	const { theme, setTheme } = useTheme()
	
	return (
		<div>
			<Head>
				<Script src="/js/navbar.js"></Script>
				<Script></Script>
			</Head>

			<nav className="navbar is-spaced">
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
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
				<div className="navbar-menu">
					<div className="navbar-start">
						<a href="/" className="navbar-item">Home</a>
						<a href="/blog" className="navbar-item">Blog</a>
					</div>
					<div className="navbar-end">
					<a onClick={() => {
						if (theme === 'light' || localStorage.getItem('theme') === 'light')
							setTheme('dark');
						else if (theme === 'dark' || localStorage.getItem('theme') === 'dark')
							setTheme('light');
						else
							setTheme('light');
					}} className="navbar-item">Change Theme</a>
					</div>
				</div>
			</nav>
			<div>
	  </div>
		</div>
	);
}



const toggleNavbar = () => {
	document.querySelector('.navbar-menu').classList.toggle('is-active');
	document.querySelector('.navbar-burger').classList.toggle('is-active');
}

const themeButton = (givenTheme) => {
	if (givenTheme === 'light')
		setTheme('dark');
	else if (givenTheme === 'dark')
		setTheme('light');
	else
		setTheme('light');
}