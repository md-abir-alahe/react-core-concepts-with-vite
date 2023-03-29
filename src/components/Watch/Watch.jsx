import React, { useEffect, useState } from 'react';
import Dail from '../Dial/Dail';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () =>{
        const nextSteps = steps+1;
        setSteps(nextSteps);
    }

    useEffect(()=>{
        console.log(steps);
    },[steps])

    return (
        <div style={{border:'2px solid red', margin:'10px'}}>
            <h3>My watch component</h3>
            <p>steps : {steps}</p>
            <button onClick={increaseSteps}>De Dour.......</button>
            <Dail steps={steps}></Dail>
        </div>
    );
};

export default Watch;