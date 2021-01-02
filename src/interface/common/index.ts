import Vue from "vue/types/vue";

export interface Option {
  label: string;
  value: string | boolean | number;
}

export type ValueOf<T> = T[keyof T];



