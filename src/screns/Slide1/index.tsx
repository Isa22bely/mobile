import React from "react";
import { styleEmoge } from "./estilo";

import {Image, View} from "react-native";


export function Slide1(){
    const slide = require('../../assents/emog1.png')
    return(
        <View style={styleEmoge.container}>

        <Image source={slide} />
        
        </View>
    )
}