import React from 'react';
import OnboardingScreen from '@pages/OnboardingScreen';
import BaseOnboardingPurpose from './BaseOnboardingPurpose';
import type {OnboardingPurposeProps} from './types';

function OnboardingPurpose({...rest}: OnboardingPurposeProps) {
    return (
        <OnboardingScreen>
            <BaseOnboardingPurpose
                shouldUseNativeStyles={false}
                shouldEnableMaxHeight
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...rest}
            />
        </OnboardingScreen>
    );
}

OnboardingPurpose.displayName = 'OnboardingPurpose';
export default OnboardingPurpose;
