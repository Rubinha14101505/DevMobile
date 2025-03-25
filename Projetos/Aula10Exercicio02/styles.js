//styles.js
import { Platform, StyleSheet, StatusBar } from "react-native";

// Criamos object StyleSheet para definiross atilos
export default StyleSheet.create({
    // Estilsparaocontainerprincipal
    container: {
        flex: 1, // Preenchetodoosepagogdisponivel
        flexDirection: "row", // Organizaoselementosemlinha
        backgroundColor: "ghostwhite", // Defineacordefundo
        alignItems: "center", // Centralizacoselementosverticalmente
        justifyContent: "space-around", // Distribuiosapagoigualmenteentreos elementos
        // Aplicaunpaddingtopdiferentedependendodaplataforma
        ...Platform.select({
            ios: { paddingTop: 20 }, // Paddingtopparaios
            android: { paddingTop: StatusBar.currentHeight }, // PaddingtopparaAndroid, considerandoaalturadabarradestatus
        }),
    },
    // Estilosparaascaixas
    box: {
        width: 100, // Larguradacaixa
        justifyContent: "center", // Centralizaconteddoverticalmente
        alignSelf: "stretch", // Esticaacaixaparacoupartodaalarguradocontainer pai.
        alignItems: "center", // Centralizaconteddohorizontalmente
        backgroundColor: "lightgray", // Cordefundodacaixa
        borderWidth: 1, // Larguradaborda
        borderStyle: "dashed", // Estlodaborda(tracejada)
        borderColor: "darkslategray", // Cordaborda
    },
    // Estilosparaotextodentrodascaixas
    boxText: {
        color: "darkslategray", // Cordotexto
        fontWeight: "bold", // Peso da fonts (negrito)
    },
});