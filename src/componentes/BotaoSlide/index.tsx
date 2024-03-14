import {TouchableOpacity, TouchableOpacityProps} from "react-native";
import {styleBotao} from "./estilo"
import React from "react";


interface Botao extends TouchableOpacityProps{
    onPressI: () => void
    cor: boolean
}
export function BotaoSlide({ onPressI, cor} : Botao){
    return(
        <TouchableOpacity style={cor ? styleBotao.bola : styleBotao.nbola} onPress = {onPressI} />
    )
}