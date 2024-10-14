import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import * as D from "@/components/ui/dialog";
import { MailIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import CopyLinkButton from "@/components/common/CopyLinkButton";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { data } from "@/data/data";

export function generateMetadata() {
  return {
    title: `${data.name} | ${data.about}`,
    description: data.introduce,
  };
}

export default function AboutPage() {
  return (
    <div className="mx-auto font-serif mt-14 w-full max-w-[800px] space-y-8 px-5 sm:px-6">
      <div className="flex-1 space-y-1.5 text-center sm:text-start">
        <h2 className="mb-4 text-3xl font-bold">{data.name}</h2>
        <p className="max-w-md text-pretty text-gray-600 print:text-[12px]">
          {data.about}
        </p>
        <div className="flex justify-center gap-x-2 pt-1 text-sm text-muted-foreground sm:justify-start print:hidden">
          {data.contact.social.map((social) => (
            <Button
              key={social.name}
              className="size-8"
              variant="outline"
              size="icon"
              asChild
            >
              <a href={social.url} target="_blank">
                <social.icon className="size-4" />
              </a>
            </Button>
          ))}
          {data.contact.email && (
            <D.Dialog>
              <D.DialogTrigger>
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <MailIcon className="size-4" />
                </Button>
              </D.DialogTrigger>
              <D.DialogContent className="max-w-[300px]">
                <D.DialogHeader>
                  <D.DialogTitle className="p-0">Email Address</D.DialogTitle>
                  <D.DialogDescription></D.DialogDescription>
                </D.DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <label htmlFor="link" className="sr-only">
                      Link
                    </label>
                    <Input
                      id="link"
                      defaultValue={data.contact.email}
                      readOnly
                    />
                  </div>
                  <CopyLinkButton
                    variant="default"
                    url={data.contact.email}
                    className="p-3"
                  />
                </div>
              </D.DialogContent>
            </D.Dialog>
          )}
        </div>
        <div className="hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex print:text-[12px]">
          {data.contact.email && (
            <a href={`mailto:${data.contact.email}`}>
              <span className="underline">{data.contact.email}</span>
            </a>
          )}
        </div>
      </div>

      <section className="flex min-h-0 flex-col gap-y-3">
        <h3 className="text-2xl font-bold">Introduce.</h3>
        <p className="leading-6 text-muted-foreground sm:whitespace-pre-wrap whitespace-normal">
          {data.introduce}
        </p>
      </section>

      <section className="flex min-h-0 flex-col gap-y-3">
        <h3 className="text-2xl font-bold">Work Experience.</h3>
        <div className="mt-4 flex flex-col md:flex-row">
          <div className="w-full sm:w-1/3">
            {data.works.map((work) => (
              <Fragment key={work.company}>
                <div className="flex flex-row items-center gap-x-2 text-base">
                  <h4 className="text-lg font-semibold leading-none">
                    <Link href={work.link} className="hover:text-blue-600">
                      🏢 {work.company}
                    </Link>
                  </h4>
                  <span className="text-sm tabular-nums text-gray-500">
                    {work.start} - {work.end}
                  </span>
                </div>
                <strong className="block mt-2 font-semibold not-italic">
                  {work.position}
                </strong>
              </Fragment>
            ))}
          </div>
          <article className="w-full sm:w-2/3 mt-4 sm:mt-0">
            {data.projects.map((project, index) => (
              <div key={project.name} className={index !== 0 ? "mt-10" : ""}>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <strong className="text-lg">{project.name}</strong>
                  <span className="ml-0 sm:ml-2 text-sm tabular-nums text-gray-500 sm:text-left">
                    {project.start} - {project.end}
                  </span>
                </div>

                <em className="block mt-4 font-semibold not-italic">
                  Description.
                </em>
                <p className="mt-2 text-gray-600 text-sm">
                  {project.description}
                </p>

                {project.problems && (
                  <>
                    <em className="block mt-4 font-semibold not-italic">
                      Problem.
                    </em>
                    <ul className="mt-2 list-disc space-y-1">
                      {project.problems.map((problem) => (
                        <li
                          key={problem}
                          className="ml-5 text-gray-600 text-pretty text-sm"
                        >
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {project.expectations && (
                  <>
                    <em className="block mt-4 font-semibold not-italic">
                      Expectation.
                    </em>
                    <ul className="mt-2 list-disc space-y-1">
                      {project.expectations.map((expectation) => (
                        <li
                          key={expectation}
                          className="ml-5 text-gray-600 text-pretty text-sm"
                        >
                          {expectation}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {project.challenges && (
                  <>
                    <em className="block mt-4 font-semibold not-italic">
                      Challenge.
                    </em>
                    <ul className="mt-2 list-disc space-y-1">
                      {project.challenges.map((challenge) => (
                        <li
                          key={challenge}
                          className="ml-5 text-gray-600 text-pretty text-sm"
                        >
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <em className="block mt-4 font-semibold not-italic">Task.</em>
                <ul className="mt-2 list-disc space-y-1">
                  {project.tasks.map((task) => (
                    <li
                      key={task}
                      className="ml-5 text-gray-600 text-pretty text-sm"
                    >
                      {task}
                    </li>
                  ))}
                </ul>

                <em className="block mt-4 font-semibold not-italic">
                  Tech Skill.
                </em>
                <ul className="mt-2 list-disc space-y-1">
                  {project.skills.map((skill) => (
                    <li
                      key={skill}
                      className="ml-5 text-gray-600 ext-pretty text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className="flex min-h-0 flex-col gap-y-3">
        <h3 className="text-2xl font-bold">Skill.</h3>
        <div className="flex flex-wrap gap-1">
          {data.skills.map((skill) => (
            <Badge className="print:text-[10px]" key={skill}>
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section className="flex min-h-0 flex-col gap-y-3">
        <h3 className="text-2xl font-bold">Too Much Information.</h3>
        <ul className="list-disc space-y-1">
          {data.tmis.map((tmi) => (
            <li
              key={tmi}
              className="ml-5 text-gray-600 text-pretty text-[14px]"
            >
              {tmi}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
