import { Dimensions, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler";

import { styles } from "./style";

const STARTING_POSITION = 24;
const LIMIT = Dimensions.get("window").width - 124;

export default function Fling() {

    const position = useSharedValue(STARTING_POSITION);

    const directionRight = Gesture
    .Fling()
    .direction(Directions.RIGHT)
    .onStart((e) => {
        position.value = withTiming(LIMIT, { duration: 500 });
    })
    
    const directionLeft = Gesture
    .Fling()
    .direction(Directions.LEFT)
    .onStart((e) => {
        position.value = withTiming(STARTING_POSITION, { duration: 500 });
    })
   
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{  translateX: position.value }]
    }));

    return (
        <View style={styles.container}>
            <GestureDetector gesture={Gesture.Exclusive(directionRight, directionLeft)}>
                <Animated.View style={[styles.box, animatedStyle]}>
                    <Text style={styles.text}>Fling</Text>
                </Animated.View>
            </GestureDetector>
        </View>
    )
}