export function pointsPerMonthAndTotal(data) {
  let perCustomer = {};
  data.forEach((transaction) => {
    let { custID, name, points, month, monthNum } = transaction;
    if (!perCustomer[custID]) {
      perCustomer[custID] = {
        name: name,
        month: {},
        totalPoints: 0,
      };
    }

    perCustomer[custID].totalPoints += points;
    if (!perCustomer[custID]['month'][month]) {
      perCustomer[custID]['month'][month] = {
        monthNum,
        points,
        numOfTrans: 1,
      };
    } else {
      perCustomer[custID]['month'][month].points += points;
      perCustomer[custID]['month'][month].numOfTrans += 1;
    }
    return { ...perCustomer };
  });

  return perCustomer;
}
