import CategoryList from "./CategoryList";
import PostCard from "./PostCard";
import {
  getAllPostCount,
  getCategoryDetailList,
  getSortedPostList,
} from "@/lib/post";
import ContentListTracker from "@/components/analytics/ContentListTracker";

interface PostListProps {
  category?: string;
}

const PostListPage = async ({ category }: PostListProps) => {
  const postList = await getSortedPostList(category);
  const categoryList = await getCategoryDetailList();
  const allPostCount = await getAllPostCount();

  const listId = category || "all";
  const itemIds = postList.map((post) => post.slug);

  return (
    <section className="mx-auto my-12 w-full max-w-[800px] px-5 sm:px-6">
      <ContentListTracker listId={listId} itemIds={itemIds} />
      <CategoryList
        allPostCount={allPostCount}
        categoryList={categoryList}
        currentCategory={category}
      />
      <section>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {postList.map((post, index) => (
            <PostCard key={post.url + post.date} post={post} rank={index + 1} />
          ))}
        </ul>
      </section>
    </section>
  );
};

export default PostListPage;
