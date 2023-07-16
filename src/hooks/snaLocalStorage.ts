/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { STORAGE_KEY } from "../config/web-storage"
import { Numbers } from "../types"

export const getSortNumbers = () => {
  return localStorage.getItem(STORAGE_KEY)
}

export const getAllNumbers = () => {
  if (typeof (Storage) !== "undefined") {
    return localStorage.getItem(STORAGE_KEY) 
    ? JSON.parse(localStorage.getItem(STORAGE_KEY) || "")
    : [] 
  } else {
    console.log('LocalStorage is not supported in this browser.');
  }
}

export const addNewNumbers = (items: any) => {
  const sortNumbers: Numbers[] = getAllNumbers()
  
  return localStorage.setItem(STORAGE_KEY, JSON.stringify([...sortNumbers, items]))
}

export const deleteNumbers = (items: any) => {
  return localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export const deleteAllNumbers = () => {
  return localStorage.clear()
}