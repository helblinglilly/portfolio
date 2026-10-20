import Link from "next/link";
import { Card } from "../../atoms/Card";
import { CarouselItem } from "../../ui/carousel";
import { ProjectDialog } from "../ProjectDialog";
import { ProjectFavicon } from "../ProjectFavicon";

function SocialPreviewProjectContent() {
  return (
    <div className="grid gap-4">
      <p className="text-foreground">
        Meta tags and how they showed up on social media were causing me grief.
      </p>

      <p className="text-foreground">
        I built this as I was getting tired of finding the correct tags in the
        HTML head each time. Curious what the issue was? Social media previews
        use the initial HTML before JS hydrates.
      </p>

      <Link
        href="https://socialpreview.helbling.uk/?link=https://bbc.co.uk"
        target="_blank"
        className="link text-center"
      >
        socialpreview.helbling.uk
      </Link>
    </div>
  );
}

export function SocialPreviewProject() {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <ProjectDialog
        title="socialpreview.helbling.uk"
        content={<SocialPreviewProjectContent />}
      >
        <Card>
          <div className="flex flex-row justify-start gap-4 pb-2 items-center">
            <ProjectFavicon projectName="socialpreview.helbling.uk" />

            <h3 className="text-lg font-semibold ">
              socialpreview.helbling.uk
            </h3>
          </div>

          <p className="text-foreground">
            Renders a website's meta tags to allow for easier debugging.
          </p>
        </Card>
      </ProjectDialog>
    </CarouselItem>
  );
}
