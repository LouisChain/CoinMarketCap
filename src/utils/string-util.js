export default {
  formatCurrency: (n, currency) => {
    return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }
};
