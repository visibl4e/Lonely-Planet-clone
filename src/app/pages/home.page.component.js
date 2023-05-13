import { WFMComponent } from "../../framework";

class HomePageComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
  //methods
  mouseover() {
    return {
      "mouseover .mouseover-nav": "onHomeMouseover",
    };
  }
  mouseleave() {
    return {
      "mouseleave .mouseleave-nav": "onHomeMouseout",
    };
  }
  //dont work yet
  openmodal() {
    return {
      "click .open-modal": "onClickModal",
    };
  }
  // functions to methods

  onHomeMouseover({ target }) {
    if (!target.classList.contains("js-mouseover")) return;

    this.el
      .querySelectorAll(".submenu")
      .forEach((element) => (element.style.opacity = 1));
  }
  onHomeMouseout({ target }) {
    if (!target.classList.contains("mouseleave-nav")) return;

    this.el
      .querySelectorAll(".submenu")
      .forEach((element) => (element.style.opacity = 0));
    console.log(target);
  }
  clickButtonsHandler({ target }) {
    if (!target.classList.contains("btn")) return;

    // const buttons = this.el.querySelectorAll("[data-carousel-button]");

    // buttons.forEach((button) => {
    //   button.dataset.carouselButton === "next" ? 1 : -1;
    //   const slides = button
    //     .closest("[data-carousel]")
    //     .querySelector("[data-slides]");
    //   const activeSlide = slides.querySelector("[data-active]");
    //   let newIndex =
    //     [...slides.children].indexOf(activeSlide) +
    //       button.dataset.carouselButton ===
    //     "next"
    //       ? 1
    //       : -1;
    //   if (newIndex < 0) newIndex = slides.children.length - 1;
    //   if (newIndex >= slides.children.length) newIndex = 0;

    //   slides.children[newIndex].dataset.active = true;
    //   delete activeSlide.dataset.active;
    // });
    // let counter = 0;
    // const stepSize = this.el.querySelectorAll(".slide").clientWidth * 2;
    // const slider = this.el.querySelectorAll(".slider");

    // // slider.classList.add("transformXSlide");

    // slider.forEach(
    //   (el) => (el.style.transform = "translateX(" + `${-stepSize * counter}px`)
    // );

    // counter++;
  }
  // dont work yet
  onClickModal({ target }) {
    if (!target.classList.contains("open-modal")) return;

    const openModalBtn = this.el.querySelectorAll("[data-modal-target]");
    const closeModalBtn = this.el.querySelectorAll("[data-close-button]");
    const overlay = document.getElementById("overlay");

    openModalBtn.forEach((button) => {
      button.addEventListener("click", () => {
        const modal = this.el.querySelector(button.dataset.modalTarget);
        openModal(modal);
      });
    });
    closeModalBtn.forEach((button) => {
      button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
      });
    });

    function openModal(modal) {
      if (modal == null) return;
      modal.classList.add("active");
      overlay.classList.add("active");
    }
    function closeModal(modal) {
      if (modal == null) return;
      modal.classList.remove("active");
      overlay.classList.remove("active");
    }
  }
}

