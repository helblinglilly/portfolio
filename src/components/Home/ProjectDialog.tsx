"use client";

import React from "react";
import { Card } from "../atoms/Card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export function ProjectDialog({
  title,
  children,
  content,
}: {
  title: string;
  children: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <Dialog>
      <article className="relative h-full [&>div]:transition-colors hover:[&>div]:bg-accent hover:[&_h3]:text-accent-foreground hover:[&_p]:text-accent-foreground focus-within:[&>div]:bg-accent focus-within:[&_h3]:text-accent-foreground focus-within:[&_p]:text-accent-foreground">
        {children}
        <DialogTrigger
          aria-label={`Read more about ${title}`}
          data-umami-event="project-open"
          data-umami-event-project={title}
          className="absolute inset-0 cursor-pointer touch-manipulation rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </article>
      <DialogContent aria-describedby={undefined}>
        <Card>
          <DialogTitle className="mb-4 pr-12 text-lg font-semibold">
            {title}
          </DialogTitle>
          {content}
        </Card>
      </DialogContent>
    </Dialog>
  );
}
