import Modal from "@/components/modal";
import wondersImages, { WonderImage } from "../../wonder";

const InterceptedShowPhoto = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <Modal>
      <h1 style={{ textAlign: "center" }}>
        {photo.name} - {photo.location}
      </h1>
      <img
        src={photo.src.src}
        style={{
          //   width: "auto",
          height: "700px",
          objectFit: "contain",
          borderRadius: "10px",
        }}
      />

      <h3 style={{ textAlign: "center" }}>{photo.photographer}</h3>
    </Modal>
  );
};

export default InterceptedShowPhoto;
