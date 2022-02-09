import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <figure className="image has-text-centered">
            <Image src="/images/professional.jpg" id="profile" width={250} height={250} alt="Profile Picture"/>
        </figure>
        <div className="pt-4">
            <p className="title">About me</p>
            <p>{biography}</p>
            <div id="socialLinks" className="pt-3 pb-0">
                <p className="subtitle">Socials</p>
                <div className="socialContainer" id="git">
                    <Image src="/icons/git.svg" className="icon" alt="Github Icon" width={20} height={20} />
                    <Link href="https://github.com/helblingjoel">
                        <a className="ml-1">github.com/helblingjoel</a>
                    </Link>
                </div>
                <div className="socialContainer" id="twitter">
                    <Image src="/icons/twitter.svg" className="icon" alt="Twitter Icon" width={20} height={20} />
                    <Link href="https://twitter.com/_helblingjoel">
                        <a className="ml-1">twitter.com/_helblingjoel</a>
                    </Link>
                </div>
                <div className="socialContainer" id="instagram">
                    <Image src="/icons/instagram.svg" className="icon" alt="Instagram Icon" width={20} height={20} />
                    <Link href="https://instagram.com/helblingjoel">
                        <a className="ml-1">instagram.com/helblingjoel</a>
                    </Link>
                </div>
                <div className="socialContainer" id="linkedin">
                    <Image src="/icons/linkedin.svg" className="icon" alt="LinkedIn Icon" width={20} height={20} />
                    <Link href="https://www.linkedin.com/in/joel-helbling-707ba0171">
                        <a className="ml-1">linkedin.com/joel-helblingjoel</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

const biography = `Hi, I'm Joel and I'm currently 20 years old. 
I'm a Swiss software engineer working in Leeds after having studied at the 
University of Kent.\n
In my current development work at NHS Digital I'm focused on product maintenance
using C# and Javascript, as well as bringing a new product to the cloud through 
AWS and Kubernetes. `