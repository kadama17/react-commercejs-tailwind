import React, { Component } from "react";
import { commerce } from "../../lib/commerce";
import "./ProductHistory.css";



export default class ProductHistory extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            products: []
        };


    }
    componentDidMount() {

        if ( !localStorage.getItem( "lastViewed" ) !== null ) {
            this.setState({ products: JSON.parse( localStorage.getItem( "lastViewed" )) });
            console.log( this.state.products );

        } else {
            this.setState({ products: [] });
        }


    }

    async handleAddToCart( productId, quantity ) {
        await commerce.cart.add( productId, quantity );

    }






    render() {
        return (

            <><nav className="bg-slate-600 mt-20 h-14">
                <p className="font-sans text-neutral-50	p-2 font-bold">Vue recement</p>

            </nav><div className="container mx-auto bg-gray-100 mb-20">

                <div className="flex items-stretch ...">

                    {this.state.products.map(( product ) => (
                        <><div key={product.id} className="py-5 product-card">
                            {/* <div className="badge">Hot</div> */}
                            <div className="product-tumb">
                                <img src={product.image.url} alt="" />
                            </div>
                            <div className="product-details">
                                <h4><a href="">{product.name}</a></h4>
                                <div className="product-bottom-details">
                                    <div className="product-price">
                                        {/* <small>{product.price.formatted}</small> */}
                                        {product.price.formatted}</div>
                                    <div className="product-links">
                                        <a href=""><i className="fa fa-heart"></i></a>
                                        <a href=""><i className="fa fa-shopping-cart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div></>
                    ))}
                </div>

            </div></>
        );
    }
}
