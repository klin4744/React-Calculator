class CalculatorPanel extends React.Component{
  state={
    buttons : [{
      id: "zero",
      letter: "0",
      value: 0
    },{
      id: "one",
      letter: "1",
      value: 1
    },{
      id: "two",
      letter: "2",
      value: 2
    },{
      id: "three",
      letter: "3",
      value: 3
    },{
      id: "four",
      letter: "4",
      value: 4
    },{
      id: "five",
      letter: "5",
      value: 5
    },{
      id: "six",
      letter: "6",
      value: 6
    },{
      id: "seven",
      letter: "7",
      value: 7
    },{
      id: "eight",
      letter: "8",
      value: 8
    },{
      id: "nine",
      letter: "9",
      value: 9
    },{
      id: "add",
      letter: "+",
    },{
      id: "subtract",
      letter: "-",
    },{
      id: "multiply",
      letter: "X",
    },{
      id: "divide",
      letter: "/",
    },{
      id: "clear",
      letter: "AC",
    },{
      id: "equals",
      letter: "=",
    },{
      id: "decimal",
      letter: ".",
    }],
    totalSum: 0,
    rawSum: "",
    previousVal: ""
  }
calculate = phrase => {
  const bugFix = phrase.replace("=", "");
  const fixedStr = bugFix.replace("X","*");
  const matches = fixedStr.match(/[+-\/\*]{2,}/);
   let newStr = "";
  if(matches){
    for(let i = 0; i<matches.length; i++){
      if(fixedStr.includes(matches[i])){
        newStr = fixedStr.replace(matches[i],matches[i][matches[i].length-1])
      }
    }
  }else{
    newStr = fixedStr;
  }
  let ans = eval(newStr);
  this.setState({
    totalSum: ans,
    previousVal: `${ans}`
  })
}
processClick = (e) => {
  const id = e.target.id;
  let val = e.target.innerText;
  if(val === "="){
    let text = this.state.previousVal
    return this.calculate(text);
  }
  let sum1 = this.state.previousVal;
  let sum = sum1 + `${val}`;
  val = val.replace(/(\r\n|\n|\r)/gm, "");
  sum = sum.replace(/(\r\n|\n|\r)/gm, "");
  if(sum.indexOf("0") === 0 && val == 0){
    return;
  }
  if(sum.match(/\.[0-9]+\.|\.{2,}/) && val == "."){
    return;
  }
  this.setState({
    totalSum: sum,
    rawSum: sum,
    previousVal:sum
  })
  e.preventDefault
}
clear = (e) => {
  this.setState({
    totalSum: "0",
    rawSum: "",
    previousVal:""
  })
}
  render(){
    return(
      <div className="container text-center">
        <h1 className="display-3 m-2">React Calculator</h1>
      <div id="calculator" className="container">
        <div className="row">
          <Display rawSum={this.state.rawSum} totalSum={this.state.totalSum} />
        </div>
        <div className="row">
            <div className="col-md-6 p-0 border">
            <Button processClick={this.clear} id={this.state.buttons[14].id} letter={this.state.buttons[14].letter}/>
            </div>
            <div className="col-md-3 p-0 border">
            <Button processClick={this.processClick} id={this.state.buttons[13].id} letter={this.state.buttons[13].letter}/>
            </div>
            <div className="col-md-3 p-0 border">
              <Button processClick={this.processClick} id={this.state.buttons[12].id} letter={this.state.buttons[12].letter}/>
            </div>
        </div>
          <div className="row">
              <div className="col-md-3 p-0 border">
                <Button processClick={this.processClick} id={this.state.buttons[7].id} letter={this.state.buttons[7].letter}/>
               </div>
               <div className="col-md-3 p-0 border">
                <Button processClick={this.processClick} id={this.state.buttons[8].id} letter={this.state.buttons[8].letter}/>
               </div>
               <div className="col-md-3 p-0 border">
                <Button processClick={this.processClick} id={this.state.buttons[9].id} letter={this.state.buttons[9].letter}/>
               </div>
               <div className="col-md-3 p-0 border">
                <Button processClick={this.processClick} id={this.state.buttons[11].id} letter={this.state.buttons[11].letter}/>
               </div>
          </div>
<div className="row">
              <div className="col-md-3 p-0 border">
                <Button processClick={this.processClick} id={this.state.buttons[4].id} letter={this.state.buttons[4].letter}/>
               </div>
               <div className="col-md-3 p-0 border">
                <Button processClick={this.processClick} id={this.state.buttons[5].id} letter={this.state.buttons[5].letter}/>
               </div>
               <div className="col-md-3 p-0 border">
                <Button processClick={this.processClick} id={this.state.buttons[6].id} letter={this.state.buttons[6].letter}/>
               </div>
               <div className="col-md-3 p-0 border">
                <Button processClick={this.processClick} id={this.state.buttons[10].id} letter={this.state.buttons[10].letter}/>
               </div>
          </div>
<div className="row">
              <div className="col-md-3 p-0 border">
                <Button processClick={this.processClick} id={this.state.buttons[1].id} letter={this.state.buttons[1].letter}/>
               </div>
               <div className="col-md-3 p-0 border">
                <Button processClick={this.processClick} id={this.state.buttons[2].id} letter={this.state.buttons[2].letter}/>
               </div>
               <div className="col-md-3 p-0 border">
                <Button processClick={this.processClick} id={this.state.buttons[3].id} letter={this.state.buttons[3].letter}/>
               </div>
                <div className="col-md-3 p-0 border-bottom border-left border-right">
              <Button processClick={this.processClick} id={this.state.buttons[15].id} letter={this.state.buttons[15].letter}/>
               </div>
          </div>
<div className="row">
            <div className="col-md-6 p-0 border">
            <Button processClick={this.processClick} id={this.state.buttons[0].id} letter={this.state.buttons[0].letter}/>
            </div>
            <div className="col-md-3 p-0 border">
            <Button processClick={this.processClick} id={this.state.buttons[16].id} letter={this.state.buttons[16].letter}/>
            </div>
            <div className="col-md-3 p-0 border-bottom border-left border-right bg-light">
             
            </div>
        </div>
      </div>
      <p className="lead mt-5">A project by: Kevin Lin</p>
      <small>Coded in the Javascript Framework React JS</small>
      </div>
    )
  }
}
class Display extends CalculatorPanel{
  render(){
    return(
      <div  className="container-fluid bg-dark text-white text-right rounded-top border">
        <div className="border-bottom m-2"><p className="lead">{this.props.rawSum}</p></div>
        <div id="display" className="lead">{this.props.totalSum}</div>
      </div>
    )
  }
}
class Button extends CalculatorPanel{
  render(){
    return(
      <button onClick={this.props.processClick} id={this.props.id} className="w-100 rounded-0 btn-secondary lead my-auto py-auto">
      {this.props.letter}
      </button>
    )
  }
}
ReactDOM.render(<CalculatorPanel />, document.getElementById("body"))