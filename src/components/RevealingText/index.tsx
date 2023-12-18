import React, { useEffect } from 'react';
import anime from 'animejs';
import "./styles.css"

const RevealingText = ({text} : {text : string}) => {
    useEffect(() => {
        anime.timeline({ loop: false })
            .add({
                targets: '.letter',
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1200,
                delay: (el, i) => 500 + 30 * i
            });
    }, []);

    return (
        <h1 className='myName'>
            {text.split('').map((letter, index) => (
                <span key={index} className="letter" style={{ opacity: 0 }}>{letter}</span>
            ))}
        </h1>
    );
};

export default RevealingText;
