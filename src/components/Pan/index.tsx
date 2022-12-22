import { Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

import { styles } from "./style";

export default function Pan() {

    const position = useSharedValue(0);

    const handlePanGesture = Gesture
    .Pan()
    .minPointers(2)
    .onUpdate((e) => {
        position.value = e.translationX;
    })
   
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{  translateX: position.value }] 
    }));

    return (
        <View style={styles.container}>
            <GestureDetector gesture={handlePanGesture}>
                <Animated.View style={[styles.box, animatedStyle]}>
                    <Text style={styles.text}>Pan</Text>
                </Animated.View>
            </GestureDetector>
        </View>
    )
}