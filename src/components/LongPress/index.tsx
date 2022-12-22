import { Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

import { styles } from "./style";

export default function LongPress() {

    const size = useSharedValue(100);

    const handleLongPressGesture = Gesture
    .LongPress()
    .onTouchesDown(() => {
        size.value = withTiming(size.value + 200, { duration: 500 });
    })
    .onEnd((e, success) => {
        if(success) {
            console.log(`Duração do long touch: ${e.duration}ms`)
            size.value = withTiming(100, { duration: 500 });
        }
    });
    const animatedStyle = useAnimatedStyle(() => ({
        width: size.value,
        height: size.value,
    }));

    return (
        <View style={styles.container}>
            <GestureDetector gesture={handleLongPressGesture}>
                <Animated.View style={[styles.box, animatedStyle]}>
                    <Text style={styles.text}>Longpress</Text>
                </Animated.View>
            </GestureDetector>
        </View>
    )
}