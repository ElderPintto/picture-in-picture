const ElVideo   =  document.getElementById('video')
const ElButton  = document.getElementById('button')

async function selectMediaStream() {
    try {
      const mediaStream  = await navigator.mediaDevices.getDisplayMedia();
      ElVideo.srcObject = mediaStream

      ElVideo.onloadedmetadata = () => {
        ElVideo.play()
      }
    } catch (error) {
        console.log('catch error', error)
    }
}

ElButton.addEventListener('click', async () => {
    ElButton.disabled = true
    
    await ElVideo.requestPictureInPicture()
    
    ElButton.disabled = false
})

selectMediaStream()