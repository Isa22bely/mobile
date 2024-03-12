import {TouchableOpacity, TouchableOpacityProps} from "react-native";
import {styleBotao} from "./estilo"
import React from "react";

interface Botao extends TouchableOpacityProps{
    onPressI: () => void
}
export function BotaoSlide({ onPressI} : Botao){
    return(
        <TouchableOpacity style={styleBotao.bola} onPress={onPressI} />
    )
}