import { Link } from "react-router-dom";

import { Gift } from "lucide-react";
export const Header = () => {
  return (
    <div class=" flex flex-row w-full justify-between items-center bg-blue-400 px-4 py-3 text-off-white">
      <div>
        <Link to="/" className="hover:text-gray-200 flex gap-1 items-end">
          <Gift size={50} />
          <p className=" text-2xl font-cherry">Wish List</p>
        </Link>
      </div>

      <div className=" flex gap-4">
        <Link to="/createwishlist" className="hover:text-gray-200">
          Create
        </Link>
        <Link to="/editwishlist" className="hover:text-gray-200">
          Edit
        </Link>
        <Link to="/wishlistdetails" className="hover:text-gray-200">
          Wishlist Details
        </Link>
      </div>
    </div>
  );
};
