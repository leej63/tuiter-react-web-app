import React from "react";
import { Link, useLocation } from "react-router-dom";
import {AiOutlineHome, AiOutlineBell, AiOutlineForm} from "react-icons/ai";
import {RiHashtag} from "react-icons/ri";
import {LuMail} from "react-icons/lu";
import {BsBookmark, BsCardList} from "react-icons/bs";
import {RxAvatar} from "react-icons/rx";
import {CiCircleMore} from "react-icons/ci";
import {BiLogIn} from "react-icons/bi";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
 const { currentUser } = useSelector((state) => state.user);
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists",  "more"];
 const icons = [
                  <AiOutlineHome className="me-2" />,
                  <RiHashtag className="me-2" />,
                  <AiOutlineBell className="me-2" />,
                  <LuMail className="me-2" />,
                  <BsBookmark className="me-2" />,
                  <BsCardList className="me-2" />,
                  <CiCircleMore className="me-2" />
                ]
 return (
   <div className="list-group">
     {links.map((link) => 
         <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
            {icons[links.indexOf(link)]}
            <span className="d-none d-xl-inline">
              {link}
            </span>
         </Link>
     )}
     {!currentUser && <Link className={`list-group-item text-capitalize ${active === "login" ? "active" : ""}`} to="/tuiter/login"><BiLogIn className="me-2"/>Login</Link>}
     {!currentUser && <Link className={`list-group-item text-capitalize ${active === "register" ? "active" : ""}`} to="/tuiter/register"><AiOutlineForm className="me-2"/>Register</Link>}
     {!currentUser && <Link className="list-group-item text-capitalize" to="/tuiter/profile"><RxAvatar className="me-2" />Profile</Link>}
     {/* change Profile !currentUser to currentUser when done */}
   </div>
 );
};
export default NavigationSidebar;