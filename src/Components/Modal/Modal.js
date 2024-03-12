import React, { useEffect } from "react";

export default function Modal({children,onClose}){

    useEffect(() => {
        window.addEventListener('keydown',handleKeyDown);

        return () => {
            window.removeEventListener('keydown',handleKeyDown)
        }
    })

    function handleKeyDown (e) {
        if(e.code === 'Escape'){
            onClose()
        }
    }

    return(
        <div className="Overlay">
            <button 
            type="button"
            onClick={onClose}
            className="Close-modal">Close</button>
            <div className="Modal">
                {children}
            </div>
        </div>
    )
}