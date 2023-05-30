import Aside from "../components/Aside.component";
import FilterList from "../components/FilterLIst.component";
import HomeComponent from "../components/Home.component"
import 'bootstrap/dist/css/bootstrap.css';
import { brands, category} from '../.data/data';
import { useState } from "react";

export default function IndexPageComponent(){
    const [getCheckValue, setCheckValue] = useState([]);

    const handleCheck = (item) => {
        setCheckValue((previous)=> [...previous,item]);
    }
    console.log('getCheckValue', getCheckValue);

    return (
        <>
            <div style={{ display: 'flex'}}>

                <div style={{ width:'20%', margin:'30px auto',  padding: '15px 5px'}}>
                    <Aside>
                        <FilterList items={brands} title="Brands" handleCheck={handleCheck}/>
                        
                        <FilterList items={category} title="Category" handleCheck={handleCheck}/>
                    </Aside>
                </div>

                <div style={{ width:'80%'}}>
                    <HomeComponent />
                </div>
            </div>
            
        </>
    )
}