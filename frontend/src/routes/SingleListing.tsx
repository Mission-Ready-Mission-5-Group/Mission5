import { useLoaderData } from "react-router-dom";
import { GetInTouch } from "../features/single-listing/GetInTouch";
import { Description } from "../features/single-listing/Description";
import { MoveInCalc } from "../features/single-listing/MoveInCalc";
import { Calendar } from "../features/single-listing/Calendar";
import { PropertyInfo } from "../features/single-listing/PropertyInfo";
import Maps from "../features/single-listing/Maps";
import { PropertyPicsCollage } from "../features/single-listing/PropertyPicsCollage";

const SingleListing = () => {
  const data = useLoaderData();
  return (
    <div className="px-16 pb-16 space-y-8">
      {/* <h1 className="text-3xl font-bold text-pink-800">
        {JSON.stringify(data)}
      </h1> */}

      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-1 col-end-9">
          <PropertyPicsCollage />
        </div>
        <div className="space-y-16 col-end-13 col-span-3">
          <Calendar />
          <MoveInCalc />
          <GetInTouch />
        </div>
      </div>
      <Description />
      <PropertyInfo />
      <Maps />
    </div>
  );
};

export default SingleListing;
