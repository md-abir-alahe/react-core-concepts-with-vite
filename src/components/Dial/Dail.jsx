import React from 'react';
import Knob from '../Knob/Knob';

const Dail = (props) => {
    return (
        <div style={{border:'2px solid purple', margin:'10px'}}>
            <h3>This is dail component</h3>
            <p>Your setps count: {props.steps}</p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dail;