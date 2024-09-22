import { useState, useEffect, useRef } from 'react';

export const useDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const toggle = () => setIsOpen((prev) => !prev);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            close();
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return { ref, isOpen, toggle, open, close };
}