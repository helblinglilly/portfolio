import Link from "next/link";
import { Card } from "../../atoms/Card";
import { CarouselItem } from "../../ui/carousel";
import { ProjectDialog } from "../ProjectDialog";
import { ProjectFavicon } from "../ProjectFavicon";

function PokecompanionProjectContent() {
  return (
    <div className="grid gap-4">
      <p className="text-foreground">
        My tech playground that eventually graduated into my flagship project!
        It's gone through two web frameworks, three hosts and countless "what if
        I rewrote it like that?" moments dating back to 2021.
      </p>

      <p>
        My focus has been on the Android app recently, so I'd recommend you give
        that a look! The website will be catching up soon!
      </p>

      <div className="grid sm:grid-cols-2 w-full items-center">
        <Link
          href="https://pokecompanion.com"
          target="_blank"
          className="link text-center"
        >
          Visit Pokécompanion
        </Link>

        <Link
          href="https://play.google.com/store/apps/details?id=com.helblinglilly.pokecompanion"
          aria-label="Get the Pokécompanion app on Google Play"
          target="_blank"
        >
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
          />
        </Link>
      </div>
    </div>
  );
}

export function PokecompanionProject() {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <ProjectDialog
        title="Pokécompanion"
        content={<PokecompanionProjectContent />}
      >
        <Card>
          <div className="flex flex-row justify-between gap-4 pb-2 items-center">
            <div className="flex flex-row justify-left gap-4 items-center">
              <ProjectFavicon
                projectName="Pokecompanion"
                url="https://pokecompanion.com/favicon.png"
              />

              <h3 className="text-lg font-semibold ">Pokécompanion</h3>
            </div>

            <span className="relative flex size-3 mr-6">
              <span className="absolute inline-flex h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-brand"></span>
            </span>
          </div>
          <p className="text-foreground">
            Started in 2021, this is my longest-running project, complete with
            an Android app and website.
          </p>
        </Card>
      </ProjectDialog>
    </CarouselItem>
  );
}
