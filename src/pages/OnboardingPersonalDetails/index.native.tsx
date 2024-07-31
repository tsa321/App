import React from 'react';
import OnboardingScreen from '@pages/OnboardingScreen';
import BaseOnboardingPersonalDetails from './BaseOnboardingPersonalDetails';
import type {OnboardingPersonalDetailsProps} from './types';

function OnboardingPersonalDetails({...rest}: OnboardingPersonalDetailsProps) {
    return (
        <OnboardingScreen>
            <BaseOnboardingPersonalDetails
                shouldUseNativeStyles
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...rest}
            />
        </OnboardingScreen>
    );
}

OnboardingPersonalDetails.displayName = 'OnboardingPersonalDetails';

export default OnboardingPersonalDetails;
