import Link from "next/link";
import { Card } from "../../atoms/Card";
import { CarouselItem } from "../../ui/carousel";
import { ProjectDialog } from "../ProjectDialog";
import { ProjectFavicon } from "../ProjectFavicon";

function AvatarProjectContent() {
  return (
    <div className="grid gap-4">
      <p className="text-foreground">
        <Link href="https://jdenticon.com/" className="link" target="_blank">
          JDenticon
        </Link>{" "}
        is a cool library, and I initially needed a profile-picture solution for
        Pokécompanion.
      </p>

      <p>
        Its function is generic enough that I thought it would make sense to
        deploy this as a Cloudflare Worker so that it can be reused for projects
        in the future.
      </p>

      <Link
        href="https://avatar.helbling.uk/jdenticon-input"
        target="_blank"
        className="link text-center"
      >
        The service just returns a plain .svg file
      </Link>
    </div>
  );
}

export function AvatarProject() {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <ProjectDialog
        title="avatar.helbling.uk"
        content={<AvatarProjectContent />}
      >
        <Card>
          <div className="flex flex-row justify-start gap-4 pb-2 items-center">
            <ProjectFavicon
              projectName="avatar.helbling.uk"
              url="https://avatar.helbling.uk/helbling.uk"
            />

            <h3 className="text-lg font-semibold ">avatar.helbling.uk</h3>
          </div>

          <p className="text-foreground">
            JDenticon avatar microservice to quickly provide profile avatars in
            different apps.
          </p>
        </Card>
      </ProjectDialog>
    </CarouselItem>
  );
}
