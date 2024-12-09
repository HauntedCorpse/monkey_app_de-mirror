// a mutation observer is created to detect changes to the page
const observer = new MutationObserver(entries => {
    // changes are looped through
    for (let i = 0; i < entries.length; i++) {
        let entry = entries[i]

        // added nodes are looped through
        entry.addedNodes.forEach((node) => {
            // if a video element has been added, that being your camera, then
            // the transform property meant to flip the camera's image is removed
            if (node.id && typeof node.id == "string" && node.id.startsWith("video_track-cam-")) {
                const videoElem = document.querySelector('[id^="video_track-cam-"]')

                videoElem.style["transform"] = ''
            }
        })
    }
})

// the observer begins observing
observer.observe(document, {
    childList: true,
    subtree: true
})
