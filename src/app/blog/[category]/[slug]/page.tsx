import { Metadata } from "next";
import { PostBody } from "@/components/post_detail/PostBody";
import { PostHeader } from "@/components/post_detail/PostHeader";
import TocSidebar from '@/components/post_detail/TableOfContentSidebar';
import { getPostDetail, getPostPaths, parsePostAbstract, parseToc } from "@/lib/post";
import { baseDomain } from "@/config/const";

type Props = {
  params: { category: string; slug: string };
};

export const dynamicParams = false;

export async function generateMetadata({
  params: { category, slug },
}: Props): Promise<Metadata> {
  const post = await getPostDetail(category, slug);

  const title = `${post.title} | Dust Voyager`;
  const imageURL = `${baseDomain}${post.thumbnail}`;

  return {
    title,
    description: post.desc,

    openGraph: {
      title,
      description: post.desc,
      type: "article",
      publishedTime: post.date.toISOString(),
      url: `${baseDomain}${post.url}`,
      images: [imageURL],
    },
    twitter: {
      title,
      description: post.desc,
      images: [imageURL],
    },
  };
}

export function generateStaticParams() {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths
    .map((path) => parsePostAbstract(path))
    .map((item) => ({ category: item.categoryPath, slug: item.slug }));
  return paramList;
}

export default async function Page({ params: { category, slug } }: Props) {
  const post = await getPostDetail(category, slug);
  const toc = parseToc(post.content);

  return (
    <div className="prose mx-auto w-full max-w-[800px] px-5 sm:px-6">
      <PostHeader post={post} />
      <article className="relative">
        <PostBody post={post} />
        <TocSidebar toc={toc} />
      </article>
    </div>
  );
}
