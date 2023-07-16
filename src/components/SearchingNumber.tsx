/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { SearchNumbers } from '../types'
import { Suspense, lazy } from 'react'

// Code splitting
const NumberItems = lazy(() => import('./NumberItems'))
const SearchingNumberInput = lazy(() => import('./SearchingNumberInput'))

type Iprops = SearchNumbers

export default function SearchingNumber({
    items,
    deleteNumber,
    searchQuery,
    setSearchQuery,
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
                            Searching Angka <FontAwesomeIcon icon={faList} />
                        </Card.Title>

                        <hr className="text-white-50" />

                        <Suspense fallback={null}>
                            <SearchingNumberInput
                                items={items}
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                            />

                            {searchQuery ? (
                                <NumberItems
                                    items={
                                        searchQuery
                                            ? items.filter(
                                                  (item) =>
                                                      item?.number
                                                          .toString()
                                                          .includes(
                                                              searchQuery.toLowerCase()
                                                          )
                                              )
                                            : []
                                    }
                                    onHandleDelete={deleteNumber}
                                    message="Angka tidak ditemukan."
                                />
                            ) : (
                                <NumberItems
                                    items={items}
                                    onHandleDelete={deleteNumber}
                                />
                            )}
                        </Suspense>
                    </Card>
                </div>
            </Col>
        </>
    )
}
