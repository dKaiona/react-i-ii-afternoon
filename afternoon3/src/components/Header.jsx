import React from 'react'

function Header() {
let styles = {
    backgroundColor: 'lightBlue',
    fontSize: 50,
    display: 'flex',
    padding: 30
    
}

return (
    <div>
        <header className = 'header' style={styles}>Home</header>
    </div>
)
}
export default Header

//this creates my header component 
//which has no dynamic components
//Its being imported and rendered to App.js