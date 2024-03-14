import React from "react";
import { styleEmoge } from "./estilo"
import { Image, View } from "react-native";
import { BotaoSlide } from "../../componentes/BotaoSlide";
import { IPagina } from "../../../App";



export function Slide2({ setPageI }: IPagina) {
    const slide = require('../../assents/emog2.png')
    return (
        <View style={styleEmoge.container}>
            <Image source={slide} />
            <View style={styleEmoge.b}>
            <BotaoSlide onPressI={() => setPageI(1)} cor={false} />
            <BotaoSlide onPressI={() => setPageI(2)} cor={true} />
            </View>

        </View>
    )
}