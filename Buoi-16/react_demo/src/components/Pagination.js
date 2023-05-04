import React from 'react';
import { render } from '@testing-library/react';

class Pagination extends React.Component {
    clickPage(v){
        const limit=this.props.limit
        const skip=(v-1)*limit;
        this.props.changePage(skip)
    }
    render(){
        const total = this.props.total;
        const skip = this.props.skip;
        const limit = this.props.limit;
        const pages=[];
        const max = total % limit ==0? total/limit : parseInt(total/limit) +1;
        for(let i=1;i<=max;i++){
            pages.push(i)
        }
        const current =skip/limit +1;
        const active_style={
            backgroundColor:"#7fad39",
            borderColor:"#7fad39",
            color:"ffffff"
        }

       
        return (
            <div>
                <div class="product__pagination">
                            
                            {
                                pages.map((v,k)=>{
                                    return(
                                        <a onClick={this.clickPage.bind(this,v)} style={current ==v?active_style:{}} key={k}  >{v}</a>
                                    )
                                })
                            }
                            <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                        </div>
            </div>
        );
    }
   
};

export default Pagination;