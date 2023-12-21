import { IoIosCalculator } from "react-icons/io";
type Props = {
  rent: number;
};
export const MoveInCalc = ({ rent }: Props) => {
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
                  <td>${rent}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Bond</td>
                  <td>${rent * 4}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Total Cost</td>
                  <td>${rent + rent * 4}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
