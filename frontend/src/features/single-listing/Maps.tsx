import GoogleMapReact from "google-map-react";
import { IoMdPin } from "react-icons/io";

// const AnyReactComponent = ({
//   text,
// }: {
//   lat: number;
//   lng: number;
//   text: string;
// }) => (
//   <div>
//     <IoMdPin size={60} color="red" />
//   </div>
// );

export default function Maps() {
  const defaultProps = {
    center: {
      lat: -36.848461,
      lng: 174.763336,
    },
    zoom: 18,
  };

  return (
    <div className="grid grid-cols-8">
      <div style={{ height: "100vh", width: "100%" }} className="col-span-6">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: import.meta.env.VITE_GOOGLE_API_KEY as string,
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <IoMdPin size={60} color="red" />
        </GoogleMapReact>
      </div>
      <div className="flex flex-col col-span-2">
        <button className="p-8 bg-gray-200 hover:bg-primary hover:text-white">
          Gyms nearby
        </button>
        <button className="p-8 bg-gray-200 hover:bg-primary hover:text-white">
          Restaurants nearby
        </button>
        <button className="p-8 bg-gray-200 hover:bg-primary hover:text-white">
          Supermarkets nearby
        </button>
        <button className="p-8 bg-gray-200 hover:bg-primary hover:text-white">
          Cinemas nearby
        </button>
        <button className="p-8 bg-gray-200 hover:bg-primary hover:text-white">
          Shopping nearby
        </button>
      </div>
    </div>
  );
}
