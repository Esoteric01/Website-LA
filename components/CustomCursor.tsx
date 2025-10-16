import React, { useEffect, useRef } from 'react';

const TRAIL_COUNT = 15;
const LERP_FACTOR = 0.25;

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRefs = useRef<React.RefObject<HTMLDivElement>[]>(
        [...Array(TRAIL_COUNT)].map(() => React.createRef())
    );
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorState = useRef({ x: 0, y: 0, scale: 1 });
    const trailStates = useRef([...Array(TRAIL_COUNT)].map(() => ({ x: 0, y: 0 })));
    const lastHovered = useRef<HTMLElement | null>(null);
    const animationFrameId = useRef<number>();

    useEffect(() => {
        const animate = () => {
            cursorState.current.x += (mousePos.current.x - cursorState.current.x) * LERP_FACTOR;
            cursorState.current.y += (mousePos.current.y - cursorState.current.y) * LERP_FACTOR;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${cursorState.current.x}px, ${cursorState.current.y}px, 0) translate3d(-50%, -50%, 0) scale(${cursorState.current.scale})`;
            }

            let prevPos = { ...cursorState.current };
            trailStates.current.forEach((dotState, index) => {
                dotState.x += (prevPos.x - dotState.x) * LERP_FACTOR;
                dotState.y += (prevPos.y - dotState.y) * LERP_FACTOR;
                
                if (trailRefs.current[index]?.current) {
                    const dx = prevPos.x - dotState.x;
                    const dy = prevPos.y - dotState.y;
                    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    const el = trailRefs.current[index].current!;
                    el.style.width = `${distance}px`;
                    el.style.transform = `translate3d(${dotState.x}px, ${dotState.y}px, 0) rotate(${angle}deg)`;
                }
                prevPos = { ...dotState };
            });

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            mousePos.current = { x: clientX, y: clientY };

            const target = (e.target as HTMLElement).closest<HTMLElement>('.cursor-hover-target');

            if (target) {
                if (lastHovered.current !== target) {
                    lastHovered.current?.classList.remove('cursor-active');
                    target.classList.add('cursor-active');
                    lastHovered.current = target;
                }
                const rect = target.getBoundingClientRect();
                target.style.setProperty('--cursor-x', `${clientX - rect.left}px`);
                target.style.setProperty('--cursor-y', `${clientY - rect.top}px`);

                cursorState.current.scale = 1.5;
                if (cursorRef.current) {
                     cursorRef.current.style.boxShadow = '0 0 20px 5px rgba(0, 196, 106, 0.5)';
                }
                trailRefs.current.forEach(ref => {
                    if (ref.current) ref.current.style.backgroundColor = 'rgba(0, 196, 106, 0.7)';
                });
            } else {
                if (lastHovered.current) {
                    lastHovered.current.classList.remove('cursor-active');
                    lastHovered.current = null;
                }
                
                cursorState.current.scale = 1;
                if (cursorRef.current) {
                    cursorRef.current.style.boxShadow = '0 0 15px 3px rgba(0, 196, 106, 0.5)';
                }
                trailRefs.current.forEach(ref => {
                    if (ref.current) ref.current.style.backgroundColor = 'rgba(0, 196, 106, 0.4)';
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (lastHovered.current) {
                lastHovered.current.classList.remove('cursor-active');
            }
        };
    }, []);

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            <div 
                ref={cursorRef} 
                className="fixed top-0 left-0 w-4 h-4 rounded-full z-[9999] pointer-events-none transition-transform,box-shadow duration-200 ease-out bg-primary"
                style={{ 
                    willChange: 'transform, box-shadow',
                    boxShadow: '0 0 15px 3px rgba(0, 196, 106, 0.5)'
                }}
            />
            {trailRefs.current.map((ref, index) => (
                <div
                    key={index}
                    ref={ref}
                    className="fixed top-0 left-0 h-0.5 rounded-full pointer-events-none transition-colors duration-200 ease-out"
                    style={{
                        backgroundColor: 'rgba(0, 196, 106, 0.4)',
                        willChange: 'transform, width',
                        transformOrigin: '0 50%',
                        zIndex: 9998 - index,
                        opacity: 1 - (index / TRAIL_COUNT) * 0.8,
                    }}
                />
            ))}
        </>
    );
};

export default CustomCursor;