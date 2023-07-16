/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faListNumeric,
    faSortNumericDesc,
    faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { Menu } from '../types'

type Props = Menu

export const MenuSelectionButton = ({
    isInputNumber,
    isSortNumber,
    isSearchingNumber,
    setIsInputNumber,
    setIsSortNumber,
    setIsSearchingNumber,
}: Props) => (
    <>
        <div>
            <div className="d-grid gap-2 mb-3">
                <button
                    onClick={() => {
                        setIsInputNumber(true)
                        setIsSortNumber(false)
                        setIsSearchingNumber(false)
                    }}
                    className={`btn btn-md btn-outline-dark rounded text-white-50 fs-5 ${
                        isInputNumber ? 'active' : ''
                    }`}
                    type="button"
                >
                    Input Angka <FontAwesomeIcon icon={faListNumeric} />
                </button>
                <button
                    onClick={() => {
                        setIsSortNumber(true)
                        setIsSearchingNumber(false)
                        setIsInputNumber(false)
                    }}
                    className={`btn btn-md btn-outline-dark rounded text-white-50 fs-5 ${
                        isSortNumber ? 'active' : ''
                    }`}
                    type="button"
                >
                    Sorting <FontAwesomeIcon icon={faSortNumericDesc} />
                </button>
                <button
                    onClick={() => {
                        setIsSearchingNumber(true)
                        setIsSortNumber(false)
                        setIsInputNumber(false)
                    }}
                    className={`btn btn-md btn-outline-dark rounded text-white-50 fs-5 ${
                        isSearchingNumber ? 'active' : ''
                    }`}
                    type="button"
                >
                    Searching <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    </>
)
