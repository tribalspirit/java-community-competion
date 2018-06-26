import React from 'react';
import classNames from 'classnames';
import LOCKED from '../assets/LOCKED.png'
import UNLOCKED from '../assets/UNLOCKED.png'
import SOLVED from '../assets/SOLVED.png'

const Task = ({id, status, onClickFn}) => {
    let filename
    switch (status) {
        case 'UNLOCKED': 
            filename = UNLOCKED
            break
        case 'LOCKED': 
            filename = LOCKED
            break
        case 'SOLVED': 
            filename = SOLVED
            break
    }
    return (
    <div className="col-lg-3 text-center">
        <div onClick={() => status === 'LOCKED' ? null : onClickFn(id)}>

            <img className={classNames('task-item', {'submitted': status === 'SOLVED', disabled: status === 'LOCKED'})} src={filename} />
        </div>
    </div>
)}

export default Task;
