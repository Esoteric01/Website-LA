import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorOutlineRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            if (cursorDotRef.current && cursorOutlineRef.current) {
                cursorDotRef.current.style.left = `${clientX}px`;
                cursorDotRef.current.style.top = `${clientY}px`;
                
                cursorOutlineRef.current.animate({
                    left: `${clientX}px`,
                    top: `${clientY}px`
                }, { duration: 500, fill: "forwards" });
            }
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [role="button"], .cursor-hover-target')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };
        
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        return null;
    }

    return (
        <>
            <div ref={cursorDotRef} className={`fixed top-0 left-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary pointer-events-none transition-transform duration-200 ${isHovering ? 'scale-0' : 'scale-100'}`}></div>
            <div ref={cursorOutlineRef} className={`fixed top-0 left-0 z-[9999] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/50 pointer-events-none transition-all duration-300 ${isHovering ? 'scale-150 border-primary/80 bg-primary/10' : 'scale-100'}`}></div>
        </>
    );
};
export default CustomCursor;