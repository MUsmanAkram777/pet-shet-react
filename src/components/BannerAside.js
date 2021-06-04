import React from 'react'
import Heading from './Heading'

export default function BannerAside(props) {
    return (
        <div className="petsBannerAside pt-5 pb-5">
            <div className="container">
                <Heading text="About Us" background="#6699ff"/>
                <div className="row">
                    <div className="col-md-6">
                        <p className="bannerAsideText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat hendrerit egestas. Aliquam faucibus dapibus magna, ac feugiat erat volutpat id. Morbi ac ornare dolor. Mauris porttitor a mauris ac lacinia. Nulla in euismod quam. Vestibulum bibendum urna sit amet ligula semper semper. Fusce porttitor elit libero, et faucibus eros pharetra id. Maecenas libero felis, aliquet ac gravida sit amet, lacinia ut velit. Etiam a massa rutrum, maximus magna non, rhoncus risus. Quisque malesuada dignissim eros, et sollicitudin velit volutpat sit amet. Etiam egestas efficitur finibus.
                            <br/>
                            <br/>
                            Proin elementum leo lacus, et scelerisque mi sodales in. In a consequat massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras posuere eu leo nec aliquet. In hac habitasse platea dictumst. In egestas quis risus et rhoncus. Integer commodo justo quis lacinia condimentum. Aenean laoreet ante id justo laoreet lacinia.
                            <br/>
                            <br/>
                            Praesent gravida eros eget mi pharetra, id semper leo faucibus. Duis eu auctor velit. Fusce viverra nec sem at ullamcorper. Vestibulum eget lectus lectus. Nam in sapien orci. Nulla vel felis non mi bibendum dapibus id ut urna. Quisque bibendum felis non fermentum aliquam. Morbi ut interdum eros.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="petImg">
                            <img src={process.env.PUBLIC_URL + '/assets/about.png'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
