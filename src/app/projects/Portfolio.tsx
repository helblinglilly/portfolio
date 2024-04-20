import SocialPreview from "@/components/SocialPreview";
import Link from "next/link";

export default function Portfolio() {
  return (
    <article id="portfolio">
      <h3 className='text-xl font-semibold mb-2'>
        <Link href="#portfolio" className="anchor">
          Portfolio
        </Link>
      </h3>
      <p>This site, built with NextJS, MDX and Tailwind deployed to Cloudflare.</p>
      <p>Mostly a space to express myself, showcase my work and document my experiences.</p>
      <div className="w-full flex justify-center mt-3 mb-3">
        <SocialPreview url="https://github.com/helblinglilly/portfolio" />
      </div>
    </article>
  )
}