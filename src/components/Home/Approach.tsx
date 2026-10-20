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

export const Approach = ({}: {}) => {
  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">Approach</h2>

      <p>
        I belive that the best products are built through collaboration, a
        shared sense of ownership, and an understanding of the role they play in
        our users' lives. My job is to help create that environment and build
        the tools and processes that make it easier for everyone, especially
        non-technical teammates, to try out ideas.
      </p>

      <br />

      <p>
        I like to validate solutions in production early and responsibly,
        delivering value to users sooner and learning from real-world use. In
        practice, this means understanding both how our systems are performing
        and whether the product is helping users, designing for graceful
        degradation when things go wrong, and continuously improving without
        being afraid to challenge the status quo.
      </p>

      <br />

      <p>
        In high-performing teams, everyone has room to grow beyond their core
        skillset, and roles become less rigid in day-to-day work. Engineers
        create designs, Product Owners fix bugs, and designers draft tracking
        specifications. Everyone benefits from a greater appreciation of each
        other's work. This takes psychological safety, open minds, and genuine
        collaboration. I'm always looking for opportunities to learn and grow,
        and I’m honoured to help create those opportunities for others.
      </p>
    </>
  );
};
