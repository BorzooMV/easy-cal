import React from 'react';
import Key from './Key';

const Keypad = () => {
    let smallKeys = [];
    for( let i = 1; i <= 9; i++ ){
        smallKeys.push(i);
    }

    return(
        <div className="Keypad">
            <div className="Keypad-grid">
                <div className="Keypad-grid-small">
                    {smallKeys.map(i=><Key key={i} sign={i} />)}
                </div>
                <div className="Keypad-grid-long-right">
                    <Key key="+" sign="+" />
                    <Key key="+" sign="-" />
                    <Key key="+" sign="*" />
                    <Key key="+" sign="/" />
                </div>
                <div className="Keypad-grid-long-bottom">
                    <Key key={0} sign={0} />
                    <Key key="=" sign="=" />
                </div>
            </div>
        </div>
    );
}

export default Keypad;