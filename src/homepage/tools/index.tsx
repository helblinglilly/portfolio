import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";

export default function ToolsProfessional() {
  return (
    <>
      <h2 className="h2">Tech Stack</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" data-umami-event="accordion-mobile">
          <AccordionTrigger>Mobile App Development</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              <p>React Native targetting Android & iOS</p>
              <p>Maestro for E2E testing</p>
              <p>
                Integrating tightly with a Backend for Frontend reach as many
                users as possible.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" data-umami-event="accordion-browser">
          <AccordionTrigger>Browser Experiences</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              <div className="pb-2 grid gap-1">
                <p>Typescript first</p>
                <p>Consuming GraphQL and REST endpoints</p>
              </div>

              <div className="pb-2 grid gap-1">
                <p className="font-bold">Testing</p>
                <ul>
                  <li>
                    <p>Vitest/Jest Unit Tests</p>
                  </li>
                  <li>
                    <p>
                      Mock Service Worker to black-box test at the network
                      boundaries
                    </p>
                  </li>
                  <li>
                    <p>Playwright End to End</p>
                  </li>
                  <li>
                    <p>Storybook for collaboration</p>
                  </li>
                </ul>
              </div>

              <div className="grid gap-1">
                <p className="font-bold">On the client</p>
                <ul>
                  <li>
                    <p>React professionally, Svelte for personal use</p>
                  </li>
                  <li>
                    <p>Tailwind (preferred), CSS/SCSS</p>
                  </li>
                </ul>
              </div>

              <div className="grid gap-1">
                <b className="font-bold">On the server</b>
                <ul>
                  <li>NextJS</li>
                  <li>Node</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" data-umami-event="accordion-deployment">
          <AccordionTrigger>Deployment</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-1">
              <p>Infrastructure to AWS via Terraform</p>
              <p>Docker images to kubernetes clusters</p>
              <p>CI/CD orchestrated by Gitlab</p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" data-umami-event="accordion-manage">
          <AccordionTrigger>
            Tech management and operational health
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-1">
              <p>User metrics via Google Tag Manager and Firebase analytics</p>
              <p>Observability and Alerting with New Relic</p>
              <p>
                Source control through Git, managed on Gitlab or Github for
                personal projects
              </p>
              <p>Tasks completed in sprints, managed in Jira</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
