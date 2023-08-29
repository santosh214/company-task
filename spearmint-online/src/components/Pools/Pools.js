import React, {useEffect, useState} from 'react';
import './pools.css';
import {stakingAbi, stakingContractAddr} from '../contract/Staking';
import {Contract, ethers} from 'ethers';
import {useConnectWallet} from '@web3-onboard/react';
import {wait} from '@testing-library/user-event/dist/utils';
import {ToastContainer, toast} from 'react-toastify';
import {tokenAbi, tokenAddress} from '../contract/Token';

export default function Pools() {
  const myStakeAmount = 1 * 10 ** 18;
  const [{wallet, connecting}, connect, disconnect] = useConnectWallet();
  console.log('🚀 ~ Pools ~ wallet', wallet);
  const [address, setAddress] = useState(wallet?.accounts[0]?.address);
  const [loader, setLoader] = useState(-1);
  const [buttonStatus, setButtonStatus] = useState('approve');
  const[currentRow,setCurrentRow]=useState(-1)
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
  const tokenContractInst = new ethers.Contract(
    tokenAddress,
    tokenAbi,
    etherSigner
  );
  useEffect(() => {
    setAddress(wallet?.accounts[0]?.address);
    return () => {};
  }, [wallet?.accounts[0]?.address]);

  const test = async () => {
    try {
      console.log('🚀 ~ test ~ stakingContractInst', stakingContractInst);
      console.log('🚀 ~ test ~ address', address);
      let val = await stakingContractInst.userInfo(address);
      console.log('val', val);
    } catch (error) {
      console.log('🚀 ~ test ~ error', error);
    }
  };
  const handleApprove = async (num) => {
    if (!address) {
      return toast.error('please connect wallet first!');
    }
    try {
      setCurrentRow(num)
      setLoader(num);

      const amount = myStakeAmount;
      // const _approve=await tokenContractInst.increaseAllowance(address,amount.toString())
      const _approvee = await tokenContractInst.approve(
        stakingContractAddr,
        amount.toString()
      );
      console.log('chekc', stakingContractInst);
      const tokenwait = await _approvee.wait();
      if (tokenwait) {
        setLoader(-1);
        setButtonStatus('stake');
        return toast.success('Approve success!');
      }
    } catch (error) {
      setLoader(-1);
      setButtonStatus('approve');
      console.log('🚀 ~ handleApprove ~ error', error);
    }
  };
  const handleStake = async (num) => {
    if (!address) {
      return toast.error('please connect wallet first!');
    }
    try {
      setLoader(num);
      setCurrentRow(num)


      let _amount = myStakeAmount;
      let amountInBigNum = 1;
      console.log('🚀 ~ handleStake ~ amountInBigNum', amountInBigNum);

      console.log(
        '🚀 ~ handleStake ~ stakingContractInst',
        stakingContractInst
      );

      let _stake = await stakingContractInst?.deposit(_amount?.toString());
      let _wait = await _stake.wait();
      if (_wait) {
        setButtonStatus('approve');

        setLoader(-1);
        toast.success('Transaction done!');
      }
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
      // setButtonStatus('stake')
    }
  };

  return (
    <>
      {/* <button onClick={test}>click</button> */}
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

                      <>
                      {console.log("current row",currentRow)}
{console.log("current row ii",currentRow==i)}
{console.log("current buttonStatus ii",buttonStatus)}
                        {buttonStatus === 'stake' && currentRow==i ? (
                          <>

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
                          </>
                        ) : (
                          <>

<p
                            style={{
                              cursor: 'pointer',
                              textAlign: 'center'
                            }}
                            className="stakeBtn d-inline-block justify-content-center text-center"
                            onClick={() => handleApprove(i)}
                          >
                            Approve
                          </p>

                          </>
                        )}
                      </>
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
