import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';



const Navbar = () => {

    // state
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-4 flex flex-col lg:flex-row lg:items-center max-w-6xl mx-auto">
            <figure className="max-h-fit text-xl font-bold font-serif text-white bg-primary px-4 py-1 rounded-lg max-w-fit">
                <Link to="/">FitGo</Link>
            </figure>

            <div className={`${isOpen ? "flex" : "hidden"} max-w-fit mt-4 mx-2 lg:mt-0 lg:ml-auto lg:flex flex-col lg:flex-row gap-4`}>
                <Link to='/signup' className="btn btn-primary">Sign Up</Link>
                <Link to='/login' className="btn btn-secondary">Login</Link>
                <Link to="/profileUser">Profile</Link>
                <Link to="/about">About</Link>
                <Link to="/workouts">Workouts</Link>
                <Link to="/exercices">Exercices</Link>
            </div>


            {/* menu */}
            <button className="lg:hidden absolute top-6 right-5" onClick={() => setIsOpen(!isOpen)}>
                <FiMenu className="text-2xl" />
            </button>
        </nav>
    );
}

export default Navbar;
