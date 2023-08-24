import React from 'react';
import './landingpage.css';
import OnlineCourses from './OnlineCourses';
import OurInstructors from './OurInstructors';
import BlogsSection from './BlogsSection';
import NewsLetter from './NewsLetter';
import Footer from './Footer';
export const LandingPage = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row pt-5">
          <div className="col">
            <h1 className="myColor text-center">Learn Best Online Courses</h1>
            <h5 className="text-center py-3">48,000 Online courses for you</h5>
          </div>
          <div className="row  d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-6 d-grid d-md-flex justify-content-center mt-5 pt-3  myBox">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle themeColor border-0 w-100 mb-3 mb-md-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Javascript
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-3 px-2">
                <input
                  type="email"
                  class="form-control myInput"
                  id="exampleFormControlInput1"
                  placeholder="What do you want to learn ? "
                />
              </div>
              <button className="btn themeColor searchBtn "> Search</button>
            </div>
          </div>
          {/* img section */}
          <div className="col-12 d-flex justify-content-center pt-5">
            <img
              src="./assets/study.avif"
              alt="study"
              className="rounded-3 img-fluid"
            />
          </div>
          <div className="col-12 pt-5">
            <div className="row gap-4 d-flex justify-content-center px-2 px-md-0">
              <div className="col-12 col-md-3 myBoxInfo d-flex py-2">
                <div className="col-5 d-flex justify-content-center align-content-center align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </div>
                <div className="col-7  text-start">
                  <div className="col">
                    <small>Enrolled Students</small>
                  </div>
                  <div className="col">
                    <h4 className="myColor">80,000</h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 myBoxInfo d-flex py-2">
                <div className="col-5 d-flex justify-content-center align-content-center align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </div>
                <div className="col-7  text-start">
                  <div className="col">
                    <small>Online Courses</small>
                  </div>
                  <div className="col">
                    <h4 className="myColor">1,200+</h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 myBoxInfo d-flex py-2">
                <div className="col-5 d-flex justify-content-center align-content-center align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </div>
                <div className="col-7  text-start">
                  <div className="col">
                    <small>Expert Instructors</small>
                  </div>
                  <div className="col">
                    <h4 className="myColor">80,000 +</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OnlineCourses />
      <OurInstructors />
      <BlogsSection />
      <NewsLetter />
      <Footer />
    </>
  );
};
