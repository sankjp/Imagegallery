import React, { useState } from "react";
import "./index.css";
import Picture from "../Gallery/Picture.js";
const Display=()=>{

    const [foodItems,setFoodItems]=useState(Picture);

    const filterItem=(currentItem)=>{
        const updateItem=Picture.filter((currentElem)=>{
            return currentElem.category===currentItem;
        })
        setFoodItems(updateItem);
    }

    return(
        <div className="gallery">
            <h1 className="heading">Please Order Your Yummy Food</h1>
            <hr/>
            <div className="menu">
                <button className="btn" onClick={()=>filterItem('breakfast')}>Breakfast</button>
                <button className="btn" onClick={()=>filterItem('lunch')}>Lunch</button>
                <button className="btn" onClick={()=>filterItem('evening')}>Evening</button>
                <button className="btn" onClick={()=>filterItem('dinner')}>Dinner</button>
                <button className="btn" onClick={()=>setFoodItems(Picture)}>All</button>
            </div>
            <div className="row">
                {foodItems.map((elem=>{
                    const {id,image,name,price,description}=elem;
                    return(
                     <div className="rowitems">
                        <div className="imageall">
                            <img src={image} alt="" className="menuimg"></img>
                            <p>{description}</p>
                            <hr/>
                            <div className="priceinfo">
                                <h2>{price}</h2>
                                <a href="#">
                                    <button className="orderbtn">Order Now</button>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3> {name}</h3> 
                        </div>
                     </div>
             
                    )
                }))

                }

            </div>

        </div>
    );
}
export default Display;