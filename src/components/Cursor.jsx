import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const positionRef = useRef({ x: 0, y: 0 });
    const cursorRef = useRef(null);

    useEffect(() => {
        const mouseMove = (e) => {
            positionRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", mouseMove);

        const updatePosition = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
            }
            requestAnimationFrame(updatePosition);
        };
        requestAnimationFrame(updatePosition);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <>
            <motion.div className='cursor z-30 fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 will-change-transform' ref={cursorRef}></motion.div>
        </>
    );
};

export default Cursor;
