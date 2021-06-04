import React,{useContext} from 'react'


import CartItems from './CartItems'
import { CartContext } from '../context/CartContext'
import Heading from './Heading'
import CartTotal from './CartTotal'

export default function CartComp() {
    const { inCartitems, inCartTotalPrice,deleteFromCart } = useContext(CartContext)

    const handleDelete = (item) => {
        deleteFromCart(item)
    }
    return (
        <div className="container mt-5 mb-5">
            <Heading text="Cart" background="#fff" color="#000"/>
            <div className="row pb-4 pt-4">
                <div className="col-md-8">
                    <div className="row">
                        {
                            inCartitems.length > 0 ? inCartitems.map(item=><CartItems data={item} handleDelete={handleDelete}/>) : <h2>No items in cart.</h2>
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <CartTotal inCartTotalPrice={inCartTotalPrice} />
                </div>
            </div>
        </div>
    )
}
