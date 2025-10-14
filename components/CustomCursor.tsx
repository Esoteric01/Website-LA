import React, { useEffect, useRef } from 'react';

const TRAIL_COUNT = 10;
const LERP_FACTOR = 0.2; // Determines the smoothness and delay of the trail

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

    // Animation Loop for smooth movement
    useEffect(() => {
        const animate = () => {
            // Smoothly move the main cursor towards the mouse position
            cursorState.current.x += (mousePos.current.x - cursorState.current.x) * LERP_FACTOR;
            cursorState.current.y += (mousePos.current.y - cursorState.current.y) * LERP_FACTOR;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${cursorState.current.x}px, ${cursorState.current.y}px, 0) translate3d(-50%, -50%, 0) scale(${cursorState.current.scale})`;
            }

            // Smoothly move each trail element towards the one in front of it
            let prevPos = { ...cursorState.current };
            trailStates.current.forEach((dotState) => {
                dotState.x += (prevPos.x - dotState.x) * LERP_FACTOR;
                dotState.y += (prevPos.y - dotState.y) * LERP_FACTOR;
                prevPos = { ...dotState };
            });

            // Apply styles to trail DOM elements
            trailRefs.current.forEach((ref, index) => {
                if (ref.current) {
                    ref.current.style.transform = `translate3d(${trailStates.current[index].x}px, ${trailStates.current[index].y}px, 0) translate3d(-50%, -50%, 0)`;
                }
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

    // Mouse Move Event Listener for state changes
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            mousePos.current = { x: clientX, y: clientY };

            const target = (e.target as HTMLElement).closest<HTMLElement>('.cursor-hover-target');

            if (target) {
                // Handle spotlight effect
                if (lastHovered.current !== target) {
                    lastHovered.current?.classList.remove('cursor-active');
                    target.classList.add('cursor-active');
                    lastHovered.current = target;
                }
                const rect = target.getBoundingClientRect();
                target.style.setProperty('--cursor-x', `${clientX - rect.left}px`);
                target.style.setProperty('--cursor-y', `${clientY - rect.top}px`);

                // Update cursor/trail styles for hover state
                cursorState.current.scale = 2;
                if (cursorRef.current) {
                    cursorRef.current.style.backgroundColor = 'rgba(0, 196, 106, 0.5)';
                }
                trailRefs.current.forEach(ref => {
                    if (ref.current) ref.current.style.backgroundColor = 'rgba(0, 196, 106, 0.5)';
                });
            } else {
                // Cleanup when not hovering
                if (lastHovered.current) {
                    lastHovered.current.classList.remove('cursor-active');
                    lastHovered.current = null;
                }
                
                // Update cursor/trail styles for default state
                cursorState.current.scale = 1;
                if (cursorRef.current) {
                    cursorRef.current.style.backgroundColor = 'rgba(161, 161, 161, 0.5)';
                }
                trailRefs.current.forEach(ref => {
                    if (ref.current) ref.current.style.backgroundColor = 'rgba(161, 161, 161, 0.5)';
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
                className="fixed top-0 left-0 w-5 h-5 rounded-full z-[9999] pointer-events-none transition-transform,background-color duration-200 ease-out"
                style={{ willChange: 'transform', backgroundColor: 'rgba(161, 161, 161, 0.5)' }}
            />
            {trailRefs.current.map((ref, index) => {
                const size = Math.max(16 - index * 1.5, 2);
                return (
                    <div
                        key={index}
                        ref={ref}
                        className="fixed top-0 left-0 rounded-full pointer-events-none transition-colors duration-200 ease-out"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            backgroundColor: 'rgba(161, 161, 161, 0.5)',
                            willChange: 'transform',
                            zIndex: 9998 - index, // Stagger z-index
                        }}
                    />
                );
            })}
        </>
    );
};

export default CustomCursor;