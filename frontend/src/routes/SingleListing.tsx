import { useLoaderData } from "react-router-dom";
import { GetInTouch } from "../features/single-listing/GetInTouch";
import { Description } from "../features/single-listing/Description";
import { MoveInCalc } from "../features/single-listing/MoveInCalc";
import { Calendar } from "../features/single-listing/Calendar";
import { PropertyInfo } from "../features/single-listing/PropertyInfo";
import Maps from "../features/single-listing/Maps";
import { PropertyPicsCollage } from "../features/single-listing/PropertyPicsCollage";
import { ListingType } from "../features/single-listing/listingType";

const SingleListing = () => {
  const data = useLoaderData() as ListingType;
  return (
    <div className="px-4 lg:px-16 pb-16 space-y-8">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4">
        <div className="col-start-1 col-end-9">
          <PropertyPicsCollage images={data.propertyImages} />
        </div>
        <div className="space-y-16 col-end-13 col-span-3 self-center">
          <Calendar />
          <MoveInCalc rent={data.price} />
          <GetInTouch />
        </div>
      </div>
      <Description text={data.description} />
      <PropertyInfo
        listingId={data._id}
        location={data.streetAddress}
        parkingSpaces={data.garages}
        petsAllowed={data.petFriendly}
        rent={data.price}
        rooms={data.bedrooms}
      />
      <Maps lat={data.lattitude} lng={data.longitude} />
    </div>
  );
};

export default SingleListing;
