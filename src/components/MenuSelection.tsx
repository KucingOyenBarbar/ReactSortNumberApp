/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Col, Card } from 'react-bootstrap'
import { MenuSelectionButton } from './MenuSelectionButton'
import { Menu } from '../types'

type MenuSelectionProps = Menu

const MenuSelection = ({
    isInputNumber,
    setIsInputNumber,
    isSearchingNumber,
    setIsSearchingNumber,
    isSortNumber,
    setIsSortNumber,
}: MenuSelectionProps) => (
    <>
        <Col lg={4}>
            <div className="py-3">
                <Card
                    body
                    style={{
                        borderRadius: '0',
                        border: '0',
                        boxShadow: '0',
                        backgroundColor: '#0f0d0d',
                    }}
                >
                    <Card.Title className="text-white-50 text-start text-uppercase">
                        Menu Pilihan
                    </Card.Title>
                    <hr className="text-white-50" />

                    <MenuSelectionButton
                        isInputNumber={isInputNumber}
                        isSortNumber={isSortNumber}
                        isSearchingNumber={isSearchingNumber}
                        setIsInputNumber={setIsInputNumber}
                        setIsSearchingNumber={setIsSearchingNumber}
                        setIsSortNumber={setIsSortNumber}
                    />
                </Card>
            </div>
        </Col>
    </>
)

export default MenuSelection
