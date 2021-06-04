import React,{useState} from 'react'
import SingleAnimal from './SingleAnimal'

export default function AnimalListing(props) {

    const {animalsList} = props
    let initialState = {
        data:[...animalsList],
        per_page:3
    }
    let [pagination, setPagination] = useState(initialState);
    if(props.pagination){
        //if pagination true then pagination logic and data setting

        let {per_page,data} = pagination
        let indexOfLastAnimal = per_page
        let indexOfFirstAnimal = 0
        let currentAnimals = data.slice(indexOfFirstAnimal,indexOfLastAnimal)
        let handlePagination = () =>{
            let {per_page} = pagination
            setPagination(prevState=>({
                ...prevState,
                per_page:per_page+3
            }))
        }
        return (
            <>
                <div className="row">
                    {
                        currentAnimals.map((animal,i)=>{
                            return (
                                <SingleAnimal data={animal} key={animal.name+''+i} num_of_cols={props.num_of_cols} style={props.style}/>
                            )
                        })
                    }
                </div>
                <div className="pt-4 text-center">
                    <span className="petBtn" href="#" onClick={handlePagination}>Show More</span>
                </div> 
            </> 
        )

    }else{
        //if pagination is not active simply retutn shuffleArr
        return (
            <>
                <div className="row">
                    {
                        animalsList.map((animal,i)=>{
                            return (
                                <SingleAnimal data={animal} key={animal.name+''+i} num_of_cols={props.num_of_cols} style={props.style}/>
                            )
                        })
                    }
                </div>
            </> 
        )
    }

    
}
