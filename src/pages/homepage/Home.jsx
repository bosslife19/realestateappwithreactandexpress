import React, { useContext } from 'react'
import './home.scss'
import SearchBar from '../../components/searchbar/SearchBar'
import { AuthContext } from '../../context/AuthContext'
function Home() {
    const {currentUser} = useContext(AuthContext);
   
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
            <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, veritatis? Reiciendis illo voluptatibus earum a consectetur alias cumque necessitatibus repellat et doloremque ut quos cum quibusdam, est tenetur. Cum, optio!</p>

            <SearchBar/>

            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                </div>

                <div className="box">
                    <h1>200</h1>
                    <h2>Award Gains</h2>
                </div>

                <div className="box">
                    <h1>1200+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
            </div>
            
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default Home