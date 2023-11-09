import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer footer-center w-full h-full p-4 bg-base-300 text-base-content">
            <aside>
                <p>v-1.0 - Copyright © 2023 - All right reserved by <Link to="https://github.com/mahfuz2411">Mahfuz Ibne Syful</Link></p>
            </aside>
        </footer>
    );
};

export default Footer;