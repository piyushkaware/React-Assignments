import React, { useEffect, useState } from "react";
import more from './images/more.png'
import heart from './images/heart.png'
import snd from './images/share.png'
import axios from 'axios';

function PostImg() {
    const [post, setpost] = useState([])

    React.useEffect(() => {
        axios.get(`http://localhost:3004/user`).then(res => {
            setpost(res.data);

        })

    }, [])

    return (
        post.map((person, idx) => {
            return (
                <div className="main">
                    <div className="all">
                        <div className="nameplace">
                            <div className="namloc">
                                <div className="adjustheight">
                                    <h3><strong>{person.name}</strong></h3>
                                </div>
                                <div className="adjustheight">
                                    <p>{person.location}</p>
                                </div>
                            </div>
                            <div>
                                <img src={more} alt='more'></img>
                            </div>
                        </div>

                        <div >
                            <img className="picture" src={person.PostImage} alt='img' ></img>
                        </div>

                        <div className="below">
                            <div className="adjust">
                                <div className="likeshare">
                                    <div className="vector">
                                        <img src={heart} alt='like'></img>
                                    </div>
                                    <div className="vector">
                                        <img src={snd} alt='send'></img>
                                    </div>
                                </div>
                                <div className="like">
                                    <p>{person.likes} likes</p>
                                </div>
                            </div>
                            <div>
                                <p>{person.date}</p>
                            </div>
                        </div>
                        <div className="description">
                            <h3>{person.description}</h3>
                        </div>

                    </div>
                </div>
            )
        })
    )
}

export default PostImg;