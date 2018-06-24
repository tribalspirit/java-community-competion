import React from 'react';
import classNames from 'classnames';

const Task = ({id, title, status, onClickFn}) => (
  <div className="col-lg-3">
      <div  onClick={() => status === 'LOCKED' ? null : onClickFn(id)} className={classNames('task-item', {'submitted': status === 'SOLVED', disabled: status === 'LOCKED'})}>
          <span>{title}</span>
      </div>
  </div>
)

export default Task;
