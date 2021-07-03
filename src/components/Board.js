import React from 'react'
import Square from './Square'



class Board extends React.Component {
    
    // constructor(props){
    //     super(props);
    //     this.state={
    //         squares: Array(9).fill(null),
    //         xisNext:true,
    //     };
    // }
  
    // handleClick(i){
    //     const squares = this.state.squares.slice();
    //     // let winner =  calculateWinner(squares);
    //     if(squares[i] || calculateWinner(squares))
    //     {
    //         return ;
    //     }
    //     squares[i]= this.state.xisNext ? 'X' :'O';
    //     this.setState({
    //         squares:squares,
    //         xisNext:!this.state.xisNext,
    //     });
    // }
    renderSquare(i){
        return( <Square 
        value={this.props.squares[i]}
        onClick={()=> this.props.onClick(i)}
        />
        );
    }

    render(){
        
        // let status = 'Next turn '+ (this.state.xisNext ? 'X' : 'O');
        return(
             <div>
                {/* <div className ="status">{status}</div> */}
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
             
             </div>
        )
    }
}

export default Board;