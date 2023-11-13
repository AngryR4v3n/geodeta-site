window.addEventListener("DOMContentLoaded", ()=>{
    const videoModal = document.getElementById("videoModal")
    videoModal.addEventListener('click', openModal)
    const modal = document.getElementById("exampleModal");
    const modal_container = document.getElementById("video-container");
    
    function openModal() {
        document.getElementById("backdrop").style.display = "block"
        modal.style.display = "block"
        modal.classList.add("show")
        var iframe = document.getElementById('landingVideo');
        //iframe.src += "&autoplay=1"
        //console.log(iframe.src)
    }
    function closeModal() {
        document.getElementById("backdrop").style.display = "none"
        modal.style.display = "none"
        modal.classList.remove("show")
    }
    
    function stopVideo(element) {
        var iframe = element.querySelector('iframe');
        var video = element.querySelector('video');
        if (iframe) {
            var iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
        if (video) {
            video.pause();
        }
    };
    
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal()
            stopVideo(modal_container)
        }
    }

});
