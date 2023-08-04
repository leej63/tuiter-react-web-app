import React from "react";
import {BsChat} from "react-icons/bs";
import {AiOutlineRetweet} from "react-icons/ai";
import {LuShare} from "react-icons/lu";
import {IconContext} from "react-icons";
import {IoMdHeartEmpty, IoMdHeart} from "react-icons/io";

const TuitStats = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "tesla1.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle":"@spacex",
            "tuit": "placeholder"
        }
    }
) => {
    return (
        <>
            <div className="row justify-content-evenly">
                <div className="col">
                    <a href="#" className="text-decoration-none">
                        <BsChat className="me-2 text-secondary"/>
                    </a>
                    <span>{tuit.replies}</span>
                </div>
                <div className="col">
                    <a href="#" className="text-decoration-none">
                        <AiOutlineRetweet className="me-2 text-secondary"/>
                    </a>
                    <span>{tuit.retuits}</span>
                </div>
                <div className="col">
                    <a href="#" className="text-decoration-none">
                        {!tuit.liked && <IoMdHeartEmpty className="me-2 text-secondary"/>}
                        {tuit.liked && <IconContext.Provider value={{ color: "red" }}>
                            <IoMdHeart className="me-2"/>
                        </IconContext.Provider>}
                    </a>
                    <span>{tuit.likes}</span>
                </div>
                <div className="col">
                    <a href="#" className="text-decoration-none">
                        <LuShare className="me-2 text-secondary"/>
                    </a>
                </div>
            </div>
        </>
    );
};
export default TuitStats;