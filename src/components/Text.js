/** 
* @desc - Defines a custom Text component
* @param - boolean b
* @param - boolean center
* @param - boolean xs
* @param - boolean sm
* @param - boolean md
* @param - boolean rg
* @param - boolean lg
* @param - boolean xl
* @param - boolean h1
* @param - boolean h2
* @param - boolean h3
* @param - boolean mute
* @param - boolean brand
* @param - boolean brandAlt
* @param - boolean success
* @param - boolean info
* @param - boolean warning
* @param - boolean danger
* @param - boolean light
* @param - boolean dark
* @param - boolean darkgray
* @param - string color
* @param - styleObject style
* @param - children
* @return - Custom Text Display
**/

import React from 'react'
import { Text as Txt } from 'react-native'
import { BODY, FONTSIZE } from 'theme';

export default props => {

    // default style
    let style = {
        fontSize: FONTSIZE.rg,
        color: BODY.BLACK,
        fontFamily: 'Roboto-Regular'
    }

    // font weight
    if (props.t) style.fontFamily = 'Roboto-Thin';
    if (props.l) style.fontFamily = 'Roboto-Light';
    if (props.m) style.fontFamily = 'Roboto-Medium';
    if (props.b) style.fontFamily = 'Roboto-Bold';
    if (props.xb) style.fontFamily = 'Roboto-Black';

    // center
    if (props.center) style.alignSelf = 'center'

    //size
    if (props.xs) style.fontSize = FONTSIZE.xs;
    else if (props.sm) style.fontSize = FONTSIZE.sm
    else if (props.md) style.fontSize = FONTSIZE.md
    else if (props.rg) style.fontSize = FONTSIZE.rg
    else if (props.lg) style.fontSize = FONTSIZE.lg
    else if (props.xl) style.fontSize = FONTSIZE.xl
    else if (props.xxl) style.fontSize = FONTSIZE.xxl
    else if (props.h1) style.fontSize = FONTSIZE.h1
    else if (props.h2) style.fontSize = FONTSIZE.h2
    else if (props.h3) style.fontSize = FONTSIZE.h3

    //color
    if (props.mute) style.color = BODY.LIGHT_BLACK
    else if (props.theme) style.color = BODY.THEME
    else if (props.themeAlt) style.color = BODY.ALTERNATE
    else if (props.warning) style.color = BODY.YELLOW_COLOR
    else if (props.danger) style.color = BODY.RED_COLOR
    else if (props.info) style.color = BODY.BLUE
    else if (props.dark) style.color = BODY.BLACK
    else if (props.darkgray) style.color = BODY.GRAY
    else if (props.light) style.color = BODY.LIGHT_COLOR
    else if (props.color) style.color = props.color
    // console.log(style);
    return (
        <Txt {...props} style={{ ...style, ...props.style }}>
            {props.children}
        </Txt>
    )
}