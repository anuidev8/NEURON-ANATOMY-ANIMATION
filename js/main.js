//responsive
import responsiveSvgElements from './responsiveSvgElements.js'
import trackingCapsules from './trackingCapsule.js'
import {
    addTimeline
} from './animations.js'
import {
    extraInfoConfig,
    estructureItem
} from './elements.js'


const app = () => {
    if (window.innerWidth > 1000) {
        estructureItem.forEach(addTimeline);
        responsiveSvgElements()
        extraInfoConfig()
        trackingCapsules()
    }
    console.log(window.innerWidth);
}


app()

window.onresize = app;