import React, {Component} from 'react'
import data from '.././data'
class InfoBox extends Component {
    constructor (data) {
        super(data)
        this.state = {
           name: '',
           job: '',
           boss: '',
           movies1:'',
           movies2:'',
           movies3:'' 
        
        }
    }
  

    render() {
    return(

        <div className = 'InfoBox'>
            <h1>{data[0].name.first} {data[0].name.last} {data[0].id}/25 </h1>
            <h3> From:{data[0].city} {data[0].country} </h3>
            <h3> Job Title: {data[0].title} </h3>
            <h3> Employer: {data[0].employer}</h3>
            <h3> Favorite Movies:</h3>
            <ul>
                <li>1. {data[0].favoriteMovies[0]}</li>
                <li>2. {data[0].favoriteMovies[1]}</li>
                <li>3. {data[0].favoriteMovies[2]}</li>
            </ul>


        </div>

    )
    }  
}
export default InfoBox


//const data = data
//Next step get data[0] to change or update based on buttons click