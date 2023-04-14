import React from 'react'

export default class Student extends React.Component{
    render(){
        const data=this.props.teacher;
        return(
            <div>
                <h1>Giáo Viên</h1>
                <h3>{data.name}</h3>
                <h3>{data.email}</h3>
                <h3>{data.name}</h3>
                <h3>{data.address}</h3>
            </div>
        )
    }
}