import React from 'react'
import { Link } from 'react-router-dom';

export default function SingleAnimal(props) {
    const {data,num_of_cols,style} = props
    const colors = data.colors.primary.map(clr => clr+',')
    
    let classes;
    if(num_of_cols=="1"){
        classes = "col-12 col-sm-12 col-md-12 mb-4"
    }else if (num_of_cols=="2"){
        classes = "col-12 col-sm-6 col-md-6 mb-4"
    }else if(num_of_cols=="3"){
        classes = "col-12 col-sm-6 col-md-4 mb-4"
    }else{
        classes = "col-12 col-sm-6 col-md-4 mb-4"   
    }
    if(style=='list'){
        return (
            <div className={classes}>
                <div className="card list myAnimalCard">
                    <div className="row">
                        <div className="col-md-4 m-0">
                            <Link to={`/single/${data.id}`}>
                                <img src={data.photos[0].medium} style={{height:'300px',objectFit:'cover',width:'100%'}}/>
                            </Link>
                        </div>
                        <div className="col-md-8">
                            <div className="myAnimalDetailBox p-3">
                                <h3 className="mt-3 mb-2"><Link to={`/single/${data.id}`}> {data.name}</Link></h3>
                                <p className="mb-1  mb-3">{data.description.substring(0, 150)}.....</p>
                                <p className="mt-1  mb-1"><strong>Type:</strong> {data.type}</p>
                                <p className="mt-1  mb-1"><strong>Colors:</strong> { colors }
                                </p>
                                <div className="pt-5">
                                    <Link className="petBtn" to={`/single/${data.id}`} style={{fontSize:'14px'}}>Details</Link>
                                    <Link className="petBtnSecondary" to={`/cart/${data.id}`} style={{fontSize:'14px',position:'relative',left:'15px'}}>Add to Cart</Link>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className={classes}>
                <div className="card grid myAnimalCard">
                    <Link className="petImg" to={`/single/${data.id}`}>
                        <img src={data.photos[0].medium} style={{height:'300px',objectFit:'cover'}}/>
                    </Link>
                    <div className="myAnimalDetailBox p-3">
                        <h3 className="mt-3 mb-2"><Link to={`/single/${data.id}`}> {data.name}</Link></h3>
                        <p className="mb-1  mb-3">{data.description.substring(0, 60)}... <Link to={`/single/${data.id}`}>[Learn More]</Link></p>
                        <p className="mt-1  mb-1"><strong>Type:</strong> {data.type}</p>
                        <p className="mt-1  mb-1"><strong>Colors:</strong> { colors }
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
