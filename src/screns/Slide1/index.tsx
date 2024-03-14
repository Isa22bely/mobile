import React from "react";
import { styleEmoge } from "./estilo";
import {Image, View} from "react-native";
import {BotaoSlide} from "../../componentes/BotaoSlide";
import {IPagina} from "../../../App";


export function Slide1({setPageI}: IPagina){
    const slide = require('../../assents/emog1.png')
    return(
        <View style={styleEmoge.container}>
            <Image source={slide} />
            <View style={styleEmoge.b}> 
            <BotaoSlide onPressI={() => setPageI(1)} cor = {true} />
            <BotaoSlide onPressI={() => setPageI(2)} cor = {false}/>
            </View>
        
        </View>
    )
}