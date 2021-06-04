import React from 'react'
import AnimalListing from '../components/AnimalListing'
import Banner from '../components/Banner'
import BannerAside from '../components/BannerAside'
import Heading from '../components/Heading'
import { getVisibleAnimals } from '../data/Animals'

export default function Home() {
    const animalsList = getVisibleAnimals()
    return (
        <div>
            <Banner/>
            <BannerAside/>
            <div className="container pt-5 pb-5">
                <Heading text="Shop" background="#fff" color="#000"/>
                <AnimalListing animalsList={animalsList} pagination={true}/>
            </div>
        </div>
    )
}
