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
  introduce: "",
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
      <h2 className="mb-4 text-3xl font-bold">{data.name}</h2>
      <p className="max-w-md text-pretty text-gray-600 print:text-[12px]">
        {data.about}
      </p>
      <div className="flex justify-center gap-x-2 pt-1 text-sm text-gray-600 sm:justify-start print:hidden">
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
              <Button className="size-8" variant="outline" size="icon" asChild>
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
                  <Input id="link" defaultValue={data.contact.email} readOnly />
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

      <section className="mt-10">
        <h3 className="text-2xl font-bold">Introduce.</h3>
        <p>{data.introduce}</p>
      </section>

      <section className="mt-10">
        <h3 className="text-2xl font-bold">Work Experience.</h3>
        <div className="mt-4 flex flex-col md:flex-row">
          <div className="w-full sm:w-1/3">
            {data.works.map((work) => (
              <Fragment key={work.company}>
                <div className="flex flex-row items-center gap-x-2 text-base">
                  <h4 className="text-lg font-semibold leading-none">
                    <Link href={work.link}>🏢 {work.company}</Link>
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
              <div key={project.name} className={index !== 0 ? "mt-4" : ""}>
                <strong>{project.name}</strong>
                <span className="ml-2 text-sm tabular-nums text-gray-500">
                  {project.start} - {project.end}
                </span>

                <em className="block mt-2 font-semibold not-italic">
                  description
                </em>
                <p className="">{project.description}</p>

                <em className="block mt-2 font-semibold not-italic">task</em>
                <ul className="">
                  {project.tasks.map((task) => (
                    <li key={task} className="text-gray-700">
                      - {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className="mt-10">
        <h3 className="text-2xl font-bold">Too Much Informatin</h3>
      </section>
    </div>
  );
}
