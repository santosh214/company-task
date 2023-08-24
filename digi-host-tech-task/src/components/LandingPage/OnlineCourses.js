import React from 'react';

export default function OnlineCourses() {
  const cardData = [
    {
      id: 1,
      heading: 'Master Web Design',
      subHeading: 'Lecture Admin in creative design',
      user: 2006,
      time: '12h 28m',
      tag: 'Lectures',
      img: 'study5'
    },
    {
      id: 2,
      heading: 'Master Web Design',
      subHeading: 'Lecture Admin in creative design',
      user: 2006,
      time: '12h 28m',
      tag: 'Lectures',
      img: 'study7'
    },
    {
      id: 2,
      heading: 'Master Web Design',
      subHeading: 'Lecture Admin in creative design',
      user: 2006,
      time: '12h 28m',
      tag: 'Lectures',
      img: 'study6'
    },
    {
      id: 2,
      heading: 'Master Web Design',
      subHeading: 'Lecture Admin in creative design',
      user: 2006,
      time: '12h 28m',
      tag: 'Lectures',
      img: 'study6'
    },
    {
      id: 2,
      heading: 'Master Web Design',
      subHeading: 'Lecture Admin in creative design',
      user: 2006,
      time: '12h 28m',
      tag: 'Lectures',
      img: 'study5'
    },
    {
      id: 2,
      heading: 'Master Web Design',
      subHeading: 'Lecture Admin in creative design',
      user: 2006,
      time: '12h 28m',
      tag: 'Lectures',
      img: 'study7'
    }
  ];

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <h1>Our Online Courses</h1>
          <div className="col-12 ps-3">
            <ul class="nav nav-underline">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  All
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Business
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Design
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Development
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Management
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Technology
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Photo
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 ">
            <div className="row ">
              {cardData.map((e) => {
                return (
                  <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
                    <div
                      class="card shadow border-0 rounded-top-4"
                      style={{width: '18rem'}}
                    >
                      <img
                        src={`./assets/${e.img}.avif`}
                        class="card-img-top img-fluid"
                        alt="study2"
                      />
                      <div class="card-body border-top">
                        <h5 class="card-title">{e.heading}</h5>
                        <p class="card-text text-secondary">{e.subHeading}</p>
                        <hr />
                        <div className="row myCardData px-2 text-center">
                          <div className="col p-0">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-person"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                              </svg>
                            </span>
                            <small className="px-1">{e.user} </small>
                          </div>
                          <div className="col p-0">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-clock"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                              </svg>
                            </span>
                            <small className="px-1">{e.time}</small>
                          </div>
                          <div className="col p-0">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-bookmark-dash"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.5 6.5A.5.5 0 0 1 6 6h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                                />
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                              </svg>
                            </span>
                            <small className="px-1">{e.tag}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
