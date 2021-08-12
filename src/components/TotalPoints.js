import React from 'react';

const TotalPoints = ({ pointsByCustomer }) => {
  return (
    <>
    <h3>Total Reward Points Per Customer</h3>
      <table>
        <tbody>
          <tr>
            <th>Customer Name</th>
            <th>Total Reward Points</th>
          </tr>
          {Object.keys(pointsByCustomer).map((custID)=>{
            return <tr key={custID}>
              <td>{pointsByCustomer[custID].name}</td>
              <td>{pointsByCustomer[custID].totalPoints}</td>
            </tr>
          })}
        </tbody>
      </table>
    </>
  );
};

export default TotalPoints;
