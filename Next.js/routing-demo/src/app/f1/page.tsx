import Link from "next/link";

const F1Page = () => {
  return (
    <>
      <h1>F1 page</h1>
      <div>
        <Link href="/f1/f2">Goto F2 page</Link>
      </div>
      <div>
        <Link href="/f3">Goto F3 page</Link>
      </div>
    </>
  );
};

export default F1Page;
