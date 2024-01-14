import { defineStore } from 'pinia';
import data from '../data.json';

export const pristupDoKrajin = defineStore('krajiny', {
  state: () => ({
    data: data.krajiny,
  }), 
});
