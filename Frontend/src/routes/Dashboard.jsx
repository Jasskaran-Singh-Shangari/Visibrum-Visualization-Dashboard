import React from 'react'
import Header from '../components/Header';
import StartYearLine from "../routes/StartYearLine"
import EndYearLine from "../routes/EndYearLine"
import IntensityBar from "../routes/IntensityBar"
import RelevanceBar from "../routes/RelevanceBar"
import LikelihoodBar from "../routes/LikelihoodBar"
import Pie from "../routes/Pie"

const Dashboard = () => {
  return (
    <div>
    <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      {/* Line Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-base-100 p-4 rounded-lg shadow-lg">
          <StartYearLine filtering={false} />
        </div>

        <div className="bg-base-100 p-4 rounded-lg shadow-lg">
          <EndYearLine filtering={false} />
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-base-100 p-4 rounded-lg shadow-lg">
          <IntensityBar filtering={false} />
        </div>

        <div className="bg-base-100 p-4 rounded-lg shadow-lg">
          <RelevanceBar filtering={false} />
        </div>

        <div className="bg-base-100 p-4 rounded-lg shadow-lg">
          <LikelihoodBar filtering={false} />
        </div>
      </div>
      <div className="mt-6 bg-base-100 p-4 rounded-lg shadow-lg">
        <Pie filtering={false} />
      </div>
    </div>


  )
}

export default Dashboard;
