import { Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

import { styles } from "./style";

export default function Pinch() {

    const scale = useSharedValue(1);

    const handlePinchGesture = Gesture
    .Pinch()
    .onUpdate((e) => {
        scale.value = e.scale;
    })
   
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{  scale: scale.value }]
    }));

    return (
        <View style={styles.container}>
            <GestureDetector gesture={handlePinchGesture}>
                <Animated.View style={[styles.box, animatedStyle]}>
                    <Text style={styles.text}>Pinch</Text>
                </Animated.View>
            </GestureDetector>
        </View>
    )
}