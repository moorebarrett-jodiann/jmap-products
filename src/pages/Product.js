import ProductCards from "../components/ProductCards";
import ProductBanner from "../components/ProductBanner";
import ManageProducts from "../components/ManageProducts";
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Product() {
    
    const [items, setItems] = useState([]);
    const [sortedItems, setSortedItems] = useState([]);
    const [sortingOption, setSortingOption] = useState("");
    const [message, setMessage] = useState("Loading products ...");
    const API_URL = 'https://fakestoreapi.com/products';
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(API_URL)
            .then(result => {
                setItems(result.data);
            })
            .catch(error => {
                setMessage('No products found ...');
            });
        // '[]' ensures that the request is made only when the component mounts
    }, []);

    // Navigate to detail page if a card is clicked
    const handleClick = (item) => {
        // Use navigate function for redirection
        navigate(`/product/${item.id}`); 
    };

    // Sort characters based on the current sorting option
    useEffect(() => {
        if (sortingOption === "electronics") {
            const filtered = items.filter(item => item.category === "electronics");
            setSortedItems(filtered);
        } else if (sortingOption === "women's clothing") {
            const filtered = items.filter(item => item.category === "women's clothing");
            setSortedItems(filtered);
        } else if (sortingOption === "jewelery") {
            const filtered = items.filter(item => item.category === "jewelery");
            setSortedItems(filtered);
        } else if (sortingOption === "men's clothing") {
            const filtered = items.filter(item => item.category === "men's clothing");
            setSortedItems(filtered);
        } else {
            setSortedItems(items)
        }
    }, [items, sortingOption]);

    // Handle sorting option change
    const handleSortOptionChange = useCallback((option) => {
        if (option === sortingOption) {
            setSortingOption(""); // Toggle off if the same option is clicked
        } else {
            setSortingOption(option);
        }
    }, [sortingOption]);

    return (
        <>
            <section className="main-container">
                {items.length > 0 ? (
                <>
                    <HelmetProvider>
                        <Helmet>
                            <title>All Products</title>
                        </Helmet>
                    </HelmetProvider>
                    <ProductBanner />
                    <div className="product-wrapper">
                        <div className="heading">
                            <h2>Browse our collections</h2>
                            <ManageProducts
                                onSortOptionChange={handleSortOptionChange}
                                sortingOption={sortingOption}
                            />
                        </div>
                        <div className="product-grid">
                            <ProductCards
                                items={sortedItems.length > 0 ? sortedItems : items}
                                onClick={handleClick}
                            />
                        </div>
                    </div>
                </>
                ) : (
                    <div className="error-container">
                        <p className="loading">{message}</p>
                    </div>
                )}
            </section>
        </>
    )
}

export default Product