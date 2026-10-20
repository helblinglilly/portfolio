import Link from "next/link";
import { Card } from "../../atoms/Card";
import { CarouselItem } from "../../ui/carousel";
import { ProjectDialog } from "../ProjectDialog";
import { ProjectFavicon } from "../ProjectFavicon";

function ImageProjectContent() {
  return (
    <div className="grid gap-4">
      <p className="text-foreground">
        Just a heads-up: this was a one-shot prompt that ran for about 20 minutes
        from prompt to deployment.
      </p>

      <p className="text-foreground">
        I wanted users to be able to use their own images as profile pictures
        for Timesheet. But storing them could mean collecting (and thereby
        risking) the attached geolocation data.
      </p>
      <p className="text-foreground">
        To avoid this ever being a risk on my personal projects, I wanted to
        build this as a reusable service. By giving it a frontend, I can use it
        myself when uploading images to dodgy services as well.
      </p>

      <Link
        href="https://img.helbling.uk"
        target="_blank"
        className="link text-center"
      >
        Use it yourself, img.helbling.uk
      </Link>
    </div>
  );
}

export function ImageProject() {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <ProjectDialog title="img.helbling.uk" content={<ImageProjectContent />}>
        <Card>
          <div className="flex flex-row justify-start gap-4 pb-2 items-center">
            <ProjectFavicon
              projectName="img.helbling.uk"
              url="https://img.helbling.uk/favicon.svg"
            />
            <h3 className="text-lg font-semibold ">img.helbling.uk</h3>
          </div>

          <p className="text-foreground">
            Strips sensitive metadata from images to allow for safe storage in
            external media.
          </p>
        </Card>
      </ProjectDialog>
    </CarouselItem>
  );
}
