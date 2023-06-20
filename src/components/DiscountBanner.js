function DiscountBanner() {
    return (
        <div className="discount-wrapper">
            <section className="main-container flexbox">
                <div className="phone-number flexbox">
                    <i class="fa-solid fa-phone"></i>
                    <p>+001234567890</p>
                </div>
                <div className="discount flexbox">
                    <p>Get 50% Off on Selected Items</p>
                    <p>Shop Now</p>
                </div>
                <div className="settings flexbox">
                    <div className="lang">Eng <i class="fa-solid fa-angle-down"></i></div>
                    <div className="location">Location <i class="fa-solid fa-angle-down"></i></div>
                </div>
            </section>
        </div>
    )
}

export default DiscountBanner