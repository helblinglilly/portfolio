import Link from "next/link";
import { Card } from "../../atoms/Card";
import { CarouselItem } from "../../ui/carousel";
import { ProjectDialog } from "../ProjectDialog";
import { ProjectFavicon } from "../ProjectFavicon";

function TtsRedditFinderProjectContent() {
  return (
    <>
      <p className="text-foreground">
        Every night, we put on these text-to-speech Reddit videos as a form of
        white noise to help us fall asleep.
      </p>
      <p className="text-foreground">
        Despite this established routine of over a year, YouTube does not make
        this nightly search any easier, as different channels upload at different
        times and the search function is just unusable.
      </p>
      <p className="text-foreground">
        To avoid this nightly frustration, I've built a little site to just
        surface videos from select channels.
      </p>

      <Link
        href="https://reddit.helbling.uk"
        target="_blank"
        className="link text-center pt-4"
      >
        Make your niche bedtime routine less frustrating with <br />
        https://reddit.helbling.uk
      </Link>

      <br />

      <p className="pt-8 text-center font-light text-sm">
        <i className="text-foreground text-center">
          Btw, ever notice how every web-based YouTube link refuses to open in
          the app? Can we{" "}
          <Link
            target="_blank"
            className="link"
            href="https://github.com/helblinglilly/bedtime-reddit/blob/main/src/domain.ts#L22"
          >
            stop that
          </Link>, please?
        </i>
      </p>
    </>
  );
}

export function TtsRedditFinderProject() {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <ProjectDialog
        title="TTS Reddit finder"
        content={<TtsRedditFinderProjectContent />}
      >
        <Card>
          <div className="flex flex-row justify-start gap-4 pb-2 items-center">
            <ProjectFavicon
              projectName="reddit.helbling.uk"
              url="https://reddit.helbling.uk/favicon.png"
            />

            <h3 className="text-lg font-semibold ">TTS Reddit finder</h3>
          </div>

          <p className="text-foreground">
            Surfaces videos, thumbnails and proper app deep links for a select
            number of YouTube channels that upload TTS Reddit threads.
          </p>
        </Card>
      </ProjectDialog>
    </CarouselItem>
  );
}
