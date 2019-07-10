import React, { Component } from 'react';
import TicButton from '../components/TicButton';
import Resul from '../components/Resul';
import Splash from '../components/Splash';
class Game extends Component {
    constructor(props) {
        super(props);
        this.isZeroOrX=false;
        this.msg="";
        this.stage=1;
        this.res="";
        this.matrix=[['','',''],['','',''],['','','']];
        this.state = {msg:this.msg,stage:this.stage,res:this.res };
        
    }
printZeroOrX(row,col){
    this.msg=this.isZeroOrX?"X":"0";
    this.matrix[row][col]=this.msg;
    this.setState({msg:this.msg});
    this.isZeroOrX=!this.isZeroOrX;
}
result(){
    for(var i = 0; i<3;i++){
        var rowSum = 0;
        for(var j = 0; j<3;j++){
            rowSum += this.matrix[i][j];
        }
        if(rowSum === 3)
            this.setState({res:"Circle WIN!"});
        else if(rowSum === -3)
            this.setState({res:"Cross WIN!"});
    }

    for(var i = 0; i<3;i++){
        var colSum = 0;
        for(var j = 0; j<3;j++){
            colSum += this.matrix[j][i];
        }
        if(colSum === 3)
            this.setState({res:"Circle WIN!"});
        else if(colSum === -3)
            this.setState({res:"Cross WIN!"});
    }

    if(this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2] === 3)
        this.setState({res:"Circle WIN!"});
    else if(this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2] === -3)
        this.setState({res:"Cross WIN!"});

    if(this.matrix[2][0] + this.matrix[1][1] + this.matrix[0][2] === 3)
        this.setState({res:"Circle WIN!"});
    else if(this.matrix[2][0] + this.matrix[1][1] + this.matrix[0][2] === -3)
        this.setState({res:"Cross WIN!"});
}
    render() {
        return (
            <>
            <Resul res={this.res} tap={this.result.bind(this)}/>
           <div>
           
                <table>
                    <tr>
                        <TicButton row="0" col="0" print={this.printZeroOrX.bind(this)} msg={this.matrix[0][0]}/>
                        <TicButton row="0" col="1" print={this.printZeroOrX.bind(this)} msg={this.matrix[0][1]}/>
                        <TicButton row="0" col="2" print={this.printZeroOrX.bind(this)} msg={this.matrix[0][2]}/>
                    </tr>
                    <tr>
                        <TicButton row="1" col="0" print={this.printZeroOrX.bind(this)} msg={this.matrix[1][0]}/>
                        <TicButton row="1" col="1" print={this.printZeroOrX.bind(this)} msg={this.matrix[1][1]}/>
                        <TicButton row="1" col="2" print={this.printZeroOrX.bind(this)} msg={this.matrix[1][2]}/>
                    </tr>
                    <tr>
                        <TicButton row="2" col="0" print={this.printZeroOrX.bind(this)} msg={this.matrix[2][0]}/>
                        <TicButton row="2" col="1" print={this.printZeroOrX.bind(this)} msg={this.matrix[2][1]}/>
                        <TicButton row="2" col="2" print={this.printZeroOrX.bind(this)} msg={this.matrix[2][2]}/>
                    </tr>
                </table>
            </div> 
            </>
        );
    }
}

export default Game;