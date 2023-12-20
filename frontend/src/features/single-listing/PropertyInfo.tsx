type Props = {
  location: string;
  listingId: string;
  rooms: number;
  rent: number;
  parkingSpaces: number;
  petsAllowed: boolean;
};
export const PropertyInfo = ({
  location,
  listingId,
  rooms,
  rent: price,
  parkingSpaces,
  petsAllowed,
}: Props) => {
  return (
    <div>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title font-bold text-2xl">
          Property Information
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>Location</th>
                  <td>{location}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>Listing ID</th>
                  <td>{listingId}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>Rent</th>
                  <td>${price} per week</td>
                </tr>
                {/* row 4*/}
                <tr>
                  <th>Rooms</th>
                  <td>{rooms}</td>
                </tr>
                {/* row 5*/}
                <tr>
                  <th>Parking spaces</th>
                  <td>{parkingSpaces}</td>
                </tr>
                {/* row 6*/}
                <tr>
                  <th>Pets</th>
                  <td>{petsAllowed ? "Allowed" : "Not Allowed"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
