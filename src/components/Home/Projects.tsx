import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { PokecompanionProject } from "./projects/PokecompanionProject";
import { TimesheetProject } from "./projects/TimesheetProject";
import { TtsRedditFinderProject } from "./projects/TtsRedditFinderProject";
import { QrProject } from "./projects/QrProject";
import { AvatarProject } from "./projects/AvatarProject";
import { ImageProject } from "./projects/ImageProject";
import { Mp4Project } from "./projects/Mp4Project";
import { SocialPreviewProject } from "./projects/SocialPreviewProject";

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
            <PokecompanionProject />
            <TimesheetProject />
            <TtsRedditFinderProject />
            <QrProject />
            <AvatarProject />
            <ImageProject />
            <Mp4Project />
            <SocialPreviewProject />
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};
