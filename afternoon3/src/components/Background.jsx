import React from 'react'
import InfoBox from './InfoBox'
function Background(data) {
    let styles = {
        backgroundColor: 'black',
        height: '100vh' 
    }
    return (
    <div className = 'allTheSuff'>
        <InfoBox data='Data' ></InfoBox>
        <div>
            <button className = 'blackButton'>Previous</button>
                <button className = 'blueButton'>Edit</button>
                <button className = 'blueButton'>Delete</button>
                <button className = 'blueButton'>New</button>
            <button className = 'blackButton'>Next</button>
        </div>    
    </div>
    )
}
export default Background