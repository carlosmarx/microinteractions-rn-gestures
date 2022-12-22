import { Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

import { styles } from "./style";

export default function Rotation() {

    const rotation = useSharedValue(0);
    const doubleTapActive = useSharedValue(0)

    const onHandleDoubleTap = Gesture
    .Tap()
    .numberOfTaps(2)
    .onStart(() => {
        rotation.value = withSpring(rotation.value = 0);
    })

    const handleRotataionGesture = Gesture
    .Rotation()
    .onUpdate((e) => {
        rotation.value = e.rotation;
    })
   
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{  rotateZ: `${(rotation.value / Math.PI) * 180}deg` }]
    }));

    return (
        <View style={styles.container}>
            <GestureDetector gesture={onHandleDoubleTap}>
                <GestureDetector gesture={handleRotataionGesture}>
                    <Animated.View style={[styles.box, animatedStyle]}>
                        <Text style={styles.text}>Rotation</Text>
                    </Animated.View>
                </GestureDetector>
            </GestureDetector>
        </View>
    )
}