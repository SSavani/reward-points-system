import logo from './logo.svg';
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
      console.log(newTransactions);
      const ptsPerTrans = pointsPerTransaction(newTransactions);
      console.log('ppt: ', ptsPerTrans);
      const rewardPoints = pointsPerMonthAndTotal(ptsPerTrans);
      console.log('ppm: ', rewardPoints);

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
      <h2>Reward Points</h2>
      <div>
        <TotalPoints pointsByCustomer={pointsByCustomer} />
        <table>
          <tbody>
            <tr>
              <th>Customer Name</th>
              <th>Transaction Amount</th>
              <th>Transaction Date</th>
            </tr>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.name}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default App;
