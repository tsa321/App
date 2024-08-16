import {useIsFocused, useRoute} from '@react-navigation/native';
import FocusTrap from 'focus-trap-react';
import React, {useMemo, useEffect, useRef} from 'react';
import BOTTOM_TAB_SCREENS from '@components/FocusTrap/BOTTOM_TAB_SCREENS';
import sharedTrapStack from '@components/FocusTrap/sharedTrapStack';
import TOP_TAB_SCREENS from '@components/FocusTrap/TOP_TAB_SCREENS';
import WIDE_LAYOUT_INACTIVE_SCREENS from '@components/FocusTrap/WIDE_LAYOUT_INACTIVE_SCREENS';
import useWindowDimensions from '@hooks/useWindowDimensions';
import canFocusInputOnScreenFocus from '@libs/canFocusInputOnScreenFocus';
import CONST from '@src/CONST';
import type FocusTrapProps from './FocusTrapProps';

function FocusTrapForScreen({children, focusTrapSettings}: FocusTrapProps) {
    const isFocused = useIsFocused();
    const route = useRoute();
    const {isSmallScreenWidth} = useWindowDimensions();
    const activeElement = useRef();

    const isActive = useMemo(() => {
        if (typeof focusTrapSettings?.active !== 'undefined') {
            return focusTrapSettings.active;
        }
        // Focus trap can't be active on bottom tab screens because it would block access to the tab bar.
        if (BOTTOM_TAB_SCREENS.find((screen) => screen === route.name)) {
            return false;
        }

        // in top tabs only focus trap for currently shown tab should be active
        if (TOP_TAB_SCREENS.find((screen) => screen === route.name)) {
            return isFocused;
        }

        // Focus trap can't be active on these screens if the layout is wide because they may be displayed side by side.
        if (WIDE_LAYOUT_INACTIVE_SCREENS.includes(route.name) && !isSmallScreenWidth) {
            return false;
        }
        return true;
    }, [isFocused, isSmallScreenWidth, route.name, focusTrapSettings?.active]);

    return (
        <FocusTrap
            active={isActive}
            paused={!isFocused}
            containerElements={focusTrapSettings?.containerElements?.length ? focusTrapSettings.containerElements : undefined}
            focusTrapOptions={{
                onActivate: () => {
                    activeElement.current = document?.activeElement;
                    activeElement?.current?.blur();
                },
                trapStack: sharedTrapStack,
                allowOutsideClick: true,
                fallbackFocus: document.body,
                delayInitialFocus: CONST.ANIMATED_TRANSITION,
                onDeactivate: () => {
                    activeElement?.current?.focus();
                },
                initialFocus: (focusTrapContainers) => {
                    return false;
                },
                setReturnFocus: (element) => {
                    return false;
                },
                ...(focusTrapSettings?.focusTrapOptions ?? {}),
            }}
        >
            {children}
        </FocusTrap>
    );
}

FocusTrapForScreen.displayName = 'FocusTrapForScreen';

export default FocusTrapForScreen;
