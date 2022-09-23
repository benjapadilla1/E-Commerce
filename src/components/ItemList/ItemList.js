import React from 'react';
import Item from './Item';
const ItemList = ({ props }) => {
    return (
        <>
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
        </>
    )
}

export default ItemList;
