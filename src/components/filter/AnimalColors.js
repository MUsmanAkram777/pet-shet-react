import React from 'react'

export default function AnimalColors(props) {
    const {AnimalColorsSet,setColors,handleColors} = props
    return (
        <div className="mt-3 pb-3" style={{borderBottom:'1px solid #e0e0e0'}}>
            <p className="mb-2" style={{fontWeight:'600'}}>Colors ({AnimalColorsSet.length})</p>
            <div className="myFilterCards">
                { AnimalColorsSet.map((color,i)=>{
                        return(
                            <p 
                                className={setColors.includes(color)?'lineThrought mb-1':'mb-1'}
                                key={color+i} 
                                onClick={(e)=>handleColors(color,e.target.getAttribute("data-checked"))} 
                                data-checked={setColors.includes(color)}>
                                    {color}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}
