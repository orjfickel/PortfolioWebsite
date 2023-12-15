// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    if (localStorage.getItem("app") != "undefined")
      return JSON.parse(localStorage.getItem("app"));
    return {
      darkmode: 'default',
    };
  },
})
