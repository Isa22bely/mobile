import React from "react";
import { styleEmoge } from "./estilo";
import {Image, View} from "react-native";
import {BotaoSlide} from "../../componentes/BotaoSlide";
import {IPagina} from "../../../App";


export function Slide1({setPageI}: IPagina){
    const slide = require('../../assents/emog1.png')
    return(
        <View style={styleEmoge.container}>
            <BotaoSlide onPressI={() => setPageI(1)} />
            <BotaoSlide onPressI={() => setPageI(2)} />
        <Image source={slide} />
        
        </View>
    )
}