/**
 * Simple Modal View v1.0.0
 * =====================
 * Author: Dominik Kapitan
 * Created: 24.05.2018
 * Description: Display a picture, images gallery or video clip in modal window.
 */

(function showImages(){
    'use strict';

    var modalDiv = document.createElement('div');
    modalDiv.className="modal-container";

    //array for gallery pictures data
    var galleryPictures;

    //Create listener to close modal window
    modalDiv.addEventListener("click",function(e){
        var parent = e.target.parentNode;
        if(parent.className != 'thumbnail-gallery')
            closeModal();
    },false);

    //attach modal container to document body
    document.body.appendChild(modalDiv);

    getAllImages();
    getAllVideos();

    //get all images with specific attributes
    function getAllImages()
    {
        var images = document.getElementsByTagName('img');
        for(var i=0; i<images.length; i++){

            if(images[i].hasAttribute('data-simplepicture')){
                images[i].addEventListener("click",function(e){showBigImage(e)},false)
            }
            if(images[i].hasAttribute('data-simplegallery')){
                images[i].addEventListener("click",function(e){showGallery(e)},false)
            }
        }

    }

    //show clicked image in modal window
    function showBigImage(e){

        var imgContainer = document.createElement('div');
        imgContainer.id = "single-image-container";

        var img = document.createElement('img');
        img.src = e.target.src;

        imgContainer.appendChild(img);
        modalDiv.appendChild(imgContainer);
        modalDiv.style.display = "block";

    }

    // created gallery thumbnails show gallery images
    function showGallery(image){
        var imgContainer = document.createElement('div');
        imgContainer.id = "gallery-image-container";

        var currentImg = document.createElement('img');
        currentImg.src = image.target.src;
        currentImg.className = 'current-display';

        var thumbnailContainer = document.createElement('div');
        thumbnailContainer.className = 'thumbnail-gallery';

        var galleryId = image.target.dataset.simplegallery;
        galleryPictures = document.querySelectorAll("[data-simplegallery="+CSS.escape(galleryId)+"]");

        for(var i=0; i<galleryPictures.length; i++){

            var img = document.createElement('img');
            img.src = galleryPictures[i].src;
            img.alt = galleryPictures[i].alt;
            if(img.src == currentImg.src) img.className = 'active';
            thumbnailContainer.appendChild(img);
        }

        imgContainer.appendChild(currentImg);
        imgContainer.appendChild(thumbnailContainer);
        modalDiv.appendChild(imgContainer);
        modalDiv.style.display = "block";

        imageSwitch(thumbnailContainer,currentImg)
    }

    //switch to current picture
    function imageSwitch(container,currentImg){

        container.addEventListener("click",function(e){
            currentImg.src = e.target.src;
            setActivePicture(e);

        },false)
    }

    //display selected picture from gallery
    function setActivePicture(e){
        var lastActive = document.querySelector('img[class=active]');
        lastActive.className='';
        e.target.className='active';
    }

    //get all elements with attribute "data-video"
    function getAllVideos()
    {
        var video = document.querySelectorAll('[data-simplevideo]');

        for(var i=0; i<video.length;i++){
            video[i].addEventListener("click",function(e){
                showVideo(e.target.dataset.simplevideo)
            },false)
        }
    }

    //show video in iframe modal window
    function showVideo(src){
        var imgContainer = document.createElement('div');
        imgContainer.id = "single-image-container";

        var iframe = document.createElement('iframe');

        var iframeWidth = document.body.offsetWidth*0.8;
        var iframeHeight = iframeWidth/1.7777777;

        iframe.src = src;
        iframe.width = iframeWidth;
        iframe.height = iframeHeight;
        iframe.setAttribute('allowFullScreen', '');

        imgContainer.appendChild(iframe);
        modalDiv.appendChild(imgContainer);
        modalDiv.style.display = "block";
    }

    //close modal window
    function closeModal(){
        modalDiv.innerHTML="";
        modalDiv.style.display = "none";
    }


}());