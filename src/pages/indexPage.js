import Aside from "../components/Aside.component";
import FilterList from "../components/FilterLIst.component";
import HomeComponent from "../components/Home.component"
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import axios from "axios";

export default function IndexPageComponent(){
    const [loader, setLoader] = useState(true);
    const [getFilterValue, setFilterValue] = useState({brands:[],categories:[],types:[]});
    const [getProduct, setProduct] = useState([]);

    //filtering & watch checkbox
    const [selectBrand, setSelectBrand] = useState([]);
    const [selectCategory, setSelectCategory] = useState([]);
    const [selectType, setSelectType] = useState([]);
    const [productUrl, setProductUrl] = useState('http://biprajit.pythonanywhere.com/products/')


    const baseUrl = 'http://biprajit.pythonanywhere.com/';
    
    useEffect(()=>{
        axios.get(productUrl)
        .then(function (response) {
            setProduct(response.data);
            setLoader(false);
        })
        .catch((error)=> {
            // console.log(error);
        });
    },[productUrl]);


    useEffect(()=>{
        axios.get(`${baseUrl}brands/`)
        .then(function (response) {

        setFilterValue((prevState)=>({
                ...prevState,
                brands:response.data
            }
            ));
        })
        .catch((error)=> {
            // handle error
            // console.log(error);
        });

        axios.get(`${baseUrl}categories/`)
        .then(function (response) {

            setFilterValue((prevState)=>({
                ...prevState,
                categories:response.data
                }
            ));
            
        })
        .catch((error)=> {
            // console.log(error);
        });

        axios.get(`${baseUrl}types/`)
        .then(function (response) {

            setFilterValue((prevState)=>({
                ...prevState,
                types:response.data,
            }));
            
        })
        .catch((error)=> {
            
            // console.log(error);
        });

    },[])

    useEffect(() => {

        buildRequestUrl();
        // const requestUrl = buildRequestUrl();
        // console.log(requestUrl);
    }, [selectBrand,selectCategory,selectType]);

    const buildRequestUrl = () => {
        let brandUrl = '';
        let categoryUrl = '';
        let typeUrl = '';
    
        if (selectBrand.length > 0) {
            brandUrl += `${selectBrand.join(',')}`;
        }

        if (selectCategory.length > 0) {
            categoryUrl += `${selectCategory.join(',')}`;
        }

        if (selectType.length > 0) {
            typeUrl += `${selectType.join(',')}`;
        }

        return setProductUrl(`http://biprajit.pythonanywhere.com/products/?id=&slug=&brand=${brandUrl}&category=${categoryUrl}&type=${typeUrl}&warranty=`);
    };


    const handleBrandCheck = (event) => {
        const {checked, value} = event.target;
        setLoader(true);
        setSelectBrand((prevSelectedBrands) => {
            if (checked) {
                return [...prevSelectedBrands, value];
            } else {
                return prevSelectedBrands.filter((brand) => brand !== value);
            }
        });
        
    };


    const handleCategoryCheck = (event) => {
        const {checked, value} = event.target;
        setLoader(true);
        setSelectCategory((prevSelectedBrands) => {
            if (checked) {
                return [...prevSelectedBrands, value];
            } else {
                return prevSelectedBrands.filter((category) => category !== value);
            }
        });
    }

    const handleTypeCheck = (event) => {
        const {checked, value} = event.target;
        setLoader(true);
        setSelectType((prevSelectedBrands) => {
            if (checked) {
                return [...prevSelectedBrands, value];
            } else {
                return prevSelectedBrands.filter((type) => type !== value);
            }
        });
    }
    // console.log('getCheckValue', getCheckValue);

    return (
        <>
            <div style={{ display: 'flex'}}>
                {!!loader && (<div style={{width:'100%',display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'600', fontSize:'20px', margin:'25% auto'}}>Loading...</div>)}
                

                {!loader && (
                    <>
                        <div style={{ width:'20%', margin:'30px auto',  padding: '15px 5px'}}>
                            <Aside>
                                <FilterList filterItems={getFilterValue.brands} selectItem={selectBrand} title="Brands" handleCheck={handleBrandCheck}/>
                                
                                <FilterList filterItems={getFilterValue.categories} selectItem={selectCategory} title="Categories" handleCheck={handleCategoryCheck}/>

                                <FilterList filterItems={getFilterValue.types} selectItem={selectType} title="Types" handleCheck={handleTypeCheck}/>
                            </Aside>
                        </div>

                        <div style={{ width:'80%'}}>
                            <HomeComponent products={getProduct}/>
                        </div>
                    </>
                )}
            </div>
            
        </>
    )
}