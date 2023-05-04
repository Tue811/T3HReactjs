import React from "react";
import Pagination  from "../../components/Pagination";

class Feature extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            products:[],
            total: 0,
            limit: 15,
            skip:0
        }
    }

    componentDidMount(){
        const url ="https://dummyjson.com/products?limit=16";
        fetch(url).then(rs =>rs.json())
        .then(rs=>{
            this.setState({
                products: rs.products,
                total:rs.total,
                skip: rs.skip,
                limit: rs.limit
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    changePage(skip){
        const limit=this.state.limit;
        const url =`https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
        fetch(url).then(rs =>rs.json())
        .then(rs=>{
            this.setState({
                products: rs.products,
                total:rs.total,
                skip: rs.skip,
                limit: rs.limit,
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render(){
        const products=this.state.products;
        const total=this.state.total;
        const skip=this.state.skip;
        const limit=this.state.limit;
        
        return(
            <section class="featured spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h2>Featured Product</h2>
                        </div>
                        <div class="featured__controls">
                            <ul>
                                <li class="active" data-filter="*">All</li>
                                <li data-filter=".oranges">Oranges</li>
                                <li data-filter=".fresh-meat">Fresh Meat</li>
                                <li data-filter=".vegetables">Vegetables</li>
                                <li data-filter=".fastfood">Fastfood</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row featured__filter">
                   {
                    products.map((v,k)=>{
                        return(
                            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                            <div class="featured__item">
                                <div class="featured__item__pic set-bg" >
                                    <img src={v.thumbnail}/>
                                    <ul class="featured__item__pic__hover">
                                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div class="featured__item__text">
                                    <h6><a href="#">{v.title}</a></h6>
                                    <h5>{v.price}</h5>
                                </div>
                            </div>
                        </div>
                        )
                    })
                   }
    
                </div>
                <Pagination total={total} limit={limit} skip={skip} changePage={this.changePage.bind(this)}/>
            </div>
        </section>
        )
    }
}

export default Feature;