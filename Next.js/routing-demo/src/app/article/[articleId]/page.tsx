const ArticleIdPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: "en" | "fr" }>;
}) => {
  const { articleId } = await params;
  const { lang } = await searchParams;

  return (
    <>
      <h1>
        Reading article number {articleId} in{" "}
        {lang === "en" ? "English" : "French"}.
      </h1>
    </>
  );
};

export default ArticleIdPage;
