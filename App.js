import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LongPress from './src/components/LongPress';
import Pan from './src/components/Pan';
import Pinch from './src/components/Pinch';
import Rotation from './src/components/Rotation';
import Touches from './src/components/Touches';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* <Rotation /> */}
      {/* <Pinch /> */}
      <Pan />
      {/* <LongPress /> */}
      {/* <Touches /> */}
    </GestureHandlerRootView>
  );
}

