import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/Accordion";
import React from "react";

export default function ToolsProfessional(){
  return (
    <>
      <h2 className='h2'>Tech Stack</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Mobile App Development</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              <p>React Native targetting Android & iOS</p>
              <p>Data and versioning managed via Backend for Frontend</p>
            </div>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
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
        <AccordionItem value="item-3">
          <AccordionTrigger>Deployment</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-1">
              <p>Infrastructure to AWS via Terraform</p>
              <p>Docker images to kubernetes clusters</p>
              <p>CI/CD orchestrated by Gitlab</p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
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
    // <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
    //   <div>
    //     <h2 className='h2'>Stack</h2>
    //     <ul>
    //       <li>React Native ✨</li>
    //       <ul>
    //         <li><i>As of October 2024</i></li>
    //       </ul>
    //       <li>NextJS / React / Typescript</li>
    //       <li>GraphQL via Apollo</li>
    //       <li>AWS via Terraform</li>
    //       <li>kubernetes and Docker</li>
    //       <li>NewRelic</li>
    //       <li>Git(lab) and Jira</li>
    //     </ul>
    //   </div>

    //   <div>
    //     <h2 className="h2 pt-4 md:pt-0">What I've worked with before</h2>

    //     <ul>
    //       <li>.NET</li>
    //       <li>MSSQL</li>
    //       <li>Jenkins</li>
    //       <li>Python / Databricks / Pandas</li>
    //     </ul>
    //   </div>
    // </div>

  )
}
