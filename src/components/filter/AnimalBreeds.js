import React from 'react'

export default function AnimalBreeds(props) {
    const {AnimalBreedsSet,setBreeds,handleBreeds} = props
    return (
        <div className="mt-3 pb-3" style={{borderBottom:'1px solid #e0e0e0'}}>
            <p className="mb-2" style={{fontWeight:'600'}}>Breeds ({AnimalBreedsSet.length})</p>
            <div className="myFilterCards">
                { AnimalBreedsSet.map((breed,i)=>{
                        return(
                            <p 
                                className={setBreeds.includes(breed)?'lineThrought mb-1':'mb-1'}
                                key={breed+i} 
                                onClick={(e)=>handleBreeds(breed,e.target.getAttribute("data-checked"))} 
                                data-checked={setBreeds.includes(breed)}>
                                    {breed}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}
