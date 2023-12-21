type Props = {
  images: string[];
};
export const PropertyPicsCollage = ({ images }: Props) => {
  // const imgSrc =
  //   "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/107/858/original/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg?1703069832";
  return (
    <div className="space-y-8">
      <img src={images[0]} alt="house" width="100%" />
      <div className="grid grid-cols-4 gap-4">
        {images.slice(1, images.length + 1).map((i) => (
          <img src={i} alt="house" />
        ))}
      </div>
    </div>
  );
};
