import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/createwishlist" className="hover:text-gray-200">Create</Link>
            <Link to="/editwishlist" className="hover:text-gray-200">Edit</Link>
            <Link to="/wishlistdetails" className="hover:text-gray-200">Wishlist Details</Link>
        </div>
    )
}
