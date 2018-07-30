# Simple Modal View

SimpleModalView is extremely lightweight and responsive script that let you
display images and video in modal window

## Features
SimpleModaleView let you:
+ display any image in modal window
+ create images gallery with thumbnails
+ use any html tag to display video clip in modal window after click

## Usage

Include to your html file both SimpleModalView files

```html
 <link href="css/simpleModalView.css" rel="stylesheet">
 <script type="text/javascript" src="js/simpleModalView.js"></script>
```

#### Displaying Single Image

Add to image tag empty attribute "data-simplepicture".

```html
<img src="img/brod1.jpg" data-simplepicture="" alt="">

```
#### Displaying Images gallery

To create gallery set, add to every image that want to have in gallery
attribute "data-simplegallery". A value of this data attribute is number of gallery.

```html
<img src="img/brod1.jpg" data-simplegallery="1" alt="">
```


***
Example:

If you want to have two separate gallery set. To every set use
different "data-simplegallery" value.

```html
    <div class="img-set">
        <img src="img/brod1.jpg" data-simplegallery="1" alt="">
        <img src="img/brod2.jpg" data-simplegallery="1" alt="">
    </div>
    <div class="img-set">
        <img src="img/cat.png" data-simplegallery="2" alt="">
        <img src="img/dog.jpg" data-simplegallery="2" alt="">
        <img src="img/fox.jpg" data-simplegallery="2" alt="">
        <img src="img/bull.jpg" data-simplegallery="2" alt="">
    </div>

```

#### Displaying Video Clip

You can use every html tag to display video clip in modal window. 
Just add to html tag attribute "data-samplevideo" where value is embed link to video clip.

```html
<span data-simplevideo="https://www.youtube.com/embed/4U2CHW-uZ0Y">Play</span>
```
