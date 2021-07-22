import React from "react"
import BoasVindas from "./home_page/sections/BoasVindas"
import AnimaIcons from "./home_page/sections/AnimaIcons"
import Whatssap from "./home_page/sections/Whatssap"
import Meet from "./home_page/sections/Meet"
import Zoom from "./home_page/sections/Zoom"
import Gmail from "./home_page/sections/Gmail"
import PlayStore from "./home_page/sections/PlayStore"


export default function HomePage() {
    return (
        <>
            <BoasVindas />
            <AnimaIcons />
            <Whatssap />
            <Meet />
            <Zoom />
            <Gmail />
            <PlayStore />
        </>
    );
}