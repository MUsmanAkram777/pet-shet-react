import React from 'react'
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

export default function CartItems(props) {

    const {data,handleDelete} = props
    return (
        <div className="col-md-6 mb-4" style={{position:'relative'}}>
            <div className="card">
                <Link className="petImg" to={`/single/${data.id}`}>
                    <img src={data.photos[0].medium} style={{height:'300px',objectFit:'cover',width:'100%'}}/>
                </Link>
                <h3 className="pt-3 px-3 mb-1">{data.name}</h3>
                <p className="mt-0 px-3 pb-0 mb-0"><strong>Color: </strong> {data.selectedColor}</p>
                <p className="mt-0 px-3 pt-0 mt-0 pb-3"><strong>Price: </strong> Rs.{data.price}</p>
                <div className="deleteIcon">
                    <FontAwesomeIcon icon={faTrash} style={{color:'red'}} title="Delete this item" onClick={()=>handleDelete(data)}/>
                </div>
            </div>
        </div>
    )
}
