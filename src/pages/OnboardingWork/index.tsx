import React from 'react';
import {View} from 'react-native';
import useThemeStyles from '@hooks/useThemeStyles';
import OnboardingScreen from '@pages/OnboardingScreen';
import BaseOnboardingWork from './BaseOnboardingWork';
import type {OnboardingWorkProps} from './types';

function OnboardingWork({...rest}: Omit<OnboardingWorkProps, 'shouldUseNativeStyles'>) {
    const styles = useThemeStyles();
    return (
        <OnboardingScreen>
            <View style={styles.h100}>
                <BaseOnboardingWork
                    shouldUseNativeStyles={false}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...rest}
                />
            </View>
        </OnboardingScreen>
    );
}

OnboardingWork.displayName = 'OnboardingPurpose';

export default OnboardingWork;
