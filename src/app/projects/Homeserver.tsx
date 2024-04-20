import SocialPreview from "@/components/SocialPreview";
import Link from "next/link";
import PiServerScreenshot from './piserver-screenshot.jpg';
import Image from "next/image";

export default function Homeserver() {
  return (
    <article id="homeesrver">
      <h3 className='text-xl font-semibold mb-2'>
        <Link href="#homeserver" className="anchor">
			Homeserver 
        </Link>
      </h3>
      <p>
		I have a handful of Raspberry Pi's acting as a homelab.
		This repo stores the configurations, and a NextJS App acting as
		a dashboard.
      </p>

      <p>
		When I saw that most "ready-made" homelab dashboards were essentially
		just glorified bookmark pages, I thought it would be a good opportunity
		to write one myself and build some apps into it.
      </p>
		
      <p>
		It includes a Timesheet app, to help with my time management when
		I'm working from home, and an energy usage and billing visualisation
		tool. The latter was really useful when prices started to rise to
		anticipate what kind of bills I could expect with different usage
		patterns.
      </p>

      <div className="inlineWrapper justify-center mt-3 mb-3">
        <Image src={PiServerScreenshot} alt="Dashboard screenshot" width={320}/>
        <SocialPreview url="https://github.com/helblinglilly/piserver" />
      </div>
    </article>
  )
}