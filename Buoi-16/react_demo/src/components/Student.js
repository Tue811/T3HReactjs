import React from "react";
 export default class Student extends React.Component{
    constructor(props){
        super(props)
        this.state={
            point: 0
        }
    }

    add(){
        let p=this.state.point;
        if(p>= 0 && p<10){
            p++
        }
    
        this.setState({
            point:p
        })
    }

    less(){
        let p=this.state.point;
        if(p> 0 && p<=10){
            p--
        }
    
        this.setState({
            point:p
        })
    }
    render(){
        const data=this.props.data;
        const p=this.state.point;   
        return(
            <div>
                <h3>{data.name}</h3>
                <h3>{data.date}</h3>
                <p>{data.email}</p>
                <p>{data.address}</p>
                <div>Điểm sinh viên</div>
                <button onClick={this.less.bind(this)}>-</button>
                <input value={p}/>
                <button onClick={this.add.bind(this)}>+</button>

            </div>
        )
    }
 }