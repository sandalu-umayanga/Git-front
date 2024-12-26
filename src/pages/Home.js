import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

export default function Home() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div 
            className="home-container" 
            style={{ 
                background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.075), transparent 50%)`
            }}
        >
            <div className="home-content">
                <h1>Welcome to GIS


                </h1>
                <p>Your knowledge of GIS. We provide the best care for you and your loved ones.</p>
            </div>
        </div>
    );
}
