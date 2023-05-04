import React from "react";
import Categories from "../components/hompage/Categories";
import Feature from "../components/hompage/Feature";
import Banner from "../components/hompage/Banner";
import Product from '../components/hompage/Product';
import Blog from "../components/hompage/Blog";

export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Categories/>
                <Feature/>
                <Banner/>
                <Product/>
                <Blog/>
            </div>
        )
    }
}