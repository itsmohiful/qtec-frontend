import p1  from '../images/p1.jpeg';
import p2  from '../images/p2.jpeg';
import p3  from '../images/p3.jpeg';
import NavBar from './NavBar.component';


export default function HomeComponent(){
    return (
        <div className="container bg-white">
            {/* navigation */}
            <NavBar />

            <div className="row">
                <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                    <div className="product"> 
                        <img src={p1} alt="" />

                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                            <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                            <li className="icon mx-3"><span className="far fa-heart"></span></li>
                            <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                        </ul>
                    </div>

                    <div className="tag bg-red">sale</div>
                    <div className="title pt-4 pb-1">Winter Sweater</div>

                    <div className="d-flex align-content-center justify-content-center"> 
                        <span className="fas fa-star"></span> 
                        <span className="fas fa-star"></span> 
                        <span className="fas fa-star"></span> 
                        <span className="fas fa-star"></span> 
                        <span className="fas fa-star"></span> 
                    </div>

                    <div className="price">$ 60.0</div>

                </div>

                <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                    <div className="product"> 
                    <img src={p2} alt="" />
                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                            <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                            <li className="icon mx-3"><span className="far fa-heart"></span></li>
                            <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                        </ul>
                    </div>
                    <div className="tag bg-black">out of stock</div>
                    <div className="title pt-4 pb-1">Denim Dresses</div>
                    <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
                    <div className="price">$ 55.0</div>
                </div>

                <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                    <div className="product"> 
                    <img src={p3} alt="" />
                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                            <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                            <li className="icon mx-3"><span className="far fa-heart"></span></li>
                            <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                        </ul>
                    </div>
                    <div className="tag bg-green">new</div>
                    <div className="title pt-4 pb-1"> Empire Waist Dresses</div>
                    <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
                    <div className="price">$ 70.0</div>
                </div>

                <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                    <div className="product"> 
                    <img src={p1} alt="" />
                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                            <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                            <li className="icon mx-3"><span className="far fa-heart"></span></li>
                            <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                        </ul>
                    </div>
                    <div className="title pt-4 pb-1">Pinafore Dresses</div>
                    <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
                    <div className="price">$ 60.0</div>
                </div>

            </div>
            
        </div>
    )
}