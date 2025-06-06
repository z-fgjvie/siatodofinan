export const calcularTotal = (cantidad, plazo) => {
  let total;

  if (cantidad < 5000) {
    total = cantidad * 1.3;
  } else if (cantidad >= 5000 && cantidad < 10000) {
    total = cantidad * 1.2;
  } else if (cantidad >= 10000 && cantidad < 15000) {
    total = cantidad * 1.1;
  } else {
    total = cantidad * 1.05;
  }

  if (plazo === 6) {
    total *= 1.05;
  } else if (plazo === 12) {
    total *= 1.15;
  } else if (plazo === 24) {
    total *= 1.25;
  } else {
    total *= 1.35;
  }

  return total;
};
