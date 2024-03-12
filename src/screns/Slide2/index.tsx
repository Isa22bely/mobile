import React from "react";
import {styleEmoge} from "./estilo"
import {BotaoSlide} from "../../componentes/BotaoSlide";
import {IPagina} from "../../../App";

import {Image, View} from "react-native";

export function Slide2({setPageI}: IPagina){
    const slide = require('../../assents/emog2.png')
    return(
        <View style={styleEmoge.container}>
        <Image source={slide}/>
        <BotaoSlide onPressI={() => setPageI(1)}/>
        <BotaoSlide onPressI={() => setPageI(2)}/>

        
        </View>
    )
}