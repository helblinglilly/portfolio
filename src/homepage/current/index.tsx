import React from "react";

export default function CurrentProfessional() {
  return (
    <React.Fragment>
      <div className="py-4">
        <h2 className="h2">Approach</h2>

        <div className="grid gap-2">
          <p className="">
            Validate solutions in production early and responsibly, delivering
            user value quicker. Backed by strong observability and graceful
            degregation, paving the way for fast iterations.
          </p>
          <p className="">
            Build strong systems and processes in teams that build genuine
            resilience and reduce single points of failure, technical or not.
          </p>
        </div>
      </div>

      <h2 className="h2 pb-2">Experience & Projects</h2>

      <div className="grid gap-2 pb-4">
        <h3 className="h3 font-bold text-lg">
          Pokécompanion<span className="ml-2 text-sm">2021 - present</span>
        </h3>
        <p>
          Active side project with a <a href="https://pokecompanion.com" className="link" target="_blank">website</a> and app on <a href="https://play.google.com/store/apps/details?id=com.helblinglilly.pokecompanion" className="link">Google Play</a>.
        </p>
      </div>

      <div className="grid gap-2 pb-4">
        <h3 className="h3 font-bold text-lg">
          On the Beach<span className="ml-2 text-sm">2023 - 2026</span>
        </h3>

        <ul className="grid gap-2 border-s border-[#F714B1] relative list-none ml-3 [&>li]:list-none">
          <li className="mt-2 ms-4 -start-1.5">
            <div
              style={{ insetInlineStart: "-0.4rem" }}
              className="absolute mt-1.5 h-3 w-3 rounded-full bg-[#F714B1] animate-pulse"
            />
            Reduce various team's delivery times via AI Dev Enablement team
          </li>
          <li className="mt-2 mb-2 ms-4 -start-1.5">
            <div
              style={{ insetInlineStart: "-0.4rem" }}
              className="absolute mt-1.5 h-3 w-3 rounded-full bg-[#F714B1]"
            />
            Architected and lead delivery of a Server-Driven UI framework delivered via a Backend for Frontend to the app
          </li>
          <li className="mb-2 ms-4 -start-1.5">
            <div
              style={{ insetInlineStart: "-0.4rem" }}
              className="absolute mt-1.5 h-3 w-3 rounded-full bg-[#F714B1]"
            />
            Team switch to the app team, increasing MAUs by 25% YOY
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
            's booking funnel migration to new tech platform
          </li>
          <li className="mb-2 ms-4 -start-1.5">
            <div
              style={{ insetInlineStart: "-0.4rem" }}
              className="absolute mt-1.5 h-3 w-3 rounded-full bg-[#F714B1]"
            />
            Run experiments and improvements in our eCommerce funnel
          </li>
        </ul>
      </div>

      <h3 className="h3 font-bold text-lg">
        NHS Digital <span className="ml-2 text-sm">2021 - 2023</span>
      </h3>
      <p>
        Maintained several .NET web and desktop applications and supported our AWS migration.
      </p>

    </React.Fragment>
  );
}
