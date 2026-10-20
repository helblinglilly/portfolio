import Link from "next/link";
import { Card } from "../../atoms/Card";
import { CarouselItem } from "../../ui/carousel";
import { ProjectDialog } from "../ProjectDialog";
import { ProjectFavicon } from "../ProjectFavicon";

function TimesheetProjectContent() {
  return (
    <div className="grid gap-4">
      <p className="text-foreground">
        To help me manage my work-life balance and later keep on-call records,
        I wanted to build a simple site that I could access from my personal and
        work devices.
      </p>

      <p className="text-foreground">
        Later, I built this out to be easily self-hostable by anyone, which led
        to me encountering a whole new set of challenges.
      </p>

      <Link
        href="https://timesheet.helbling.uk"
        target="_blank"
        className="link text-center"
      >
        Check it out at timesheet.helbling.uk
      </Link>
    </div>
  );
}

export function TimesheetProject() {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <ProjectDialog title="Timesheet" content={<TimesheetProjectContent />}>
        <Card>
          <div className="flex flex-row justify-start gap-4 pb-2 items-center">
            <ProjectFavicon
              projectName="Timesheet"
              url="https://timesheet.helbling.uk/favicon.ico"
            />

            <h3 className="text-lg font-semibold ">Timesheet</h3>
          </div>

          <p className="text-foreground">
            A self-hostable, easy-to-use, web-based time-tracking tool, complete
            with user authentication.
          </p>
        </Card>
      </ProjectDialog>
    </CarouselItem>
  );
}
