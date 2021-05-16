import React from 'react';

const Screen = () => {
    return (
        <div className="Screen">
            <div className="Screen-operator">
                <input type="text" readOnly value="on" />
            </div>
            <input type="text" readOnly value={0} />
        </div>
    );
  }

export default Screen;