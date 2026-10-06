import React from 'react'

const Card = () => {
  return (
    <>
        <nav className ="navbar" >
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <br/>
        <div className="container">
                <div className="card">
                    <h2>Pizaa kha le </h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4aGn1VO584EPbMq-rpavYLrYDRt71DqO9uQioHpGyQ&s=10" alt="pizza lele" />
                    <h2>price : 250</h2>

                </div>
                <div className="card">
                    <h2>burger kha le </h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihXUqWEPEZwLabMmikWXcBni4HUtYhTb5psqG7ffexQ&s=10" alt="" />
                    <h2>price : 50</h2>

                </div>

        
        </div>
    </>
  )
}

export default Card