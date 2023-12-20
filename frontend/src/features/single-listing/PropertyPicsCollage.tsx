export const PropertyPicsCollage = () => {
  const imgSrc =
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/107/858/original/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg?1703069832";
  return (
    <div className="space-y-8">
      <img src={imgSrc} alt="house" />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }, (_) => (
          <img src={imgSrc} alt="house" />
        ))}
      </div>
    </div>
  );
};
