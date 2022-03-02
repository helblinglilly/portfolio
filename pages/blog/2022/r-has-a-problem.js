import Head from "next/head";
import Image from "next/image";
import RScriptBlock from "../../../components/CodeBlock/r";
import Layout from "../../../components/Layout/Layout";
import TableOfContents from "../../../components/Blog/tableOfContents";
import ShellScriptBlock from "../../../components/CodeBlock/shell";
import ApacheCodeBlock from "../../../components/CodeBlock/apache";

export default function Post() {
	const toc = [];
	toc.push({ title: "Intro", id: "introduction" });
	toc.push({ title: "Pipeline", id: "pipeline" });
	toc.push({ title: "Tools", id: "r-studio" });
	toc.push({ title: "Paywalls", id: "paywall" });
	toc.push({ title: "Documentation", id: "documentation" });
	toc.push({ title: "Deployment implications", id: "deployment" });

	const shell = {};
	shell.code = `#Perform system updates first
sudo apt update && sudo apt upgrade -y
#Install apache web server
sudo apt install apache2
#Install the extra packages required for proxies

#Generate SSL certificate

#cd to the apache directory
cd /etc/apache2/sites-available
#Disable the default page
sudo a2dissite 000-default.conf
#Create a new conf file
nano shiny.conf

#Paste the shiny.conf example into nano, save and exit with ctrl+c, y

#Enable the shiny page
sudo a2ensite shiny.conf
#Reload apache2 to apply the changes
sudo service apache2 reload`;
	shell.filename = `Apache Proxy Server setup`;

	const apacheconfig = {};
	apacheconfig.code = `<VirtualHost _default:443>
	ProxyPreserveHost On
	ProxyPass /* http://localhost:3838/shinyapps/$1
	ProxyPassReverse /* http://localhost:3838/shinyapps/$1
	ServerName localhost
</VirtualHost>

#Redirect all http traffic to use https
<VirtualHost *:80>
	Redirect / https://localhost/
</VirtualHost>
	`;
	apacheconfig.filename = `shiny.conf`;

	return (
		<Layout home>
			<Head>
				<title>R has a problem</title>
			</Head>
			<div className="column is-one-quarter">
				<TableOfContents entries={toc}></TableOfContents>
				<div id="backToTopContainer" className="">
					<a className="button hidden" id="backToTopButton" href="#navbar">
						Back to top
					</a>
				</div>
			</div>
			<div className="column">
				<p className="title is-1">R has a problem</p>
				<hr className="mb-1"></hr>
				<p>
					<i>22 February 2022, Joel Helbling</i>
				</p>

				<div className="mt-4" id="introduction">
					<p className="title is-3 mb-2">Intro</p>
					<p>
						During my rotation on the Pathways team, I got assigned a project
						where I had to bring a dashboard, written in R, to the cloud. 
					</p>
					<p>
						Another graduate was responsible for doing the data processing
						while I was responsible for setting up CI/CD. Throughout this
						process, I had to write a few test programmes to verify settings and work out how environments worked within R.
					</p>
					<p>The target platform was our existing cloud infrastructure on AWS.</p>
				</div>

				<div className="mt-5" id="pipeline">
					<p className="title is-3 mb-1">Pipeline</p>
					<p>For those uninstantiated on what responsibilities each {"<insert buzzword here>"} is responsible for and how this would affect our final deployment, allow me to break it down:</p>

					<p className="title is-5 mt-2 mb-2">GitLab</p>
					<p>GitLab is a source control management platform, very similar to GitHub. Without going into too much detail, the idea is that a team could work on the project at the same time while keeping track of changes and avoiding conflicts.</p>
					<p>You would typically a keep record of each past release and keep an active development branch which you branch off of for each feature. Ideally, you would have each branch deployed to its own isolated environment to test your progress in an authentic environment.</p>

					<p className="title is-5 mt-2 mb-2">Jenkins</p>
					<p>Jenkins will pick up any changes to the git repo and start the pipeline as desired. The "Pipeline" is orchestrated on this platform. In an organisation, you would have a dedicated server for this where multiple teams are running their pipelines during the day.</p>
					<p>Effectively, this standardises the rest of the process, calling scripts in order or in parallel as desired.</p>

					<p className="title is-5 mt-2 mb-2">Terraform</p>
					<p>Deploying to the cloud might be easy to say, but cloud networking is hell. Especially when you have to consider existing infrastructure - keeping it private but having the Kubernetes cluster included while only being able to access it from a secure VPN</p>
					<p>Terraform is a way of writing infrastructure as Code (IaC). You would want to do this because Terraform can keep track of the state of your environments. It will sort out all the resources required, imagine walking through the AWS Console and filling in all the fields, but in code.</p>

					<p className="title is-5 mt-2 mb-2">Docker</p>
					<p>Docker Images are a way to save the state of your applications and spin up <i>n</i> amount of containers that are all the same. Shiny provide a docker image that has a basic server set-up. We will add SSL certificates to this and set up a reverse proxy through apache.</p>
					<p>A modified container will include credentials to our database that we have just deployed to AWS using Terraform. We will store our Docker Images in AWS' Elastic Container Registry.</p>

					<p className="title is-5 mt-2 mb-2">Kubernetes</p>
					<p>Kubernetes applications are deployed into clusters, consisting of 'Pods'. Each pod will be based on our Docker image created earlier. A general principle to consider with apps is that things will always break eventually. Kubernetes manages breaking applications as well as demand increases - you can set up usage rules at which point more pods will get spawned in to deal with the extra load and scale back in when demand drops.</p>

					<p className="mt-4">This is a fairly typical setup when deploying to the cloud, following software principles. So while I wasn't expecting seamless integration from R, I thought it would be a reasonable assumption to assume it would behave like most languages I dealt with so far.</p>
				</div>

				<div className="mt-5" id="r-studio">
					<p className="title is-3 mb-1">Tools</p>
					<img src="/images/posts/r-has-a-problem/r-studio.png" className="right-aligned" width="286" height="396" alt="R Studio publish"/>
					<p>
						R Studio is the preferred IDE used by our developers and behind it sits a company maintaining it.
						Unlike most companies that we might be used to, the free version of R-Studio offers a very limited feature set. They also found it necessary to compare
						the feature set of an IDE, to the feature set of their server software? Perhaps I am misunderstanding, but feel free to
						check for yourself <a href="https://www.rstudio.com/products/rstudio/download/" target="_blank" rel="noreferrer">https://www.rstudio.com/products/rstudio/download/</a>.
						<br />
						For example, how would you see "Enterprise security" in an IDE, and how is "Version Control" nowhere to be seen? As a software engineer, I find that 
						disturbing. If you manage to install R into your environment so that you can run R scripts directly in the terminal, I would strongly 
						recommend getting used to <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</a> with the
						<a href="https://marketplace.visualstudio.com/items?itemName=Ikuyadeu.r"> R extension</a> installed. This will give you syntax highlighting,
						you can run your code directly from the terminal and view it in a web browser, view your database (requires further extensions), and most importantly
						will allow you to use git.
						<br />
						The only time that I would recommend using R Studio is if you are a single developer in your team, and are financially able to deploy your app directly through the IDE.
						We are well past the days of backing up your progress before trying something that might not work, sending your progress via E-Mail with different version tags etc.
					</p>
				</div>
				
				<div className="mt-5" id="paywall">
					<p className="title is-3 mb-1">Integrated Paywalls</p>
					<p>
						Sadly for R, the same company that maintains R Studio also maintains the documentation. 
						While the language itself is open source, it is very clear that the R Studio company 
						wants to keep a tight grip on the elements that they control, and take more of a 
						laissez-faire approach to the 'more Open Source' aspects. To be clear, they are completely within their rights to do so 
						and I'm not trying to say they are wrong to do so, but taking such a tight grip on 
						a powerful tool like this is not good for its community and others have already demonstrated 
						that they can run a successful business while keeping their main product truly open source.
						<br />
						What's concerning about this, is that they integrate native SSL support, but lock it behind a paywall.
						I'm all for accessibility, but locking down on industry standard security measures is not okay with me.
						If this was a paid feature within R-Studio I would be okay with it as the convenience would be the actual product.
						However, it's even locked down on the lower level server implementation which really goes against the open source 
						ethos. 
						<br /><br />
						So how are you supposed to integrate this yourself? Well, the official docs don't even feel like telling you <a href="https://docs.rstudio.com/shiny-server/#ssl" target="_blank" rel="noreferrer">https://docs.rstudio.com/shiny-server/#ssl </a>
						Unsuspecting or unexperienced developers are being given no offical guidance, and the community is on both ends of the technical spectrum, there is not a nice middleground.
						<br />
						If you have found this blog post trying to work out how to do just that (setting up a reverse proxy yourself), see the instructions below for a Linux deployment with a self-signed (free but not trusted) certificate. 
						<ShellScriptBlock code={shell}></ShellScriptBlock>
						<ApacheCodeBlock code={apacheconfig}></ApacheCodeBlock>
					</p>
				</div>

				<div className="mt-5" id="documentation">
					<p className="title is-3 mb-1">Poor documentation</p>
					<p>If you've followed the link to the official documentation above, you might have noticed that it's quite bare-bones compared to 
						other environments like <a href="" target="_blank" rel="noreferrer">Node</a> for example. I'm bringing this up due to the irony 
						of a web application having terribly outdated designs on their own website.
					</p>
					<p>Basic features not officially documented</p>
				</div>

				<div className="mt-5" id="deployment">
					<p className="title is-3 mb-1">Deployment implications</p>
					<p>
						How they try to play it safe with things that actually have
						terrible implications
					</p>
				</div>
			</div>
		</Layout>
	);
}
