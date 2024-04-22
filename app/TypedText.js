'use client'

import { useEffect } from 'react';
import Typed from 'typed.js';

export default function TypedText() {
    useEffect(() => {
        // Initialize Typed.js
        const typed = new Typed('#typed-text', {
            strings: ['React', 'Javascript', 'HTML', 'CSS', 'NodeJS', 'Express', 'Bootstrap', 'Tailwind' , 'SQL'],
            typeSpeed: 100, // Adjust typing speed as needed
            backSpeed: 50,
            loop: true, // Set to true for continuous looping
            cursorChar: "_",
        });

        // Cleanup function to destroy Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div class="mt-10 inline">
            <span id="typed-text" class="font-mono text-6xl"></span>  
        </div>
            
    )
}