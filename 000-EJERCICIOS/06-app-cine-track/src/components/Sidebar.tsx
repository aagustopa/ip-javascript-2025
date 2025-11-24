import Menu from './Menu';
import { motion } from "motion/react"

export default function Sidebar() {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden bg-white shadow-xl px-8 py-12 fixed z-10 top-36 right-0 rounded-xl">
            <Menu direction="vertical" />
        </motion.div>
    );
}
