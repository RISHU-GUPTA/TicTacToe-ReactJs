import React, { Component } from 'react';
import TicButton from '../components/TicButton';
class Game extends Component {
    constructor(props) {
        super(props);
        this.isZeroOrX=false;
        this.msg="";
        this.matrix=[['','',''],['','',''],['','','']];
        this.state = {msg:this.msg  };
    }
printZeroOrX(row,col){
    this.msg=this.isZeroOrX?"X":"0";
    this.matrix[row][col]=this.msg;
    this.setState({msg:this.msg});
    this.isZeroOrX=!this.isZeroOrX;
}
result(){
    
}
    render() {
        return (
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
        );
    }
}

export default Game;