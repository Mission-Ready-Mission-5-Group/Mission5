import { useLoaderData } from "react-router-dom";
import { GetInTouch } from "../features/single-listing/GetInTouch";
import { CardBootstrap } from "../features/single-listing/CardBootstrap";

const SingleListing = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-bold text-pink-800">
        {JSON.stringify(data)}
      </h1>
      <div className="flex gap-2">
        <GetInTouch />
        <CardBootstrap />
      </div>
    </div>
  );
};

export default SingleListing;
