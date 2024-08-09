import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';

export default function App() {
  const [visible, setVisible] = useState(false);
  const opacity = useSharedValue(0);
 
  const handlePress = () => {
    if (visible === false){
      setVisible(!visible);
    opacity.value = withTiming(visible ? 0 : 1, {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    })}
    else {
        setVisible(visible);
      opacity.value = withTiming(visible ? 1 : 0, {
        duration: 500,
        easing: Easing.inOut(Easing.ease),
      })
    }
  }

  const SecondanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Button title="Toggle Blur" style={{position: "absolute", alignSelf: "center",}} onPress={handlePress} />
      {visible && (
        <Animated.View style={[styles.container, animatedStyle]}>
          <BlurView intensity={100} style={[StyleSheet.absoluteFill]} />
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Полупрозрачный черный фон
  },
});

