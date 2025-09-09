import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './ProductList.css'
import {addItem} from "../../CartSlice.jsx";
import {gql} from "@apollo/client";
import {useQuery} from "@apollo/client/react";


function ProductList() {
    const GET_PLANTS = gql`
        query GetPlants {
            categories {
                plants {
                    id
                    name
                    cost
                    description
                    image
                }
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_PLANTS);

    const [addedToCart, setAddedToCart] = useState({});

    const cartItems = useSelector( state => state.cart.items);

    const dispatch = useDispatch();


    const handleAddToCart = (product) => {
        if (isAdded(product)) { return; }

        // Dispatch this information to the addItem inside the function component CartSlice:
        dispatch(addItem(product));

        // Update the setAddedToCart state to by setting the product name as a key and its value to true:
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name] : true
        }));

    }

    // Re-calculate which items are added to the cart after cartItems has been changed:
    useEffect( () => {
        const itemNames = cartItems.map((item) => item.name);
        const result = {}
        Object.entries(addedToCart).forEach(([key, value]) => {
            result[key] = itemNames.includes(key);
        });

        setAddedToCart(result);
    }, [cartItems]);

    // Helper function to check if a given item is in the cart:
    const isAdded = (product) => {
        return addedToCart[product.name]
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div className="product-grid">
            { data.categories && data.categories.map((category, index) => (
                <div key={index}>
                    <h1>
                        <div className="plantname_heading">{category.category}</div>
                    </h1>
                    <div className="product-list">
                        {category.plants.map( (plant, plantIndex) => (
                            <div className="product-card" key={plantIndex}>
                                <div className="product-title">{plant.name}</div>
                                <img
                                    className="product-image"
                                    src={plant.image}
                                    alt={plant.name}
                                />
                                <div className="product-price">{plant.cost}</div>
                                <div className="product-description">{plant.description}</div>
                                <button
                                    className={"product-button" + (isAdded(plant) ? " added-to-cart" : "")}
                                    onClick={() => handleAddToCart(plant)}
                                >
                                    {isAdded(plant) ? "Added to Cart" : "Add to Cart"}
                                </button>

                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
