/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Numbers } from '../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

type Props = {
    items: Numbers[]
    searchQuery: any
    setSearchQuery: any
}

export default function SearchingNumberInput({
    items,
    searchQuery,
    setSearchQuery,
}: Props) {
    useEffect(() => {
        // Side-effect uses `prop` and `state`
        console.log({ yourSearchNumber: searchQuery })
    }, [searchQuery])

    return (
        <div hidden={!items.length}>
            <div className="row justify-content-end g-2 p-3">
                <div className="col-12 col-lg-5">
                    <div className="input-group mb-3">
                        <input
                            style={{
                                height: '60px',
                            }}
                            type="number"
                            className="form-control bg-black text-white-50 text-start fst-normal fs-5 rounded-0 border-secondary"
                            placeholder="Cari..."
                            aria-label="Cari..."
                            aria-describedby="button-addon2"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            className="btn btn-outline-secondary fs-5"
                            type="button"
                            id="button"
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
