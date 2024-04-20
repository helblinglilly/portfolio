import SocialPreview from "@/components/SocialPreview";
import Link from "next/link";

export default function Pokecompanion() {
  return (
    <article id="pokecompanion" className="grid gap-3">
      <h3 className='text-xl font-semibold mb-2'>
        <Link href="#pokecompanion" className="anchor">
          Pokécompanion
        </Link>
      </h3>

      <p>
        My passion project, which is now on its third iteration using Svelte.
        While plenty of front-ends to the world of Pokémon already exist, none
        of them solve my needs quite right. On mobile, the site needs to feel
        light-weight and easily digestable. Additional features of the site
        should seek to be non-intrusive.
      </p>
      <p>
        At its core, it is just a PokeAPI frontend. But a number of microservices
        have sprawled from it. Lots of sites also let their data become out of date
        which is incredibly infuriating - and one day that will be me, so an auto-update
        functionality was also quite important.
      </p>

      <p>
        Product and project aside, it's also been a massive learning opportunity
        to apply new tech to a real product, such as:
      </p>

      <ul>
        <li id="update-service"><Link href="https://github.com/helblinglilly/pokecompanion-lambda" target='_blank' className='link'>Auto-ingesting new data without need for manual input</Link></li>
        <ul>
          <li>Using AWS Lambda and SQS</li>
          <li>Auto-deploying changes to a Github Repo</li>
        </ul>
        <li>Using <Link href="https://pocketbase.io/" target="_blank" className='link'>Pocketbase</Link> as a simple backend</li>
        <ul>
          <li>Handling OAuth</li>
          <li>Deploying to AWS with proper backup strategies</li>
          <li>
            <Link href="https://github.com/helblinglilly/aws-pocketbase" target='_blank' className='link'>
              github.com/helblinglilly/aws-pocketbase
            </Link>
          </li>
        </ul>
        <li>Using Cloudflare</li>
        <ul>
          <li>Pages projects to host this site</li>
          <li>R2 to host <Link href="https://socialpreviews.pokecompanion.helbling.uk/pokemon/1-shiny-female.png" className='link' target='_blank'>social media preview images</Link></li>
          <li id="pokecompanion-workers">Workers</li>
          <ul>
            <li>To generate user avatars: <Link href="https://avatar.helbling.uk/my_profile" target='_blank' className='link'>avatar.helbling.uk</Link></li>
            <li>To debug social media previews: <Link href="https://socialpreview.helbling.uk?link=https://helbling.uk" target='_blank' className='link'>socialpreview.helbling.uk</Link></li>
          </ul>
        </ul>
        <li>Observability</li>
        <ul>
          <li>Error reporting with Sentry</li>
          <li>Log ingest with Axiom</li>
          <li>Unify the above with New Relic</li>
        </ul>
      </ul>
      <div className="inlineWrapper mt-3">
        <SocialPreview
          url="https://pokecompanion.helbling.uk"
        />
        <SocialPreview
          url="https://github.com/helblinglilly/pokecompanion"
        />
      </div>
    </article>
  )
}