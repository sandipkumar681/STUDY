"use client";
import { useRouter } from "next/navigation";
import wondersImages from "./wonder";

const PhotoFeed = () => {
  const route = useRouter();

  const handleOnclick = (id: string) => {
    route.push(`/photo-feed/${id}`);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {wondersImages.map((field) => (
        <img
          key={field.id}
          src={field.src.src}
          alt={field.name}
          onClick={() => handleOnclick(field.id)}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
};

export default PhotoFeed;
