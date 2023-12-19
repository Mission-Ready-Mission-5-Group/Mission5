import { useLoaderData } from "react-router-dom";
import { GetInTouch } from "../features/single-listing/GetInTouch";

const SingleListing = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-bold text-pink-800">
        {JSON.stringify(data)}
      </h1>
      <GetInTouch />
    </div>
  );
};

export default SingleListing;
