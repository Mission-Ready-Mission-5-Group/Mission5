import { IoPersonSharp } from "react-icons/io5";
import AgentPhoto from "../../assets/agent_photo.png";
export const GetInTouch = () => {
  return (
    <div>
      <div className="font-bold text-2xl flex gap-2 items-center ml-2">
        <IoPersonSharp />
        <div>Get in Touch</div>
      </div>
      <div className="card w-fit bg-base-100 shadow-xl">
        <figure className="pt-10">
          <img
            src={AgentPhoto}
            alt="photo"
            className="rounded-xl"
            width={160}
          />
        </figure>
        <div className="card-body items-center text-center space-y-2">
          <h2 className="card-title">Manasa</h2>
          <div className="text-xs">
            <p>Licensee Salesperson | EVES Realty Ltd</p>
            <p>(Licensed: REAA 2008) - Mt Maunganui</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Apply Tenancy</button>
          </div>
        </div>
      </div>
    </div>
  );
};
