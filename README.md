# img-middle-responsive - 0.1.0

`img-middle-responsive` - Directive to display an image with reactive centered alignment, both vertically and horizontally.

## Installation
* Download the latest release: [v0.1.0](https://github.com/GruppoMeta/metaMediaViewer/archive/master.zip)
* Clone the repository: `git clone https://github.com/GruppoMeta/metaMediaViewer.git`
* Install with [Bower](http://bower.io): `bower install img-middle-responsive`


## Requirements
The plugin requires
* [jQuery 1.9.0+](http://jquery.com)
* [Angularjs 1.4.0+](https://angularjs.org/)


## Quick-help for usage
* Inject into your module the `imgMiddleResponsiveMdl` dependency:

```javascript
angular.module('myApp',['imgMiddleResponsiveMdl']);
``` 

* Create an object with the information to pass to the directive:

```javascript
var url = "https://assets-cdn.github.com/images/modules/open_graph/github-octocat.png"; //url image to visualize
var defaultUrl = "http://placehold.it/200x150"; //url image to visualize if master image is not found
var imgMiddleRespOptions = {
    container:{
        maxWidth:"150px", //maxWidth of image container
        maxHeight:"150px" //maxHeight of image container
    }
}
var clicked = function(){ //function to trigger on click
    alert('clicked');
}
```

* Put the directive in your html:

```html
<img-middle-responsive img-url="{{url}}" default-url="{{defaultUrl}}" options="imgMiddleRespOptions" click-action="clicked()"></img-middle-responsive>
```

## Copyright and license
Copyright @2016 Matteo Rossi, under [MIT license]