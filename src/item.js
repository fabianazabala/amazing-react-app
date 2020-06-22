import React, {Component} from 'react';
import './item.css';

function Item (props){

     return(
        <div className="item">
            <div className="image"><img src={props.image} width="120%" alt/></div>
            <div className="title">{props.title}</div>
            <div className="rating">
               <p>
                   <p>
                       Score:
                       <select value={props.rating} >
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="5">5</option>

                       </select>

                   </p>

               </p>
            </div>

        </div>
    );

}
export default Item;