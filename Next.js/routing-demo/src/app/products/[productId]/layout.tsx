const ProductIdLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      <h3>Fratured products</h3>
    </>
  );
};

export default ProductIdLayout;
