import { Card } from "@/components/atoms/Card";
import {
  Carousel,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ProjectFavicon } from "./ProjectFavicon";

export const WorkHistory = ({}: {}) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight mb-2">
          Professional Experience
        </h2>

        <p>
          Professional Experience I joined the industry in 2021 after graduating
          from the University of Kent with a first-class honours degree in
          Computer Science. I've known I wanted to work in computing since I was
          13, and I’ve worked hard to turn that ambition into a career.
        </p>

        <Carousel className="px-8 pt-4 md:px-12">
          <CarouselPrevious />
          <CarouselNext />
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <article className="h-full">
                <Card>
                  <div className="flex flex-row justify-between gap-4 pb-2 items-center">
                    <div className="flex flex-row justify-left gap-4 items-center w-full">
                      <ProjectFavicon
                        projectName="Akeneo"
                        url="https://www.akeneo.com/wp-content/uploads/2024/07/cropped-logo-akeneo-Symbol@2x-32x32.png"
                      />

                      <div className="grid">
                        <h3 className="text-lg font-semibold ">Akeneo</h3>
                        <p className="text-xs font-extralight">2026</p>
                      </div>

                      <div className="ml-auto">
                        <span className="relative flex size-3 mr-6">
                          <span className="absolute inline-flex h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-brand opacity-75"></span>
                          <span className="relative inline-flex size-3 rounded-full bg-brand"></span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground">
                    B2B Product Experience company, where I'm working on the{" "}
                    <a
                      href="https://www.akeneo.com/activation/"
                      className="link"
                      target="_blank"
                    >
                      Activation
                    </a>{" "}
                    product
                  </p>
                </Card>
              </article>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <article className="h-full">
                <Card>
                  <div className="flex flex-row justify-between pb-2 items-center">
                    <div className="flex flex-row justify-start gap-4 items-center">
                      <ProjectFavicon
                        projectName="On the Beach"
                        url="https://onthebeach.co.uk/favicon.ico"
                      />

                      <div className="grid">
                        <h3 className="text-lg font-semibold ">On the Beach</h3>
                        <p className="text-xs font-extralight">2023-2026</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground">
                    UK-based online travel agent with ~500 employees, ~100 of
                    those in the interal Product & Technology department.
                  </p>
                </Card>
              </article>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <article className="h-full">
                <Card>
                  <div className="flex flex-row justify-between pb-2 items-center">
                    <div className="flex flex-row justify-start gap-4 items-center">
                      <ProjectFavicon
                        projectName="NHS Digital"
                        url="https://digital.nhs.uk/webfiles/1785841778050/icons/favicon.ico"
                      />

                      <div className="grid">
                        <h3 className="text-lg font-semibold ">NHS Digital</h3>
                        <p className="text-xs font-extralight">2021-2023</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground">
                    Graduate scheme with England's digital public health body.
                    Later absorbed into broader NHS England.
                  </p>
                </Card>
              </article>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};
