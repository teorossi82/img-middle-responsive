angular.module("imgMiddleResponsiveMdl").run(["$templateCache", function($templateCache) {$templateCache.put("imgMiddleResponsive.html","<div class=\"responsive-container\" style=\"max-width:{{imgMiddleResponsive.container.maxWidth}};max-height:{{imgMiddleResponsive.container.maxHeight}}\">\n    <div class=\"dummy\"></div>\n\n    <div class=\"img-container\">\n        <div class=\"centerer\"></div>\n        <img ng-click=\"imgMiddleResponsive.click()\" ng-src=\"{{imgMiddleResponsive.imgUrl}}\"/>\n    </div>\n</div>");}]);