import React from 'react'
import "./Home.css"
import banner from './Banner4.jpg'
import Product from './Product'


function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img src={banner} className='home_image'/>
                <div className='home_row'>
                    <Product 
                    id="12465253"
                    title="Sita: Warrior of Mithila (Ram Chandra Series - Book 2)" 
                    price={100}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51d2SjL97IL._SX316_BO1,204,203,200_.jpg"
                    />
                    <Product
                    id="12654265"
                    title="Apple iPhone 12 Mini (64GB) - Purple"
                    price={43100}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71hVxI-Ed-S._SL1500_.jpg"
                    />
                    <Product
                    id="76354735"
                    title="APPLE Airpods (3rd Generation) Bluetooth Headset  (White, True Wireless)"
                    price={12300}
                    rating={4}
                    image="https://rukminim1.flixcart.com/image/832/832/kwdv3bk0/headphone/q/o/x/-original-imag92pgct73fbvx.jpeg?q=70"/>
                    
                    
                    

                </div>
                <div className='home_row'>
                    
                    <Product
                    id="987938475"
                    title="Puma Men's Drongos Dp Mesh Running Shoes"
                    price={731}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/81g5uzm8gfL._UL1500_.jpg"/>
                    <Product
                    id="65735787"
                    title="Harry Potter Box Set: The Complete Collection (Set of 7 Volumes)"
                    price={7572}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71rOzy4cyAL.jpg" />
                    <Product
                    id="765765437457"
                    title={"Fire-Boltt Ninja 2 Max 1.5 Full Touch Display Smartwatch with SpO2"}
                    price={1567}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61V36x21sQL._SL1500_.jpg"/>
                    <Product
                    id="987387"
                    title="Butterfly Jet Elite Mixer Grinder, 750W, 4 Jars (Grey)"
                    price={2799}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/81aALsqzUlL._SL1500_.jpg"/>
                </div>
                <div className='home_row'>
                    <Product
                    id="76375684"
                    title="Samsung 32 inch (80 cm) Smart Monitor with Netflix, YouTube, Prime Video and Apple TV Streaming (LS32AM501NWXXL, White)"
                    price={22764}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71Wcwia5NwS._SL1500_.jpg"/>
                    <Product
                    id="876286584"
                    title="PS5 FIFA 22"
                    price={3338}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81dnq3kPxTL._SL1500_.jpg"/>
                    
                    
                </div>


            </div>
            
        </div>
    )
}

export default Home
