import { notFound } from "next/navigation";

import type { Metadata } from "next";

type Props = { params: Promise<{ productId: string }> };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;
  const title = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (4 < 5) {
        resolve(`iPhone ${productId}`);
      }
      reject("I didn't set title on purpose!");
    }, 100);
  }).catch((error) => {
    console.log(error);
    return error;
  });
  return { title: `Product: ${title}` };
};

const ProductIdPage = async ({ params }: Props) => {
  const productId = (await params).productId;

  if (parseInt(productId) > 1000) {
    return notFound();
  }

  return <h1>Product Id is: {productId}</h1>;
};

export default ProductIdPage;
