"use client";

import { useRouter } from "next/navigation";

const OrderPlace = () => {
  const router = useRouter();

  const handleNavigateToHome = () => {
    router.push("/");
  };

  const handleNavigateToRead123ArticleInEng = () => {
    router.push("/article/123?lang=en");
  };

  return (
    <>
      <h1>About Me...</h1>
      <button onClick={handleNavigateToHome}>Go to Home page</button>
      <button onClick={handleNavigateToRead123ArticleInEng}>
        Read article 123 in Eng
      </button>
    </>
  );
};

export default OrderPlace;
