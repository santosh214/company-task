import React, {useState} from 'react';
import './pools.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Pools() {
  const data = [
    {
      name: 'Stake cake',
      details: 'Stake, Earn- And more',
      apy: '0.53',
      apr: '11.26',
      total_staked: '213,422,121',
      endTime: '56'
    },
    {
      name: 'Earn WNCG',
      details: 'Stake cake',
      apy: '',
      apr: '10.83%',
      total_staked: '432,651,190',
      endTime: '23'
    }
  ];
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const MyModal = () => {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return (
    <section className="poolMainSection">
      <MyModal/>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center poolRow">
          <div className="col-12 col-md-10 ">
            <p className="pool-heading">Syrup Pools</p>
            <p className="pool-sub-heading">
              Just stake some tokens to earn. <br />
              High APR, low risk.
            </p>
          </div>
        </div>
      </div>
      <section className="pt-3 mb-3">
        <div className="container ">
          {data.map((e) => {
            return (
              <div className="row rowColor d-flex justify-content-between py-2 ">
                <div className="col-2 d-flex gap-2 ">
                  <div>
                    <img
                      src="/nft.png"
                      alt="nft"
                      className="img-fluid"
                      width={40}
                    />
                  </div>
                  <div>
                    <p className="nftName mb-0">{e.name}</p>
                    <p className="nftNameDetails">{e.details}</p>
                  </div>
                </div>
                <div className="col-2">
                  <p className="rowHeading">Total Staked</p>

                  <p>{e.total_staked}</p>
                </div>
                <div className="col-2">
                  <p className="rowHeading">APR</p>
                  <p>{e.apr}</p>
                </div>
                <div className="col-2">
                  <p className="rowHeading">Ends in</p>
                  <p>{e.endTime} days</p>
                </div>

                <div className="col-2">
                  <p style={{
                    cursor:'pointer'
                  }} onClick={()=>setShow(true)}>details</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
