import type {StackScreenProps} from '@react-navigation/stack';
import type ChildrenProps from '@src/types/utils/ChildrenProps';
import type SCREENS from '@src/SCREENS';

type OnboardingScreenProps = Record<string, unknown> & StackScreenProps<OnboardingModalNavigatorParamList, typeof SCREENS.ONBOARDING.PURPOSE>;

export type {OnboardingScreenProps};
