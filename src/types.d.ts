/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */

export type Layout = { children: React.ReactNode }

export type Menu = {
    isInputNumber: any
    setIsInputNumber: any
    isSortNumber: any
    setIsSortNumber: any
    isSearchingNumber: any
    setIsSearchingNumber: any
}

export type Numbers = {
    id: string,
    number: number
    createdAt: string
    updatedAt: string
}

export type InputNumbers = {
    items: Numbers[]
    setInitialState: any
    initialState: any
    addNumber: any
    deleteNumber: any
    deleteAllNumber: any
}

export type SortNumbers = {
    items: Numbers[]
    deleteNumber: any
    isSortNumberDesc: any
    isSortNumberAsc: any
    setIsSortNumberDesc: any
    setIsSortNumberAsc: any
}

export type SearchNumbers = {
    items: Numbers[]
    deleteNumber: any
    searchQuery: any
    setSearchQuery: any
}
