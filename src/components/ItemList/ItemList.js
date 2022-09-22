import React from 'react';
import Item from './Item';
const ItemList = ({ props }) => {
    return (
        <div>
            {props.map((item) => {
                return <Item
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    medidas={item.medidas}
                    props={item}
                />
            })
            }
        </div>
    )
}

export default ItemList;
