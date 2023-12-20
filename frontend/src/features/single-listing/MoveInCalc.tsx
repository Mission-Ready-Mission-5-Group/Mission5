import { IoIosCalculator } from "react-icons/io";
export const MoveInCalc = () => {
  return (
    <div>
      <div className="font-bold text-2xl flex gap-2 items-center ml-2">
        <IoIosCalculator />
        <div>Move-In Calculator</div>
      </div>
      <div className="card w-fit bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Rent in advance</td>
                  <td>$2000</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Bond</td>
                  <td>$1500</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Total Cost</td>
                  <td>$3500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
