import Link from "next/link";

const Docs = async ({ params }: { params: Promise<{ slugs: string[] }> }) => {
  const { slugs } = await params;

  if (slugs?.length > 1) {
    return (
      <>
        <h1>Welcome to Docs page!</h1>
        <h3>
          You are seeing docs for {slugs[0]}&apos; {slugs[1]}
        </h3>
      </>
    );
  } else if (slugs?.length === 1) {
    return (
      <>
        <h1>Welcome to Docs page!</h1>
        <h3>You are seeing docs for {slugs[0]}</h3>
        <Link href={`/docs/${slugs[0]}/guide-1`}>
          Docs about {slugs[0]} guide 1
        </Link>
        <Link href={`/docs/${slugs[0]}/guide-2`}>
          Docs about {slugs[0]} guide 2
        </Link>
      </>
    );
  }
  return (
    <>
      <h1>Welcome to Docs page!</h1>
    </>
  );
};

export default Docs;
