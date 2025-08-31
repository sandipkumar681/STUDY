const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        padding: "150px 200px",
        margin: "10px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        border: "1px solid #ddd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
