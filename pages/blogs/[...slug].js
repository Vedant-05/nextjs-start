import { useRouter } from "next/router";

function BlogPostPage() {
  const router = useRouter();
  console.log(router.query);
  return <h1>This is Blog Post Page</h1>;
}

export default BlogPostPage;
