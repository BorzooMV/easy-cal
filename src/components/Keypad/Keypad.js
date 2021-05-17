import React from 'react';
import Key from './Key';

const Keypad = (props) => {
    let smallKeys = [];
    for( let i = 1; i <= 9; i++ ){
        smallKeys.push(i);
    }

    return(
        <div className="Keypad">
            <div className="Keypad-grid">
                <div className="Keypad-grid-small">
                    {smallKeys.map(i=><Key key={i} sign={Number(i)} clickHandler={props.numbersClickHandler} />)}
                </div>
                <div className="Keypad-grid-long-right">
                    <Key key="+" sign="+" clickHandler={props.plusBtnHandler} />
                    <Key key="-" sign="-" clickHandler={props.minusBtnHandler} />
                    <Key key="*" sign="*" clickHandler={props.starBtnHandler} />
                    <Key key="/" sign="/" clickHandler={props.slashBtnHandler} />
                </div>
                <div className="Keypad-grid-long-bottom">
                    <Key key={0} sign={0} clickHandler={props.numbersClickHandler} />
                    <Key key="=" sign="=" clickHandler={props.equalBtnHandler} />
                </div>
                <div className="Keypad-grid-functions">
                     <Key key="clear" sign="C" clickHandler={props.clearBtnHandler} />
                     <Key key="." sign="." clickHandler={props.numbersClickHandler} />
                </div>
            </div>
        </div>
    );
}

export default Keypad;