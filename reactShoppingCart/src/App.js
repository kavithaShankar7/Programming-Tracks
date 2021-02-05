import React, {Component} from 'react';
import './App.css';
import 'h8k-components';
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

class App extends Component {
    constructor() {
        super();
        const products = [...PRODUCTS].map((product, index) => {
            product.id = index + 1;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 0;
            return product;
        });
        this.state = {
            cart: {
                items: []
            },
            products,
        }
    }

    addItemToCart = (product) => {
        if(product.cartQuantity == 0) alert('The quantity of the item should be atleast 1 to add in the cart');
        else {
            let arr = [];
            arr.quantity = product.cartQuantity;
            arr.id = product.id ;
            arr.item = product.name;
            let cart = this.state.cart;
            cart.items = [...cart.items, arr];
            this.setState({
                cart,
            })
        }
        
    }

    handleQuantity = (val, product) => {
        if(val == 'inc'){
            let quan = product.cartQuantity;
            let prodId = product.id;
            let prodState = this.state.products;
            prodState[prodId - 1].cartQuantity = quan + 1;
            this.setState({
                products: [...this.state.products],
            })
        }
        else if (val == 'dec'){
            let quan = product.cartQuantity;
            if(quan == 0 ) alert('Quantity is already zero');
            else {
                let prodId = product.id;
                let prodState = this.state.products;
                prodState[prodId - 1].cartQuantity = quan - 1 ;
                this.setState({
                    products: [...this.state.products],
                })
            }
         
        }
    }

    
    render() {
        return (
            <div>
                {/* <h8k-navbar header={title}></h8k-navbar> */}
                <div className="layout-row shop-component">
                    {console.log(this.state.cart.items)}
                    <ProductList products={this.state.products} addItem={this.addItemToCart} quantity={this.handleQuantity} />
                    <Cart cart={this.state.cart}/>
                </div>
            </div>
        );
    }
}

export const PRODUCTS = [
    {
        name: "Cap",
        price: 5
    },
    {
        name: "HandBag",
        price: 30
    },
    {
        name: "Shirt",
        price: 35
    },
    {
        name: "Shoe",
        price: 50
    },
    {
        name: "Pant",
        price: 35
    },
    {
        name: "Slipper",
        price: 25
    }
];
export default App;
