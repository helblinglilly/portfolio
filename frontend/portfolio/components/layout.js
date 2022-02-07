import Image from "next/image";
import Script from "next/script";
import Head from "next/head";
import Link from "next/link"
import { useTheme } from 'next-themes'

export default function Layout({ children, home }) {
	const { theme, setTheme } = useTheme()
	
	const siteTitle = "Joel Helbling";
	const author = "Joel Helbling";
	const description = "This website is still in development";
	// Need to add images into meta tags

	return (
		<div>
			<Head>
				<meta charSet="utf-8"></meta>
				<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no" />
				<meta name="author" content={author}/>
				<meta name="description" content={description}/>
				<title>{siteTitle}</title>
			</Head>
			<Script src="/js/navbar.js"></Script>

			<nav className="navbar is-spaced">
				<div className="navbar-brand">
					<Link href="/">
						<a className="navbar-item">
							<Image src="/images/is-light.png" width={250} height={50} alt="Website Logo"/>
						</a>
      				</Link>
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
						<Link href="/">
							<a className="navbar-item">Home</a>
						</Link>
						<Link href="/blog">
							<a className="navbar-item">Blog</a>
						</Link>
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