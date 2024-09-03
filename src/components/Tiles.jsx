import React, { useEffect } from 'react'
import "./Tiles.css";

const Tiles = () => {
    useEffect(() => {
        const grid = document.querySelector(".grid-container");
        let count = 300;
        if (window.innerWidth < 1700) {
            count = 1800;
        }
        for (let i = 0; i < count; i++) {
            const div = document.createElement("div");
            div.classList.add("tile");
            grid.appendChild(div);
        }

    }, []);
    return (
        <div className="grid-wrapper absolute top-0 left-0">
            <div className="grid-container"></div>
        </div>
    )
}

export default Tiles