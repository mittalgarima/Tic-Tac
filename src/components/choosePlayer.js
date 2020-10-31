import React, { Component } from 'react';

export class Player   extends Component {
    handleForm(e){
        e.preventDefault();
        this.props.player(e.target.player.value)
    }
    render() {
        return ( 
        <form onSubmit={(e)=>this.handleForm(e)}>
                   <label>
                   player x
                       <input type="radio" name="player" value="x"/>
                   </label>
                   <label>
                   player O
                       <input type="radio" name="player" value="O"/>
                   </label> 
                   <input type="submit" value="start"/>
               </form>
           
        )
    }
}

export default Player;
