import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
<>
    <div className='home'>
        
        <div className="background">
          <div className="belowHeader">
            <h1> Thar Reteats </h1>
            <p> Best Hotel Reservation Services In Pakistn </p>
          </div>

        </div>

        {/* starting services section */}
         
         <div className="services">
        <h1> Our Services </h1>
        <h2> Rooms and Suits </h2>
         {/* <h3 style={{width: '60%', margin:'auto', fontWeight: '550'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia dignissimos autem debitis iste provident. Cumque voluptatum minus nemo aspernatur.</h3> */}
         
         <div className="servicesBlock">
          
          {/* Superior room block  */}
          <div className="sBlock sBlockBackground1">
          <h3> $200 / Night </h3>
          <h2> Superior Room </h2>
          <h4> Read More </h4>
          </div>

          {/* Superior room block  */}
          <div className="sBlock sBlockBackground2">
          <h3> $170 / Night </h3>
          <h2> Deluxe Room </h2>
          <h4> Read More </h4>
          </div>

          {/* Superior room block  */}
          <div className="sBlock sBlockBackground3">
          <h3> $190 / Night </h3>
          <h2> Junior Suite Room </h2>
          <h4> Read More </h4>
          </div>
         
         </div>
          </div>
         
         {/* gallery block */}
        
        <div className="gallerySection">
    <h1> Our Gallery </h1>
    <h3 style={{width: '1000px', margin:'0 auto'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, officia. Ea facere reiciendis voluptate impedit rerum dignissimos eos, accusantium consequatur.</h3>

      <div className="galleryBlock">

        <div className="galleryBlockInside">
          <img src={require('../images/gallery/Desert Hotels_Wolwedans Dunes Lodge_Namibia.jpg')} alt="" className='gBlockBackground' />
        </div>

        <div className="galleryBlockInside">
          <img src={require('../images/gallery/scenic-view-sandy-beach-beach-with-sun-beds-umbrellas-open-against-sea-mountains-hotel-resort-tekirova-kemer-turkey.jpg')} alt="" className='gBlockBackground' />
        </div>
        
        <div className="galleryBlockInside">
          <img src={require('../images/gallery/pexels-capricious-wayfarer-(saptarshi)-974382.jpg')} alt="" className='gBlockBackground2' />
        </div>
        
        <div className="galleryBlockInside">
          <img src={require('../images/gallery/pexels-leonardo-rossatti-2598638.jpg')} alt="" className='gBlockBackground2' />
        </div>
        
        <div className="galleryBlockInside">
          <img src={require('../images/gallery/pexels-pixabay-261045.jpg')} alt="" className='gBlockBackground2' />
        </div>

</div>
        </div>

<div className="MainFacilities">
  <h1> Main Facilities </h1>
  <div className="facilities">
    <div className="facilitiesInside">

      <h2> This is something </h2>

    </div>
    <div className="facilitiesInside">

      <h2> This is something </h2>

    </div>
    <div className="facilitiesInside">

      <h2> This is something </h2>

    </div>
  </div>
</div>

         </div>
</>
  )
}
