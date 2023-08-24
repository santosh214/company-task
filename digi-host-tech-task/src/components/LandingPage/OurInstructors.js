import React from 'react';

export default function OurInstructors() {
  const instructorData = [
    {
      id: 1,
      heading: 'Jesse Pinkman',
      subHeading: 'UI & UX Designer',
      user: 2006,
      time: '12h 28m',
      tag: 'Lectures'
    },
    {
      id: 2,
      heading: 'Walter white',
      subHeading: 'UI & UX Designer',

      user: 2006,
      time: '12h 28m',
      tag: 'Lectures'
    },

    {
      id: 3,
      heading: 'Skyler white',
      subHeading: 'UI & UX Designer',

      user: 2006,
      time: '12h 28m',
      tag: 'Lectures'
    },
    {
      id: 4,
      heading: 'Master Web Design',
      subHeading: 'Lecture Admin in creative design',
      user: 2006,
      time: '12h 28m',
      tag: 'Lectures'
    }
  ];
  return (
    <div className="container py-5">
      <div className="row">
        <h1>Our Instuctors</h1>
        <div className="col-12 ps-0 ps-md-4 ">
          <div className="row ps-3">
            {instructorData.map((e) => {
              return (
                <div className="col-12 col-md-3 my-3 d-flex justify-content-center">
                  <div
                    class="card shadow border-0 rounded-top-4"
                    style={{width: 'auto'}}
                  >
                    <img
                      src="./assets/study9.avif"
                      class="card-img-top img-fluid"
                      alt="study2"
                    />
                    <div class="card-body border-top text-center">
                      <h6 class="card-title text-center">{e.heading}</h6>
                      <small class="card-text text-secondary text-center">
                        {e.subHeading}
                      </small>
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
  );
}
