// A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
// (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points)

export const calcPoints = (amount) => {
  let points = 0;

  if (amount > 50 && amount < 100) {
    points = amount - 50;
  } else if (amount > 100) {
    points = 50 + 2 * (amount - 100);
  }

  return points;
};
