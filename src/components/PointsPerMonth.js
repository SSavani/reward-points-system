import React from 'react';

const PointsPerMonth = ({ custID, pointsByCustomer }) => {
  return (
    <table className="detailsTable" width="100%">
      <col style={{ width: '33.33%' }}></col>
      <col style={{ width: '33.33%' }}></col>
      <col style={{ width: '33.33%' }}></col>

      <thead className="detailsHeader">
        <tr id="detailsHeaderRow">
          <th>Month</th>
          <th>Points</th>
          <th>#Transactions</th>
        </tr>
      </thead>
      <tbody className="detailsBody">
        {Object.keys(pointsByCustomer[custID].month).map((monthName, idx) => {
          // console.log(pointsByCustomer[custID]['month'][monthName].points);
          return (
            <tr key={idx} className="detailsRow">
              <td>{monthName}</td>
              <td>{pointsByCustomer[custID]['month'][monthName].points}</td>
              <td>{pointsByCustomer[custID]['month'][monthName].numOfTrans}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PointsPerMonth;
