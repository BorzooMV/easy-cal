import React from 'react';

const Screen = (props) => {
    return (
        <div className="Screen">
            <div className="Screen-operator">
                <input type="text" readOnly value={props.operator} />
            </div>
            <input type="text" readOnly value={props.value} />
        </div>
    );
  }

export default Screen;