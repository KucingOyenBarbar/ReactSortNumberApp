import { Container, Navbar } from 'react-bootstrap'

export default function HeaderNav() {
    return (
        <Navbar
            fixed="top"
            expand="lg"
            className="bg-black text-white border-bottom border-dark"
        >
            <Container>
                <Navbar.Brand
                    href="/"
                    className="mx-auto mx-lg-0 shadow-none my-3"
                >
                    <img
                        alt=""
                        src="/vite.svg"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                    <span className="text-start text-capitalize text-white user-select-none fs-3 ms-3 ">
                        Sort Number App
                    </span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