export const homePageComponent = new HomePageComponent({
  selector: "app-home-page",
  template: `
  <header id="header">
    <div class="contant">
      <div class="image-container ">
        <h1 class="slogan">
          Discover the way<br />
          to new experience
        </h1>
        <div class="hull-image__one  ">
          <div class="img-bottom__container">
            <i class="fa-solid fa-arrow-right bounce"></i>
            <p class="hull-text__one">The Southwest</p>
          </div>
        </div>
        <div class="hull-image__two " >
          <i class="fa-solid fa-arrow-right bounce"></i>
          <p class="hull-text__two">Oeschinen Lake</p>
        </div>
        <div class="hull-image__three  ">
          <i class="fa-solid fa-arrow-right bounce"></i>
          <p class="hull-text__three">Grand Canyon National Park</p>
        </div>
        <div class="navbar-container">

          <form>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input class="search" type="text" name="search" placeholder="Search"> 
          </form>
          
            <a href="#destinations" class="main-logo__href">
              <p>Take<object class="logo" data="/src/img/logo.svg"></object>Ride</p>
            </a>
          <div class="navbar-links  ">
          <a href="#" >Home</a>
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
  <section class="cards">
    <div class="main-container">
      <div class="go-container">
        <p>PLAN YOUR TRIP</p>
        <div class="view-destinations">
          <h2>Where to next?</h2>
          <a href="/">View all destinations</a>
        </div>
        <div class="go-cards">
          <a href="#" class="go-card__one">
            <p>Spain</p>
          </a>
          <a href="#" class="go-card__two">
            <p>Mexico</p>
          </a>
          <a href="#" class="go-card__three">
            <p>Cuba</p>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="video-container">
    <video
      autoplay
      loop
      muted
      src="https://lonelyplanetstatic.imgix.net/marketing/2023/BIT/videos/LOOPING%20VIDEOS/MAIN%20PAGE/NewMexico_3.mp4"
    ></video>
    <h1 class="video-text">
      <span>BEST IN</span><br />
      <span class="line2">TRAVEL</span><br />
      <span class="line3">2023</span>
    </h1>
    <div class="description">
      <p>
        Check out a list of the year of unforgettable,<br />
        amazing, must-see destinations.
      </p>
      <div class="block">
        <a href="#">Discover the winners</a><br />
        <button class="open-modal" data-modal-target="#modal">How we choose</button>
        <div class="modal" id="modal">
          <div class="picture">
            <h2>How we choose the best in travel</h2>
          </div>
          <div class="text">
            <h3>Choosing the most amazing places and travel experiences every year is complicated, but we take pride in the journey. Here’s an overview of how the magic happens:</h3>
            <button class="close-button" data-close-button>&times;</button>
          </div>
        </div>
        <div id="overlay"></div>
      </div>
    </div>
  </section>
  <section class="explore">
    <div class="explore-stories">
      <div class="text">
        <p>Travel stories and news</p>
        <h2>
          Look at our latest <br />
          stories
        </h2>
      </div>
      <div class="links">
        <a href="#">View all news</a>
        <a href="#">View all stories</a>
      </div>
    </div>

    <div class="main-arcticle">
      <div class="img">
        <a href="#">Hiking</a>
        <a href="#" class="places">5 must-visit places in Switzerland</a>
        <span>Feb 27, 2023 (9 min read)</span>
        <p>
          For such a small country, Switzerland doesn’t lack for beautiful
          spots to visit. We’ve rounded up our favorites.
        </p>
      </div>
      <aside class="aside">
        <div class="carousel"  >
          <button class="btn button-prev" >
            &#8656;
          </button>
          <button class="btn button-next" >
            &#8658;
          </button>
          <ul class="slider"  >
            <li class="slide" >
              <img
                src="https://images.pexels.com/photos/1302928/pexels-photo-1302928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div class="slide-text">
                <div><a href="#" class="activity">Cycling</a> <br /></div>
                <div>
                  <a href="#" class="places"
                    >5 must-visit places in Switzerland</a
                  ><br />
                </div>
                <div><span>Feb 27, 2023 (9 min read)</span><br /></div>
                <p>
                  For such a small country, Switzerland doesn’t lack for
                  beautiful spots to visit. We’ve rounded up our favorites.
                </p>
              </div>
            </li>
            <li class="slide">
              <img
                src="https://images.pexels.com/photos/12331085/pexels-photo-12331085.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div class="slide-text">
                <div><a href="#" class="activity">Hiking</a> <br /></div>
                <div>
                  <a href="#" class="places"
                    >4 increadible road trips you should do in New Zeland</a
                  >
                  <br />
                </div>
                <div><span>Sep 21, 2023 (4 min read)</span></div>
                <div>
                  <p>
                    The best way to experience New Zealand is by car or
                    campervan at your own pace, stopping for stunning walks,
                    cycling, wild swimming or wildlife spotting.
                  </p>
                </div>
              </div>
            </li>
            <li class="slide" >
              <img
                src="https://images.pexels.com/photos/47727/budapest-church-architecture-matthias-church-47727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div class="slide-text">
                <div>
                  <a href="#" class="activity">Activities</a> <br />
                </div>
                <div>
                  <a href="#" class="places"
                    >12 of the best things to do in budapest</a
                  >
                  <br />
                </div>
                <div><span>May 2, 2023 (11 min read)</span></div>
                <div>
                  <p>
                    From thermal spas to incredible nightlife, Budapest is
                    filled amazing experiences. Here are the very best.
                  </p>
                </div>
              </div>
            </li>
            <li class="slide" >
              <img
                src="https://images.pexels.com/photos/5316686/pexels-photo-5316686.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div class="slide-text">
                <div><a href="#" class="activity">Hiking</a> <br /></div>
                <div>
                  <a href="#" class="places"
                    >7 best hikes in Yellowstone National Park</a
                  >
                  <br />
                </div>
                <div><span>June 7, 2023 (7 min read)</span></div>
                <div>
                  <p>
                    The best hikes in Yellowstone, from
                    wheelchair-accessible boardwalk strolls to multiday
                    backpacking trips, taking in geysers, waterfalls and
                    mountain summits.
                  </p>
                </div>
              </div>
            </li>
            <li class="slide" >
              <img
                src="https://images.pexels.com/photos/13462171/pexels-photo-13462171.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div class="slide-text">
                <div>
                  <a href="#" class="activity">Tips & Advice</a> <br />
                </div>
                <div>
                  <a href="#" class="places"
                    >8 of the best places to visit in Singapore</a
                  >
                  <br />
                </div>
                <div><span>Aug 15, 2023 (9 min read)</span></div>
                <div>
                  <p>
                    Singapore is one of the world’s smallest countries, but
                    it packs a lot into a small space. Here are the
                    must-visit places.
                  </p>
                </div>
              </div>
            </li>
            <li class="slide" >
              <img
                src="https://images.pexels.com/photos/3831240/pexels-photo-3831240.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div class="slide-text">
                <div>
                  <a href="#" class="activity">Road Trips</a> <br />
                </div>
                <div>
                  <a href="#" class="places"
                    >The top 6 road trips in Greast Smoky Mountains National
                    Park</a
                  >
                  <br />
                </div>
                <div><span>Aug 2, 2023 (5 min read)</span></div>
                <div>
                  <p>
                    Dubrovnik is simply gorgeous, yes – which is why it
                    draws such crowds. Find the same history and charm in
                    lesser-known Šibenik.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
  <section class="books">
    <div class="container">
      <div class="view-container">
        <p>Shop our books</p>
        <h2>Our guidebooks & travel books</h2>
        <p class="description">
          Whether you’re interested in traveling to a new city, going on a
          cruise, or cooking a new dish — we’re committed to inspiring you
          to experience travel in a whole new way. Lonely Planet’s
          collection of 825+ travel and guidebooks is sure to inspire the
          traveler within.
        </p>
        <a href="#">View all books</a>
      </div>
      <img
        src="https://lonelyplanetstatic.imgix.net/marketing/2022/BIT/guidebooks_background_mobile-2022.jpg?auto=format&crop=focalpoint&fp-z=1.325&fp-x=0.49&fp-y=0.79&q=75&w=640"
        alt=""
      />
      <div class="subscribe-container">
        <div class="discount-container">
          <h3>Subscribe & Get 25% off</h3>
          <p>
            Join our newsletter and discover new destinations to inspire the
            traveler within. Plus, get 20% off at our online shop. Every
            week you’ll receive expert advice, tips, exclusive offers, and
            much more.
          </p>
        </div>
        <div class="email-container">
          <input type="email" placeholder="Email address" />
          <a href="#" class="sign-up">Sign Up</a> <br />
          <p>
            Subscribe to Lonely Planet newsletters and promotions. Read our
            <span><a href="#" class="policy">Privacy Policy.</a> </span>
          </p>
        </div>
      </div>
    </div>
    <section class="social">
      <div class="social-links">
        <a href="#" class="home">#take@ride</a>
        <div class="icons">
          <p>FOLLOW OUR SOCIALS:</p>
          <a href="#" class="icon"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-xl"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="img"
              aria-label="Lonely Planet on facebook"
            >
              <path
                d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                fill="#fff"
              ></path></svg
          ></a>
          <a href="#" class="icon"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-xl"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="img"
              aria-label="Lonely Planet on instagram"
            >
              <path
                d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                fill="#fff"
              ></path>
              <path
                d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                fill="#fff"
              ></path>
              <path
                d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
                fill="#fff"
              ></path></svg
          ></a>
          <a href="#" class="icon"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-xl"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="img"
              aria-label="Lonely Planet on twitter"
            >
              <g clip-path="url(#clip0_309_204)">
                <path
                  d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z"
                  fill="#fff"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_309_204">
                  <rect width="24" height="24" fill="#1DA1F2"></rect>
                </clipPath>
              </defs></svg
          ></a>
        </div>
      </div>
      <div class="review-gallery">
        <a href="https://www.instagram.com/dominik.kobler" target="_blank">
          <div class="picture">
            <img
              src="https://images.pexels.com/photos/15161984/pexels-photo-15161984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div class="transition"></div>
            <span>@dominik.kobler</span>
          </div>
        </a>
        <a
          href="https://www.instagram.com/unchartedbackpacker"
          target="_blank"
        >
          <div class="picture">
            <img
              src="https://images.pexels.com/photos/6536034/pexels-photo-6536034.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div class="transition"></div>
            <span>@unchartedbackpacker</span>
          </div>
        </a>
        <a
          href="https://www.instagram.com/les_carnets_de_mel"
          target="_blank"
        >
          <div class="picture">
            <img
              src="https://images.pexels.com/photos/13928701/pexels-photo-13928701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div class="transition"></div>
            <span>@les_carnets_de_mel</span>
          </div>
        </a>
        <a
          href="https://www.instagram.com/o_thessalonikios"
          target="_blank"
        >
          <div class="picture">
            <img
              src="https://images.pexels.com/photos/12540712/pexels-photo-12540712.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
            />
            <div class="transition"></div>
            <span>@o_thessalonikios</span>
          </div>
        </a>
        <a href="https://www.instagram.com/ali.vonlewinski" target="_blank">
          <div class="picture">
            <img
              src="https://images.pexels.com/photos/13034967/pexels-photo-13034967.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div class="transition"></div>
            <span>@ali.vonlewinski</span>
          </div>
        </a>
        <a
          href="https://www.instagram.com/richardwhitetravels"
          target="_blank"
        >
          <div class="picture">
            <img
              src="https://images.pexels.com/photos/4082211/pexels-photo-4082211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div class="transition"></div>
            <span>@richardwhitetravels</span>
          </div>
        </a>
      </div>
      <div class="cards"></div>
    </section>
  </section>
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
        <p>© 2023  Take@ride, a Red Ventures company. All rights reserved. No part of this site may be reproduced without our written permission.</p>
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
