function ManageProducts(props) {
    const handleSortOptionChange = (option) => {
        props.onSortOptionChange(option);
    };

    return (
        <div className="filter-container">
            <div className="sort-options">
                <button
                    className={`mensClothing ${props.sortingOption === "men's clothing" ? "active" : ""}`}
                    onClick={() => handleSortOptionChange("men's clothing")}
                    >
                    Mens Clothing
                </button>
                <button
                    className={`womensClothing ${props.sortingOption === "women's clothing" ? "active" : ""}`}
                    onClick={() => handleSortOptionChange("women's clothing")}
                    >
                    Womens Clothing
                </button>
                <button
                    className={`jewelery ${props.sortingOption === "jewelery" ? "active" : ""}`}
                    onClick={() => handleSortOptionChange("jewelery")}
                    >
                    Jewelery
                </button>
                <button
                    className={`electronics ${props.sortingOption === "electronics" ? "active" : ""}`}
                    onClick={() => handleSortOptionChange("electronics")}
                    >
                    Electronics
                </button>
            </div>
        </div>
    )
}

export default ManageProducts