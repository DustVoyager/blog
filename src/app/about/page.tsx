import { Fragment } from "react";

import IconGithub from "@/components/icon/Github";
import { Button } from "@/components/ui/button";
import * as D from "@/components/ui/dialog";
import { MailIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import CopyLinkButton from "@/components/common/CopyLinkButton";
import Link from "next/link";

const data = {
  name: "오수빈",
  about: "같이 일하고 싶은 개발자 오수빈입니다.",
  introduce:
    "프로젝트의 아이데이션 단계부터 배포까지 모든 과정에 참여하며 사용자 중심의 웹 어플리케이션을 구축해왔습니다. \n마크업 개발자의 경험으로 웹표준/웹 접근성에 강점을 가지고 있으며,\n이를 통해 다양한 환경에서 사용자들에게 최적의 경험을 제공하기 위해 고민하고 있습니다.",
  contact: {
    email: "ohsubin@kakao.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dustvoyager",
        icon: IconGithub,
      },
    ],
  },
  skills: ["Javascript", "Typescript", "React", "Nextjs"],
  military_service: "대한민국 육군 부사관, 중사",
  works: [
    {
      id: "1",
      company: "잡플래닛",
      description:
        "기업 리뷰, 연봉 정보, 채용 공고를 제공하는 취업 정보 플랫폼입니다.",
      link: "https://www.jobplanet.co.kr",
      position: "프론트엔드 개발자",
      start: "2021. 05",
      end: "2024. 06",
    },
  ],
  projects: [
    {
      workId: "1",
      name: "잡플래닛 Next 전환 프로젝트",
      start: "2023.07",
      end: "2024.06",
      description:
        "잡플래닛은 기존에 Ruby on Rails 환경에서 React를 활용하여 서비스를 운영해왔었는데 프론트엔드와 백엔드가 밀접하게 묶여 있는 구조로 인해 문제점들이 있었습니다. 그것을 해결하기 위해 NextJs을 활용하여 새로운 프론트엔드 환경을 구축하게 되었습니다",
      tasks: [
        "잡플래닛 next.js 전환 프로젝트",
        "Next.js 환경 셋팅 및 기술 구현",
        "Javascript에서 Typescript 으로 전환",
      ],
      skills: [
        "React",
        "Next.js",
        "react-query",
        "Typescript",
        "tailwind",
        "stroybook",
      ],
    },
    {
      workId: "1",
      name: "잡플래닛 기업관리센터 서비스",
      start: "2023.01",
      end: "2023.12",
      description:
        "잡플래닛 기업관리센터는 채용 서비스와 밀접한 관련이 있는 프로젝트로, 채용 과정에서 기업이 지원자들을 관리할 수 있는 B2B 서비스입니다. 기업관리센터는 유료 서비스로, 다양한 기업의 요구에 맞춰 소통하는 것이 중요했습니다. 이 프로젝트는 기존의 백엔드 코드로 운영되어 프론트엔드 작업이 어려웠으며, 디자인이 오래되고 느리며 API를 사용하지 않아 비효율적이었습니다. 이러한 문제를 해결하기 위해 저는 프론트엔드 코드로 전환하자고 제안하였고, 사용자 친화적인 디자인으로 변경하며 React를 활용하여 프로젝트를 진행했습니다. 결과적으로, 잡플래닛 기업 담당 직원들과 서비스를 이용하는 기업들 모두 큰 만족을 표했으며, 이는 매출 증대로 이어져 많은 회사가 기업 서비스를 구독하게 되었습니다.",
      tasks: [
        "아이데이션 회의부터 서비스 런칭까지 모든 과정 참여",
        "프로젝트 제안 및 기획: 기존 백엔드 중심의 시스템을 프론트엔드로 전환 제안 및 기획",
        "프론트엔드 개발: React와 REST API를 활용하여 사용자 친화적인 인터페이스 구현",
        "디자인 개선: 현대적이고 효율적인 UI/UX 디자인 도입",
        "기업 요구사항 반영: 기업과의 소통을 통해 다양한 요구사항을 반영하여 맞춤형 서비스 제공",
      ],
      skills: [
        "React",
        "React Router",
        "Redux",
        "Typescript",
        "Styled-components",
      ],
    },
    {
      workId: "1",
      name: "잡플래닛 채용 서비스 런칭 / 운영",
      start: "2021.10",
      end: "2022.07",
      description: `
        잡플래닛에서 기업 리뷰와 연봉 리뷰 등 다양한 데이터를 기반으로 본격적으로 채용 시장에 진입하기 위해 채용 서비스를 준비하고 런칭하였습니다.
        이 프로젝트는 처음부터 기획 단계에 참여하여 아이디어를 제시하였고, 보다 효율적이고 효과적인 채용 과정을 제공하는 것을 목표로 했습니다. 
        저는 프론트엔드 개발자로서 이 프로젝트에 참여하여 아이데이션 회의, 디자이너 및 백엔드 개발자와의 협업 그리고 JIRA를 활용한 일정 관리 등 다양한 기술적 경험을 쌓았습니다. 
        이 과정에서 React를 활용해 사용자 친화적인 인터페이스를 구축하였으며, 성능 최적화와 코드 품질 향상을 위해 지속적으로 노력하였고. 
        저에게 협업과 기술적 성장의 중요한 기회가 되었습니다.
        `,
      tasks: [
        "서비스 기획 및 아이데이션 회의에서 적극적으로 참여하여 혁신적인 아이디어 제시",
        "프로젝트의 모든 단계에 걸쳐 일관된 비전과 목표를 유지하며 협업",
        "프론트엔드 기술 환경 셋팅 및 기능 구현",
        "사용자 친화적인 인터페이스 설계 및 성능 최적화",
        "기업 요구사항 반영: 기업과의 소통을 통해 다양한 요구사항을 반영하여 맞춤형 서비스 제공",
        "Jira를 활용한 일정 관리 및 업무 우선 순위 설정으로 효율적인 프로젝트 진행",
      ],
      skills: ["React", "Redux", "Sass"],
    },
  ],
  tmis: [
    "육군에서 부사관으로 6년 동안 복무하였습니다.",
    "책과 서점을 좋아합니다. e-book 보다는 종이 책의 질감을 좋아합니다. 서점에서 풍기는 종이책의 냄새를 좋아하고 책장에 종류별로 진열하는 것을 좋아합니다.",
    "사람 만나는 것을 좋아합니다.(반전으로 MBTI는 내향형입니다 🫢) 커피챗을 통해 다양한 사람들을 만나서 이야기를 나눠보고 인사이트를 넓히는 것을 좋아합니다.",
    "8살 된 푸들 제니를 키우고 있습니다. 강아지를 사랑하고 어떻게 하면 행복하게 해줄 수 있을지 고민합니다.",
    "최신 트렌드에 민감하고 관심을 갖고 있습니다. 다양한 OTT를 구독하여 콘텐츠를 접하고, 유행하는 옷은 꼭 입어보며 트렌드를 따라가는 것을 좋아합니다.",
    "역사에 관심이 많습니다. 우연한 계기로 한국사 자격증을 취득하게 되면서 역사에 대한 공부를 많이 진행하였고 역사적인 인물들과 사건들에 대해 관심이 많습니다.",
    "회사에서 3년 동안 제과제빵 동호회 활동을 하였습니다. 부회장과 총무를 맡아서 동호회 활동을 진행하였고, 다양한 직군의 동료들과 소통하며 가까워지는법을 배웠습니다.",
  ],
};

export function generateMetadata() {
  return {
    title: `${data.name} | ${data.about}`,
    description: data.introduce,
  };
}

export default function AboutPage() {
  return (
    <div className="mx-auto mt-14 w-full max-w-[800px] px-5 sm:px-6">
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

      <section className="mt-10">
        <h3 className="text-2xl font-bold">Introduce.</h3>
        <p className="mt-2 leading-6 text-muted-foreground sm:whitespace-pre-wrap whitespace-normal">
          {data.introduce}
        </p>
      </section>

      <section className="mt-10">
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
                <div className="flex items-center">
                  <strong className="text-lg">{project.name}</strong>
                  <span className="ml-2 text-sm tabular-nums text-gray-500">
                    {project.start} - {project.end}
                  </span>
                </div>

                <em className="block mt-4 font-semibold not-italic">
                  Description.
                </em>
                <p className="mt-2 text-gray-600 text-sm">
                  {project.description}
                </p>

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

      <section className="mt-10">
        <h3 className="text-2xl font-bold">Too Much Information.</h3>
        <ul className="mt-2 list-disc space-y-1">
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
