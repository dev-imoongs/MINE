import { useCallback, useState } from 'react';

export const useToggle = (initialToggleState = false) => {
    const [state, setState] = useState(initialToggleState);

    const toggle = useCallback(() => {
        setState((prev) => !prev);
    }, []);

    return [state, toggle];
};
