import {useCallback, useRef, useState} from 'react';
import type {SubStepProps, UseSubStep} from './types';

/**
 * This hook ensures uniform handling of components across different screens, enabling seamless integration and navigation through sub steps of the VBBA flow.
 */
export default function useSubStep<TProps extends SubStepProps>({bodyContent, onFinished, startFrom = 0}: UseSubStep<TProps>) {
    const [screenIndex, setScreenIndex] = useState(startFrom);
    const isEditing = useRef(false);

    const prevScreen = useCallback(() => {
        const prevScreenIndex = screenIndex - 1;

        if (prevScreenIndex < 0) {
            return;
        }

        setScreenIndex(prevScreenIndex);
    }, [screenIndex]);

    const nextScreen = useCallback(() => {
        if (isEditing.current) {
            isEditing.current = false;

            setScreenIndex(bodyContent.length - 1);

            return;
        }

        const nextScreenIndex = screenIndex + 1;

        if (nextScreenIndex === bodyContent.length) {
            onFinished();
        } else {
            setScreenIndex(nextScreenIndex);
        }
    }, [screenIndex, bodyContent.length, onFinished]);

    const moveTo = useCallback((step: number) => {
        isEditing.current = true;
        setScreenIndex(step);
    }, []);

    const resetScreenIndex = useCallback(() => {
        setScreenIndex(0);
    }, []);

    const goToTheLastStep = useCallback(() => {
        isEditing.current = false;
        setScreenIndex(bodyContent.length - 1);
    }, [bodyContent]);

    return {componentToRender: bodyContent[screenIndex], isEditing: isEditing.current, screenIndex, prevScreen, nextScreen, moveTo, resetScreenIndex, goToTheLastStep};
}
