import { defineStore } from 'pinia';
import data from '../data.json';

export const pristupDoPretekov = defineStore('preteky', {
  state: () => ({
    data: data.zoznamPretekov,
  }), 
});
