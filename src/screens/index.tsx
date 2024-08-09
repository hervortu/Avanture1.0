import React from 'react';
import axios from 'axios';
import { BlurView } from 'expo-blur';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View, 
  TouchableOpacity
} from 'react-native';
const { width } = Dimensions.get('window');

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

import data, { DataItem, locationImage } from './data';

const fetchOrders = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/orders');
    console.log("porno"); // ['Order1', 'Order2', 'Order3']
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};

const duration = 300;
const _size = width * 0.9;
const layout = {
  borderRadius: 16,
  width: _size,
  height: _size * 1.27,
  spacing: 12,
  cardsGap: 22,
};
const colors = {
  primary: '#6667AB',
  light: '#ffff',
  dark: '#111',
};

// Define how many items you'd like to make visible
const maxVisibleItems = 3;

type CardProps = {
  totalLength: number;
  activeIndex: SharedValue<number>;
  index: number;
  info: DataItem;
};

function Card({ info, index, totalLength, activeIndex }: CardProps) {
  const stylez = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      zIndex: totalLength - index,
      opacity: interpolate(
        activeIndex.value,
        [index - 1, index, index + 1],
        [1 - 1 / maxVisibleItems, 1, 1],
      ),
      transform: [
        {
          translateY: interpolate(
            activeIndex.value,
            [index - 1, index, index + 1],
            [-layout.cardsGap, 0, layout.height - layout.cardsGap * -5],
            {
              extrapolateRight: Extrapolation.EXTEND,
            },
          ),
        },
        {
          scale: interpolate(
            activeIndex.value,
            [index - 1, index, index + 1],
            [0.95, 1, 1],
          ),
        },
      ],
    };
  });
  
  return (
    <Animated.View style={[styles.card, Sstyles.Colorada, stylez]}>
      <Text
        style={[
          Sstyles.Colubia,
          {
            position: 'absolute',
            top: -layout.spacing,
            right: layout.spacing,
            fontSize: 102,
            color: colors.primary,
            opacity: 0.05,
          },
        ]}
      >
        {index}
      </Text>
      <View style={styles.cardContent}>
        <Text style={Sstyles.Title}>{info.type}</Text>
        <View style={styles.row}>
          <Entypo name="clock" size={16} style={Sstyles.Colubia} />
          <Text style={Sstyles.Colubia}>
            {info.from} - {info.to}
          </Text>
        </View>
        <View style={styles.row}>
          <Entypo name="location" size={16} style={Sstyles.Colubia} />
          <Text style={Sstyles.Colubia}>{info.distance} km</Text>
        </View>
        <View style={styles.row}>
          <Entypo name="suitcase" size={16} style={Sstyles.Colubia} />
          <Text style={Sstyles.Colubia}>{info.role}</Text>
        </View>
      </View>
      <Image source={{ uri: locationImage }} style={styles.locationImage} />
    </Animated.View>
  );
}



export default function Index ({ navigation }) {
  const floatActiveIndex = useSharedValue(0);
  const opacity = useSharedValue(0);
  const Height = Dimensions.get('window').height; 
  const verheight = Height / 7;
  const positionTop = useSharedValue(0);
  const firstSheet = useSharedValue(true);
  const zIndex = useSharedValue(0);
  
  
  const flingUp = Gesture.Fling()
    .direction(Directions.UP)
    .onStart(() => {
      if (floatActiveIndex.value <= 0) {
        floatActiveIndex.value = 0;
        return;
      }
      floatActiveIndex.value = withTiming(floatActiveIndex.value - 1, {
        duration,
      });
    });

  const flingDown = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart(() => {
      if (floatActiveIndex.value === data.length) {
        return;
      }

      floatActiveIndex.value = withTiming(floatActiveIndex.value + 1, {
        duration,
      });
    });

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
    });
  
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: positionTop.value }],
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
      <GestureDetector
        gesture={Gesture.Exclusive(flingUp, flingDown)}
      >
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: layout.cardsGap * 9.25,
            zIndex: 1,
          }}
          pointerEvents="box-none"
        >
          {data.map((c, index) => (
            <Card
              info={c}
              key={c.id}
              index={index}
              totalLength={data.length - 1}
              activeIndex={floatActiveIndex}
            />
          ))}
        </View>
      </GestureDetector>
      <View style={[Sstyles.BottomSheet, Sstyles.BottomPaddingFirst]}>
        <Text style={Sstyles.Colubia}>Описание: покасить гозон на заднем дворе и травку покумекать со мной вы все поняли пидоры проклятые или вам еще раз обьснять предется</Text>
      </View>
        <TouchableOpacity onPress={() => navigation.navigate('Details')} style={Sstyles.ContZakazat}>
          <Text style={Sstyles.TextZakazat}>ПРИНЯТЬ ЗАКАЗ</Text>
        </TouchableOpacity>
      <StatusBar />
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  
  card: {
    borderRadius: layout.borderRadius,
    width: layout.width,
    height: layout.height,
    padding: layout.spacing,
  },

  cardContent: {
    gap: layout.spacing,
    marginBottom: layout.spacing,
  },
  locationImage: {
    flex: 1,
    borderRadius: layout.borderRadius - layout.spacing / 2,
  },
  row: {
    flexDirection: 'row',
    columnGap: layout.spacing / 2,
    alignItems: 'center',
  },
})
