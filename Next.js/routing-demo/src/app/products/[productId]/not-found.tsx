"use client";

import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathName = usePathname();
  const pathNameArray = pathName.split("/");

  return (
    <h1>
      Product {pathNameArray[2]} not found Sandip! Product {pathNameArray[2]}
      does&apos;t exists.
    </h1>
  );
};

export default NotFound;
