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
	toc.push({ title: "Conclusion", id: "conclusion" });

	const shell = {};
	shell.code = `#Perform system updates first
sudo apt update && sudo apt upgrade -y
#Install apache web server
sudo apt install apache2
#Install the extra packages required for proxies
sudo a2enmod ssl
sudo systemctl restart apache2

#Generate SSL certificate
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/apache-selfsigned.key -out /etc/ssl/certs/apache-selfsigned.crt

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
</VirtualHost>`;
	apacheconfig.filename = `shiny.conf`;

	const sysEnv = {};
	sysEnv.code = `Sys.getenv()["VariableName"]`;
	sysEnv.filename = "Get environment variable";

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
						<br />
						Another graduate was responsible for doing the data processing
						while I was responsible for setting up CI/CD. Throughout this
						process, I had to write a few test programmes to verify settings
						and work out how environments worked within R.
						<br />
						The target platform was our existing cloud infrastructure on AWS.
					</p>
				</div>

				<div className="mt-5" id="pipeline">
					<p className="title is-3 mb-1">Pipeline</p>
					<p>
						For those uninstantiated on what responsibilities each{" "}
						{"<insert buzzword here>"} is responsible for and how this would
						affect our final deployment, allow me to break it down:
					</p>

					<p className="title is-5 mt-2 mb-2">GitLab</p>
					<p>
						GitLab is a source control management platform, very similar to
						GitHub. Without going into too much detail, the idea is that a
						team could work on the project at the same time while keeping
						track of changes and avoiding conflicts.
						<br />
						You would typically a keep record of each past release and keep an
						active development branch which you branch off of for each
						feature. Ideally, you would have each branch deployed to its
						isolated environment to test your progress in an authentic
						environment.
					</p>

					<p className="title is-5 mt-2 mb-2">Jenkins</p>
					<p>
						Jenkins will pick up any changes to the git repo and start the
						pipeline as desired. The "Pipeline" is orchestrated on this
						platform. In an organisation, you would have a dedicated server
						for this where multiple teams are running their pipelines during
						the day.
						<br />
						Effectively, this standardises the rest of the process, calling
						scripts in order or parallel as desired.
					</p>

					<p className="title is-5 mt-2 mb-2">Terraform</p>
					<p>
						Deploying to the cloud might be easy to say, but cloud networking
						is hell. Especially when you have to consider existing
						infrastructure - keeping it private but having the Kubernetes
						cluster included while only being able to access it from a secure
						VPN.
						<br />
						Terraform is a way of writing infrastructure as Code (IaC). You
						would want to do this because Terraform can keep track of the
						state of your environments. It will sort out all the resources
						required, imagine walking through the AWS Console and filling in
						all the fields, but in code.
					</p>

					<p className="title is-5 mt-2 mb-2">Docker</p>
					<p>
						Docker Images are a way to save the state of your applications and
						spin up <i>n</i> amount of containers that are all the same. Shiny
						provide a docker image that has a basic server set-up. We will add
						SSL certificates to this and set up a reverse proxy through
						apache.
						<br />A modified container will include credentials to our
						database that we have just deployed to AWS using Terraform. We
						will store our Docker Images in AWS' Elastic Container Registry.
					</p>

					<p className="title is-5 mt-2 mb-2">Kubernetes</p>
					<p>
						Kubernetes applications are deployed into clusters, consisting of
						'Pods'. Each pod will be based on our Docker image created
						earlier. A general principle to consider with apps is that things
						will always break eventually. Kubernetes manages breaking
						applications as well as demand increases - you can set up usage
						rules at which point more pods will get spawned in to deal with
						the extra load and scale back in when demand drops.
					</p>

					<p className="mt-4">
						This is a fairly typical setup when deploying to the cloud,
						following software principles. So while I wasn't expecting
						seamless integration from R, I thought it would be a reasonable
						assumption to assume it would behave like most languages I dealt
						with so far.
					</p>
				</div>

				<div className="mt-5" id="r-studio">
					<p className="title is-3 mb-1">Tools</p>
					<img
						src="/images/posts/r-has-a-problem/r-studio.png"
						className="right-aligned"
						width="286"
						height="396"
						alt="R Studio publish"
					/>
					R Studio is the preferred IDE used by our developers and behind it
					sits a company maintaining it. Unlike most companies that we might be
					used to, the free version of R-Studio offers a very limited feature
					set. They also found it necessary to compare the feature set of an
					IDE, to the feature set of their server software? Perhaps I am
					misunderstanding, but feel free to check for yourself{" "}
					<a
						href="https://www.rstudio.com/products/rstudio/download/"
						target="_blank"
						rel="noreferrer"
					>
						https://www.rstudio.com/products/rstudio/download/
					</a>
					.
					<br />
					For example, how would you see "Enterprise security" in an IDE, and
					how is "Version Control" nowhere to be seen? As a software engineer, I
					find that disturbing. If you manage to install R into your environment
					so that you can run R scripts directly in the terminal, I would
					strongly recommend getting used to{" "}
					<a
						href="https://code.visualstudio.com/"
						target="_blank"
						rel="noreferrer"
					>
						Visual Studio Code
					</a>{" "}
					with the
					<a href="https://marketplace.visualstudio.com/items?itemName=Ikuyadeu.r">
						{" "}
						R extension
					</a>{" "}
					installed. This will give you syntax highlighting, you can run your
					code directly from the terminal and view it in a web browser, view
					your database (requires further extensions), and most importantly will
					allow you to use git.
					<br />
					The only time that I would recommend using R Studio is if you are a
					single developer in your team, and are financially able to deploy your
					app directly through the IDE. We are well past the days of backing up
					your progress before trying something that might not work, sending
					your progress via E-Mail with different version tags etc.
				</div>

				<div className="mt-5" id="paywall">
					<p className="title is-3 mb-1">Integrated Paywalls</p>
					<p>
						Sadly for R, the same company that maintains R Studio also
						maintains the documentation. While the language itself is
						open-source, it is very clear that the R Studio company wants to
						keep a tight grip on the elements that they control and take more
						of a laissez-faire approach to the 'more Open Source' aspects. To
						be clear, they are completely within their rights to do so and I'm
						not trying to say they are wrong to do so, but taking such a tight
						grip on a powerful tool like this is not good for its community
						and others have already demonstrated that they can run a
						successful business while keeping their main product truly open
						source.
						<br />
						What's concerning about this, is that they integrate native SSL
						support, but lock it behind a paywall. I'm all for accessibility,
						but locking down on industry-standard security measures is not
						okay with me. If this was a paid feature within R-Studio I would
						be okay with it as the convenience would be the actual product.
						However, it's even locked down on the lower level server
						implementation which really goes against the open-source ethos.
						<br />
						<br />
						So how are you supposed to integrate this yourself? Well, the
						official docs don't even feel like telling you{" "}
						<a
							href="https://docs.rstudio.com/shiny-server/#ssl"
							target="_blank"
							rel="noreferrer"
						>
							https://docs.rstudio.com/shiny-server/#ssl{" "}
						</a>
						Unsuspecting or inexperienced developers are being given no
						official guidance, and the community is on both ends of the
						technical spectrum, there is not a nice middle ground.
						<br />
						If you have found this blog post trying to work out how to do just
						that (setting up a reverse proxy yourself), see the instructions
						below for a Linux deployment with a self-signed (free but not
						trusted) certificate.
						<ShellScriptBlock code={shell}></ShellScriptBlock>
						<ApacheCodeBlock code={apacheconfig}></ApacheCodeBlock>
					</p>
				</div>

				<div className="mt-2" id="documentation">
					<p className="title is-3 mb-1">Poor documentation</p>
					<p>
						If you've followed the link to the official documentation above,
						you might have noticed that it's quite bare-bones compared to
						other environments like{" "}
						<a href="" target="_blank" rel="noreferrer">
							Node
						</a>{" "}
						for example. I'm bringing this up due to the irony of a web
						application having outdated designs on its website.
						<br />
						Another aspect where I got negatively surprised was when we got to
						the stage where our AWS resources were deployed and all we had to
						pass to R was the connection details. My first instinct was to
						pass it as an environment variable to my Docker container. While
						trying to find out how to read system variables, I realised that
						even though it is natively supported, there are no official docs
						on doing just that - all results appear to be from Universities,
						blog posts or similar. If you are wondering, the function to do
						that returns a 'vector' which seems to be similar to an
						associative array.
						<RScriptBlock code={sysEnv}></RScriptBlock>
						After working out the syntax from unofficial sources, I realised
						that my variables weren't being read correctly. Thankfully I made
						sure to test the Docker container in isolation before introducing
						more possible points of failure through Terraform and Jenkins.
						When printing out all environment variables I realised that it was
						a subset of what was available on the system.
						<br />I investigated any possible causes for this but couldn't
						come up with a solution. After some more research, I found{" "}
						<a
							href="https://groups.google.com/g/shiny-discuss/c/nNs0kztwdWo/m/90InjZXfAPEJ?pli=1"
							target="_blank"
							rel="noreferrer"
						>
							this{" "}
						</a>
						Google Groups post by one of the developers. Effectively, R Shiny
						has an allow-list of environment variables that it will pass
						through to the server process. Their justification is that it
						increases security, but more about this later on.
						<br />
						<br />
						Another example of undocumented behaviour is about a warning that
						R Shiny gives you a warning when you run it as root. While that's
						a fair security warning, it manually prevents users from causing
						any issues for themselves, it switches to the 'shiny' user it
						creates. While that's great, it also means that if you need any
						user-specific configuration for the shiny-server, they will just
						get removed when the server is run under a different user. This is
						yet another example of design decisions that got made but have not
						been documented making related issues difficult and time-consuming
						to debug.
						<br />
						<br />
						Design decisions with such an impact in modern deployments should
						be documented officially and not on a third party forum like a
						google groups page by a singular developer. In my opinion, this
						now goes beyond only writing documentation for your parts of an
						open-source product that one entity maintains, this is either
						active neglect or incompetency - given how much money they must be
						making by using that gap in the market I will put it down to
						neglect.
					</p>
				</div>

				<div className="mt-5" id="deployment">
					<p className="title is-3 mb-1">Deployment implications</p>
					<p>
						I mentioned the pipeline used on this piece of work for context,
						because the implications of those complaints mentioned earlier
						make for a less secure pipeline. An example of this, is about
						environment variables mentioned earlier on. Environment variables
						when set through 'export' are bound to the context of the user
						they're set to. I mentioned earlier how R-Shiny servers are ran
						under the shiny user, but in a Dockerfile you want to keep things
						as simple as possible. If you're running a reverse-proxy server
						for example, you would need to start the server, as well as
						R-Shiny. You would want to start the reverse-proxy as root, but as
						R-Shiny switches to the shiny user anyway, it is painful to debug
						when not all environment variables are passed through.
						<br />
						Another impact regarding environment variables is that you would
						want to pass through credentials, such as for a database that
						would be created by i.e. Terraform. The only way to pass extra
						variables in is by creating an .Renviron file. In such a
						deployment, the database host might be different depending if you
						are in QA or Production. If you are using something like Jenkins,
						you would have to pipe the terraform output into a plaintext file
						which will now sit on the build server, include it in the docker
						image, push it to a cloud repository like AWS' ECR so that it can
						be used in a Kubernetes cluster thereby needlessly adding an extra
						potential security risk for no reason.
						<br />
						Lastly, due to the very nature of building such a pipeline, there
						are many different points of failure. Normally, this would be less
						of an issue, but with the obscure undocumented design decisions
						made by the R-Studio team extra complexity is added.
					</p>
				</div>

				<div className="mt-5" id="conclusion">
					<p className="title is-3 mb-1">Conclusion</p>
					<p>
						R and its maintainers are a perfect example as to why open-source
						platforms are not always the be-all and end-all. As much as they
						need solid input from the community, their organisational
						counterparts must have the best interests of the language at
						heart. In this case, however, the R-Studio organisation is
						exploiting the niche market which they planted themselves into;
						Research institutions with deep pockets, data analysts that have a
						DevOps team available to them, or hobbyist data analysts that are
						only trying out new technologies.
						<br />
						Python is gaining in popularity within the data analysis space,
						and I would guess this is in part due to being a transferrable
						skill. R will need a lot of work put into it if it wishes to
						compete in the same space, otherwise, I can see it slip into the
						same black hole as legacy languages from the 70s and 80s in the
						Computer Science space.
					</p>
				</div>
			</div>
			<div className="column is-one-fifth" />
		</Layout>
	);
}
