import React from "react";
import Header from "../components/Header";
import Feature from "../components/hompage/Feature";
import Breadcrumb from "../components/shoppage/Breadcrumb";
import Product from "../components/hompage/Product";

export default class ShopPage extends React.Component{
    render() {
        return (
            <div>
              
                <Feature/>
                <Breadcrumb/>
             
            </div>
        );
    }
}