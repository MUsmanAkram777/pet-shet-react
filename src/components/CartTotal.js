import React,{ useContext} from 'react'
import {Link} from 'react-router-dom'


export default function CartTotal(props) {
    const { inCartTotalPrice } =props
    return (
        <div className="col-md-12">
            <div className="card pt-5 pb-5 px-0">
                <h2 style={{textAlign:'center'}}>
                    <small>Total</small><br/>
                    Rs.{inCartTotalPrice}
                </h2>
            </div>
            <div className="pt-4">
                <Link className="petBtn" to={`/collection`} style={{fontSize:'14px',display:'block',textAlign:"center"}}>Continue Shopping</Link>
                <Link className="petBtnSecondary mt-3" to={`#`} style={{fontSize:'14px',display:'block',textAlign:"center"}}>Check Out</Link>
            </div> 
        </div>
    )
}
