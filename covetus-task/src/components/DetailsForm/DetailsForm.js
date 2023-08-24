import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

export default function DetailsForm() {
  const navigate = useNavigate();
  const [basicDetails, setBasicDetails] = useState({
    name: "",
    nickName: "",
    profession: "",
    dob: "",
  });

  const [physicalStatus, setPhysicalStatus] = useState({
    heightfoot: "",
    heightInch: "",
    EyeColor: "",
    weight: 0,
    hairColor: "",
    Gender: "",
  });
  const [personalLife, setPersonalLife] = useState({
    BirthPlace: "",
    Zodiac: "",
    Religion: "",
    School: "",
    Graduation: "",
    homeAddress: "",
    homeTown: "",
    Nationality: "",
  });
  const [family, setfamily] = useState({
    father: "",
    mother: "",
    siblings: "",
    children: "",
  });

  const [boyfriend, setBoyfriend] = useState("");
  const [boyfriendArr, setBoyfriendArr] = useState([]);

  const [relationShip, setRelationship] = useState({
    MaritalStatus: "",
    biyfriends: boyfriendArr,
  });

  useEffect(() => {
    return () => {};
  }, [boyfriendArr]);

  const getAllDetails = () => {

    if (!basicDetails.name) return toast.error("Please enter name!");
    if (!basicDetails.nickName) return toast.error("Please enter nick name!");
    if (!basicDetails.dob) return toast.error("Please select date of birth");
    if (!basicDetails.profession)
      return toast.error("Please select your profession");


    navigate("/home", {
      state: {
        basicDetails: basicDetails,
        physicalStatus: physicalStatus,
        personalLife: personalLife,
        family: family,
        relationShip: relationShip,
      },
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="container my-5 py-5 ">
      <h2 className="pb-4 text-center"> Form Section</h2>

        {/* basic details  */}
        <div className="row">
          <h4>Basic Details</h4>

          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Your Name"
                value={basicDetails.name}
                onChange={(e) => {
                  setBasicDetails({ ...basicDetails, name: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Nick Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nick Name"
                placeholder="Nick Name"
                value={basicDetails.nickName}
                onChange={(e) => {
                  setBasicDetails({
                    ...basicDetails,
                    nickName: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Profession
              </label>
              <input
                type="text"
                className="form-control"
                id="Profession"
                placeholder="Enter your Profession"
                value={basicDetails.profession}
                onChange={(e) => {
                  setBasicDetails({
                    ...basicDetails,
                    profession: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Date of birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                placeholder="Enter your date of birth"
                value={basicDetails.dob}
                onChange={(e) => {
                  setBasicDetails({ ...basicDetails, dob: e.target.value });
                }}
                max={moment().format("YYYY-MM-DD")}
              />
            </div>
          </div>
        </div>
        {/* physicalStatus  */}
        <div className="row">
          <h4>Physical Stats</h4>

          <div className="col-lg-2">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Height in foot
              </label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control"
                  id="foot"
                  placeholder="foot"
                  value={physicalStatus.heightfoot}
                  onChange={(e) => {
                    setPhysicalStatus({
                      ...physicalStatus,
                      heightfoot: e.target.value,
                    });
                  }}
                />{" "}
                <span className="px-2 pt-2">foot</span>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Height in inches
              </label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control"
                  id="inches"
                  placeholder="inch"
                  value={physicalStatus.heightInch}
                  onChange={(e) => {
                    setPhysicalStatus({
                      ...physicalStatus,
                      heightInch: e.target.value,
                    });
                  }}
                />{" "}
                <span className="px-2 pt-2">inches</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Eye Color
              </label>
              <input
                type="text"
                className="form-control"
                id="eye color"
                placeholder="Enter eye color"
                value={physicalStatus.EyeColor}
                onChange={(e) => {
                  setPhysicalStatus({
                    ...physicalStatus,
                    EyeColor: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Weight
              </label>
              <input
                type="text"
                className="form-control"
                id="weight"
                placeholder="Enter your weight"
                value={physicalStatus.weight}
                onChange={(e) => {
                  setPhysicalStatus({
                    ...physicalStatus,
                    weight: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Hair Color
              </label>
              <input
                type="text"
                className="form-control"
                id="hair color"
                placeholder="Enter your Hair color"
                value={physicalStatus.hairColor}
                onChange={(e) => {
                  setPhysicalStatus({
                    ...physicalStatus,
                    hairColor: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                value={physicalStatus.Gender}
                onChange={(e) => {
                  setPhysicalStatus({
                    ...physicalStatus,
                    Gender: e.target.value,
                  });
                }}
                aria-label="Default select example"
              >
                <option selected={physicalStatus.Gender}>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        {/* personalLife  */}
        <div className="row">
          <h4>Personal Life</h4>

          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Birth Place
              </label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control"
                  id="birthplace"
                  placeholder="Birth Place"
                  value={personalLife.BirthPlace}
                  onChange={(e) => {
                    setPersonalLife({
                      ...personalLife,
                      BirthPlace: e.target.value,
                    });
                  }}
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Zodiac Sign/Sun sign
              </label>
              <select
                className="form-select"
                value={personalLife.Zodiac}
                onChange={(e) => {
                  setPersonalLife({
                    ...personalLife,
                    Zodiac: e.target.value,
                  });
                }}
                aria-label="Default select example"
              >
                <option selected={personalLife.Zodiac}>Select Zodiac</option>
                <option value="Aries ">Aries</option>
                <option value="Taurus">Taurus</option>
                <option value="Gemini">Gemini</option>
                <option value="Cancer">Cancer</option>
                <option value="Leo">Leo</option>
                <option value="Virgo">Virgo</option>
                <option value="Libra">Libra</option>
                <option value="Sagittarius">Sagittarius</option>
                <option value="Capricornus">Capricornus</option>
                <option value="Aquarius">Aquarius</option>
                <option value="Pisces">Pisces</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Religion
              </label>
              <select
                className="form-select"
                value={personalLife.Religion}
                onChange={(e) => {
                  setPersonalLife({
                    ...personalLife,
                    Religion: e.target.value,
                  });
                }}
                aria-label="Default select example"
              >
                <option selected={personalLife.Religion}>
                  Select Religion
                </option>
                <option value="Hindu ">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Christian">Christian</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                School
              </label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control"
                  id="school"
                  placeholder="Enter your School"
                  value={personalLife.School}
                  onChange={(e) => {
                    setPersonalLife({
                      ...personalLife,
                      School: e.target.value,
                    });
                  }}
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Graduation
              </label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control"
                  id="Graduation"
                  placeholder="Enter your Graduation"
                  value={personalLife.Graduation}
                  onChange={(e) => {
                    setPersonalLife({
                      ...personalLife,
                      Graduation: e.target.value,
                    });
                  }}
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Home Address
              </label>
              <div className="d-flex ">
                <textarea
                  type="text"
                  className="form-control"
                  id="Graduation"
                  placeholder="Enter your Home address"
                  value={personalLife.homeAddress}
                  onChange={(e) => {
                    setPersonalLife({
                      ...personalLife,
                      homeAddress: e.target.value,
                    });
                  }}
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Home Town
              </label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control"
                  id="Graduation"
                  placeholder="Enter your Home town"
                  value={personalLife.homeTown}
                  onChange={(e) => {
                    setPersonalLife({
                      ...personalLife,
                      homeTown: e.target.value,
                    });
                  }}
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Nationality
              </label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control"
                  id="Graduation"
                  placeholder="Enter your nationality"
                  value={personalLife.Nationality}
                  onChange={(e) => {
                    setPersonalLife({
                      ...personalLife,
                      Nationality: e.target.value,
                    });
                  }}
                />{" "}
              </div>
            </div>
          </div>
        </div>

        {/* family  */}

        <div className="row">
          <h4>Family </h4>

          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Father's Name
              </label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control"
                  id="birthplace"
                  placeholder="Father's name"
                  value={family.father}
                  onChange={(e) => {
                    setfamily({
                      ...family,
                      father: e.target.value,
                    });
                  }}
                />{" "}
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Mother's Name
              </label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control"
                  id="birthplace"
                  placeholder="Mother's name"
                  value={family.mother}
                  onChange={(e) => {
                    setfamily({
                      ...family,
                      mother: e.target.value,
                    });
                  }}
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Siblings's Name
              </label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control"
                  id="birthplace"
                  placeholder="Siblings name"
                  value={family.siblings}
                  onChange={(e) => {
                    setfamily({
                      ...family,
                      siblings: e.target.value,
                    });
                  }}
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Children's Name
              </label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control"
                  id="birthplace"
                  placeholder="Children's name"
                  value={family.children}
                  onChange={(e) => {
                    setfamily({
                      ...family,
                      children: e.target.value,
                    });
                  }}
                />{" "}
              </div>
            </div>
          </div>
        </div>

        {/* relationship  */}
        <div className="row">
          <h4>Relationship </h4>

          <div className="col-lg-3">
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Marital Status
              </label>
              <select
                className="form-select"
                value={relationShip.MaritalStatus}
                onChange={(e) => {
                  setRelationship({
                    ...relationShip,
                    MaritalStatus: e.target.value,
                  });
                }}
                aria-label="Default select example"
              >
                <option selected={relationShip.MaritalStatus}>
                  Select status
                </option>
                <option value="Married">Married</option>
                <option value="UnMarried">UnMarried</option>
                <option value="Divorced">Divorced</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Boyfriend
              </label>
              <div className=" ">
                <input
                  type="text"
                  className="form-control"
                  id="birthplace"
                  placeholder="Enter Boyfriend Name"
                  value={boyfriend}
                  onChange={(e) => {
                    setBoyfriend(e.target.value);
                  }}
                />{" "}
                {console.log("boyfrein", boyfriendArr)}
                {boyfriendArr.length > 0
                  ? boyfriendArr.map((e, i) => {
                      return <p>{e}</p>;
                    })
                  : ""}
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
              ></label>
              <div className="d-flex ">
                <button
                  className="btn btn-success mt-2"
                  onClick={() => {
                    setBoyfriendArr([...boyfriendArr, boyfriend]);
                    setBoyfriend("");
                    setRelationship({
                      ...relationShip,
                      biyfriends: [...boyfriendArr, boyfriend],
                    });
                  }}
                >
                  add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mt-4" onClick={getAllDetails}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
