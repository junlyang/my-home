import {
    Box,
    Card,
    Image,
    Heading,
    Text,Button
  } from 'rebass'
  import Header from '../partials/Header'
const colors = [
    {color1 : "#02343F",color2 : "#F0EDCC"},
    {color1 : "#331B3F",color2 : "#ACC7B4"},
]
export default function Color () {
    return (
        <>
            <body>
                <article>aaaaaa
                    <aside>aaassss</aside>color
                </article>
                {
                colors.map((color, i)=>
                    <article>
                        <aside key={i} style={{background:color.color2, borderLeftColor:color.color1}}>1{color.color1}</aside>
                        <aside key={i} style={{background:color.color1, borderLeftColor:color.color2}}>2{color.color2}</aside>
                    </article>
                    )
                }
                <Button color="white" backgroundColor={colors[0].color1}>{colors[0].color1}</Button>
                <Button color="black" backgroundColor="gray">
                    dddd
                </Button>
                <button style={{backgroundColor:"black"}}>aaaa</button>
            </body>
        </>
    )
}