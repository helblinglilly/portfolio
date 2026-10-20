import { Card } from "@/components/atoms/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ToolsProfessional() {
  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">Tech Stack</h2>

      <p>
        Code is just the means by which we trick computers into doing what we
        want. I'm always keen to work with a new language, but these are the
        tools and technologies I use every day, the ones I know well and can can
        execute with quickly.
      </p>

      <br />
      <p>In a nutshell, I love working with Typescript!</p>

      <Tabs defaultValue="mobile" className="mt-4 w-full min-w-0 gap-4">
        <div className="overflow-x-auto pb-1">
          <TabsList aria-label="Tech stack categories" className="min-w-full">
            <TabsTrigger value="browser" data-umami-event="tabs-browser">
              Browsers
            </TabsTrigger>
            <TabsTrigger value="mobile" data-umami-event="tabs-mobile">
              Apps
            </TabsTrigger>
            <TabsTrigger value="backend" data-umami-event="tabs-backend">
              Backend
            </TabsTrigger>
            <TabsTrigger value="infra" data-umami-event="tabs-infra">
              Infra
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="mobile">
          <Card>
            <article className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <h4 className="text-md font-semibold">Rendering</h4>
                <p>Build once, debug everywhere with React Native.</p>
                <p>
                  This made transitioning from WebDev to Mobile easy, and
                  rendering system-native elements (as opposed to flutter) is
                  much preferred.
                </p>
              </div>

              <div>
                <h4 className="text-md font-semibold">Data</h4>
                <p>APIs abstracted behind a BFF with full-stack typesafety.</p>
                <p>Product tracking with Google Analytics.</p>
                <p>New Relic for technical health.</p>
              </div>

              <div>
                <h4 className="text-md font-semibold">Testing</h4>
                <p>
                  Unit tests with Jest, React Testing Library and Mock Service
                  Worker.
                </p>
                <p>E2E tests across platform with Maestro.</p>
              </div>
            </article>
          </Card>
        </TabsContent>
        <TabsContent value="browser">
          <Card>
            <article className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <h4 className="text-md font-semibold">Frameworks</h4>
                <ul>
                  <li>React, NextJS professionally</li>
                  <li>Svelte for personal projects</li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold">Styling</h4>
                <ul>
                  <li>Tailwind (preferred)</li>
                  <li>Styled components</li>
                  <li>Good old CSS</li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold">Testing</h4>
                <ul>
                  <li>Vitest / Jest</li>
                  <li>React Testing Library</li>
                  <li>Mock Service Worker</li>
                  <li>Playwright (preferred) and Cypress</li>
                </ul>
              </div>
            </article>
          </Card>
        </TabsContent>
        <TabsContent value="backend">
          <Card>
            <article className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <h4 className="text-md font-semibold">Frameworks</h4>
                <ul>
                  <li>Node / Express</li>
                  <li>C# / .NET</li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold">Architecture Patterns</h4>
                <ul>
                  <li>Domain driven design</li>
                  <li>Event-driven architecture</li>
                  <li>Microservices</li>
                  <li>Serverless</li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold">Databases</h4>
                <ul>
                  <li>MySQL</li>
                  <li>PostgresQL</li>
                  <li>SQLite</li>
                  <li>BaaS (Supabase, Pocketbase) for personal use</li>
                </ul>
              </div>
            </article>
          </Card>
        </TabsContent>
        <TabsContent value="infra">
          <Card>
            <article className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-md font-semibold">Cloud Platforms</h4>
                <ul>
                  <li>AWS specific products</li>
                  <li>Kubernetes</li>
                  <li>Cloudflare</li>
                  <li>Hetzner (personal use only)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold">
                  Infrastructure as Code
                </h4>
                <ul>
                  <li>Terraform/OpenTofu</li>
                  <li>Git-ops all the way</li>
                  <li>Ansible (personal use only)</li>
                </ul>
              </div>
            </article>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
