const NavigationBar = () => {
return (<>
    <div className="navigationBar">
        <div className="col-lg-12 col-12 col-sm-12">
            <div className="row">
                <div className="col-1 col-lg-3 col-sm-2">
                    <div className="banner-item"><i className="fas fa-bars"></i></div>
                </div>

                <div className="col-4 col-lg-4 col-sm-4">
                    <div className="bannerlogo banner-item"><img src="https://dummyimage.com/100x25.gif?text=logo"
                            alt="logo"></img></div>
                </div>
                <div className="col-7 col-lg-7 col-sm-7 ml-auto mr-3">
                <div className="row text-end banner-item">
                    <div>
                    <i onClick={()=>{alert("Product Carted")}} className="fa fa-shopping-cart navbuttons" aria-hidden="true"></i>
                    <i onClick={()=>{alert("Product Carted")}} className="fa fa-heart navbuttons" aria-hidden="true"></i>
                    </div>
                </div>
                </div>
                
            </div>
        </div>

    </div>
</>);

}

export default NavigationBar