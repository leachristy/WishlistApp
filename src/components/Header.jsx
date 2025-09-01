import { Link } from "react-router-dom";

import { Gift } from "lucide-react";
export const Header = () => {
  return (
    <div class=" flex flex-row w-full justify-between items-center px-4 py-3 bg-pink text-off-white">
      <div>
        <Link to="/" className="hover:text-gray-200 flex gap-1 items-end">
          <Gift size={50} />
          <p className="text-2xl font-cherry py-2">wishpin</p>
        </Link>
      </div>

      <div className=" flex gap-4">
        <Link to="/explore" className="hover:text-gray-200">
          Explore
        </Link>
        <Link to="/createwishlist" className="hover:text-gray-200">
          Create
        </Link>
        <Link to="/wishlistdetails" className="hover:text-gray-200">
          My Wishlists
        </Link>
      </div>
    </div>
  );
};
