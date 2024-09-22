import { useCallback, useState, useEffect, useRef } from 'react';

export const useToggle = (initialToggleState = false) => {
    const [state, setState] = useState(initialToggleState);

    const toggle = useCallback((e) => {
        e.preventDefault();
        setState((prev) => !prev);
    }, []);

    return [state, toggle];
};
