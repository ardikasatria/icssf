import { useContext } from "react";
import AnimationWrapper from "../common/page-animation";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { removeFromSession } from "../common/session";

const UserNavigationPanel = () => {

    const { userAuth: { username, isAdmin }, setUserAuth } = useContext(UserContext);


    return (
        <AnimationWrapper 
            className="absolute right-0 z-50"
            transition={{ duration: 0.2 }}
        >

            <div className="bg-white abosolute right-0 border border-grey w-60 duration-200">


                    <Link to="/program" className="link"><strong>Program</strong></Link>
                    <Link to="/author" className="link"><strong>Author</strong></Link>
                    <Link to="/information" className="link"><strong>Information</strong></Link>

                <span className="absolute border-t border-grey w-[100%]"></span>

                <button className="text-left p-4 hover:bg-grey w-full pl-8 py-4"
                    onClick={signOutUser}
                >
                    <h1 className="font-bold text-xl mg-1">Sign Out</h1>
                    <p className="text-dark-grey">@{username}</p>
                </button>

            </div>

        </AnimationWrapper>
    )

}

export default UserNavigationPanel;