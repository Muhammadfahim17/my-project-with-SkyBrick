import React from 'react'
import './App.css'
import image1 from '#/logo (4).png'
import image2 from '#/Feature PJ.png'
import image3 from '#/icon.png'
import image4 from '#/icon (1).png'
import image5 from '#/unsplash_6anudmpILw4.png'
import image6 from '#/icon (2).png'
import image7 from '#/icon (3).png'
import image8 from '#/icon (4).png'
import image9 from '#/icon (5).png'
import image10 from '#/icon (6).png'
import image11 from '#/icon (7).png'
import image12 from '#/photo20250610220025.png'
import image13 from '#/unsplash_T0iFfJw-rB0.png'
import image14 from '#/unsplash_8oRCwrBn_Fc.png'
import image15 from '#/unsplash_UV81E0oXXWQ.png'
import image16 from '#/unsplash_gMes5dNykus.png'
import image17 from '#/navigation.png'
import image18 from '#/akar-icons_facebook-fill.png'
import image19 from '#/entypo-social_linkedin-with-circle.png'
import image20 from '#/entypo-social_twitter-with-circle.png'
// import image13 from '#/unsplash_MP0bgaS_d1c.png.png'



const App = () => {
  return (
    <div>
      <div className="navbar">
      <img src={image1} alt="" />
      <div className="textnavbar">
        <p>Home</p>
        <p>About Us</p>
        <p>Projects</p>
        <p>Services</p>
        <p style={{'color' : '#F9995D'}}>Contact Us</p>
      </div>
      </div>

    <div className="navbarbox">
      <h1 style={{'color' : '#292E3D','fontFamily' : 'sans-serif','fontSize' : '55px','width' : '400px'}}>Building things is our mission.</h1>
      <img className='project' src={image2} alt="" />
    </div>

    <div className="reputation">
      <h1 style={{'textAlign' : 'center','margin' : '50px 0px','color' : '#292E3D','fontWeight' : 'bold','fontFamily' : 'sans-serif'}}>Our Reputation</h1>
      <div className="totalcart">
      <div className="cart">
        <img src={image3} alt="" />
        <h2 style={{'color' : '#3D445C','fontWeight' : 'bold'}}>Best Services</h2>
        <p style={{'color' : '#858EAD'}}>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
      </div>
      <div className="cart">
        <img src={image3} alt="" />
        <h2 style={{'color' : '#3D445C','fontWeight' : 'bold'}}>Best Teams</h2>
        <p style={{'color' : '#858EAD'}}>Cursus semper tellus volutpat aliquet lacus. </p>
      </div>
      <div className="cart">
        <img src={image4} alt="" />
        <h2 style={{'color' : '#3D445C','fontWeight' : 'bold'}}>Best Designs</h2>
        <p style={{'color' : '#858EAD'}}>Ultricies at ipsum nunc, tristique nam lectus.</p>
      </div>
      </div>
    </div>

    <div className="about">
    <img style={{'marginRight' : '250px'}} src={image5} alt="" />
    <div className="textabout">
      <h1 style={{'fontFamily' : 'sans-serif'}}>About us</h1>
      <p style={{'fontSize' : '20px','fontFamily' : 'sans-serif'}}>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.</p>
        <p style={{'fontSize' : '20px','fontFamily' : 'sans-serif'}}>We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
        <button style={{'color' : '#2947A9','backgroundColor' : '#FFFFFF','fontWeight' : 'bold','padding' : '12px 30px','borderRadius' : '10px'}}>More on Our History</button>
    </div>
    </div>


    <div className="servies">
      <h1 style={{'textAlign' : 'center','color' : '#292E3D','fontWeight' : 'bold','fontFamily' : 'sans-serif','fontSize' : '36px','margin' : '35px 0px'}}>Services</h1>
      <div className="cartservies">
      <div className="kart" style={{'backgroundColor' : 'white'}}>
        <img src={image6} alt="" />
        <h2 style={{'borderTop' : '2px solid','paddingTop' : '20px',}}>Construction</h2>
      </div>
      <div className="kart" style={{'backgroundColor' : '#2947A9','color' : 'white'}}>
        <img src={image7} alt="" />
        <h2 style={{'borderTop' : '2px solid','paddingTop' : '20px'}}>Renovation</h2>
      </div>
      <div className="kart">
        <img src={image8} alt="" />
        <h2 style={{'borderTop' : '2px solid','paddingTop' : '20px'}}>Consultation</h2>
      </div>
      <div className="kart" style={{'backgroundColor' : '#2947A9','color' : 'white'}}>
        <img src={image9} alt="" />
        <h2 style={{'borderTop' : '2px solid','paddingTop' : '20px'}}>Repair Services</h2>
      </div>
      <div className="kart">
        <img src={image10} alt="" />
        <h2 style={{'borderTop' : '2px solid','paddingTop' : '20px'}}>Architecture</h2>
      </div>
      <div className="kart" style={{'backgroundColor' : '#2947A9','color' : 'white'}}>
        <img src={image11} alt="" />
        <h2 style={{'borderTop' : '2px solid','paddingTop' : '20px'}}>Electric</h2>
      </div>
      </div>
    </div>


    <div className="expriense">
      <img src={image12} alt="" />
      <div className="textexpriense">
        <h1 style={{'color' : '#2947A9','fontSize' : '55px'}}>30 Years Experience</h1>
        <p style={{'color' : '#525B7A','fontSize' : '18px','lineHeight' : '30px'}}>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
        <button style={{'backgroundColor' : '#2947A9','color' : 'white','padding' : '12px 45px','fontWeight' : 'bold'}}>Contact Us</button>
      </div>
    </div>


    <div className="center">
      <div className="textcenter">
        <h1 style={{'fontSize' : '38px'}}>Free consultation with exceptional quality</h1>
        <p style={{'fontSize' : '20px','letterSpacing' : '5px'}}>Just one call away: +84 1102 2703</p>
      </div>
      <button style={{'background' : 'none','color' : 'white','fontWeight' : 'bold','padding' : '12px 35px','border' : '2px solid white'}}>Get your consultation</button>
    </div>

    <div className="box">
      <div className="saibar">
        <h1 style={{'color' : '#292E3D','fontFamily' : 'sans-serif'}}>Projects</h1>
        <p style={{'color' : '#2947A9','fontWeight' : 'bold','fontSize' : '22px','borderLeft' : '5px solid','paddingLeft' : '20px'}}>All</p>
        <p style={{'color' : '#C2C7D6','fontWeight' : 'bold','fontSize' : '22px'}}>Commercial</p>
        <p style={{'color' : '#C2C7D6','fontWeight' : 'bold','fontSize' : '22px'}}>Residential</p>
        <p style={{'color' : '#C2C7D6','fontWeight' : 'bold','fontSize' : '22px'}}>Other</p>
      </div>
      <div className="totalcartbox">
      <div className="cartbox">
        <img src={image13} alt="" />
        <h2 style={{'marginLeft' : '15px'}}>Wildstone Infra Hotel</h2>
        <p style={{'marginLeft' : '15px','padding' : '10px 0px'}}>2715 Ash Dr. San Jose, South Dakota</p>
      </div>
      <div className="cartbox">
        <img src={image14} alt="" />
        <h2 style={{'marginLeft' : '15px'}}>Wish Stone Building</h2>
        <p style={{'marginLeft' : '15px','padding' : '10px 0px'}}>2972 Westheimer Rd. Santa Ana, Illinois </p>
      </div>
      <div className="cartbox">
        <img src={image15} alt="" />
        <h2 style={{'marginLeft' : '15px'}}>Mr. Parkinston’s House</h2>
        <p style={{'marginLeft' : '15px','padding' : '10px 0px'}}>3517 W. Gray St. Utica, Pennsylvania</p>
      </div>
      <div className="cartbox">
        <img src={image16} alt="" />
        <h2 style={{'marginLeft' : '15px'}}>Oregano Height</h2>
        <p style={{'marginLeft' : '15px','padding' : '10px 0px'}}>22464 Royal Ln. Mesa, New Jersey </p>
      </div>
      <img style={{'margin' : 'auto'}} src={image17} alt="" />
      </div>
    </div>


    <div className="footer">
      <h1 style={{'color' : '#292E3D','fontFamily' : "sans-serif"}}>What can us do for you?</h1>
      <p style={{'color' : '#292E3D','fontSize' : '18px','fontWeight' : 'bold'}}>We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
      <div className="inputemail">
        <input style={{'padding' : '10px 45px','borderRadius' : '4px','fontWeight' : 'bold'}} type="text" placeholder='Your Name*' />
        <input style={{'padding' : '10px 45px','borderRadius' : '4px','fontWeight' : 'bold'}} type="email" placeholder='Email*'/>
      </div>
      <div className="inputcontact">
        <input style={{'padding' : '10px 45px','borderRadius' : '4px','fontWeight' : 'bold'}} type="text" placeholder='Reason for Contacting*' />
        <input style={{'padding' : '10px 45px','borderRadius' : '4px','fontWeight' : 'bold'}} type="text" placeholder='Phone'/>
      </div>
      <input style={{'width' : '565px','height' : '135px','borderRadius' : '4px','fontWeight' : 'bold',}} type="text"  />
      <p className='field' style={{'color' : '#292E3D','fontWeight' : 'bold','fontSize' : '18px',}}>* indicates a required field</p>
      <button style={{'backgroundColor' : '#2947A9','color' : 'white','padding' : '10px 80px','fontWeight' : 'bold'}}>Submit</button>
    </div>
    <p className='message'>Message</p>


    <div className="footerinfo">
      <div className="footerleft">
        <p style={{'fontSize' : '20px','fontWeight' : '600','color' : '#292E3D','fontFamily' : 'sans-serif'}}><b style={{'color' : '#2947A9','fontSize' : '20px'}}>Address : </b>
        6391 Elgin St. Celina, Delaware 10299</p>
        <p style={{'fontSize' : '20px','fontWeight' : '600','color' : '#292E3D','fontFamily' : 'sans-serif'}}><b style={{'color' : '#2947A9','fontSize' : '20px'}}>Phone : </b>
        +84 1102 2703</p>
        <p style={{'fontSize' : '20px','fontWeight' : '600','color' : '#292E3D','fontFamily' : 'sans-serif'}}><b style={{'color' : '#2947A9','fontSize' : '20px'}}>Email : </b>
        hello@thebox.com</p>
        <img src={image1} alt="" />
      </div>
      <div className="footerright">
        <h2 style={{'color' : '#2947A9','fontFamily' : 'sans-serif','fontWeight' : 'bold','fontSize' : '30px'}}>Newsletter:</h2>
        <div className="footerrightinput">
          <input style={{'padding' : '10px 28px','fontWeight' : 'bold'}} type="text" placeholder='Your email here' />
          <button style={{'backgroundColor' : '#F9995D','color' : 'white','fontWeight' : 'bold','padding' : '10px 25px'}}>Subscribe</button>
        </div>
        <h2 style={{'color' : '#2947A9','fontFamily' : 'sans-serif','fontWeight' : 'bold','fontSize' : '30px'}}>Social:</h2>
        <div className="imagesocial">
        <img src={image18} alt="" />
        <img src={image19} alt="" />
        <img src={image20} alt="" />
        </div>
      </div>
    </div>

    <div className="info">
      <p>TheBox Company © 2022. All Rights Reserved</p>
    </div>

    </div>
  )
}



export default App