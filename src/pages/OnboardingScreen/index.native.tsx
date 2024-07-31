import {useIsFocused, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import * as Welcome from '@userActions/Welcome';
import type OnboardingScreenProps from './types';

function OnboardingScreen({children}: OnboardingScreenProps) {
    const route = useRoute();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (!isFocused) {
            return;
        }
        const path = route?.path?.at(0) === '/' ? route.path.substring(1) : route?.path;
        Welcome.setOnboardingLastVisitedPath(path ?? '');
    }, [route, isFocused]);

    return children;
}

OnboardingScreen.displayName = 'OnboardingScreen';

export default OnboardingScreen;
