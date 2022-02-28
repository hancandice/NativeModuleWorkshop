import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import ToastModule from './Toast';

function App() {
  const onPress = () => {
    ToastModule.show('Android Toast in React Native', ToastModule.SHORT);
  };
  return (
    <SafeAreaView>
      <Button title="Press me" onPress={onPress} />
    </SafeAreaView>
  );
}

export default App;
