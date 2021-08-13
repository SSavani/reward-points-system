import './App.css';
import { useEffect, useState } from 'react';
import { pointsPerTransaction } from './utils/pointsPerTransaction';
import { pointsPerMonthAndTotal } from './utils/pointsPerMonth';
import TotalPoints from './components/TotalPoints';

const url = process.env.REACT_APP_API_URL;
function App() {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [perTransactionPoints, setPerTransactionPoints] = useState([]);
  const [pointsByCustomer, setPointsByCustomer] = useState({});

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const newTransactions = await response.json();
      const ptsPerTrans = pointsPerTransaction(newTransactions);
      const rewardPoints = pointsPerMonthAndTotal(ptsPerTrans);

      setTransactions(newTransactions);
      setPerTransactionPoints(ptsPerTrans);
      setPointsByCustomer(rewardPoints);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(`There was an Error: ${err}`);
    }
  };

  useEffect(() => {
    fetchTransactions();
    return () => {};
  }, []);

  if (loading) {
    return (
      <main className="loading">
        <h1>Loading...</h1>
      </main>
    );
  }
  return loading ? (
    <main className="loading">
      <h1>Loading...</h1>
    </main>
  ) : (
    <main>
      <div className="container">
        <h3>Total Reward Points / Customer</h3>
        <div className="tableWrapper">
          <table className="table">
            <thead>
              <tr className="headerRow">
                <th className="header1">Customer Name</th>
                <th className="header2">Total Reward Points</th>
                <th className="header3"></th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {Object.keys(pointsByCustomer).map((custID) => {
                return (
                  <TotalPoints
                    key={custID}
                    custID={custID}
                    pointsByCustomer={pointsByCustomer}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default App;
