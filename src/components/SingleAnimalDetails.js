import React,{useState,useContext,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { faCheck,faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {singleProduct} from '../data/Animals'
import Heading from '../components/Heading'
import AnimalListing from '../components/AnimalListing'
import { getVisibleAnimals } from '../data/Animals'
import NotFound from '../components/NotFound'
import { CartContext } from '../context/CartContext'

export default function SingleAnimalDetails() {
    let params = useParams()
    let data = singleProduct(params.id)


    
    
    const {addToCart,message} = useContext(CartContext)

    let  [msg, setMsg] = useState(true)

    


    const [selectedColor, setSelectedColor] = useState(data.colors.primary[0])
    const handleColor = (e) => {
        setSelectedColor(e.target.value)
    }

    useEffect(()=>{
        const timeId = setTimeout(() => {
            setMsg(false)
            console.log(message);
          }, 2000)
      
          return () => {
            clearTimeout(timeId)
            setMsg(true)
          }
    },[]) 
    
    const handleAddToCart = () => {
        setMsg(true)
        addToCart(data,selectedColor)
    }

    if(!data)
        return <NotFound />

    
    const animalsList = getVisibleAnimals()
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-5">
                    <div className="petImg">
                        <img src={data.photos[0].medium} style={{height:'300px',objectFit:'cover',width:'100%'}}/>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="row m-0 mb-3" style={{borderBottom:'1px solid #e0e0e0'}}>
                        <div className="col-md-6 p-0">
                            <h1 className="animalTitle mt-0">{data.name}</h1>
                        </div>
                        <div className="col-md-6 p-0" style={{textAlign:'right'}}>
                            <h4 className="animalTitle mt-3 mb-0">Rs.{data.price}</h4>     
                        </div>
                    </div>
                    
                    <p className="animalDes">{data.description}</p>
                    <div className="row">
                        <div className="col-md-4">
                                <select name="selected_color" className="form-control mySelectCols mt-0" onChange={(e)=>handleColor(e)}>
                                    {
                                        data.colors.primary.map(clr => <option>{clr}</option>)
                                    }
                                </select>
                                { msg && (
                                    <strong style={{color:'red',fontSize:'12px'}}>{message}</strong>
                                )}
                                
                        </div>
                        <div className="col-md-4">
                            <span className="petBtnSecondary" onClick={()=>handleAddToCart()} style={{fontSize:'14px',position:'relative',top:'5px'}} >Add to Cart</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0 mt-5">
                <div className="col-md-12 p-0" style={{borderBottom:'1px solid #e0e0e0'}}>
                    <div className="row m-0">
                        <div className="col-md-6 p-0">
                            <h3>Good With</h3>
                        </div>
                        <div className="col-md-6 p-0" style={{textAlign:'right'}}>
                            {data.environment.children ?
                                ( <> Children <FontAwesomeIcon icon={faCheck} style={{color:'green'}}  />, </>)
                                :
                                ( <> Children <FontAwesomeIcon icon={faTimes} style={{color:'red'}} />, </>)
                            } 
                            {data.environment.dogs ?
                                ( <> Dogs <FontAwesomeIcon icon={faCheck} style={{color:'green'}} />, </>)
                                :
                                ( <> Dogs <FontAwesomeIcon icon={faTimes} style={{color:'red'}} />, </>)
                            } 
                            {data.environment.cats ? 
                                ( <> Cats <FontAwesomeIcon icon={faCheck} style={{color:'green'}} /> </>)
                                :
                                ( <> Cats <FontAwesomeIcon icon={faTimes} style={{color:'red'}} /> </>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 mb-5">
                <div className="col-md-6">
                    <h3>About</h3>
                    <div class="row m-0 pb-2 pt-2" style={{borderBottom:'1px solid #e0e0e0'}}>
                        <div className="col-md-6 p-0">
                            <strong>Breed</strong>
                        </div>
                        <div className="col-md-6 p-0" style={{textAlign:'right',textTransform:'capitalize'}}>
                            {data.breeds.primary}
                        </div>
                    </div>
                    <div class="row m-0 pb-2 pt-2" style={{borderBottom:'1px solid #e0e0e0'}}>
                        <div className="col-md-6 p-0">
                            <strong>Age</strong>
                        </div>
                        <div className="col-md-6 p-0" style={{textAlign:'right',textTransform:'capitalize'}}>
                            {data.age}
                        </div>
                    </div>
                    <div class="row m-0 pb-2 pt-2" style={{borderBottom:'1px solid #e0e0e0'}}>
                        <div className="col-md-6 p-0">
                            <strong>Gender</strong>
                        </div>
                        <div className="col-md-6 p-0" style={{textAlign:'right',textTransform:'capitalize'}}>
                            {data.gender}
                        </div>
                    </div>
                    <div class="row m-0 pb-2 pt-2" style={{borderBottom:'1px solid #e0e0e0'}}>
                        <div className="col-md-6 p-0">
                            <strong>Size</strong>
                        </div>
                        <div className="col-md-6 p-0" style={{textAlign:'right',textTransform:'capitalize'}}>
                            {data.size}
                        </div>
                    </div>
                    <div class="row m-0 pb-2 pt-2" style={{borderBottom:'1px solid #e0e0e0'}}>
                        <div className="col-md-6 p-0">
                            <strong>Status</strong>
                        </div>
                        <div className="col-md-6 p-0" style={{textAlign:'right',textTransform:'capitalize'}}>
                            {data.status}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3>Attributes</h3>
                    <div class="row m-0 pb-2 pt-2" style={{borderBottom:'1px solid #e0e0e0'}}>
                        <div className="col-md-6 p-0">
                            <strong>Spayed/Neutered</strong>
                        </div>
                        <div className="col-md-6 p-0" style={{textAlign:'right'}}>
                            {data.attributes.spayed_neutered ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div class="row m-0 pb-2 pt-2" style={{borderBottom:'1px solid #e0e0e0'}}>
                        <div className="col-md-6 p-0">
                            <strong>House Trained</strong>
                        </div>
                        <div className="col-md-6 p-0" style={{textAlign:'right'}}>
                            {data.attributes.house_trained ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div class="row m-0 pb-2 pt-2" style={{borderBottom:'1px solid #e0e0e0'}}>
                        <div className="col-md-6 p-0">
                            <strong>Declawed</strong>
                        </div>
                        <div className="col-md-6 p-0" style={{textAlign:'right'}}>
                            {data.attributes.declawed ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div class="row m-0 pb-2 pt-2" style={{borderBottom:'1px solid #e0e0e0'}}>
                        <div className="col-md-6 p-0">
                            <strong>Special Needs</strong>
                        </div>
                        <div className="col-md-6 p-0" style={{textAlign:'right'}}>
                            {data.attributes.special_needs ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div class="row m-0 pb-2 pt-2" style={{borderBottom:'1px solid #e0e0e0'}}>
                        <div className="col-md-6 p-0">
                            <strong>Shots Current</strong>
                        </div>
                        <div className="col-md-6 p-0" style={{textAlign:'right'}}>
                            {data.attributes.shots_current ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="container pt-5 pb-5">
                <Heading text="You May Also Like" background="#fff" color="#000"/>
                <AnimalListing animalsList={animalsList} pagination={true}/>
            </div>
        </div>
    )
}
