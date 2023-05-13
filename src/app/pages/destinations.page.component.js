import { WFMComponent } from "../../framework";

class DestinationPageComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
  //methods
  onclickpagination() {
    return {
      "click .link": "onPaginationClick",
    };
  }
  onPaginationClick({ target }) {
    let link = this.el.querySelectorAll(".link");
    console.log(target);
    let currentValue = 1;
    function activeLink() {
      for (l of link) {
        l.classList.remove("active");
      }
    }
  }
}

export const destinationPageComponent = new DestinationPageComponent({
  selector: "app-destinations-page",
  template: `
  <header id="header">
    <div class="contant">
      <div class="destination-container ">
        <div class="main-header__img">
          <div class="text-img">
            <h2>Explore places on Take a ride</h2>
            <p>Bali, Indonesia</p>
          </div>
        </div>
        <div class="navbar-container">
          <form>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input class="search" type="text" name="search" placeholder="Search"> 
          </form>
            <a href="#" class="main-logo__href">
              <p>Take<object class="logo" data="/src/img/logo.svg"></object>Ride</p>
            </a>
          <div class="navbar-links  ">
          <ul class="mouseover-nav ">
            <li class="js-mouseover  ">
              <a href="#destinations" >Destinations</a>
              <div class="submenu mouseleave-nav">
                <ul class="sub-list ">
                  <li class="directions"><a href="#">Africa</a></li>
                  <li class="directions"><a href="#">Antarctica</a></li>
                  <li class="directions"><a href="#">Europe</a></li>
                  <li class="directions"><a href="#">North America</a></li>
                  <li class="directions"><a href="#">South America</a></li>
                  <li class="directions"><a href="#">Australia</a></li>
                  <li class="directions"><a href="#">Asia</a></li>
              </div>
          </ul>
          <ul>
            <li >
              <a href="#about" >About</a>
          </ul>
          <ul>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>            
          </div>
        </div>
      </div>
    </div>
  </header>
  <main>
    
    <div class="container">
      <input class="search" type="text" name="search" placeholder="Search places">
      <i class="fa-solid fa-magnifying-glass"></i> 
    </div>
    <div class = 'filter'>
      <div class="filter-types">
        <label for="types">Filter by type of place
            <select name="type" id="types">
              <option value="All">All types</option>
              <option value="Continent">Continents&subcontinents</option>
              <option value="Region">Regions</option>
              <option value="Country">Countries</option>
              <option value="City">Cities</option>
              <option value="Neighborhood">Neighborhoods</option>
            </select>
          
        </label>
      </div>
      <div class="sort-places">
        <label for="sorts">Sort places by
          <select name="sort" id="sorts">
            <option value="AlpaAsc">A - Z</option>
            <option value="AlpaDesc">Z - A</option>
          </select>
        </label>
      </div>
    </div>

   <ul class="cards-container">
    <li>
      <article class="article">
        <img src="https://images.pexels.com/photos/2130610/pexels-photo-2130610.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="">
        
        <a href="#destinations"><p>Paris</p></a>
      <article>
    </li>
    <li>
      <article class="article">
        <img src="https://images.pexels.com/photos/2775742/pexels-photo-2775742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
       
        <a href="#destinations"> <p>Moscow</p></a>
      <article>
    </li>
    <li>
      <article class="article">
        <img src="https://images.pexels.com/photos/47727/budapest-church-architecture-matthias-church-47727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="">
   
        <a href="#destinations"> <p>Hungary</p></a>
      <article>
    </li>
    <li>
      <article class="article">
        <img src="https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="">
        
        <a href="#destinations"><p>Italy</p></a>
      <article>
    </li>
    <li>
      <article class="article">
        <img src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="">
       
        <a href="#destinations"> <p>London</p></a>
      <article>
    </li>
    <li>
      <article class="article">
        <img src="https://images.pexels.com/photos/2960887/pexels-photo-2960887.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="">
        
        <a href="#destinations"><p>Belgium</p></a>
      <article>
    </li>
    <li>
      <article class="article">
        <img src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
       
        <a href="#destinations"> <p>Greece</p></a>
      <article>
    </li>
    <li>
      <article class="article">
        <img src="https://images.pexels.com/photos/3254729/pexels-photo-3254729.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="">
       
        <a href="#destinations"> <p>Spain</p></a>
      <article>
    </li>
    <li>
      <article class="article">
        <img src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="">
       
        <a href="#destinations"> <p>Japan</p></a>
      <article>
    </li>
    <li>
      <article class="article">
        <img src="https://images.pexels.com/photos/922978/pexels-photo-922978.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="">
       
        <a href="#destinations"> <p>Switzerland</p></a>
      <article>
    </li>
    <li>
      <article class="article">
        <img src="https://images.pexels.com/photos/720300/pexels-photo-720300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
 
        <a href="#destinations">       <p>Brazil</p></a>
      <article>
    </li>
    <li>
      <article class="article">
        <img src="https://images.pexels.com/photos/22804/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600" alt="">
        
        <a href="#destinations"><p>Malaysia</p></a>
      <article>
    </li>
   </ul>
   <div class="container-pagination">
      <div class="pagination">
        
        <button class="btn1 btn-pagination"> <i class="fa-solid fa-arrow-left"></i></button>
        <ul>
          <li class="link active" value="1">1</li>
          <li class="link" value="2" >2</li>
          <li class="link" value="3" >3</li>
          <li class="link" value="4" >4</li>
          <li class="link" value="5" >5</li>
        </ul>
        <button class="btn2 btn-pagination"><i class="fa-solid fa-arrow-right"></i></i></button>
       
      </div>
   </div>
  </main>
  <footer>
  <section class="section-footer">
    <div class="footer-container">
      <div class="sum-info">
        <a href="#">take@ride</a><br />
        <p>For Explorers Everywhere</p>
        <br />
        <h3>FOLLOW US</h3>
        <br />
        <div class="links">
          <ul>
            <li>
              <a href="#" target="_blank"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-2xl"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  role="img"
                  aria-label="Lonely Planet on Instagram"
                >
                  <path
                    d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                    fill="#F00073"
                  ></path>
                  <path
                    d="M16 9.19995C18.2 9.19995 18.5 9.19995 19.4 9.19995C20.2 9.19995 20.6 9.39995 20.9 9.49995C21.3 9.69995 21.6 9.79995 21.9 10.1C22.2 10.4 22.4 10.7 22.5 11.1C22.6 11.4 22.7 11.8 22.8 12.6C22.8 13.5 22.8 13.7 22.8 16C22.8 18.3 22.8 18.5 22.8 19.4C22.8 20.2 22.6 20.6 22.5 20.9C22.3 21.3 22.2 21.6 21.9 21.9C21.6 22.2 21.3 22.4 20.9 22.5C20.6 22.6 20.2 22.7 19.4 22.8C18.5 22.8 18.3 22.8 16 22.8C13.7 22.8 13.5 22.8 12.6 22.8C11.8 22.8 11.4 22.6 11.1 22.5C10.7 22.3 10.4 22.2 10.1 21.9C9.79995 21.6 9.59995 21.3 9.49995 20.9C9.39995 20.6 9.29995 20.2 9.19995 19.4C9.19995 18.5 9.19995 18.3 9.19995 16C9.19995 13.7 9.19995 13.5 9.19995 12.6C9.19995 11.8 9.39995 11.4 9.49995 11.1C9.69995 10.7 9.79995 10.4 10.1 10.1C10.4 9.79995 10.7 9.59995 11.1 9.49995C11.4 9.39995 11.8 9.29995 12.6 9.19995C13.5 9.19995 13.8 9.19995 16 9.19995ZM16 7.69995C13.7 7.69995 13.5 7.69995 12.6 7.69995C11.7 7.69995 11.1 7.89995 10.6 8.09995C10.1 8.29995 9.59995 8.59995 9.09995 9.09995C8.59995 9.59995 8.39995 9.99995 8.09995 10.6C7.89995 11.1 7.79995 11.7 7.69995 12.6C7.69995 13.5 7.69995 13.8 7.69995 16C7.69995 18.3 7.69995 18.5 7.69995 19.4C7.69995 20.3 7.89995 20.9 8.09995 21.4C8.29995 21.9 8.59995 22.4 9.09995 22.9C9.59995 23.4 9.99995 23.6 10.6 23.9C11.1 24.1 11.7 24.1999 12.6 24.2999C13.5 24.2999 13.8 24.2999 16 24.2999C18.2 24.2999 18.5 24.2999 19.4 24.2999C20.3 24.2999 20.9 24.1 21.4 23.9C21.9 23.7 22.4 23.4 22.9 22.9C23.4 22.4 23.6 22 23.9 21.4C24.1 20.9 24.1999 20.3 24.2999 19.4C24.2999 18.5 24.2999 18.2 24.2999 16C24.2999 13.8 24.2999 13.5 24.2999 12.6C24.2999 11.7 24.1 11.1 23.9 10.6C23.7 10.1 23.4 9.59995 22.9 9.09995C22.4 8.59995 22 8.39995 21.4 8.09995C20.9 7.89995 20.3 7.79995 19.4 7.69995C18.5 7.69995 18.3 7.69995 16 7.69995Z"
                    fill="white"
                  ></path>
                  <path
                    d="M16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z"
                    fill="white"
                  ></path>
                  <path
                    d="M20.4 12.6C20.9522 12.6 21.4 12.1522 21.4 11.6C21.4 11.0477 20.9522 10.6 20.4 10.6C19.8477 10.6 19.4 11.0477 19.4 11.6C19.4 12.1522 19.8477 12.6 20.4 12.6Z"
                    fill="white"
                  ></path></svg
              ></a>
            </li>
            <li>
              <a href="#" target="_blank"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-2xl"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  role="img"
                  aria-label="Lonely Planet on Twitter"
                >
                  <path
                    d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                    fill="#1DA1F2"
                  ></path>
                  <path
                    d="M24 11C23.4 11.3 22.8 11.4 22.1 11.5C22.8 11.1 23.3 10.5 23.5 9.7C22.9 10.1 22.2 10.3 21.4 10.5C20.8 9.9 19.9 9.5 19 9.5C16.9 9.5 15.3 11.5 15.8 13.5C13.1 13.4 10.7 12.1 9 10.1C8.1 11.6 8.6 13.5 10 14.5C9.5 14.5 9 14.3 8.5 14.1C8.5 15.6 9.6 17 11.1 17.4C10.6 17.5 10.1 17.6 9.6 17.5C10 18.8 11.2 19.8 12.7 19.8C11.5 20.7 9.7 21.2 8 21C9.5 21.9 11.2 22.5 13 22.5C19.1 22.5 22.5 17.4 22.3 12.7C23 12.3 23.6 11.7 24 11Z"
                    fill="white"
                  ></path></svg
              ></a>
            </li>
            <li>
              <a href="#" target="_blank"
                ><a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="no-underline"
                  href="https://www.youtube.com/lonelyplanet"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-2xl"
                    width="1em"
                    height="1em"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    role="img"
                    aria-label="Lonely Planet on YouTube"
                  >
                    <path
                      d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                      fill="#FF0000"
                    ></path>
                    <path
                      d="M23.6 12.1C23.4 11.4 22.9 10.9 22.2 10.7C21 10.4 15.9 10.4 15.9 10.4C15.9 10.4 10.9 10.4 9.60001 10.7C8.90001 10.9 8.4 11.4 8.2 12.1C8 13.4 8 16 8 16C8 16 8 18.6 8.3 19.9C8.5 20.6 9 21.1 9.7 21.3C10.9 21.6 16 21.6 16 21.6C16 21.6 21 21.6 22.3 21.3C23 21.1 23.5 20.6 23.7 19.9C24 18.6 24 16 24 16C24 16 24 13.4 23.6 12.1ZM14.4 18.4V13.6L18.6 16L14.4 18.4Z"
                      fill="white"
                    ></path></svg></a
              ></a>
            </li>
            <li>
              <a href="#" target="_blank"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-2xl"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  role="img"
                  aria-label="Lonely Planet on Facebook"
                >
                  <path
                    d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                    fill="#1877F2"
                  ></path>
                  <path
                    d="M24 16C24 11.6 20.4 8 16 8C11.6 8 8 11.6 8 16C8 20 10.9 23.3 14.7 23.9V18.3H12.7V16H14.7V14.2C14.7 12.2 15.9 11.1 17.7 11.1C18.6 11.1 19.5 11.3 19.5 11.3V13.3H18.5C17.5 13.3 17.2 13.9 17.2 14.5V16H19.4L19 18.3H17.1V24C21.1 23.4 24 20 24 16Z"
                    fill="white"
                  ></path></svg
              ></a>
            </li>
          </ul>
        </div>
        <div class="text-form">
          <p>SUBSCRIBE</p>
          <br />
          <h3>Get 25% off our online shop.</h3>
          <br />
          <div class="email-container">
            <input type="email" placeholder="Email address" />
            <a href="#" class="sign-up">Sign Up</a> <br />
            <p>
              Subscribe to Lonely Planet newsletters and promotions. Read
              our
              <span><a href="#" class="policy">Privacy Policy.</a> </span>
            </p>
          </div>
        </div>
      </div>
      <div class="lists">
        <div class="first-container">
          <p>TOP DESTINATIONS</p>
          <ul>
            <li><a href="#">New York City</a></li>
            <li><a href="#">Paris</a></li>
            <li><a href="#">Costa Rica</a></li>
            <li><a href="#">Japan</a></li>
            <li><a href="#">USA</a></li>
            <li><a href="#">Amsterdam</a></li>
            <li><a href="#">Portugal</a></li>
            <li><a href="#">Chicago</a></li>
            <li><a href="#">England</a></li>
            <li><a href="#">Tokyo</a></li>
            <li><a href="#">France</a></li>
            <li><a href="#">Thailand</a></li>
            <li><a href="#">Ireland</a></li>
            <li><a href="#">Rome</a></li>
            <li><a href="#">Mexico</a></li>
          </ul>
        </div>
        <div class="second-container">
          <p>TRAVEL INTERESTS</p>
          <ul>
            <li><a href="#">Adventure Travel</a></li>
            <li><a href="#">Art and Culture</a></li>
            <li><a href="#">Beaches, Coasts and Islands</a></li>
            <li><a href="#">Family Holidays</a></li>
            <li><a href="#">Festivals</a></li>
            <li><a href="#">Food and Drink</a></li>
            <li><a href="#">Honeymoon and Romance</a></li>
            <li><a href="#">Wildlife and Nature</a></li>
          </ul>
        </div>
        <div class="third-container">
          <p>SHOP</p>
          <ul>
            <li><a href="#">Destination Guides</a></li>
            <li><a href="#">Lonely Planet Kids</a></li>
            <li><a href="#">Lonely Planet Shop</a></li>
            <li><a href="#">Non-English Guides</a></li>
          </ul>
        </div>
        <div class="fourth-container">
          <p>ABOUT US</p>
          <ul>
            <li><a href="">About Take@ride</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Press, Trade and Advertising</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms and Conditions</a></li>
            <li><a href="">Work for us</a></li>
            <li><a href="">Site map</a></li>
            <li><a href="">Write for us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container-language">
      <div class="text">
        <p>© 2023 Take@ride, a Red Ventures company. All rights reserved. No part of this site may be reproduced without our written permission.</p>
      </div>
      <div class="language">
        <p>LANGUAGE</p>
        <button class="choose-language">
          <p>English</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="text-xs ml-4 text-white" width="1em" height="1em" viewBox="0 0 11 6" fill="white" aria-hidden="true"><path d="M5.60504 5.5L0 0H11.2101L5.60504 5.5Z"></path></svg>
        </button>
      </div>
    </div>
  </section>
</footer>
  `,
});
