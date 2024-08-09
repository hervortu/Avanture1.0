/*
import React from 'react';
import styled from 'styled-components/native';
import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo } from 'react';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, ViewBase, Image, TextInput, onPress, Button } from 'react-native';


const Header = styled.View`
  height: 100%;
  width: 100%;
  position: relative;
`;

const Despaly = styled.View`
  padding: 50px 17px 0px;
  height: auto;
  width: 100%;
`;

const Container = styled.View`
  flex-direction: row;
  height: 38px;
  width: 100%;
  position: relative;
`;

const ImgPad = styled.View`
  padding: 13px 0px 0px;
  height: 16px;
  width: 22px;
`;

const ContLogo = styled.View`
  flex:1;
  align-items: center;
  height: 38px;
  width: 122px;
`;

const ContMap = styled.View`
  flex: 1;
  padding: 17px 0px 59%;
`;

const ContMenu = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  position: absolute;
  left: 0px;
`;


const ContMenu2 = styled.View`
  background-color:#ececec;
  height:746px;
  width: 100%;
  filter:drop-shadow(0px 0px 4px rgba(0,0,0,1));
  border-radius:29px;
  align-items: center;
`;

const Despaly2 = styled.View`
  flex: 1;
  padding: 0px 17px 0px;
  height: auto;
  width: 100%;
`;

const Contsearch = styled.View`
  padding: 19px 0px 0px;
  width: 100%;
`;


const Search = styled.View`
  background-color:#d9d9d9;
  height:50px;
  width: 100%;
  border-radius:15px;
  flex-direction: row;
`;

const HomeH = styled.View`
  justify-content: center;
  padding-left: 9px;
`;

const LineI = styled.View`
  padding-left: 9px;
`;

const TextCont = styled.View`
  flex: 2;
  justify-content: center;
  padding-left: 9px;
`;

const HText = styled.Text`
  flex-direction: row;
  padding: 15px 0px 17px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.44999998807907104);
  width: 100%;
`;

const InputText = styled.View`
  flex: 1;
`;

const ContPodezd = styled.View`
  flex: 1;
  align-items: flex-end;
  padding-right: 11px;
  justify-content: center;
`;

const PodezdImg = styled.View`
  background-color:#ffffff;
  height:26px;
  width:88px;
  border-radius:10px;
`;

const TextPodezd = styled.View`
  padding: 2px 0px 0px;
  Justify-content: center;
  align-items: center;
  flex: 1;

`;

const Texttt = styled.Text`
  color:rgba(0, 0, 0, 0.5299999713897705);
`;

const ContRectmini1 = styled.View`
  flex: 1;
  padding: 18px 0px 0px;
  width:100%;
  flex-direction: row;
`;

const Rectmini1 = styled.View`
  background-color:#d9d9d9;
  height:50px;
  width:94px;
  border-radius:15px;
  flex-direction: row;
`;

const ContSagat = styled.View`
  padding-left: 8px;
  justify-content: center;
`;

const ImgSet = styled.Image`
  height:27px;
  width: 28px;
  
`;

const ContLine = styled.View`
  padding-left: 4px;
  justify-content: center;
`;

const Chas = styled.View`
  flex: 1;
  padding-left: 9px;
  justify-content: center;
`;

const ChacText = styled.Text`
  color:rgba(0, 0, 0, 0.44999998807907104);
  padding-bottom: 4px;
  font-size:15px;
`;

const ContRectmini23 = styled.View` 
  flex :1;
  height: 50px;
  align-items: center;
`;

const ContRectmini2 = styled.View`
  width: 45%;
  min-width: 91px;
`;

const Rectmini2 = styled.View`
  background-color:#d9d9d9;
  width: 100%;
  border-radius:15px;
  height: 50px;
`;

const ContRectmini3 = styled.View`
  align-items: flex-end;
  height: 50px;
`;

const Rectmini3 = styled.View`
background-color:#d9d9d9;
height:50px;
width:91px;
justify-content: center;
border-radius: 15px;
padding-left: 8px;
flex-direction: row;
`;

const TextChel1 = styled.View`
  height: 50px;
  width: 38px;
  justify-content: center;
  padding-bottom: 3px;
`;

const RectText = styled.Text`
  width: 38px;
  color:rgba(0, 0, 0, 0.44999998807907104);
  font-size: 15px;
`;

const ContLin2 = styled.View`
  width: 1px;
  padding-left: 7px;
`;

const ContMan = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ContContZakazat = styled.View`
  width: 100%;
  padding: 0px 31px 0px;
  position: absolute;
  top: 90.5%;
`;

const ContZakazat = styled.View`
  background-color:#083d77;
height: 45px;
width: 100%;
border-radius:20px;
justify-content: center;
align-items: center;
`;

const TextZakazat = styled.Text`
  font-size:20px;
  color:#ffffff;
  letter-spacing: 3px;
  outline:none;
`;

export default function TabOneScreen(){
const snapPoints = useMemo(() => ["31.5%","55%"],[]);

  return (
    <Header>
    <Despaly>
      <Container>
        <ImgPad>
          <Image source={require("../assets/Menu.png")}/>
        </ImgPad>
        <ContLogo>
          <Image source={require("../assets/Logo.png")} />
        </ContLogo>
        <Text>ru</Text>
        <Text>kz</Text>
      </Container>
    <StatusBar theme="auto" />
    </Despaly>
    <ContMap></ContMap>
    <ContMenu>
        <BottomSheet snapPoints={snapPoints}>
        <Despaly2>
          <Contsearch>
              <Search>
                <HomeH>
                  <Image source={require("../assets/HomeIcon.png")} />
                </HomeH>
                <LineI>
                  <Image source={require("../assets/LineI.png")} />
                </LineI>
                <TextCont>
                  <InputText><TextInput style={{flex: 1}}/></InputText>
                  <HText>Куда заказать ?</HText>
                </TextCont>
                <ContPodezd>
                  <PodezdImg>
                    <TextPodezd>
                      <Texttt>Подъезд</Texttt>
                    </TextPodezd>
                  </PodezdImg>               
                </ContPodezd> 
              </Search>
          </Contsearch>
            <ContRectmini1>
                <Rectmini1>
                  <ContSagat>
                  <ImgSet source={require("../assets/Sagat.png")} />
                  </ContSagat>
                  <ContLine>
                  <Image source={require("../assets/LineI.png")}/>
                </ContLine>
                <Chas>
                  <ChacText>1 час</ChacText>
                </Chas>
                </Rectmini1>
                <ContRectmini23>
                <ContRectmini2>
                <Rectmini2></Rectmini2>
                </ContRectmini2>
                </ContRectmini23>
                <ContRectmini3>
                <Rectmini3>
                  <TextChel1>
                  <RectText>1 чел</RectText>
                  </TextChel1>
                <ContLin2>
                  <Image source={require("../assets/LineI.png")}/>
                </ContLin2>
                <ContMan>
                  <Image source={require("../assets/man.png")}/>
                </ContMan>
                </Rectmini3>
                </ContRectmini3>
            </ContRectmini1>
          </Despaly2>
        </BottomSheet>
      </ContMenu>
      <ContContZakazat>
      <ContZakazat>
        <TextZakazat>заказать</TextZakazat>
      </ContZakazat>
      </ContContZakazat>
    </Header>
  );
};

=*/