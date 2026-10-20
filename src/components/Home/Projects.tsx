import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card } from "../atoms/Card";
import { ProjectFavicon } from "./ProjectFavicon";

export const Projects = ({}: {}) => {
  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">
        My projects
      </h2>

      <p>
        I have an intrinsic drive to build things, and nine times out of ten,
        they end up being digital. So have a nosey, try things out, and explore
        as much or as little as you like!
      </p>

      <div className="">
        <Carousel className="px-8 pt-4 md:px-12">
          <CarouselPrevious />
          <CarouselNext />
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <article className="h-full">
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
                    Starting in 2021, this is my longest-running project,
                    complete with an Android app and Website.
                  </p>
                </Card>
              </article>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <article className="h-full">
                <Card>
                  <div className="flex flex-row justify-start gap-4 pb-2 items-center">
                    <ProjectFavicon
                      projectName="Timesheet"
                      url="https://timesheet.helbling.uk/favicon.ico"
                    />

                    <h3 className="text-lg font-semibold ">Timesheet</h3>
                  </div>

                  <p className="text-foreground">
                    A self-hostable, easy to use, web-based time tracking tool,
                    complete with user authentication.
                  </p>
                </Card>
              </article>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <article className="h-full">
                <Card>
                  <div className="flex flex-row justify-start gap-4 pb-2 items-center">
                    <ProjectFavicon
                      projectName="reddit.helbling.uk"
                      url="https://reddit.helbling.uk/favicon.png"
                    />

                    <h3 className="text-lg font-semibold ">
                      TTS Reddit finder
                    </h3>
                  </div>

                  <p className="text-foreground">
                    Surfaces videos, thumbnails and proper app-deeplinks for a
                    select number of Youtube channels that upload TTS reddit
                    threads.
                  </p>
                </Card>
              </article>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <article className="h-full">
                <Card>
                  <div className="flex flex-row justify-start gap-4 pb-2 items-center">
                    <ProjectFavicon
                      projectName="qr.helbling.uk"
                      url="https://static.helbling.uk/qr.helbling.uk.favicon.ico"
                    />
                    <h3 className="text-lg font-semibold ">qr.helbling.uk</h3>
                  </div>

                  <p className="text-foreground">
                    Quickly turn any link into a scannable QR code to allow for
                    easy sharing across different device eco-systems.
                  </p>
                </Card>
              </article>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <article className="h-full">
                <Card>
                  <div className="flex flex-row justify-start gap-4 pb-2 items-center">
                    <ProjectFavicon
                      projectName="avatar.helbling.uk"
                      url="https://avatar.helbling.uk/helbling.uk"
                    />

                    <h3 className="text-lg font-semibold ">
                      avatar.helbling.uk
                    </h3>
                  </div>

                  <p className="text-foreground">
                    JDenticon avatar microservice to quickly provide profile
                    avatars in different apps.
                  </p>
                </Card>
              </article>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <article className="h-full">
                <Card>
                  <div className="flex flex-row justify-start gap-4 pb-2 items-center">
                    <ProjectFavicon
                      projectName="img.helbling.uk"
                      url="https://img.helbling.uk/favicon.svg"
                    />
                    <h3 className="text-lg font-semibold ">img.helbling.uk</h3>
                  </div>

                  <p className="text-foreground">
                    Strips sensitive metadata from images, to allow for safe
                    storage in external mediums.
                  </p>
                </Card>
              </article>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <article className="h-full">
                <Card>
                  <div className="flex flex-row justify-start gap-4 pb-2 items-center">
                    <ProjectFavicon
                      projectName="mp4.helbling.uk"
                      url="https://mp4.helbling.uk/favicon.png"
                    />
                    <h3 className="text-lg font-semibold ">mp4.helbling.uk</h3>
                  </div>

                  <p className="text-foreground">
                    POC using ffmpeg in the browser to power an MP4 video
                    converter. It's slow, don't use this.
                  </p>
                </Card>
              </article>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <article className="h-full">
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
              </article>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};
