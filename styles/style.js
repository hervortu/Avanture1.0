import { StyleSheet, Platform, StatusBar} from 'react-native';

const layout = {
  spacing: 12,
};
const colors = {
  back: '#ffff',
  lighter: '#d9d9d9',
  textcolor: "#000",
};

export const Sstyles = StyleSheet.create({

  Title: { fontSize: 32, fontWeight: '600', color: colors.textcolor},

  Colubia: {
    color: colors.textcolor,
  },
   
  Colorada: {
    backgroundColor: colors.lighter
  },

  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.back,
    padding: layout.spacing,
  },

    ContTopSheet: {
      position: "absolute",
      top: -690,
      height: "100%",
      width: "96%",
      backgroundColor: colors.lighter,
      borderRadius: 23,
      alignSelf: 'center',
      zIndex: 3,
      },
      
    ContMap: {
      position: "absolute",
      height: "100%",
      width: "100%",
      },
      
      Desplay: {
        paddingTop: 50,
        paddingHorizontal: 17,
        width: "100%",
      },
      
      ContainerMenu:{
        flexDirection: "row",
        height: 40,
        width: "100%",
        marginBottom: 10,
      },

      FontsTest : {
        fontFamily: "interbold",
      },
      
      ImgPad: {
        justifyContent: "center",
        zIndex: 3,
      },
      
      Logo: {
        position: "absolute",
          width: "100%",
          alignItems: "center",

      },
      
      ContLanguage: {
        height: "100%", 
        flex: 1,
        justifyContent: "center",
        alignItems: 'flex-end'
      },

      Profile: {
        height: 40,
        width: 40,
        borderRadius: 50,
        backgroundColor: colors.textcolor
      },

      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Полупрозрачный черный фон
      },

      Ctrelka: {
      },

      BackBatton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.lighter,
        borderRadius: 23,
        height: 50,
        width: 50,
        top: 50,
        left: "-68%",
        zIndex: 4,
      },
      
      BottomSheet: {
        position: "absolute",
        width: "96%",
        height: "100%",
        paddingTop: 16,
        paddingHorizontal: 20,
        backgroundColor: colors.lighter,
        borderRadius: 23,
        zIndex: 1,
      },

      BottomPaddingFirst: {
        bottom: -613,
      },

      BottomPaddingSecond: {
        bottom: -590,
      },
      
      ContBrov: {
        width: "100%", 
        alignItems: "center", 
        height: "3.5%", 
        justifyContent: "center"
      },

      Brov: {
        height: 4, width: "30%", 
        backgroundColor: "#000", 
        borderRadius: 25, 
        opacity: 0.5
      },
      
      
      Search: {
        width: "100%",
        height: "11%",
        backgroundColor: "#e9ecef",
        borderRadius: 15,
        flexDirection: "row",
      },
      
      ContMapmini: {
        width: 66,
        alignItems: "center",
        justifyContent: "center",
      },
      
      MapMini: {
      height: 46.458717346191406,
      width: 42,
      borderRadius: 8,
      },
      
      ConteinerText: {
        position: "relative",
        width: "100%",
        flexDirection: "row",
      },
      
      ContText: {
        paddingTop: 12,
        width: "18.5%",
      },
      
      Adres: {
        fontSize: 12,
        color: "#ffff",
        opacity: 0.3,
      },
      
      Podezd: {
        color: "#ffff",
      fontSize: 12,
      opacity: 0.3,
      paddingTop: 3,
      },
      
      Opisanie: {
       color: "#ffff",
      fontSize: 12,
      opacity: 0.3,
      paddingTop: 3,
      },
      
      ContText2: {
        paddingTop: 12,
      },
      
      Adres2: {
      fontSize: 12,
      color:"#ffff",
      },
      
      Podezd2: {
        fontSize: 12,
        color: "#ffff",
        paddingLeft: 10,
        paddingTop: 3,
      },
      
      ContText3: {
        paddingTop: 12,
        paddingLeft: 10,
      },
      
      ContText4: {
      paddingTop: 12,
      paddingLeft: 7,
      },
      
      Dengi: {
    color: "#69FF93",
    fontSize: 13,
      },
      
      Vrema2:{
        paddingTop: 3,
      color: "#ffff",
      fontSize: 12,
      },
      
      Summa: {
        color: "#ffff",
        fontSize: 12,
        opacity: 0.3,
      },
      
      Vrema: {
        opacity: 0.3,
        paddingTop: 3,
        fontSize: 12,
        color: "#ffff",
      },
      
      ContOpisanie:{
        position: "absolute",
        flex: 1,
        top: 47,
        left: 135,
        width: "55%",
      },
      
      Opisanie2: {
        fontSize: 12,
        color: "#ffff",
      },
      
      ContZakazat: {
        position: "absolute",
        top: "93%",
        backgroundColor: "#00FF1A",
        height: 45,
        width: "80%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      },

      ColorZakazat: {
        backgroundColor: "red",
      },
      
      TextZakazat: {
        fontSize: 20,
        color: "#ffff",
        letterSpacing: 3,
        textShadowRadius: 4,
        textShadowColor: "#ffff",
      }
      
});

export const Dstyles = StyleSheet.create({
  Container: {
  flex: 1,
  width: "100%",
  backgroundColor: "#ffff",
  },

  ContSheet: {
  position: "absolute",
  top: -700,
  left: 0,
  height: "100%",
  width: "100%",
  },

  ContTopSheet: {
    flex: 1,
    backgroundColor: "#FFff",
    borderRadius: 23,
    },
});

