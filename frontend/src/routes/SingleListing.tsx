import { useLoaderData } from "react-router-dom";
import { GetInTouch } from "../features/single-listing/GetInTouch";
import { Description } from "../features/single-listing/Description";
import { MoveInCalc } from "../features/single-listing/MoveInCalc";
import { Calendar } from "../features/single-listing/Calendar";
import { PropertyInfo } from "../features/single-listing/PropertyInfo";
import { Maps } from "../features/single-listing/Maps";
import { PropertyPicsCollage } from "../features/single-listing/PropertyPicsCollage";

const SingleListing = () => {
  const data = useLoaderData();
  return (
    <div>
      {/* <h1 className="text-3xl font-bold text-pink-800">
        {JSON.stringify(data)}
      </h1> */}

      <div className="flex">
        <PropertyPicsCollage />
        <div>
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
