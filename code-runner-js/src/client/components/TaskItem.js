import React from 'react'
import { Link } from "react-router-dom";

const Task = ({id, title, text}) => (
    <div className="card" style={{width: '25rem'}}>
        <div className="card-header">
            {title}
        </div>
        <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            {text}
            <Link to={`/task/${id}`}>Go to task</Link>
        </div>
    </div>
)

export default Task