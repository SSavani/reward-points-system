import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import PointsPerMonth from './PointsPerMonth';

const TotalPoints = ({ custID, pointsByCustomer }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <tr key={custID} className="row">
        <td>{pointsByCustomer[custID].name}</td>
        <td>{pointsByCustomer[custID].totalPoints}</td>
        <td className="expandBtn">
          <button className="btn" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </td>
      </tr>
      <tr className="detailsOuterRow">
        <td colSpan="3" className="outerRowData">
          {showInfo && (
            <PointsPerMonth custID={custID} pointsByCustomer={pointsByCustomer} />
          )}
        </td>
      </tr>
    </>
  );
};

export default TotalPoints;
