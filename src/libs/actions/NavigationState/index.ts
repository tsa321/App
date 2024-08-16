import navigationRef from '@libs/Navigation/navigationRef';
import Onyx from 'react-native-onyx';
import ONYXKEYS from '@src/ONYXKEYS';

let lastNavigationState;
Onyx.connect({
    key: ONYXKEYS.LAST_NAVIGATION_STATE,
    callback: (value) => {
        if (!value) {
            return;
        }
        lastNavigationState = value;
    },
});


function getLastNavigationState() {
    return lastNavigationState;
}

function updateLastNavigationState(state) { 
    // We can optimize by saving only the useful part of the navigation state
    Onyx.set(ONYXKEYS.LAST_NAVIGATION_STATE, state);
}

export {getLastNavigationState, updateLastNavigationState}; 
