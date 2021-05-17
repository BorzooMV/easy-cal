import React,{ Component } from 'react';
import Keypad from './components/Keypad/Keypad';
import Screen from './components/Screen/Screen';
import Footer from './components/Footer/Footer';

class App extends Component{
  state ={
    value: 0,
    result: 0,
    operator: "on",
    firstTime:true,
  }

  //Methods
  numbersClickHandler = (e) => {
    let oldValue = this.state.value;
    let newValue = oldValue + e.target.innerHTML;
    if(oldValue != 0 || oldValue ==='0.'){
      this.setState({value:newValue});
    }else if((oldValue == 0) && (e.target.innerHTML == ".") ){
      this.setState({value:'0.'});
    }else{
      this.setState({value:e.target.innerHTML})
    }
  }

  clearBtnHandler = () => {
    this.setState({
      value:0,
      result: 0,
      operator: "on",
      firstTime:true
    });
  }

  plusBtnHandler = () => {
    this.setState({
      operator:"+",
      result: Number(this.state.value) + Number(this.state.result),
      value:0,
      firstTime:false
    })
  }

  minusBtnHandler = () => {
    this.setState({
      operator:"-",
      result: Number(this.state.value) - Number(this.state.result),
      value:0,
      firstTime:false
    })
  }

  starBtnHandler = () => {
    if(this.state.firstTime){
      this.setState({
        operator:"*",
        result:Number(this.state.value),
        value:0,
        firstTime:false
      });
    }else{
      this.setState({
        operator:"*",
        result: Number(this.state.value) * Number(this.state.result),
        value:0,
        firstTime:false
      });
    }
  }

  slashBtnHandler = () => {
    if(this.state.firstTime){
      this.setState({
        operator:"/",
        result:Number(this.state.value),
        value:0,
        firstTime:false
      });
    }else{
      this.setState({
        operator:"/",
        result: Number(this.state.value) / Number(this.state.result),
        value:0,
        firstTime:false
      });
    }
  }

  equalBtnHandler = () => {
    switch(this.state.operator){
      case "+":
        this.setState({
          result:Number(this.state.value) + this.state.result,
          value:Number(this.state.value) + this.state.result,
          operator:"="
        });
        break;
      case "-":
        this.setState({
          result:this.state.result - Number(this.state.value),
          value:this.state.result - Number(this.state.value),
          operator:"="
        });
        break;
      case "*":
        this.setState({
          result:Number(this.state.value) * this.state.result,
          value:Number(this.state.value) * this.state.result,
          operator:"="
        });
        break;
      case "/":
        this.setState({
          result:this.state.result / Number(this.state.value),
          value:this.state.result / Number(this.state.value),
          operator:"="
        });
        break;
      default:
        break;  
    }
    

    
  }


  //Render
  render(){
    return (
      <div className="App">
        <Screen value={this.state.value} operator={this.state.operator} />
        <Keypad 
          numbersClickHandler={this.numbersClickHandler}
          clearBtnHandler={this.clearBtnHandler}
          equalBtnHandler={this.equalBtnHandler}
          plusBtnHandler={this.plusBtnHandler}
          minusBtnHandler={this.minusBtnHandler}
          starBtnHandler={this.starBtnHandler}
          slashBtnHandler={this.slashBtnHandler}
          />
        <Footer />
      </div>
    );
  }
}

export default App;
