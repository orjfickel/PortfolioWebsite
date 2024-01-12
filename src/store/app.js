// Utilities
import {watch} from 'vue'
import pinia from '../store'
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

export function watchStore () {
  watch(
    pinia.state,
    (state) => {
      localStorage.setItem("app", JSON.stringify(state.app));
    },
    { deep: true }
    );
}
