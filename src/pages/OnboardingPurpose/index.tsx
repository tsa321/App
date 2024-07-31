import React from 'react';
import {View} from 'react-native';
import useThemeStyles from '@hooks/useThemeStyles';
import OnboardingScreen from '@pages/OnboardingScreen';
import BaseOnboardingPurpose from './BaseOnboardingPurpose';
import type {OnboardingPurposeProps} from './types';

function OnboardingPurpose({...rest}: OnboardingPurposeProps) {
    const styles = useThemeStyles();

    return (
        <OnboardingScreen>
            <View style={styles.h100}>
                <BaseOnboardingPurpose
                    shouldUseNativeStyles={false}
                    shouldEnableMaxHeight={false}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...rest}
                />
            </View>
        </OnboardingScreen>
    );
}

OnboardingPurpose.displayName = 'OnboardingPurpose';
export default OnboardingPurpose;
