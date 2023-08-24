import React from 'react'
import '../styles/aboutUs.css';
import NavBar from '../Components/Pages/navBar';
import Footer from '../Components/Pages/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutUs() {
  return (
    <>
    <NavBar />

    <div className='AboutUs'> 
            
        <div className="aboutBackground">
          <div className="belowHeader">
            <h4> Best Hotel Reservation Services In Pakistan </h4>
            <h1> About Us </h1>
          </div>

        </div>

<div className="historySection">

        <div className="historyInside">

                <img src={require('../images/gallery/pexels-valeria-boltneva-827528.jpg')} className='historyImg' alt="" />            
                <img src={require('../images/gallery/hotel-lobby.jpg')} className='historyImg2' alt="" />            

</div>
        <div className="historyInside2">
            <h1> Our History </h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem est quo hic. Suscipit esse assumenda reiciendis consequatur sunt optio officiis officia itaque nemo omnis harum vero dignissimos laboriosam distinctio sit ratione inventore quis ducimus soluta, beatae est? Voluptas dolorem quibusdam quo debitis id adipisci quod ex eos repellendus ipsam quas fuga autem et praesentium perspiciatis ipsa magni, minus neque necessitatibus cum veniam. Doloremque blanditiis eveniet quibusdam at libero, incidunt ad, totam reiciendis facere id nam voluptatem quod debitis veniam, corrupti ipsam maxime eum illo assumenda doloribus itaque? Doloremque, ad facere! Vel aliquid sed neque obcaecati ea, temporibus voluptatibus unde eius ad amet placeat quo odio voluptas quibusdam doloremque libero debitis voluptatem, ex voluptatum! Sequi repellat neque ad excepturi optio sed, doloribus eius aliquid veniam nesciunt illo distinctio laborum officiis molestiae tempore vel, veritatis architecto ea. Non deleniti fugit, iure, enim voluptate consectetur eaque hic eius, aspernatur perspiciatis blanditiis magni! Labore qui, quia eos pariatur exercitationem, quo quis deserunt vel asperiores aperiam ducimus eveniet animi ipsam iusto soluta amet. Voluptate iusto accusantium atque, deserunt, pariatur sapiente ex quasi quod suscipit officiis ipsa cupiditate corporis! Quo, veritatis, expedita adipisci ea non illo velit vitae quis nobis enim commodi omnis, tempore eligendi! </p>
</div>

        </div>
        </div>
        <Footer />
</>
  )}