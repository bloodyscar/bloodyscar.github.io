import React from 'react'
import Breadcrumb from '../components/Breadcrumb/breadcrumb'
import SectionFooter from '../components/Footer/SectionFooter';
import SectionProduct from '../components/Product/SectionProduct'
import Recommend from '../components/Recommend/Recommend';

function Recipes() {
    return (
        <div>
            <Breadcrumb />
            <SectionProduct />
            <Recommend />
            <SectionFooter />
        </div>
    )
}

export default Recipes;
