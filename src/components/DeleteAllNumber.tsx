/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Numbers } from '../types'
import { faRemove } from '@fortawesome/free-solid-svg-icons/faRemove'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = { items: Numbers[]; deleteAllNumber: any }

export default function DeleteAllNumber({ items, deleteAllNumber }: Props) {
    return (
        <div className="d-flex justify-content-end g-2">
            <button
                hidden={!items.length}
                onClick={() => deleteAllNumber()}
                title="Hapus Semua Nilai"
                type="button"
                className="btn btn-md btn-outline-dark rounded text-start text-white-50 text-center fs-5 fst-normal mb-3 mx-3"
            >
                Hapus Semua Nilai{' '}
                <FontAwesomeIcon icon={faRemove} className="text-danger" />
            </button>
        </div>
    )
}
