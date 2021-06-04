import React from 'react'


export default function AnimalType(props) {
    const {AnimalTypesSet,setTypes,handleTypes} = props
    return (
        <div className="pb-3" style={{borderBottom:'1px solid #e0e0e0'}}>
            <p className="mb-2" style={{fontWeight:'600'}}>Types ({AnimalTypesSet.length})</p>
            <div className="myFilterCards">
                { AnimalTypesSet.map((type,i)=>{
                        return(
                            <p 
                                className={setTypes.includes(type)?'lineThrought mb-1':'mb-1'}
                                key={type+i} 
                                onClick={(e)=>handleTypes(type,e.target.getAttribute("data-checked"))} 
                                data-checked={setTypes.includes(type)}>
                                    {type}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}
