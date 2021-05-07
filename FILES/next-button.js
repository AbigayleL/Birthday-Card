const nextButtonComponent = () => ({
    init() {
      const modelList = ['gift-glb', 'cakebox-glb']
      const model = document.getElementById('model')
      const model1 = document.getElementById('model1')
      const model2 = document.getElementById('model2')
      const nextButton = document.getElementById('nextbutton')
      nextButton.style.display = 'block'
  
      let idx = 1  // Start with the 2nd model as 1st is already in the scene on page load
      const nextModel = () => {
        model.removeAttribute('gltf-model')
        // Switch to next model in the list
        model.setAttribute('gltf-model', `#${modelList[idx]}`)
        model1.setAttribute('visible', true)
        model2.setAttribute('visible', true)
  
        idx = (idx + 1) % modelList.length
      }
      nextButton.onclick = nextModel  // Switch to the next model when the button is pressed.
    },
  })
  export {nextButtonComponent}