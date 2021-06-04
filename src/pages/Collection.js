import React,{ useState } from 'react'
import { faTh,faList} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from '../components/Heading'
import AnimalListing from '../components/AnimalListing'
import AnimalType from '../components/filter/AnimalType'
import AnimalColors from '../components/filter/AnimalColors'
import AnimalBreeds from '../components/filter/AnimalBreeds'
import { getVisibleAnimals } from '../data/Animals'
import { AnimalTypesSet } from '../data/Animals'
import { AnimalColorsSet } from '../data/Animals'
import { AnimalBreedsSet } from '../data/Animals'

export default function Collection() {
    console.log(AnimalBreedsSet);


    //types filter
    const [types, setTypes] = useState([])
    const handleTypes = (type,checked) => {
        if(checked==="false"){
            setTypes([...types,type])
        }else{
            let filterTypes = types.filter(t=>t!=type)
            setTypes(filterTypes)
        }
    }


    //colors filter
    const AnimalColorSet = [... new Set(AnimalColorsSet)]
    const [colors, setColors] = useState([])
    const handleColors = (color,checked) => {
        if(checked==="false"){
            setColors([...colors,color])
        }else{
            let filterColors = colors.filter(t=>t!=color)
            setColors(filterColors)
        }
    }


    //breeds filter
    const [Breeds, setBreeds] = useState([])
    const handleBreeds = (breed,checked) => {
        if(checked==="false"){
            setBreeds([...Breeds,breed])
        }else{
            let filterBreeds = Breeds.filter(t=>t!=breed)
            setBreeds(filterBreeds)
        }
    }


    // state for gird/list
    const [gridList, setGridList] = useState("grid")
    const handleGrid = () =>{
        setGridList("grid")
        setColumns('3')
    }
    const handleList = () => {
        setGridList("list")
        setColumns('1')
    }

    // state for number of columns
    const [columns, setColumns] = useState("3")
    const handleCols = (e) =>{
        setColumns(e.target.value)
    }

    const animalsList = getVisibleAnimals(types,colors,Breeds)
    return (
        <div className="container pt-5 pb-1">
            <Heading text="Collection" background="#fff" color="#000"/>
            <div className="row">
                <div className="card col-md-2 pt-3 px-3">
                    <AnimalType AnimalTypesSet={AnimalTypesSet} setTypes={types} handleTypes={handleTypes}/>
                    <AnimalBreeds AnimalBreedsSet={AnimalBreedsSet} setBreeds={Breeds} handleBreeds={handleBreeds}/>
                    <AnimalColors AnimalColorsSet={AnimalColorSet} setColors={colors} handleColors={handleColors}/>
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-4 pb-2">
                                    <i className="gridListIcons" style={{paddingRight:"10px"}} onClick={handleGrid}><FontAwesomeIcon icon={faTh} /></i>
                                    <i className="gridListIcons" onClick={handleList}><FontAwesomeIcon icon={faList} /></i>
                                </div>
                                <div className="col-md-8"></div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group mb-4">
                                <select name="num_of_cols" className="form-control mySelectCols" onChange={handleCols} >
                                    <option value="">Number of columns</option>
                                    {gridList=='list'? <option>1</option> : (
                                        <>
                                        <option>2</option>
                                        <option>3</option>
                                        </>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                    <AnimalListing animalsList={animalsList} pagination={false} num_of_cols={columns} style={gridList}/>
                </div>
            </div>
        </div>
    )
}
