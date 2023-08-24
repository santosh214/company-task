import React, { useState } from "react";
import { useLocation } from "react-router";
export default function ViewPage() {
  const location = useLocation();
  const [basicDetails, setBasicDetails] = useState(location.state.basicDetails);
  const [physicalStatus, setPhysicalStatus] = useState(
    location.state.physicalStatus
  );
  const [personalLife, setPersonalLife] = useState(location.state.personalLife);
  const [family, setfamily] = useState(location.state.family);
  const [relationShip, setRelationship] = useState(location.state.relationShip);

  return (
    <>
      <div className="container py-5">
      <h2 className="pb-4 text-center"> View Section</h2>

        <div className="row ">
          <div className="col text-center pt-5">
            <h1>
              {basicDetails.name} ({basicDetails.nickName})
            </h1>
            <p>{basicDetails.profession}</p>
            <p>{basicDetails.dob}</p>
          </div>
        </div>
        <div className="row">
          <h4>Physical Stats</h4>
          <hr />
          <div className="col-lg-4">
            <p className="fw-bold">Height</p>
            <p>
              {physicalStatus.heightfoot}ft {physicalStatus.heightInch}in
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Eye Color</p>
            <p>
                {physicalStatus.EyeColor}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Weight</p>
            <p>
                {physicalStatus.weight}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Hair Color</p>
            <p>
                {physicalStatus.hairColor}
            </p>
          </div>

          <div className="col-lg-4">
            <p className="fw-bold">Gender</p>
            <p>
                {physicalStatus.Gender}
            </p>
          </div>


        </div>
        <div className="row">
          <h4>Personal Life</h4>
          <hr />
          <div className="col-lg-4">
            <p className="fw-bold">Birth place</p>
            <p>
              {personalLife.BirthPlace}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Zodiac</p>
            <p>
                {personalLife.Zodiac}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Religion</p>
            <p>
                {personalLife.Religion}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">School</p>
            <p>
                {personalLife.School}
            </p>
          </div>

          <div className="col-lg-4">
            <p className="fw-bold">Graduation</p>
            <p>
                {personalLife.Graduation}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">homeAddress</p>
            <p>
                {personalLife.homeAddress}
            </p>
          </div>

          <div className="col-lg-4">
            <p className="fw-bold">homeTown</p>
            <p>
                {personalLife.homeTown}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Nationality</p>
            <p>
                {personalLife.Nationality}
            </p>
          </div>



        </div>
        <div className="row">
          <h4>Family </h4>
          <hr />
          <div className="col-lg-4">
            <p className="fw-bold">Father's name</p>
            <p>
              {family.father}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Mother's name</p>
            <p>
                {family.mother}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Siblings</p>
            <p>
                {family.siblings}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">children</p>
            <p>
                {family.children}
            </p>
          </div>

        



        </div>

        <div className="row">
          <h4>RelationShip </h4>
          <hr />
          <div className="col-lg-4">
            <p className="fw-bold">Marital status</p>
            <p>
              {relationShip.MaritalStatus}
            </p>
          </div>
          <div className="col-lg-4">
            <p className="fw-bold">Boyfriend</p>
            {relationShip.biyfriends.length>0? relationShip.biyfriends.map((e,i)=>{
                return(
                    <p key={i}>{e}</p>
                )
            }):''}
          </div>
        
        



        </div>
      </div>
    </>
  );
}
