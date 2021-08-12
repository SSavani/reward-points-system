import { calcPoints } from './calcPoints';
export function pointsPerTransaction(data) {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const resultData = data.map((transaction) => {
    let points = calcPoints(transaction.amount);
    let monthNum = new Date(transaction.date).getMonth();
    let month = months[monthNum];
    // monthNum += 1;
    return { ...transaction, points, month, monthNum };
  });

  return resultData;
}
