import React, {Component} from "react"
import { Link } from "react-router-dom";

export default (props) => {
    return (
        <ul>
            <li><Link to="/task/1">Task1</Link></li>
            <li><Link to="/task/2">Task2</Link></li>
        </ul>
    )

}