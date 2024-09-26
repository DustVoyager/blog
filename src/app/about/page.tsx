import IconGithub from "@/components/icon/Github";
import { Button } from "@/components/ui/button";
import * as D from "@/components/ui/dialog";
import { MailIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import CopyLinkButton from "@/components/common/CopyLinkButton";

const data = {
  name: "오수빈",
  about: "프론트엔드 개발자 오수빈입니다.",
  summary: "",
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
  work: [
    {
      company: "잡플래닛",
      link: "https://www.jobplanet.co.kr/job",
      position: "프론트엔드 개발자",
      start: "2021. 05",
      end: "2024. 06",
      description: "",
    },
  ],
};

export function generateMetadata() {
  return {
    title: `${data.name} | ${data.about}`,
    description: data.summary,
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

      <h3 className="text-2xl font-bold">Work Experience.</h3>

      <h3 className="text-2xl font-bold">Too Much Informatin</h3>
    </div>
  );
}
