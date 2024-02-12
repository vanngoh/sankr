import { defineStore } from "pinia";

export const useSankeyStore = defineStore("sankey", {
  state: () => ({
    columns: ["Source", "Target", "Weight"],
    data: [
      ["Salary", "Income", 80],
      ["Investment", "Income", 20],
      ["Income", "Living Cost", 45],
      ["Living Cost", "Rental", 25],
      ["Living Cost", "Food & Expenses", 20],
      ["Income", "Government", 25],
      ["Government", "Income tax", 10],
      ["Government", "Retirement Fund", 10],
      ["Government", "Health Insurance", 5],
      ["Income", "Savings", 30],
      ["Savings", "Bank", 15],
      ["Savings", "ETF/Stock", 15],
    ],
  }),
  getters: {
    fetchData: (state) => {
      return [state.columns, ...state.data];
    },
  },
  actions: {
    increment() {
      this.counter++;
    },

    updateData(newData) {
      this.data = newData;
    },
  },
});
