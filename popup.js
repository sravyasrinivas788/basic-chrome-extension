
document.addEventListener('DOMContentLoaded', () => {
  const changefont = document.getElementById("changecolor");
  const displayedFont = document.getElementById("displayedcolor");

  const openEyedrop = () => {
    const supportEyedropAPI = () => ('EyeDropper' in window);
    if (!supportEyedropAPI()) {
      return alert("EyeDropper API not supported");
    }

    const eyeDropper = new EyeDropper();
    const abortController = new AbortController();
    


    eyeDropper.open({ signal: abortController.signal })
     
      .then((result) => {
        
        
        const color=result.sRGBHex
        displayedFont.style.backgroundColor = color;
        navigator.clipboard.writeText(color)

        console.log(result)
       
        
      })
      .catch((err) => alert(err));
  };

  changefont.addEventListener('click', openEyedrop);

 
  
});
