/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { useRef, useEffect } from 'react'

type Iprops = {
    state: any
    setState: any
    addNumber: any
}

export default function AddNumberInput({ state, setState, addNumber }: Iprops) {
    const inputRef = useRef()

    useEffect(() => {
        // Side-effect uses `prop` and `state`
        console.log({ yourInputNumber: state })
    }, [state, setState])

    return (
        <div>
            <form onSubmit={addNumber}>
                <div className="input-group mb-3 p-3">
                    <input
                        ref={() => inputRef}
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        type="number"
                        className="form-control text-white-50 text-start fst-normal fs-4 bg-transparent border-0 border-bottom border-dark rounded-0"
                        placeholder="Masukan jumlah nilai"
                        aria-label="Masukan jumlah nilai"
                        aria-describedby="button-addon2"
                        style={{
                            height: '70px',
                        }}
                    />
                    <button
                        disabled={!state}
                        className="btn btn-primary fs-4"
                        type="submit"
                        style={{ width: '80px' }}
                    >
                        <FontAwesomeIcon icon={faUpload} />
                    </button>
                </div>
            </form>
        </div>
    )
}
