export const PropertyInfo = () => {
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
                  <td>123 pinkvilla street</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>Location ID</th>
                  <td>56789PV</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>Price</th>
                  <td>$500 per week</td>
                </tr>
                {/* row 4*/}
                <tr>
                  <th>Rooms</th>
                  <td>3</td>
                </tr>
                {/* row 5*/}
                <tr>
                  <th>Parking spaces</th>
                  <td>1</td>
                </tr>
                {/* row 6*/}
                <tr>
                  <th>Pets</th>
                  <td>Allowed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
