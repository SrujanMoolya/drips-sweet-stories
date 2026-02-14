import { motion } from "framer-motion";

interface ScaleInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    initialScale?: number;
}

export const ScaleIn = ({ children, delay = 0, duration = 0.5, className = "", initialScale = 0.8 }: ScaleInProps) => {
    return (
        <motion.div
            initial={{ scale: initialScale, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration, delay, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
