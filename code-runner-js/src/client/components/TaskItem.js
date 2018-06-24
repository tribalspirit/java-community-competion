import React from 'react';
import classNames from 'classnames';

const Task = ({id, title, status, onClickFn}) => (
  <div className="col-lg-3">
      <div className={classNames('task-item', {'submitted': status === 'solved', disabled: status === 'locked'})}>
          <a href="#" onClick={() => onClickFn(id)}>{title}</a>
      </div>
  </div>
)

export default Task;
