import { Container } from 'react-bootstrap'
import { Layout } from '../types'
import React, { lazy } from 'react'

type MainLayoutProps = Layout

// Code Splitting
const HeaderNav = lazy(() => import('../components/HeaderNav'))
const Footer = lazy(() => import('../components/Footer'))

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
    <>
        <HeaderNav />
        <main
            className="content-main"
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                marginTop: '11rem',
            }}
        >
            <Container>{children}</Container>
        </main>
        <Footer />
    </>
)

export default MainLayout
