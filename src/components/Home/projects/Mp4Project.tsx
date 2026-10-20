import Link from "next/link";
import { Card } from "../../atoms/Card";
import { CarouselItem } from "../../ui/carousel";
import { ProjectDialog } from "../ProjectDialog";
import { ProjectFavicon } from "../ProjectFavicon";

function Mp4ProjectContent() {
  return (
    <div className="grid gap-4">
      <p className="text-foreground">
        I've got a{" "}
        <Link
          href="https://github.com/helblinglilly/mac-quick-actions"
          target="_blank"
          className="link"
        >
          Quick Action on macOS
        </Link>{" "}
        to compress video files. I originally built it because the GitLab instance
        I was using at the time had an 8 MB file limit, and we would frequently
        upload screen recordings as QA evidence.
      </p>

      <p className="text-foreground">
        Anyway, I found a WASM-based ffmpeg library and wanted to see how it
        compares to the native version.
      </p>
      <p className="text-foreground">
        Conclusion? It's awfully slow. Don't use this. But it was fun to try!
      </p>

      <Link
        href="https://mp4.helbling.uk"
        target="_blank"
        className="link text-center"
      >
        mp4.helbling.uk
      </Link>
    </div>
  );
}

export function Mp4Project() {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <ProjectDialog title="mp4.helbling.uk" content={<Mp4ProjectContent />}>
        <Card>
          <div className="flex flex-row justify-start gap-4 pb-2 items-center">
            <ProjectFavicon
              projectName="mp4.helbling.uk"
              url="https://mp4.helbling.uk/favicon.png"
            />
            <h3 className="text-lg font-semibold ">mp4.helbling.uk</h3>
          </div>

          <p className="text-foreground">
            POC using ffmpeg in the browser to power an MP4 video converter.
            It's slow. Don't use this.
          </p>
        </Card>
      </ProjectDialog>
    </CarouselItem>
  );
}
