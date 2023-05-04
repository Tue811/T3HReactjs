import React from "react";

export default class Category extends React.Component{

    constructor(props){
        super(props);
    }

    checkChange(){
        const cat=this.props.category;
        this.props.checkChange(cat.id)
    }
    render(){

        const cat=this.props.category;
        const checked = this.props.checked;

        return(
            <li>
                <label onClick={this.checkChange.bind(this)}>
                    <input type="checkbox" value={cat.id} checked={checked==cat.id ? true :false}/> {cat.name}
                </label>
            </li>
        )
    }
}