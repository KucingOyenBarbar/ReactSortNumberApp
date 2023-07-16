import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer className="bg-black border-top border-dark footer-section">
            <Container>
                <div className="text-white-50 text-lg-start text-center fst-normal fs-5">
                    Powered 2023 By{' '}
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/farhan-20241221a/"
                        className="link-offset-2 text-white-50 link-underline link-underline-opacity-0 fst-italic"
                    >
                        Farhan
                    </a>
                </div>
                <div className="text-white-50 text-lg-start text-center fst-normal fs-5">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/kucingOyenBarbar/"
                        className="link-offset-2 text-white-50 link-underline link-underline-opacity-0 fst-normal"
                    >
                        Sumber Referensi{' '}
                        <FontAwesomeIcon icon={faHeart} color="#bf0d00" />
                    </a>
                </div>
            </Container>
        </footer>
    )
}
