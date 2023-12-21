import { ListingType } from "./listingType";

export async function singleListingLoader({
  params,
}: any): Promise<ListingType> {
  const res = await fetch(`/api/listings/${params.id}`);
  return res.json();
}
