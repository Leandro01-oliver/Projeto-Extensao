import React from "react"
import TutoWhatssap from "./tutoriais/sections/Whatssap"
import TutoMeet from "./tutoriais/sections/Meet"
import TutoZoom from "./tutoriais/sections/Zoom"
import TutoGmail from "./tutoriais/sections/Gmail"
import TutoPlayStore from "./tutoriais/sections/PlayStore"

export default function ComponentsTutorial() {
    return (
        <>
            <TutoWhatssap />
            <TutoMeet />
            <TutoZoom />
            <TutoGmail />
            <TutoPlayStore />
        </>
    )
}