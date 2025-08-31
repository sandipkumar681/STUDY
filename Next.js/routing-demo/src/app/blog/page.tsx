const BlogPage = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 1500);
  });
  return <h1>Blog page</h1>;
};

export default BlogPage;
