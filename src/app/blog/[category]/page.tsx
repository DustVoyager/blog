import { Metadata } from "next";

import { baseDomain, blogName } from "@/config/const";
import { getCategoryList, getCategoryPublicName } from "@/lib/post";
import PostListPage from "@/components/post_list/PostListPage";

type Props = {
  params: { category: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  const categoryList = getCategoryList();
  const paramList = categoryList.map((category) => ({ category }));
  return paramList;
}

export async function generateMetadata({
  params: { category },
}: Props): Promise<Metadata> {
  const cg = getCategoryPublicName(category);
  const title = `${cg} | ${blogName}`;
  const url = `${baseDomain}/${category}`;

  return {
    title,
    openGraph: {
      title,
      url,
      images: ["/thumbnail.png"],
    },
    twitter: {
      title,
      images: ["/thumbnail.png"],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  return <PostListPage category={params.category} />;
}
