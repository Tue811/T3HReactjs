import React from "react";

export default class Banner extends React.Component{
    render() {
        return (
            <div>
                 <div class="banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="banner__pic">
                        <img src="img/banner/banner-1.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="banner__pic">
                        <img src="img/banner/banner-2.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
        );
    }
}