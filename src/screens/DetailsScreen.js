import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { BlurView } from 'expo-blur';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View, 
  TouchableOpacity
} from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useDerivedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  ReduceMotion,
  SharedValue,
} from 'react-native-reanimated';

import { Sstyles } from "../../styles/style";

export default function DetailsScreen() {

  const opacity = useSharedValue(0);
  const Height = Dimensions.get('window').height; 
  const Width = Dimensions.get('window').width; 
  const LevyiPerev = Width * 0.2;
  const verheight = Height / 7;
  const TapBackCheker = useSharedValue(false);
  const ClosedTop = Height * -0.2;
  const ClosedBottom = Height * 0.3;
  const positionTop = useSharedValue(0);
  const positionBotton = useSharedValue(0);
  const positionLeft = useSharedValue(0);
  const firstSheet = useSharedValue(true);
  const zIndex = useSharedValue(0);

  const TapBack = Gesture.Tap()
  .numberOfTaps(2)
  .onStart(() => {
    console.log('TapBack');
    TapBackCheker.value = true;
    if (TapBackCheker.value === true){
      positionTop.value = withTiming(ClosedTop, {
        duration: 600,
        easing: Easing.elastic(1),
        reduceMotion: ReduceMotion.System,
      });
      positionBotton.value = withTiming(ClosedBottom, {
        duration: 600,
        easing: Easing.elastic(1),
        reduceMotion: ReduceMotion.System,
      });
      positionLeft.value = withTiming(LevyiPerev, {
        duration: 600,
        easing: Easing.elastic(1),
        reduceMotion: ReduceMotion.System,
      });
      TapBackCheker.value === false;
    };
  });

  const BackBattomhandlePress = () => {
    positionTop.value = withTiming(0, {
      duration: 600,
      easing: Easing.elastic(1),
      reduceMotion: ReduceMotion.System,
    });
    positionBotton.value = withTiming(0, {
      duration: 600,
      easing: Easing.elastic(1),
      reduceMotion: ReduceMotion.System,
    });
    positionLeft.value = withTiming(0, {
      duration: 600,
      easing: Easing.elastic(1),
      reduceMotion: ReduceMotion.System,
    });
    TapBackCheker.value === false;
  };

  const PanTop = Gesture.Pan()
    .onUpdate(() => {
      positionTop.value = firstSheet.value ? 0 : verheight;
    })

    .onEnd((e) => {
      if (e.translationY > Height / 3 || e.velocityY > 350) {
        zIndex.value = 2;
        opacity.value = withTiming(1, {
          duration: 600,
          easing: Easing.inOut(Easing.ease),
    }); 
        positionTop.value = withTiming(verheight, {
          duration: 600,
          easing: Easing.elastic(1),
          reduceMotion: ReduceMotion.System,
        });
        firstSheet.value = false;
      }else {
        opacity.value = withTiming(0, {
          duration: 600,
          easing: Easing.inOut(Easing.ease),
    }); 
        positionTop.value = withTiming(0, {
          duration: 600,
          easing: Easing.elastic(1),
          reduceMotion: ReduceMotion.System,
        });
        firstSheet.value = true;
      }
    });
  
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: positionTop.value }],
  }));

  const SecondAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: positionBotton.value }],
  }));

  const TreriiAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: positionLeft.value }],
  }));
  
  const handlePress = () => {
    if (firstSheet.value === true) {
      zIndex.value = 2;
      opacity.value = withTiming(1, {
        duration: 600,
        easing: Easing.inOut(Easing.ease),
      });
      positionTop.value = withTiming(verheight, {
        duration: 600,
        easing: Easing.elastic(1),
        reduceMotion: ReduceMotion.System,
      });
      firstSheet.value = false;
    } else {
      opacity.value = withTiming(0, {
        duration: 600,
        easing: Easing.inOut(Easing.ease),
      });
      positionTop.value = withTiming(0, {
        duration: 600,
        easing: Easing.elastic(1),
        reduceMotion: ReduceMotion.System,
      });
      firstSheet.value = true;
    }
  };
  
  useDerivedValue(() => {
    if (firstSheet.value === false && positionTop.value === verheight) {
      // лист открылся 
    } else if (firstSheet.value === true && positionTop.value === 0) {
      // Анимация завершена, и первый лист закрыт
      zIndex.value = 0;
    }
  }, [firstSheet.value, positionTop.value]);
  
  const SecondanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const BackToch = Gesture.Tap()
  .onStart(() => {
    opacity.value = withTiming(0, {
      duration: 600,
      easing: Easing.inOut(Easing.ease),
    });
    positionTop.value = withTiming(0, {
      duration: 600,
      easing: Easing.elastic(1),
      reduceMotion: ReduceMotion.System,
    });
    firstSheet.value = true;
  })

  return (
    <GestureHandlerRootView style={Sstyles.Container}>
      <Image style ={{...StyleSheet.absoluteFillObject}} source={require("../../assets/Map.jpg")}/>
    <Animated.View style={[Sstyles.ContTopSheet, animatedStyle]}>
      <GestureDetector gesture={PanTop}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View style={Sstyles.Desplay}>
            <View style={Sstyles.ContainerMenu}>
              <TouchableOpacity onPress={handlePress} style={Sstyles.ImgPad}>
              <Entypo name="menu" size={32} style={Sstyles.Colubia} />
              </TouchableOpacity>
              <View style={Sstyles.Logo}>
                <Image source={require("../../assets/Logo.png")} />
              </View>
              <View style={Sstyles.ContLanguage}>
                <View style={Sstyles.Profile}>

                </View>
              </View>
            </View>
          </View>
        </View>
      </GestureDetector>
    </Animated.View>
      <Animated.View style={[Sstyles.overlay, SecondanimatedStyle, {zIndex}]}>
        <GestureDetector gesture={ BackToch }>
          <BlurView intensity={100} style={StyleSheet.absoluteFill} />
        </GestureDetector>
      </Animated.View>
      <GestureDetector gesture={TapBack}>
        <View style={{...StyleSheet.absoluteFillObject}}/>
      </GestureDetector>
      <TouchableOpacity onPress={BackBattomhandlePress}>
      <Animated.View style={[Sstyles.BackBatton, TreriiAnimatedStyle]}>
      <AntDesign name="back" size={35} color="black" />
      </Animated.View>
      </TouchableOpacity>
            <Animated.View  style={[Sstyles.BottomSheet, Sstyles.BottomPaddingSecond, SecondAnimatedStyle]}>
              <View style = {Sstyles.Search}>
                <View style = {Sstyles.ContMapmini}>
                  <Image style = {Sstyles.MapMini} source = {require("../../assets/MapMini.png")}/>
                </View>
                <View style = {Sstyles.ConteinerText}>
                <View style = {Sstyles.ContText}>
                  <Text style = {Sstyles.Adres}>Адрес:</Text>
                  <Text style = {Sstyles.Podezd}>Подъезд:</Text>
                  <Text style = {Sstyles.Opisanie}>Описание:</Text>
                </View>
                <View style = {Sstyles.ContText2}>
                  <Text style = {Sstyles.Adres2}>пр Абая 52/1</Text>
                  <Text style = {Sstyles.Podezd2}>4</Text>
                </View>
                <View style = {Sstyles.ContText3}>
                  <Text style = {Sstyles.Summa}>Сумма:</Text>
                  <Text style = {Sstyles.Vrema}>Время:</Text>
                </View>
                <View style = {Sstyles.ContText4}>
                  <Text style = {Sstyles.Dengi}>1500 тг</Text>
                  <Text style = {Sstyles.Vrema2}>2 час</Text>
                </View>
                </View>
                <View style = {Sstyles.ContOpisanie}>
                  <Text style = {Sstyles.Opisanie2}>Покасить газон на Покасить газон на заднем дворgdfgdfg</Text>
                </View>
              </View >
            </Animated.View>
        <Animated.View style = {[Sstyles.ContZakazat, Sstyles.ColorZakazat, SecondAnimatedStyle]}>
          <Text style = {Sstyles.TextZakazat}>ОТМЕНИТЬ</Text>
        </Animated.View>
      </GestureHandlerRootView>
  );
}





