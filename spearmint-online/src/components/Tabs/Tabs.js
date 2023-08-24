import React, {useState} from 'react';
import './tabs.css';
import Farms from '../Farms/Farms';
import Pools from '../Pools/Pools';
import LiquidStaking from '../LiquidStaking/LiquidStaking';
export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className="container pt-2">
        <div className="row d-flex justify-content-center">
          <div className="col-1 ">
            <button
              className={`myTab ${activeTab === 1 ? 'myActiveTab tabDiv' : ''}`}
              onClick={() => setActiveTab(1)}
            >
              Farms
            </button>
          </div>
          <div className="col-1 ">
            <button
              className={`myTab ${activeTab === 2 ? 'myActiveTab' : ''}`}
              onClick={() => setActiveTab(2)}
            >
              Pools
            </button>
          </div>
          <div className="col-2 ">
            <button
              className={`myTab ${activeTab === 3 ? 'myActiveTab' : ''}`}
              onClick={() => setActiveTab(3)}
            >
              Liquid Staking
            </button>
          </div>
        </div>
      </div>
      <>
        {activeTab === 1 ? <Farms /> : ''}
        {activeTab === 2 ? <Pools /> : ''}
        {activeTab === 3 ? <LiquidStaking /> : ''}
      </>
    </>
  );
}
