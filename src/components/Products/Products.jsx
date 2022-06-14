import Grid from "@material-ui/core/Grid";
import React from "react";
import Product from "./Product/Product";
import useStyles from "./styles";


const Products = ({  products, onAddToCart }) => {
    const classes = useStyles();

    if ( !products.length ) return <p>Loading...</p>;

    return (
        <main style={{ width: "100%" }} className={classes.content}>
            
          

            <div className={classes.toolbar} />
            <div className="container mx-auto bg-gray-100 mb-20">


                <nav className="bg-gray-800 h-14">
                    <p className="font-sans text-neutral-50	p-2 font-bold">Smartphone</p>

                </nav>
                <Grid container justify="center" spacing={4}>
                    {products.map(( product ) => (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <Product className="max-h-0.5" product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))}
                </Grid>

            </div>

            <div className="container mx-auto bg-gray-100 mb-20">


                <nav className="bg-rose-600	 h-14">
                    <p className="font-sans text-neutral-50	p-2 font-bold">Femme & beauté</p>

                </nav>
                <Grid container justify="center" spacing={4}>
                    {products.map(( product ) => (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <Product className="max-h-0.5" product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))}
                </Grid>

            </div>

            <div className="container mx-auto bg-gray-100 mb-20">


                <nav className="bg-orange-500 h-14">
                    <p className="font-sans text-neutral-50	p-2 font-bold">Cusine</p>

                </nav>
                <Grid container justify="center" spacing={4}>
                    {products.map(( product ) => (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <Product className="max-h-0.5" product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))}
                </Grid>

            </div>

            <div className="container mx-auto bg-gray-100 mb-20">


                <nav className="bg-yellow-600 h-14">
                    <p className="font-sans text-neutral-50	p-2 font-bold">Mode</p>

                </nav>
                <Grid container justify="center" spacing={4}>
                    {products.map(( product ) => (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <Product className="max-h-0.5" product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))}
                </Grid>

            </div>

           
         

          
        </main>
        
    );
};

export default Products;

