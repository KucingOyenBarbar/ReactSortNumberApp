/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Numbers } from '../types'

type NumberItemsProps = {
    items: Numbers[]
    onHandleDelete: any
    message?: string
}

export default function NumberItems({
    items,
    onHandleDelete,
    message,
}: NumberItemsProps) {
    return (
        <div className="py-3 px-3">
            {!items?.length ? (
                <div className="text-white-50 text-center py-3 fs-6 fst-normal">
                    {message?.length
                        ? message
                        : 'Angka masih kosong! Inputkan angka sekarang.'}{' '}
                    {/* Angka masih kosong! Inputkan angka sekarang. */}
                </div>
            ) : (
                <>
                    {items?.map((item, index) => (
                        <Card
                            key={index}
                            body
                            className="bg-black text-white mb-2"
                            style={{
                                borderRadius: '12px',
                            }}
                        >
                            <div className="d-flex justify-content-between">
                                <p className="text-start text-uppercase text-white-50 fs-5 fst-normal pt-3">
                                    Angka-{++index} : {item.number}
                                </p>

                                <button
                                    onClick={() => onHandleDelete(item.id)}
                                    title={`Hapus angka-${index} : ${item.number}`}
                                    type="button"
                                    className="btn btn-outline-dark border-0 btn-md rounded "
                                >
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        className="fs-3 px-2 text-white-50"
                                    />
                                </button>
                            </div>
                        </Card>
                    ))}
                </>
            )}
        </div>
    )
}
