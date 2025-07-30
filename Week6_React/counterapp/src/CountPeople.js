    import './CountPeople.css';
    import { Component } from 'react';

    class CountPeople extends Component{
    
        constructor(){
        super()
        this.state={
            EntryCount:0,
            ExitCount:0,
            c:0
        };
        
  this.updateEntry = this.updateEntry.bind(this); 
  this.updateExit =this.updateExit.bind(this);
        }
        updateEntry()
        {
            this.setState((prevState,props)=>{
            return{EntryCount: prevState.EntryCount + 1}
            });
        }
        updateExit()
        {
            this.setState((prevState, props)=>
            {
                 return{ExitCount:prevState.ExitCount+1}
            })
        }
        
        render()
        {
            return(
                <div>
                    <button onClick={this.updateEntry}>Login </button><span> {this.state.EntryCount} People Entered!!!</span>
                    <button onClick={this.updateExit}>Exit</button> <span> {this.state.ExitCount} People Left!!!</span>
                   
                    </div>
            )
        }
    }




    // import { useState } from "react";
    // import './CountPeople.css'
    // function CountPeople()
    // {

    //      const [count,setCount]=useState(0);
    //     function UpdateEntry()
    //     { 
    //        setCount(count+1)
    //     }
    // function UpdateExit()
    //     { 
    //        setCount(count-1)
    //     }
    
    //     return(
    //         <div>
    //             <button onClick={UpdateEntry}>Login</button>
    //             <button onClick={UpdateExit}>Exit</button>
    //         </div>
    //     )

    // }

    export default CountPeople;
