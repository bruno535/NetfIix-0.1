import React from 'react';
import { categories } from '../api';
import { Banner } from './Banner.js';
import { Row } from './Row'

export function Home(){
    return(
        <div>
            <Banner/>
            {categories.map((category)=>{
            return (
                <Row 
                    key={category.name} 
                    title={category.title} 
                    path={category.path}
                />
                )
            })}
        </div>
    )
}