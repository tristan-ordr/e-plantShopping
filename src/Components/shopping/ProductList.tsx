import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './ProductList.css'
import {addItem} from "../../CartSlice.js";
import {StateHolderInterface} from "../../types/State";
import {amplifyClient} from "../../main.tsx";


function ProductList() {
    /**
     * Using a separate graphQL server:
     */
    // const GET_PRODUCTS: TypedDocumentNode<GetProductListQuery> = gql`
    //     query GetProductList {
    //         categories {
    //             name
    //             plants {
    //                 id
    //                 name
    //                 cost
    //                 description
    //                 image
    //             }
    //         }
    //     }
    // `;
    //
    // const { loading, error, data } = useQuery(GET_PRODUCTS);

    /**
     * Using amplify:
     */
    const initialState: Product[] = [];
    const [plantList, setPlantList] = useState(initialState);
    console.log(plantList);

    useEffect (() => {
        async function getPlants() {
            try {
                const { data: plantList } = await amplifyClient.models.Plant.list();
                return plantList
            } catch {
                return []
            }

        }
        getPlants().then(r => setPlantList(r));
    }, [])


    // Required by both amplify and graphQL:
    const [addedToCart, setAddedToCart] = useState({});

    const cartItems = useSelector( (state: StateHolderInterface) => state.cart.items);

    const dispatch = useDispatch();

    const handleAddToCart = (product: any) => {
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
        // @ts-ignore
        Object.entries(addedToCart).forEach(([key, value]) => {
            // @ts-ignore
            result[key] = itemNames.includes(key);
        });

        setAddedToCart(result);
    }, [cartItems]);

    // Helper function to check if a given item is in the cart:
    const isAdded = (product: any) => {
        // @ts-ignore
        return addedToCart[product.name]
    }

    // GRAPHQL:
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;

    //
    // For graphQL, insert the following directly below the "product-grid" element. Close opened elements, tags,
    // functions after the product list rendering logic.
    //
    // { data && data.categories && data.categories.map((category, index) => (
    // <div key={index}>
    //     <h1>
    //         <div className="plantname_heading">{category.name}</div>
    //     </h1>


    return (
        <div className="product-grid">

            <div className="product-list">
                { plantList.map( (plant, plantIndex) => (
                    <div className="product-card" key={plantIndex}>
                        <div className="product-title">{plant.name}</div>
                        <img
                            className="product-image"
                            src={plant.image ? plant.image : undefined}
                            alt={plant.name ?? ""}
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
    );
}

interface Product {
    name: string | null;
    image: string | null;
    description: string | null;
    cost:  string | null;
    readonly id: string;
    readonly createdAt: string;
    readonly updatedAt: string;
}

export default ProductList;
