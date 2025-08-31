"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter();
  const overlay = useRef(null);

  const handleDismiss = () => {
    route.back();
  };

  const onkeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleDismiss();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onkeydown);
    return () => document.removeEventListener("keydown", onkeydown);
  });

  return (
    <div
      ref={overlay}
      onClick={handleDismiss}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(30px)",
        // WebkitBackdropFilter: "blur(8px)",
        zIndex: 9999,
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <div
        style={{
          margin: "40px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          // boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
