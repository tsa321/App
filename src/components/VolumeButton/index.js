import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import Hoverable from '@components/Hoverable';
import Icon from '@components/Icon';
import * as Expensicons from '@components/Icon/Expensicons';
import {useVolumeContext} from '@components/VideoPlayerContexts/VolumeContext';
import styles from '@styles/styles';

const propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.objectOf(PropTypes.any).isRequired,
};

const defaultProps = {};

function ProgressBar({style}) {
    const {updateVolume, volume} = useVolumeContext();
    const [sliderHeight, setSliderHeight] = useState(1);

    const onSliderLayout = (e) => {
        setSliderHeight(e.nativeEvent.layout.height);
    };

    const getVolumeIcon = () => {
        if (volume.value === 0) {
            return Expensicons.Mute;
        }
        if (volume.value <= 0.5) {
            return Expensicons.VolumeLow;
        }
        return Expensicons.VolumeHigh;
    };

    const pan = Gesture.Pan().onChange((event) => {
        const val = Math.floor((1 - event.y / sliderHeight) * 100) / 100;
        volume.value = Math.min(Math.max(val, 0), 1);
        updateVolume(volume.value);
    });

    const progressBarStyle = useAnimatedStyle(() => ({height: `${volume.value * 100}%`}));

    return (
        <Hoverable>
            {(isHovered) => (
                <Animated.View style={[styles.videoIconButton, style]}>
                    {isHovered && (
                        <View style={[styles.volumeSliderContainer]}>
                            <GestureDetector gesture={pan}>
                                <Animated.View
                                    style={[styles.volumeSliderOverlay]}
                                    onLayout={onSliderLayout}
                                >
                                    <Animated.View style={[styles.volumeSliderFill, progressBarStyle]} />
                                </Animated.View>
                            </GestureDetector>
                        </View>
                    )}

                    <Icon
                        src={getVolumeIcon()}
                        fill="white"
                        small
                    />
                </Animated.View>
            )}
        </Hoverable>
    );
}

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
