import React from 'react'
import Simg from '../../images/section-title.png'


const SectionTitle = (props) => {
    return(
        <div className="row">
            <div className="wpo-section-title">
                <span>{props.topTitle}</span>
                <h2>{props.MainTitle}</h2>
                <div className="section-title-img">
                    <img src={Simg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;