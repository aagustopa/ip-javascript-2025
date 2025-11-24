import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="flex justify-between flex-row items-center pt-[20px]">
                <div className="left">
                    <div className="text-[16px] bold">
                        <a href="#">Política de Privacidad</a>
                        <p>&copy; 2025 Creado por Ivan Luengo con 💓</p>
                    </div>
                </div>
                <div className="flex gap-[70px] p-[0_80px_0_0]">
                    <div className="phone">
                        <h2>Llama</h2>
                        <a href="tel:+5213312345678">+52-1-33-12345678</a>
                    </div>

                    <div className="mail">
                        <h2>Escribe</h2>
                        <a href="mailto:info@misitio.com">info@misitio.com</a>
                    </div>

                    <div className="social-media">
                        <h2>Sigue</h2>
                        <nav className="flex items-center justify-center gap-5">
                            <a href="https://facebook.com">
                                <FaFacebook />
                            </a>
                            <a href="https://x.com">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com">
                                <FaLinkedin />
                            </a>
                            <a href="https://instagram.com">
                                <FaInstagram />
                            </a>
                        </nav>
                    </div>
                </div>

            </footer>
        </>
    );
}
export default Footer;