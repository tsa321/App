import React from 'react';
import BaseOnboardingWork from './BaseOnboardingWork';
import OnboardingScreen from '@pages/OnboardingScreen';
import type {OnboardingWorkProps} from './types';

function OnboardingWork({...rest}: Omit<OnboardingWorkProps, 'shouldUseNativeStyles'>) {
    return (
        <OnboardingScreen>
            <BaseOnboardingWork
                shouldUseNativeStyles
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...rest}
            />
        </OnboardingScreen>
    );
}

OnboardingWork.displayName = 'OnboardingWork';

export default OnboardingWork;
