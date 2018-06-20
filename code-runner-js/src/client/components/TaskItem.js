import React from 'react'
import classNames from 'classnames'

const Task = ({id, title, submitted, onClickFn}) => (
    <div className="col-lg-3">
        <div className={classNames('task-item', {'submitted': submitted})}>
            <a href="#" onClick={() => onClickFn(id)}>{title}</a>
        </div>
    </div>
)

export default Task