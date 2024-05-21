import {React, useState} from 'react';
import  './Lcsi.css';
import Lcsiback from '../../Images/Lcsiback.png';
import lcsib from '../../Images/lcsib.png';
import a from '../../Images/a.png';
import icon from '../../Images/icon.png'
import cardData from '../../db/services.json'
import blog_image from '../../Images/blog_image.png';
import partenaire1 from '../../Images/partenaire1.png';
import partenaire2 from '../../Images/partenaire2.png';
import partenaire3 from '../../Images/partenaire3.png';
import partenaire4 from '../../Images/partenaire4.png';
import partenaire5 from '../../Images/partenaire5.png';
import cardData1 from '../../db/blog.json';




const pageSize = 4; 
// const pageSize1=2;

function Lcsi () {
  const [currentPage, setCurrentPage] = useState(0); 
  const getCurrentPageCards = () => {
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    return cardData.slice(startIndex, endIndex);
  };
  const getCurrentPageCard = () => {
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    return cardData1.slice(startIndex, endIndex);
  };
  return (
    <section className='lcsi-container'>

      <img className='cover' src={Lcsiback} alt="alt text" />
      <img className='cover' src={lcsib} alt="alt text" />
      <h1 className='hero_title'>Laboratoire de la Communication dans les Systèmes Informatiques</h1>
       
       <div className='ep1'>
       <img className='image' src={a} alt="alt text" />
      <svg className='image1' xmlns="http://www.w3.org/2000/svg"  width="3rem" height="2em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7 2h10v7.85q0 .575-.25 1.025t-.7.725l-3.55 2.1l.7 2.3H17l-3.1 2.2l1.2 3.8l-3.1-2.35L8.9 22l1.2-3.8L7 16h3.8l.7-2.3l-3.55-2.1q-.45-.275-.7-.725T7 9.85zm4 2v7.05l1 .6l1-.6V4z">
             </path>
       </svg>
      <div className='info'>Excellence</div> 
       </div>

       <div className='ep2'>
       <img className='image' src={a} alt="alt text" />
       <svg  className='image1' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" color="#0061B1"  ><g fill="none" stroke="#0061B1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}   color="red"><path d="M21 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V21"></path><path d="M24 34V42"></path><path d="M32 6L28 10L32 14"></path><path d="M38 6L42 10L38 14"></path><path d="M14 42L34 42"></path></g></svg>
       <p className='info2'>
           Qualité <br />
           méthodologique
      </p>
       
       </div>
       <div className='ep3'>
       <img className='image' src={a} alt="alt text" />
       <svg className='image1' xmlns="http://www.w3.org/2000/svg" color="#0061B1" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m-3 9c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m3 0c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m3 0c-.5 0-1-.4-1-1s.5-1 1-1s1 .4 1 1s-.5 1-1 1"></path></svg>
       <p className='info2'>
      Pensée <br />
        innovante
      </p>
       
       </div>


      <div className='rect'>
      <h2 className='medium_title'>Présentation de LCSI </h2>
      <h4
        className=
         'highlight'
        >{`Bienvenue au Laboratoire de la Communication dans les Systèmes Informatiques, votre fenêtre sur l'avenir de la technologie de communication. Ici, nous fusionnons recherche avancée et innovation pratique pour révolutionner la manière dont le monde interagit. Notre mission ? Explorer les confins des systèmes informatiques et développer des solutions qui transcendent les frontières de la communication. Engagés dans l'excellence académique, nous cultivons l'esprit d'innovation à travers l'encadrement d'étudiants et la collaboration sur des projets de recherche. `}</h4>
     
      </div> 
  
       <div className='rect2'>
             <div className='rect3' >
              <h2 className='medium_title1'>Faits Rapides</h2>
             </div>
         <div className='ep4'>
         <h1 className='hero_title2'>2,000+</h1>
        <p className='paragraph'>Article de recherche</p>
       <svg className='image5'  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" ><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m3.5 1l-1.73-1.73M7 2A1.5 1.5 0 0 0 5.5.5h-5v10h5M7 2v4.5M7 2A1.5 1.5 0 0 1 8.5.5h5v7"></path></svg>

        </div>
      <div className='ep5'>
      <h1 className='hero_title21'>4,000+</h1>
     <p className='paragraph1'>Article de recherche</p>
     <svg   className='image6'xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="none" stroke="currentColor" strokeWidth={2} d="M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10Zm6.643 4.696a6.745 6.745 0 0 0-1.62-2.673C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h10m1-4.176L16.19 22L23 13"></path></svg>
 
      </div> 
   
    <div className='ep6'>
    <h1 className='hero_title3'>32+</h1>
     <p className='paragraph2'>
       Experts dans les methode <br />
       de conception des systeme
     </p>  
	<svg  className='image7' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="currentColor" d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4l.11-.94L5 5.5L12 2l7 3.5v5h-1V6l-2.11 1.06zm-4 6c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"></path></svg>

    </div>
      </div>
       <div className='RECT3'>
       <h1 className="hero_title_box">
          <span className="box_title2">
            <span className="hero_title_span0">Que peut accomplir</span>
            <span className="hero_title_span1"> notre LCSI?</span>
          </span>
        </h1>
       <h4 className="highlight4">
          {`Explorer les confins des systèmes informatiques et développer des solutions qui transcendent les frontières de la communication. Engagés dans l'excellence académique, nous cultivons l'esprit d'innovation à travers l'encadrement d'étudiants et la collaboration sur des projets de recherche. `}</h4>
        
<div className='box-container'>

       {getCurrentPageCards().map((product, index) => (
    <div key={index} className='box'>
      <img className="image00" src={icon} alt="alt text" />
      <h4 className="highlight00">{product.service}</h4>
      <h5 className="highlight01">
          {product.desc}
      </h5>
    </div>
   
  ))}

          

</div>
       
            </div>




     <div className='blog_container'> 
      <h1 className='hero_title_blog'>
        <span className='hero_title_b'>
          <span className='hero_title_blog0'>Derniers conseils</span>
          <span className='hero_title_blog1'> sur notre blog</span>
        </span>
      </h1>
      <div className='blog-cont'>
  {getCurrentPageCard().map((product, index) => (
    <div key={index} className='blog' > {/* Ajout d'un div parent */}
      <h3 className='blog_subtitle'>{product.title}</h3>
      <h5 className='blog_highlight'>{product.desc}</h5>
      <h5 className='blog-like'>50</h5>
      {/* <img className={styles.image} src={'/assets/blue_gear_outline_icon.png'} alt="alt text" /> */}
      <h5 className='blog_vues'>12K</h5>
      {/* <img className={styles.image1} src={'/assets/blue_clock_icon.png'} alt="alt text" /> */}
      <h5 className='blog_temps'>15 min ago</h5>
      <h5 className='blog_more'>Read More...</h5>
      <img className='blog_image' src={blog_image} alt="alt text" />
    </div>
  ))}
</div>
 </div>
      
    
     <div className='partenaire'>
      <div className='flex_row'>
        <img className='part' src={partenaire1} alt="alt text" />
        <img className='part'src={partenaire2} alt="alt text" />
        <img className='part' src={partenaire3} alt="alt text" />
        <img className='parte1' src={partenaire4} alt="alt text" />
        <img className='parte2' src={partenaire5} alt="alt text" />
      </div>
    </div>



    </section>
  );
}

export default Lcsi;