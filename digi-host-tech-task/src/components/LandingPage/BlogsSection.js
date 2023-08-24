import React from 'react';

export default function BlogsSection() {
  const blogData = [
    {
      id: 1,
      heading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      subHeading: 'UI & UX Designer',
      user: 2006,
      time: 'April 12,2020',
      tag: '2 comments'
    },
    {
      id: 2,
      heading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',

      subHeading: 'UI & UX Designer',

      user: 2006,
      time: 'April 12,2020',

      tag: '4 comments'
    },

    {
      id: 3,
      heading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',

      subHeading: 'UI & UX Designer',

      user: 2006,
      time: 'April 12,2020',
      tag: '4 comments'
    }
  ];
  return (
    <div className="container py-5">
      <div className="row">
        <h1>Read Our Blogs</h1>
        <div className="col-12 ps-2 ps-md-4">
          <div className="row">
            {blogData.map((e) => {
              return (
                <div className="col-12 col-md-4 my-3 d-flex justify-content-center p-0">
                  <div
                    class="card shadow border-0 rounded-top-5"
                    style={{width: '18rem'}}
                  >
                    <img
                      src="./assets/study8.avif"
                      class="card-img-top img-fluid"
                      alt="study8"
                    />
                    <div class="card-body border-top ">
                      <p className="text-secondary" style={{fontSize: '12px'}}>
                        <span className="ps-1">{e.time} </span>{' '}
                        <span className="ps-2">{e.tag}</span>
                      </p>
                      <h6 class="card-title text-start">{e.heading}</h6>
                      <small class="card-text text-secondary ">
                        <a href="#" className="text-decoration-none">
                          Read more
                        </a>
                      </small>
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
