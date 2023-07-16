/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect, lazy, Suspense } from 'react'
import Swal from 'sweetalert2'
import { Row } from 'react-bootstrap'
import { deleteAllNumbers, deleteNumbers } from './hooks/snaLocalStorage'
import { Numbers } from './types'

// Code splitting
const MainLayout = lazy(() => import('./layouts/MainLayout'))
const InputNumber = lazy(() => import('./components/InputNumber'))
const SortNumber = lazy(() => import('./components/SortNumber'))
const SearchingNumber = lazy(() => import('./components/SearchingNumber'))
const MenuSelection = lazy(() => import('./components/MenuSelection'))
const Message = lazy(() => import('./components/Message'))

const App: React.FC = () => {
    // Set Initial State
    const [isInputNumber, setIsInputNumber] = useState<boolean>(true)
    const [isSortNumber, setIsSortNumber] = useState<boolean>(false)
    const [isSearchingNumber, setIsSearchingNumber] = useState<boolean>(false)
    const [initialState, setInitialState] = useState<any>('')
    const [isSortNumberDesc, setIsSortNumberDesc] = useState<boolean>(true)
    const [isSortNumberAsc, setIsSortNumberAsc] = useState<boolean>(false)
    const [searchQuery, setSearchQuery] = useState<string | null>('')

    // Fetch All Data From LocalStorage
    // const items = getAllNumbers() as Numbers[]
    const [items, setItems] = useState<Numbers[]>([])

    useEffect(() => {
        const storedData = localStorage.getItem('SNA-STORAGE-KEY')
            ? JSON.parse(localStorage.getItem('SNA-STORAGE-KEY') || '')
            : []

        setItems(storedData)

        window.addEventListener('storage', storedData)

        return () => {
            window.removeEventListener('storage', storedData)
        }
    }, [items])

    // Set Handler Action
    const onAddNumberHandler = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()

        if (initialState >= 100) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                },
            })

            Toast.fire({
                icon: 'error',
                title: 'Inputan angka tidak boleh besar dari 100',
            })
        }

        if (initialState >= 1 && initialState <= 100) {
            const number_id =
                Date.now().toString(36) +
                Math.floor(
                    Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
                ).toString(36)

            // Set News Items
            const newItems: Numbers = {
                id: 'SNA-' + number_id,
                number: initialState,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            }

            // Save & Check Duplicate Number From LocalStorage
            const numbers = items?.find(
                (item) => item?.number === newItems?.number
            )

            if (!numbers) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    },
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Angka Baru Ditambahkan',
                })

                // Reload & Refresh Storage
                localStorage.setItem(
                    'SNA-STORAGE-KEY',
                    JSON.stringify([...items, newItems])
                )

                setInitialState('')
            } else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    },
                })

                Toast.fire({
                    icon: 'warning',
                    title: 'Inputan angka tersedia!',
                })
            }
        }
    }

    const onDeleteNumberHandler = (id: string) => {
        const results = items?.filter((filteredItem) => filteredItem.id !== id)
        const item = items?.filter((filteredItem) => filteredItem.id === id)[0]
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
        })

        Toast.fire({
            icon: 'success',
            title: `Menghapus nilai:${item?.number} `,
        })

        deleteNumbers(results)
    }

    const onDeleteAllNumberHandler = () => {
        Swal.fire({
            title: 'Konfirmasi Hapus',
            text: `Apakah kamu yakin menghapus ${items?.length} nilai ini!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ya, Hapus',
            cancelButtonText: 'Batalkan',
        }).then((result) => {
            if (result.isConfirmed) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    },
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Semua Nilai Berhasil Dihapus',
                })

                deleteAllNumbers()
            }
        })
    }

    return (
        <MainLayout>
            <Message />

            <Row className="justify-content-arround g-2 align-items-stretch">
                <Suspense fallback={null}>
                    <MenuSelection
                        isInputNumber={isInputNumber}
                        setIsInputNumber={setIsInputNumber}
                        isSortNumber={isSortNumber}
                        setIsSortNumber={setIsSortNumber}
                        isSearchingNumber={isSearchingNumber}
                        setIsSearchingNumber={setIsSearchingNumber}
                    />

                    {/* Rendered component start*/}
                    {isInputNumber ? (
                        <InputNumber
                            items={items}
                            initialState={initialState}
                            setInitialState={setInitialState}
                            addNumber={onAddNumberHandler}
                            deleteNumber={onDeleteNumberHandler}
                            deleteAllNumber={onDeleteAllNumberHandler}
                        />
                    ) : isSortNumber ? (
                        <SortNumber
                            items={
                                isSortNumberDesc
                                    ? items?.sort((a, b) => b.number - a.number)
                                    : isSortNumberAsc
                                    ? items?.sort((a, b) => a.number - b.number)
                                    : []
                            }
                            deleteNumber={onDeleteNumberHandler}
                            isSortNumberDesc={isSortNumberDesc}
                            setIsSortNumberDesc={setIsSortNumberDesc}
                            isSortNumberAsc={isSortNumberAsc}
                            setIsSortNumberAsc={setIsSortNumberAsc}
                        />
                    ) : isSearchingNumber ? (
                        <SearchingNumber
                            items={items}
                            deleteNumber={onDeleteNumberHandler}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />
                    ) : null}
                    {/* Rendered component end*/}
                </Suspense>
            </Row>
        </MainLayout>
    )
}

export default App
