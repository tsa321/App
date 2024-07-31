import {useRoute, useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import ROUTES from '@src/ROUTES';
import * as Welcome from '@userActions/Welcome';

function OnboardingScreen({children}: OnboardingPersonalDetailsProps) {
    const route = useRoute();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            const path = route?.path?.at(0) === '/' ? route.path.substring(1) : route?.path;
            Welcome.setOnboardingLastVisitedPath(path);
        }
    }, [route, isFocused]);

    return children;
}

OnboardingScreen.displayName = 'OnboardingScreen';

export default OnboardingScreen;
