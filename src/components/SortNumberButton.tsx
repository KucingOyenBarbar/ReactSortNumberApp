/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortNumericDesc } from '@fortawesome/free-solid-svg-icons/faSortNumericDesc'
import { faSortNumericAsc } from '@fortawesome/free-solid-svg-icons/faSortNumericAsc'

type Props = {
    isSortNumberDesc: any
    isSortNumberAsc: any
    setIsSortNumberDesc: any
    setIsSortNumberAsc: any
}

export default function SortNumberButton({
    isSortNumberAsc,
    isSortNumberDesc,
    setIsSortNumberAsc,
    setIsSortNumberDesc,
}: Props) {
    return (
        <div className="d-grid gap-2 d-md-block p-3 text-end">
            <button
                onClick={() => {
                    setIsSortNumberDesc(true)
                    setIsSortNumberAsc(false)
                }}
                className={`btn btn-md btn-outline-dark rounded text-white-50 text-center ${
                    isSortNumberDesc ? 'active' : ''
                } `}
                type="button"
            >
                Sorting Nilai Terbesar{' '}
                <FontAwesomeIcon icon={faSortNumericDesc} />
            </button>
            <button
                onClick={() => {
                    setIsSortNumberDesc(false)
                    setIsSortNumberAsc(true)
                }}
                className={`btn btn-md btn-outline-dark rounded text-white-50 text-center mx-md-2 ${
                    isSortNumberAsc ? 'active' : ''
                } `}
                type="button"
            >
                Sorting Nilai Terkecil{' '}
                <FontAwesomeIcon icon={faSortNumericAsc} />
            </button>
        </div>
    )
}
