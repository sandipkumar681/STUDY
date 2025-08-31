"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();

  const [inputValue, setInputValue] = useState("");

  const navLinks = [
    { name: "Register", href: "/register", key: 1 },
    { name: "Log in", href: "/login", key: 2 },
    { name: "Forgot password", href: "/forgot-password", key: 3 },
  ];
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <header
        style={{
          justifyContent: "space-around",
          display: "flex",
        }}
      >
        {navLinks.map(({ name, href, key }) => (
          <Link
            key={key}
            href={href}
            style={{
              ...(pathName === href
                ? { color: "red", fontWeight: "bold" }
                : { color: "orange" }),
              textDecoration: "none",
            }}
          >
            {name}
          </Link>
        ))}
      </header>
      {children}
    </>
  );
};

export default AuthLayout;
