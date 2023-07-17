import React from 'react'
import Hotitemcard from './Hotitemcard'
import '../Stylesheet/Hotaccessories.css'

const Hotaccessories = ({ music, musicCover, smartDevices, SmartDeviceCover, home, homeCover,lifestyle,lifestyleCover,mobileAccessories,mobileAccessoriesCover }) => {
    return (
        <div className="Hotaccessories">
            <div>
                <img src={musicCover || SmartDeviceCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt="not" />
            </div>
            <div>
                {
                    music && music.map((item, index) => (
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    ))
                }

                {
                    smartDevices && smartDevices.map((item, index) => (
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    ))
                }

                {
                    home && home.map((item, index) => (
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    ))
                }

                {
                    lifestyle && lifestyle.map((item, index) => (
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    ))
                }

                {
                    mobileAccessories && mobileAccessories.map((item,index)=>(
                        <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Hotaccessories