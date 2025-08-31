import Link from "next/link";

const F2Page = () => {
  return (
    <>
      <h1>F2 page</h1>
      <div>
        <Link href="/f4">Go to F4 page</Link>
      </div>
      <div>
        <Link href="/f5">Goto root folder - F5 page</Link>
      </div>
    </>
  );
};

export default F2Page;
