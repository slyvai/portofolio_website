import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import "swiper/css";

function Project() {
  useEffect(() => {
    gsap.fromTo(
      ".nav-section, .project-container",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".project-card",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
    
  })
  return (
    <div className="project-section">
      <div className="nav-section">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              01. About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              02. Projects
            </Link>
          </li>
          <li>
              <Link to="/contact" className="nav-link">
                03. Contact
              </Link>
            </li>
        </ul>
        <h1>My Projects</h1>
      </div>
      <div className="project-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="project-card-container">
            <div className="project-card">
              <div className="project-card-content">
                <div className="project-card-links">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <circle cx="9" cy="7" r="2" />
                      <path d="M7.2 7.9L3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6M16 13H3m13 4H3" />
                    </g>
                  </svg>
                  <a
                    href="https://dessert-shop-mocha.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </a>
                </div>

                <div className="project-card-info">
                  <h2>Dessert Shop</h2>
                  <p>Website Shop for your favorite desserts</p>
                  <i>React JS, CSS</i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="project-card-container">
            <div className="project-card">
              <div className="project-card-content">
                <div className="project-card-links">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    viewBox="0 0 432 384"
                  >
                    <path
                      fill="currentColor"
                      d="M341 21h86v299q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21h21l43 86h64l-43-86h43l42 86h64l-42-86h42l43 86h64z"
                    />
                  </svg>
                  <a
                    href="https://slyvia-movie-collection.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </a>
                </div>

                <div className="project-card-info">
                  <h2>Movie Collection</h2>
                  <p>A web for collecting movies</p>
                  <i>React JS, CSS</i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="project-card-container">
            <div className="project-card">
              <div className="project-card-content">
                <div className="project-card-links">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M10.704 4.325a1.5 1.5 0 0 1 2.592 0l1.818 3.12a1.5 1.5 0 0 0 .978.712l3.53.764a1.5 1.5 0 0 1 .8 2.465l-2.405 2.693a1.5 1.5 0 0 0-.374 1.15l.363 3.593a1.5 1.5 0 0 1-2.097 1.524l-3.304-1.456a1.5 1.5 0 0 0-1.21 0l-3.304 1.456a1.5 1.5 0 0 1-2.097-1.524l.363-3.593a1.5 1.5 0 0 0-.373-1.15l-2.406-2.693a1.5 1.5 0 0 1 .8-2.465l3.53-.764a1.5 1.5 0 0 0 .979-.711z"
                    />
                  </svg>
                  <a
                    href="https://advice-generator-alpha-ecru.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </a>
                </div>

                <div className="project-card-info">
                  <h2>Advice Generator</h2>
                  <p>A random advice generator using the Advice Slip API</p>
                  <i>React JS, CSS</i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="project-card-container">
            <div className="project-card">
              <div className="project-card-content">
                <div className="project-card-links">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2c27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"
                    />
                  </svg>  
                  <a
                    href="https://charity-website-seven.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </a>
                </div>

                <div className="project-card-info">
                  <h2>Charity Website (Clone)</h2>
                  <p>A charity website clone</p>
                  <i>React JS, CSS</i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="project-card-container">
            <div className="project-card">
              <div className="project-card-content">
                <div className="project-card-links">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="60"
                    height="60"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ffe082"
                      d="M37,17H27l-4.9-4.1c-0.7-0.6-1.7-0.9-2.6-0.9h-7.5C10.4,12,9,13.4,9,15.1v12v6.9v7c0,1.7,1.4,3.1,3.1,3.1h31.9	c1.7,0,3.1-1.4,3.1-3.1V20.1c0-1.7-1.4-3.1-3.1-3.1h-1.1H37z"
                    ></path>
                    <path
                      fill="none"
                      stroke="#18193f"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="3"
                      d="M5.5,29.8v6.7c0,1.7,1.3,3,3,3h31c1.7,0,3-1.3,3-3v-20c0-1.7-1.3-3-3-3h-1.1"
                    ></path>
                    <path
                      fill="none"
                      stroke="#18193f"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="3"
                      d="M32.7,13.5h-9.2l-4.9-4.1c-0.7-0.6-1.6-0.9-2.6-0.9H8.5c-1.7,0-3,1.3-3,3v11.7"
                    ></path>
                    <path
                      fill="none"
                      stroke="#18193f"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="3"
                      d="M6,16.5h12.1c0.9,0,1.8-0.3,2.6-0.9l2.3-1.9"
                    ></path>
                  </svg>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                    </svg>
                  </a>
                </div>

                <div className="project-card-info">
                  <h2>Project Name</h2>
                  <p>Project Description</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Project;