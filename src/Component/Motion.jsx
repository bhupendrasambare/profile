import { motion } from "framer-motion"

const animation = {
    initial:{ opacity: 0,X:100 },
    animate:{ opacity: 1,X:0 },
    exit:{ opacity: 0,X:-100 }
}

export const Motion = ({ children }) => (
    <motion.div variants={animation} initial="initial" animate="animate" exit="exit">
        {children}
    </motion.div>
)