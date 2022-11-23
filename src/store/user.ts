import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
    surname: "",
  }),
  getters: {
    fullname(state) {
      return `${state.name} ${state.surname}`;
    },
  },
  actions: {
    setFullName(value: string) {
      const splitBySpace = value.split(" ");
      this.name = splitBySpace[0];
      this.surname = splitBySpace[1];
    },
  },
});
