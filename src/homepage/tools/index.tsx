import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/Accordion";

export default function ToolsProfessional(){
  return (
    <>
      <h2 className='h2'>Tech Stack</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" data-umami-event="accordion-mobile">
          <AccordionTrigger>Mobile App Development</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              <p>React Native targetting Android & iOS</p>
              <p>Data and versioning managed via Backend for Frontend</p>
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
                  <li><p>Jest Unit Tests</p></li>
                  <li><p>Storybook for collaboration</p></li>
                  <li><p>Cypress End to End</p></li>
                  <li><p>Mock Service Worker</p></li>
                </ul>
              </div>

              <div className="grid gap-1">
                <p className="font-bold">On the client</p>
                <ul>
                  <li><p>React</p></li>
                  <li><p>Tailwind (preferred), CSS/SCSS</p></li>
                </ul>
              </div>

              <div className="grid gap-1">
                <b className="font-bold">On the server</b>
                <ul>
                  <li>NextJS</li>
                  <li>Node</li>
                  <li>.NET</li>
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
          <AccordionTrigger>Management and Health</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-1">
              <p>Observability and Alerting with New Relic, Sentry or Instana</p>
              <p>Source control through Git, managed on Gitlab</p>
              <p>Tasks completed in sprints, managed in Jira</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
