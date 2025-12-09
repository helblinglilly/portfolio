import React from "react";

export default function CurrentProfessional() {
  return (
    <React.Fragment>
      <div className="py-4">
        <h2 className="h2">Approach</h2>

        <div className="grid gap-2">
          <p className="">
            Validate solution in production early and responsibly, delivering
            user value sooner. Backed by strong observability and graceful
            degregation, this pathes the way for fast iterations.
          </p>
          <p className="">
            Build strong systems and processes in teams that build genuine
            resilience and reduce single points of failure, technical or not.
          </p>
        </div>
      </div>

      <div className="grid gap-2 pb-4">
        <h3 className="h3 font-bold text-lg">
          On the Beach<span className="ml-2 text-sm">2023 - present</span>
        </h3>

        <ul className="grid gap-2 border-s border-[#F714B1] relative list-none ml-3">
          <li className="mt-2 mb-2 ms-4 -start-1.5">
            <div
              style={{ insetInlineStart: "-0.4rem" }}
              className="absolute mt-1.5 h-3 w-3 rounded-full bg-[#F714B1] animate-pulse"
            />
            Architected and lead the delivery of a server-driven UI platform to{" "}
            <a href="https://www.onthebeach.co.uk/app" className="link">
              our app
            </a>
          </li>
          <li className="mb-2 ms-4 -start-1.5">
            <div
              style={{ insetInlineStart: "-0.4rem" }}
              className="absolute mt-1.5 h-3 w-3 rounded-full bg-[#F714B1]"
            />
            Switched teams to work in the mobile app space
          </li>
          <li className="mb-2 ms-4 -start-1.5">
            <div
              style={{ insetInlineStart: "-0.4rem" }}
              className="absolute mt-1.5 h-3 w-3 rounded-full bg-[#F714B1]"
            />
            In role promotion
          </li>
          <li className="mb-2 ms-4 -start-1.5">
            <div
              style={{ insetInlineStart: "-0.4rem" }}
              className="absolute mt-1.5 h-3 w-3 rounded-full bg-[#F714B1]"
            />
            Lead{" "}
            <a href="https://sunshine.co.uk" className="link">
              sunshine.co.uk
            </a>
            's booking funnel migration
          </li>
          <li className="mb-2 ms-4 -start-1.5">
            <div
              style={{ insetInlineStart: "-0.4rem" }}
              className="absolute mt-1.5 h-3 w-3 rounded-full bg-[#F714B1]"
            />
            Joined the Booking Path Team
          </li>
        </ul>
      </div>

      <h3 className="h3 font-bold text-lg">
        NHS Digital <span className="ml-2 text-sm">2021 - 2023</span>
      </h3>
      <p>
        Joined on a graduate scheme working in the Pathways team. Maintained
        several .NET applications and supported our AWS migration.
      </p>
    </React.Fragment>
  );
}
