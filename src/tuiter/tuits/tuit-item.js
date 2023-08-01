import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import {TbLetterX} from "react-icons/tb";
import TuitStats from "./tuit-stats";
import {MdVerified} from "react-icons/md";

const TuitItem = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": `Tesla CyberTruck lands on Mars and
                    picks up the Curiosity rover on its 6' bed`,
            "image": "tesla.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "placeholder"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
         <div className="row">
           <div className="col-auto">
                <img src={`/images/${tuit.image}`} className="rounded-circle" width={48} alt="avatar"/>
           </div>
           <div className="col-10">
                <TbLetterX className="me-3 float-end" onClick={() => deleteTuitHandler(tuit._id)}/>
                <span className="fw-bold">{tuit.userName}{' '}</span>
                <MdVerified className="me-1 text-primary"/>
                <span className="text-secondary">{' '} {tuit.handle} {'\u00B7'} {tuit.time}</span>
                <div className="mb-3">
                        {tuit.tuit}
                </div>
                <TuitStats tuit={tuit} />
           </div>
         </div>
        </li>
    );
}
export default TuitItem;