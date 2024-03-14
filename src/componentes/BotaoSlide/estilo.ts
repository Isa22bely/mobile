import { StyleSheet } from "react-native";
import {colors} from "../../estilos/estiloglobal"

export const styleBotao = StyleSheet.create({
    bola:{
        height: 25,
        width: 25,
        borderRadius: 50,
        backgroundColor: colors.preto,
        margin: 40
    },
    nbola:{
        height: 25,
        width: 25,
        borderRadius: 50,
        margin: 40,
        borderColor: colors.preto,
        borderWidth: 3
    }

})