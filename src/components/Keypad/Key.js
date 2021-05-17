import React from 'react';

const Key = (props) => {
    return(
        <button className="Key" onClick={(e) => props.clickHandler(e)}>
            {props.sign}
        </button>
    );
}

export default Key;