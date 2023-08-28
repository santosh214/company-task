import React, {useEffect, useState} from 'react';
import './pools.css';
import {stakingAbi, stakingContractAddr} from '../contract/Staking';
import {Contract, ethers} from 'ethers';
import {useConnectWallet} from '@web3-onboard/react';
import {wait} from '@testing-library/user-event/dist/utils';
import {ToastContainer, toast} from 'react-toastify';

export default function Pools() {
  const [{wallet, connecting}, connect, disconnect] = useConnectWallet();
  console.log('🚀 ~ Pools ~ wallet', wallet);
  const [address, setAddress] = useState(wallet?.accounts[0]?.address);
  const [loader, setLoader] = useState(-1);
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
      apr: '10.83',
      total_staked: '432,651,190',
      endTime: '23'
    }
  ];

  const etherProvider = () => {
    try {
      return new ethers.providers.Web3Provider(wallet?.provider);
    } catch (error) {}
  };
  const etherSigner = etherProvider()?.getSigner();

  const stakingContractInst = new ethers.Contract(
    stakingContractAddr,
    stakingAbi,
    etherSigner
  );
  useEffect(() => {
    setAddress(wallet?.accounts[0]?.address);
    return () => {};
  }, [wallet?.accounts[0]?.address]);

  const handleStake = async (num) => {
    if (!address) {
      return toast.error('please connect wallet first!');
    }
    try {
      setLoader(num);
      console.log('chekc', stakingContractInst);
      let _amount = 1;
      let amountInBigNum = _amount * 10 ** 18;
      console.log('🚀 ~ handleStake ~ amountInBigNum', amountInBigNum);

      console.log('🚀 ~ handleStake ~ stakingContractInst', stakingContractInst)
      let _stake = await stakingContractInst?.deposit(_amount);
      let _wait = await _stake.wait();
      if (wait) {
        setLoader(-1);
        toast.success('Transaction done!');
      }
      console.log('🚀 ~ handleStake ~ _wait', _wait);
    } catch (error) {
      let _pa = JSON.stringify(error);
      let _aa = JSON.parse(_pa);
      console.log('🚀 ~ handleStake ~ _aa', _aa);
      if (_aa?.reason) {
        setLoader(-1);

        return toast.error(_aa?.reason);
      }
      setLoader(-1);
      console.log('🚀 ~ handleStake ~ error', error);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="poolMainSection">
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
            {data.map((e, i) => {
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
                    <p>{e.apr} %</p>
                  </div>
                  <div className="col-2">
                    <p className="rowHeading">Ends in</p>
                    <p>{e.endTime} days</p>
                  </div>

                  <div className="col-2 d-inline-block justify-content-center ">
                    {loader == i ? (
                      <div
                        class="spinner-border text-primary ml-3"
                        role="status"
                      >
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      <p
                        style={{
                          cursor: 'pointer',
                          textAlign: 'center'
                        }}
                        className="stakeBtn d-inline-block justify-content-center text-center"
                        onClick={() => handleStake(i)}
                      >
                        Stake
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
}
