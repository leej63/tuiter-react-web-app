import React from "react";
import {BsChat} from "react-icons/bs";
import {AiOutlineRetweet, AiOutlineDislike} from "react-icons/ai";
import {LuShare} from "react-icons/lu";
import {IconContext} from "react-icons";
import {IoMdHeartEmpty, IoMdHeart} from "react-icons/io";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

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
            "disliked": false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 123,
            "handle":"@spacex",
            "tuit": "placeholder"
        }
    }
) => {
    const dispatch = useDispatch();
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
                    {!tuit.liked && <IoMdHeartEmpty className="me-2 text-secondary" onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1, liked: true}))} />}
                    {tuit.liked && <IconContext.Provider value={{ color: "red" }}>
                        <IoMdHeart className="me-2" onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes - 1, liked: false}))} />
                    </IconContext.Provider>}
                    <span>{tuit.likes}</span>
                </div>
                <div className="col">
                    {!tuit.disliked && <AiOutlineDislike className="me-2 text-secondary" onClick={() => dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1, disliked: true}))} />}
                    {tuit.disliked && <AiOutlineDislike className="me-2 text-secondary text-danger" onClick={() => dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes - 1, disliked: false}))} />}
                    <span>{tuit.dislikes}</span>
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