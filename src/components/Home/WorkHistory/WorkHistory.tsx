import { Card } from "@/components/atoms/Card";
import {
  Carousel,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { ProjectFavicon } from "../ProjectFavicon";

export const WorkHistory = ({}: {}) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight mb-2">
          Professional Experience
        </h2>

        <p>
          I've joined the industry in 2021, after graduating my batchelors
          degree with a 1:1 in Computer Science from the University of Kent. My
          story into computing isn't anything special, I knew I wanted to do
          this since I was 13 and I've worked hard to make that dream come true.
        </p>

        <Carousel className="px-8 pt-4 md:px-12">
          <CarouselPrevious />
          <CarouselNext />
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <article className="h-full">
                <Card>
                  <div className="flex flex-row justify-between gap-4 pb-2 items-center">
                    <div className="flex flex-row justify-left gap-4 items-center">
                      <h3 className="text-lg font-semibold ">?</h3>
                    </div>

                    <span className="relative flex size-3 mr-6">
                      <span className="absolute inline-flex h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-brand opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-brand"></span>
                    </span>
                  </div>
                  <p className="text-foreground">
                    Later this month, I'll be starting a new adventure!
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

                      <h3 className="text-lg font-semibold ">On the Beach</h3>
                    </div>
                    <p className="text-sm font-light">2023-2026</p>
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

                      <h3 className="text-lg font-semibold ">NHS Digital</h3>
                    </div>

                    <p className="text-sm font-light">2021-2023</p>
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
