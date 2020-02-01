  
import React, { Component, Fragment } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Comment extends Component {
    render() {
        return (
            <Fragment>

                <div>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Tweets</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tweets & replies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Media</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Likes</a>
                        </li>

                    </ul>
                </div>
               
            
            </Fragment>

        );
    }
}

export default Comment;