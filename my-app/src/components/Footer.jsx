
import React from "react";
import '../style/footer.css'

export default function Hero() {
    return (
      <section class="footer"style={{ position: 'absolute', top: `480vh`,left: '30%', transform: `translate(-50%,-50%)` }} >

   <div class="icons-container">

      <div class="icons" >
         <i class="fas fa-clock"></i>
         <h3>opening hours</h3>
         <p>07:00am to 10:00pm</p>
      </div>

      <div class="icons">
         <i class="fas fa-phone"></i>
         <h3>phone</h3>
         <p>+212 756-787690</p>
         <p>212 656-787690</p>
      </div>

      <div class="icons1">
         <i class="fas fa-envelope" style={{ position: 'absolute', right: `40px`, width: "540px"}}></i>
         <h3 style={{ maxWidth: '440px' }}>email</h3>
         <p style={{ maxWidth: '440px' }}>flowera@gmail.com</p>
         <p >flora2@gmail.com</p>
      </div>

      <div class="icons1">
         <i class="fas fa-map"></i>
         <h3>address</h3>
         <p> EL JADIDA </p>
      </div>

   </div>

   <div class="share">
      <a href="#" class="fab fa-facebook-f">HHH</a>
      <a href="#" class="fab fa-twitter">HH</a>
      <a href="#" class="fab fa-instagram">HH</a>
      <a href="#" class="fab fa-linkedin">HH</a>
   </div>

  

</section>

    );
  }