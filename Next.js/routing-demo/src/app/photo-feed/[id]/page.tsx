import wondersImages, { WonderImage } from "../wonder";

const ShowPhoto = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const photo = wondersImages.find((p) => p.id === id);

  if (!photo) {
    throw new Error("Photo Not found!");
  }

  return (
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
      <img
        src={photo.src.src}
        style={{
          //   width: "auto",
          height: "700px",
          objectFit: "contain",
          borderRadius: "10px",
        }}
      />
      <div>
        <h1 style={{ textAlign: "center" }}>
          {photo.name} - {photo.location}
        </h1>

        <h3 style={{ textAlign: "center" }}>{photo.photographer}</h3>
      </div>
    </div>
  );
};

export default ShowPhoto;
