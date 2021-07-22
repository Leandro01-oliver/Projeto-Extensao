import React from "react"
import Whatssap from "./Informacao/sections/Whatssap"
import Meet from "./Informacao/sections/Meet"
import Zoom from "./Informacao/sections/Zoom"
import Gmail from "./Informacao/sections/Gmail"
import PlayStore from "./Informacao/sections/PlayStore"

export default function ComponentsInfo() {
    return (
        <>
            <Whatssap />
            <Meet />
            <Zoom />
            <Gmail />
            <PlayStore />
        </>
    )
}