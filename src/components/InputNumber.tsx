/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListNumeric } from '@fortawesome/free-solid-svg-icons'
import { InputNumbers } from '../types'
import { lazy } from 'react'

// Code splitting
const NumberItems = lazy(() => import('./NumberItems'))
const AddNumberInput = lazy(() => import('./AddNumberInput'))
const DeleteAllNumber = lazy(() => import('./DeleteAllNumber'))

type Iprops = InputNumbers

export default function InputNumber({
    items,
    setInitialState,
    initialState,
    addNumber,
    deleteNumber,
    deleteAllNumber,
}: Iprops) {
    return (
        <>
            <Col lg={8}>
                <div className="py-3">
                    <Card
                        body
                        style={{
                            borderRadius: '0',
                            border: '0',
                            boxShadow: '0',
                            backgroundColor: '#0f0d0d',
                            // height: items?.length >= 12 ? '700px' : '',
                            // overflow: items?.length >= 12 ? 'auto' : '',
                        }}
                    >
                        <Card.Title className="text-white-50 text-start text-uppercase">
                            Input Angka <FontAwesomeIcon icon={faListNumeric} />
                        </Card.Title>

                        <hr className="text-white-50" />

                        <AddNumberInput
                            state={initialState}
                            setState={setInitialState}
                            addNumber={addNumber}
                        />

                        {items.length >= 3 && (
                            <DeleteAllNumber
                                items={items}
                                deleteAllNumber={deleteAllNumber}
                            />
                        )}

                        <NumberItems
                            items={items}
                            onHandleDelete={deleteNumber}
                        />
                    </Card>
                </div>
            </Col>
        </>
    )
}
