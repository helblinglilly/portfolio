import Link from "next/link";
import { Card } from "../../atoms/Card";
import { CarouselItem } from "../../ui/carousel";
import { ProjectDialog } from "../ProjectDialog";
import { ProjectFavicon } from "../ProjectFavicon";

function QrProjectContent() {
  return (
    <div className="grid gap-4">
      <p className="text-foreground">
        As I'm an Android user but also love macOS, Apple has condemned me to a
        life of overtly difficult content sharing across devices.
      </p>

      <p className="text-foreground">
        My top use case for this is the sharing of links, especially in a way
        that does not rely on any other apps, auth sessions or company-managed
        device-network policies.
      </p>

      <p className="text-foreground">
        By building a tool myself, I've solved the discoverability problem, and
        it's generic enough and easy enough to use that I find myself using it
        beyond the initial use case of sharing from my work laptop to my
        personal phone.
      </p>

      <br />

      <Link
        href="https://qr.helbling.uk/https://youtu.be/dQw4w9WgXcQ?si=yy2dw0iy6zbyJkyW"
        target="_blank"
        className="link text-center"
      >
        Just type qr.helbling.uk/ and append the URL to get a QR code
      </Link>
    </div>
  );
}

export function QrProject() {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <ProjectDialog title="qr.helbling.uk" content={<QrProjectContent />}>
        <Card>
          <div className="flex flex-row justify-start gap-4 pb-2 items-center">
            <ProjectFavicon
              projectName="qr.helbling.uk"
              url="https://static.helbling.uk/qr.helbling.uk.favicon.ico"
            />
            <h3 className="text-lg font-semibold ">qr.helbling.uk</h3>
          </div>

          <p className="text-foreground">
            Quickly turn any link into a scannable QR code to allow for easy
            sharing across different device ecosystems.
          </p>
        </Card>
      </ProjectDialog>
    </CarouselItem>
  );
}
