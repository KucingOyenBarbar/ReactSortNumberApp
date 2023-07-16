/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { SortNumbers } from '../types'
import { Suspense, lazy } from 'react'

// Code splitting
const NumberItems = lazy(() => import('./NumberItems'))
const SortNumberButton = lazy(() => import('./SortNumberButton'))

type Iprops = SortNumbers

export default function SortNumber({
    items,
    deleteNumber,
    isSortNumberAsc,
    isSortNumberDesc,
    setIsSortNumberAsc,
    setIsSortNumberDesc,
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
                            Sorting Angka <FontAwesomeIcon icon={faSort} />
                        </Card.Title>
                        <hr className="text-white-50" />

                        <Suspense fallback={null}>
                            {items.length ? (
                                <SortNumberButton
                                    isSortNumberAsc={isSortNumberAsc}
                                    isSortNumberDesc={isSortNumberDesc}
                                    setIsSortNumberAsc={setIsSortNumberAsc}
                                    setIsSortNumberDesc={setIsSortNumberDesc}
                                />
                            ) : null}

                            <NumberItems
                                items={items}
                                onHandleDelete={deleteNumber}
                            />
                        </Suspense>
                    </Card>
                </div>
            </Col>
        </>
    )
}
