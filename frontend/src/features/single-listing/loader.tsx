export async function singleListingLoader({ params }: any): Promise<any> {
  const res = await fetch("/api/listings");
  return res.json();
}
