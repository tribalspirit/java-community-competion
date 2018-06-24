import React from 'react';


const TaskStatus = ({taskStatus, onSolvedFn}) => {
    const {totalTestCount, testsPassed, firstFailedInput} = taskStatus
    const solved = totalTestCount === testsPassed
    const solvedPercentage = solved ? 100 : Math.round(100 * testsPassed / totalTestCount)
    solved && onSolvedFn()
    
    const _successMessage = () => (
        <div className='row'>
            <h2>Conguratulations!</h2>
            <h3>Next task unlocked!</h3>
        </div>) 
    
    const _failedMessage = (msg) => (
        <div className='status'>
            <div className='row'>
                <h4>One or more tests failed. Please, revise your code and resubmit</h4>
                <h4>First failed test input:</h4>
            </div>
            <div className='row'>
                <div class="card failed-input">
                    <div class="card-body">
                        {msg}
                    </div>
                </div>  
            </div>
        </div>)
        
        return (
            <div className='status row'>
                <div className="col-lg-12">
                    {solved ? _successMessage() : _failedMessage(firstFailedInput)}
                    <h3>Current progress</h3>
                    <h4>Solved {testsPassed} of {totalTestCount}</h4>
                    <div className='progress'>
                        <div className='progress-bar bg-success' role='progressbar' style={{width: `${solvedPercentage}%`}} aria-valuenow={solvedPercentage} aria-valuemin="0" aria-valuemax="100"></div>
                        <div className='progress-bar bg-danger' role='progressbar' style={{width: `${100 - solvedPercentage}%`}} aria-valuenow={100 - solvedPercentage} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>)
}

export default TaskStatus;
