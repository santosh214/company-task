import React from 'react';

export default function NewsLetter() {
  return (
    <>
      <div className="container -fluid">
        <div className="row d-flex justify-content-center mx-0 ms-0 mx-md-4 ms-md-5">
          <div className="col  pt-5 newsLetterCol position-relative  ">
            <h2 className="text-center text-md-start">
              Subscribe Our NewsLetters
            </h2>
            <p className="  pt-2 text-center text-md-start myNewsLettertext">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore debitis id eius temporibus officiis asperiores amet qui.
              Sit aperiam repellat, quaerat quod, dolores omnis sed odio tempora
              ipsa fuga nemo?
            </p>
            <div className="position-absolute ladyImgdiv d-none d-md-none d-lg-grid">
              <img src="./assets/lady.png" alt="lady" />
            </div>
            <div className="inputBtn d-grid d-md-flex  align-items-baseline">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your email address"
                style={{
                  width: 'auto'
                }}
              />
              <button className="my-2 my-md-0">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
