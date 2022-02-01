
import '../bootstrap.css';
import '../fontawesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const CategoryList = () => {
    // console.log(useState());
    // const value = useState()[0];
    // const handler = useState()[1];
    // console.log(value, handler);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 15
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 12
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 7
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 5
        }
      };
    return (<>
        <div className='categoryBanner'>
            <div className='row'>
                <div className='col-lg-12 col-12 col-sm-12'>
                    <div className='row'>
                    <Carousel responsive={responsive}
                     swipeable={true}
                     draggable={true}
                     showDots={false}
                     infinite={true}
                     autoPlay={false}
                     removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        
                                <div>
                                    <div className='categories'>
                                        <SingleCategory />
                                    </div>
                                </div>


                                <div>
                                    <div className='categories'>
                                        <SingleCategory />
                                    </div>
                                </div>

                                <div>
                                    <div className='categories'>
                                        <SingleCategory />
                                    </div>
                                </div>
                                
                                <div>
                                    <div className='categories'>
                                        <SingleCategory />
                                    </div>
                                </div>

                                <div>
                                    <div className='categories'>
                                        <SingleCategory />
                                    </div>
                                </div>


                                <div>
                                    <div className='categories'>
                                        <SingleCategory />
                                    </div>
                                </div>

                                <div>
                                    <div className='categories'>
                                        <SingleCategory />
                                    </div>
                                </div>

                        
                    </Carousel>
                            </div>
                </div>

            </div>
        </div>

    </>);
};
const SingleCategory = () => {
    return (<>
        <div>
            <div className='row'>
                <div className='col-12 col-lg-12 col-sm-12'>
                    <img className="categoryImage"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rtpmhczgmdRzRBk-DvvYsamFP9uFF7ZpuA&usqp=CAU"
                        alt="My Product"
                    ></img>
                </div>
                <div className='col-12 col-lg-12 col-sm-12 text-center'>
                    <p className='categoryTitle'>Saree</p>

                </div>
            </div>

        </div>
    </>);

}


export default CategoryList;