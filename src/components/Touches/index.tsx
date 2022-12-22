import { View, Pressable, Text } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, interpolateColor } from "react-native-reanimated";
import { styles } from "./style";

export default function Touches() {

    const position = useSharedValue(100)
    const doubleTapActive = useSharedValue(0)

    const onHandleDoubleTap = Gesture
    .Tap()
    .numberOfTaps(2)
    .onStart(() => {
        doubleTapActive.value = withTiming(doubleTapActive.value === 0 ? 1 : 0, { duration: 500 });
    })

    function onHandlePressIn() {
        position.value = withSpring(150);
    }

    function onHandlePressOut() {
        position.value = withSpring(100);
    }

    const animatedStyle = useAnimatedStyle(() => ({
        width: position.value,
        height: position.value,
        backgroundColor: interpolateColor(doubleTapActive.value, [0, 1], ['#8527e5', '#0bb17a'])
    }));

    return (
        <View style={styles.container}>
            <GestureDetector gesture={onHandleDoubleTap}>
                <Pressable onPressIn={onHandlePressIn} onPressOut={onHandlePressOut} >
                    <Animated.View style={[styles.box, animatedStyle]}>
                        <Text style={styles.text}>Tap and Double tap</Text>
                    </Animated.View>
                </Pressable>
            </GestureDetector>
        </View>
    )
}