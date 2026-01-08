import Link from "next/link";
import { notFound } from "next/navigation";
import type React from "react";

interface IProject {
  // biome-ignore lint/suspicious/noExplicitAny: Dynamic type of mdx documents unknown
  Post: any;
  filename: string;
  name: string;
  link?: string;
  github?: string;
  favicon?: string;
}

async function getPostData(postname: string): Promise<IProject> {
  try {
    const mdx = await import(`./${postname}.mdx`);
    return {
      Post: mdx.default,
      filename: postname,
      name: mdx.name,
      link: mdx.production,
      github: mdx.github,
      favicon: mdx.favicon,
    };
  } catch {
    throw new Error(`Failed to find .mdx file for ./${postname}.mdx`);
  }
}

function ProjectTitle({
  name,
  link,
  github,
  favicon,
}: {
  name: string;
  link?: string;
  github?: string;
  favicon?: string;
}) {
  function ExternalLink({ children }: { children: React.ReactNode }) {
    if (!link) {
      return <>{children}</>;
    }

    return (
      <Link href={link} target="_blank" className="anchor link inline-flex">
        {children}
      </Link>
    );
  }

  function Github() {
    if (!github) {
      return null;
    }

    return (
      <Link href={github} target="_blank" className="link mt-auto">
        <i>Github</i>
      </Link>
    );
  }

  function Name() {
    return (
      <h3 className="text-xl font-semibold" id="reddit">
        {name}
      </h3>
    );
  }

  return (
    <div className="inline-flex gap-4 mb-2">
      <ExternalLink>
        <div className="inline-flex gap-4 w-fit">
          {favicon && (
            <img
              src={favicon}
              alt={`Favicon for ${name}`}
              height="fit-content"
              width={30}
              className="rounded-lg"
            />
          )}
          <Name />
        </div>
      </ExternalLink>
      <Github />
    </div>
  );
}

type ValueOrArray<T> = T | Array<ValueOrArray<T>>;

function getNestedProjectStructure(
  filenames: string | string[],
  projects: IProject[],
): ValueOrArray<IProject> {
  if (Array.isArray(filenames)) {
    return filenames.map((filename) =>
      getNestedProjectStructure(filename, projects),
    );
  }

  return projects.find((project) => project.filename === filenames) as IProject;
}

function ProjectListItem({
  project,
  isNested,
}: {
  project: IProject;
  isNested?: boolean;
}) {
  if (Array.isArray(project)) {
    const projArr = project as Array<IProject>;
    return (
      <ul className="grid gap-4">
        {/*<nav></nav>*/}
        {projArr.map((proj) => (
          <ProjectListItem project={proj} key={proj.filename} isNested={true} />
        ))}
      </ul>
    );
  }

  return (
    <li>
      <Link
        href={`#${project.filename}`}
        className={`anchor text-md inline-flex gap-4 ${!isNested ? "font-semibold" : ""}`}
      >
        {/*{project.favicon && (
          <img
            src={project.favicon}
            alt={`Favicon for ${project.filename}`}
            height={"fit-content"}
            width={25}
          />
        )}*/}
        {project.name}
      </Link>
    </li>
  );
}

export default async function Post() {
  const projectNames = [
    "pokecompanion.com",
    "timesheet.helbling.uk",
    "reddit.helbling.uk",
    "homelab",
    "infra-as-code",
    "qr.helbling.uk",
    "avatar.helbling.uk",
    "helbling.uk",
    "mp4.helbling.uk",
    "socialpreview.helbling.uk",
    "crafts",
  ];

  try {
    const projectsWithPosts = projectNames.flat();
    const projectsPromises = projectsWithPosts.map((name) => getPostData(name));
    const projects = await Promise.all(projectsPromises);
    const orderedProjects = projectsWithPosts.map((name) => {
      return getNestedProjectStructure(name, projects);
    });

    return (
      <div className="md:max-w-screen-sm md:ml-auto md:mr-auto">
        <h1 className="text-3xl font-bold w-full mb-2">Projects</h1>

        <div className="mb-4">
          <ul>
            {orderedProjects.map((entry, i) => {
              return (
                <ProjectListItem
                  project={entry as IProject}
                  key={i}
                  isNested={false}
                />
              );
            })}
          </ul>
        </div>

        <hr className="mt-8 mb-8" />

        {projects.map((Project, i) => {
          return (
            <div key={Project.name} id={Project.filename}>
              <article>
                <ProjectTitle {...Project} />
                <div className="blogWrapper">
                  <Project.Post />
                </div>
              </article>

              {i !== projects.length - 1 && <hr className="mt-8 mb-8" />}
            </div>
          );
        })}
      </div>
    );
  } catch (err) {
    console.error(err);
    notFound();
  }
}
