import React from 'react';
import { SafeAreaView } from 'react-native';
import { TareaScreen } from './src/screens/TareaScreen';
// import { FlexScreen } from './src/screens/FlexScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

export const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1, backgroundColor: '#28425B'}}>
        {/* <HolaMundoScreen /> */}
        {/* <CounterScreen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionesScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
