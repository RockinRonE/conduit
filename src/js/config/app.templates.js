angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("article/article.html","<div class=\"article-page\">\n\n  <!-- Banner for article title, action buttons -->\n  <div class=\"banner\">\n    <div class=\"container\">\n\n      <h1>Example article title</h1>\n\n      <div class=\"article-meta\">\n        <!-- Show author info + favorite & follow buttons -->\n        <div class=\"article-meta\">\n          <a href=\"\"><img /></a>\n          <div class=\"info\">\n            <a href=\"\" class=\"author\">Brad Green</a>\n            <span class=\"date\">January 20th</span>\n          </div>\n\n          <button class=\"btn btn-sm btn-outline-secondary\">\n            <i class=\"ion-plus-round\"></i>\n            &nbsp;\n            Follow Brad Green\n          </button>\n          &nbsp;\n          <button class=\"btn btn-sm btn-outline-primary\">\n            <i class=\"ion-heart\"></i>\n            &nbsp;\n            Favorite Article <span class=\"counter\">(29)</span>\n          </button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n\n  <!-- Main view. Contains article html and comments -->\n  <div class=\"container page\">\n\n    <!-- Article\'s HTML & tags rendered here -->\n    <div class=\"row article-content\">\n      <div class=\"col-xs-12\">\n\n        <div>\n          <p>This is the content of our article.</p>\n        </div>\n\n        <ul class=\"tag-list\">\n          <li class=\"tag-default tag-pill tag-outline\">\n            Tag One\n          </li>\n          <li class=\"tag-default tag-pill tag-outline\">\n            Tag Two\n          </li>\n        </ul>\n\n      </div>\n    </div>\n\n    <hr />\n\n    <div class=\"article-actions\">\n\n      <!-- Show author info + favorite & follow buttons -->\n      <div class=\"article-meta\">\n        <a href=\"\"><img /></a>\n        <div class=\"info\">\n          <a href=\"\" class=\"author\">Brad Green</a>\n          <span class=\"date\">January 20th</span>\n        </div>\n\n        <button class=\"btn btn-sm btn-outline-secondary\">\n          <i class=\"ion-plus-round\"></i>\n          &nbsp;\n          Follow Brad Green\n        </button>\n        &nbsp;\n        <button class=\"btn btn-sm btn-outline-primary\">\n          <i class=\"ion-heart\"></i>\n          &nbsp;\n          Favorite Article <span class=\"counter\">(29)</span>\n        </button>\n      </div>\n\n    </div>\n\n    <!-- Comments section -->\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-8 offset-md-2\">\n\n        <div>\n          <form class=\"card comment-form\">\n            <div class=\"card-block\">\n              <textarea class=\"form-control\"\n                placeholder=\"Write a comment...\"\n                rows=\"3\"></textarea>\n            </div>\n            <div class=\"card-footer\">\n              <img class=\"comment-author-img\" />\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\">\n               Post Comment\n              </button>\n            </div>\n          </form>\n        </div>\n\n        <div class=\"card\">\n          <div class=\"card-block\">\n            <p class=\"card-text\">This is an example comment.</p>\n          </div>\n          <div class=\"card-footer\">\n            <a class=\"comment-author\" href=\"\">\n              <img class=\"comment-author-img\" />\n            </a>\n            &nbsp;\n            <a class=\"comment-author\" href=\"\">\n              BradGreen\n            </a>\n            <span class=\"date-posted\">\n              Jan 20, 2016\n            </span>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n\n  </div>\n\n\n\n</div>\n");
$templateCache.put("auth/auth.html","<div class=\"auth-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n        <h1 class=\"text-xs-center\" ng-bind=\"::$ctrl.title\"></h1>\n        <p class=\"text-xs-center\">\n          <a ui-sref=\"app.login\"\n            ng-show=\"$ctrl.authType === \'register\'\">\n            Have an account?\n          </a>\n          <a ui-sref=\"app.register\"\n            ng-show=\"$ctrl.authType === \'login\'\">\n            Need an account?\n          </a>\n        </p>\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\" ng-show=\"$ctrl.authType ===\'register\'\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                ng-model=\"$ctrl.formData.username\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"Password\"\n                ng-model=\"$ctrl.formData.password\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\" ng-bind=\"$ctrl.title\">\n            </button>\n\n          </fieldset>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>");
$templateCache.put("components/list-errors.html","<ul class=\"error-messages\" ng-show=\"$ctrl.errors\">\n	<div ng-repeat=\"(field, errors) in $ctrl.errors\">\n	  <li ng-repeat=\"error in errors\">\n	    {{field}} {{error}} \n	  </li>\n	</div>\n</ul>");
$templateCache.put("editor/editor.html","<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1 col-xs-12\">\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form>\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                ng-model=\"$ctrl.article.title\"\n                type=\"text\"\n                placeholder=\"Article Title\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                ng-model=\"$ctrl.article.description\"\n                type=\"text\"\n                placeholder=\"What\'s this article about?\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control\"\n                rows=\"8\"\n                ng-model=\"$ctrl.article.body\"\n                placeholder=\"Write your article (in markdown)\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"Enter tags\"\n                ng-model=\"$ctrl.tagField\" \n                ng-keyup=\"$event.keyCode == 13 && $ctrl.addTag()\" />\n\n\n              <div class=\"tag-list\">\n                <span ng-repeat=\"tag in $ctrl.article.tagList\"\n                      class=\"tag-default tag-pill\">\n                  <i class=\"ion-close-round\" ng-click=\"$ctrl.removeTag(tag)\"></i>\n                  {{ tag }}\n                </span>\n              </div>\n            </fieldset>\n\n            <button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\"\n                ng-click=\"$ctrl.submit()\">\n              Publish Article\n            </button>\n\n          </fieldset>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("home/home.html"," <div class=\"home-page\">\n\n  <!-- Splash banner that only shows when not logged in -->\n  <div class=\"banner\" show-authed=\"false\">\n    <div class=\"container\">\n      <h1 class=\"logo-font\" ng-bind=\"::$ctrl.appName | lowercase\"></h1>\n      <p>A place to share your knowledge.</p>\n    </div>\n  </div>\n\n  <div class=\"container page\">\n    <div class=\"row\">\n\n\n      <!-- Main view - contains tabs & article list -->\n      <div class=\"col-md-9\">\n        <!-- Tabs for toggling between feed, article lists -->\n        <div class=\"feed-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n\n            <li class=\"nav-item\" show-authed=\"true\">\n              <a href=\"\" class=\"nav-link active\">\n                Your Feed\n              </a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a href=\"\" class=\"nav-link\">\n                Global Feed\n              </a>\n            </li>\n\n          </ul>\n        </div>\n\n        <!-- List the current articles -->\n        <div class=\"article-preview\">\n          <div class=\"article-meta\">\n            <a href=\"\"><img /></a>\n            <div class=\"info\">\n              <a href=\"\" class=\"author\">BradGreen</a>\n              <span class=\"date\">January 20th</span>\n            </div>\n            <button class=\"btn btn-outline-primary btn-sm pull-xs-right\">\n              <i class=\"ion-heart\"></i> 29\n            </button>\n          </div>\n          <a href=\"\" class=\"preview-link\">\n            <h1>How to build Angular apps that scale</h1>\n            <p>Building web applications is not an easy task. It\'s even hard to make ones that scale.</p>\n            <span>Read more...</span>\n            <ul class=\"tag-list\">\n              <li class=\"tag-default tag-pill tag-outline\">programming</li>\n              <li class=\"tag-default tag-pill tag-outline\">web</li>\n            </ul>\n          </a>\n        </div>\n\n      </div>\n\n      <!-- Sidebar where popular tags are listed -->\n      <div class=\"col-md-3\">\n        <div class=\"sidebar\">\n\n          <p>Popular Tags</p>\n\n          <div class=\"tag-list\">\n            <a href=\"\" class=\"tag-default tag-pill\">\n              Tag One\n            </a>\n            <a href=\"\" class=\"tag-default tag-pill\">\n              Tag Two\n            </a>\n          </div>\n\n        </div>\n      </div>\n\n      <!-- End the row & container divs -->\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>\n");
$templateCache.put("layout/footer.html","<footer>\n  <div class=\"container\">\n    <a class=\"logo-font\" ui-sref=\"app.home\" ng-bind=\"::$ctrl.appName | lowercase\"></a>\n    <span class=\"attribution\">\n      &copy; {{::$ctrl.date | date:\'yyyy\'}}.\n      An interactive learning project from <a href=\"https://thinkster.io\">Thinkster</a>.\n      Code licensed under MIT.\n    </span>\n  </div>\n</footer>\n");
$templateCache.put("layout/header.html","<nav class=\"navbar navbar-light\">\n  <div class=\"container\">\n\n    <a class=\"navbar-brand\"\n      ui-sref=\"app.home\"\n      ng-bind=\"::$ctrl.appName | lowercase\">\n    </a>\n\n    <!-- Show this for logged out users -->\n    <ul class=\"nav navbar-nav pull-xs-right\"\n        show-authed=\"false\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.home\">\n          Home\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.login\">\n          Sign In\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.register\">\n          Sign Up\n        </a>\n      </li>\n\n    </ul>\n\n    <!-- Show this for logged IN users -->\n    <ul show-authed=\"true\"\n      class=\"nav navbar-nav pull-xs-right\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.home\">\n          Home\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.editor\">\n          <i class=\"ion-compose\"></i>&nbsp;New Article\n          </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.settings\">\n          <i class=\"ion-gear-a\"></i>&nbsp;Settings\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          ui-sref-active=\"active\"\n          ui-sref=\"app.profile({username: $ctrl.currentUser.username})\">\n          <img ng-src=\"{{$ctrl.currentUser.image}}\" class=\"user-pic\" />\n          {{ $ctrl.currentUser.username }}\n        </a>\n      </li>\n\n    </ul>\n\n\n  </div>\n</nav>\n");
$templateCache.put("profile/profile.html","<div class=\"profile-page\">\n\n  <!-- User\'s basic info & action buttons -->\n  <div class=\"user-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n          <img ng-src=\"{{::$ctrl.profile.image}}\" class=\"user-img\" />\n\n          <h4 ng-bind=\"::$ctrl.profile.username\"></h4>\n          <p ng-bind=\"::$ctrl.profile.bio\"></p>\n\n          <follow-btn user=\"$ctrl.profile\" ng-hide=\"$ctrl.isUser\"></follow-btn>\n\n          <a ui-sref=\"app.settings\"\n            class=\"btn btn-sm btn-outline-secondary action-btn\"\n            ng-show=\"$ctrl.isUser\">\n            <i class=\"ion-gear-a\"></i> Edit Profile Settings</a>\n\n          \n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Container where User\'s posts & favs are list w/ toggle tabs -->\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n        <!-- Tabs for switching between author articles & favorites -->\n        <div class=\"articles-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\">\n                My Articles\n              </a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\">\n                Favorited Articles\n              </a>\n            </li>\n\n          </ul>\n        </div>\n\n        <!-- List of articles -->\n        <div class=\"article-preview\">\n          <div class=\"article-meta\">\n            <a href=\"\"><img /></a>\n            <div class=\"info\">\n              <a href=\"\" class=\"author\">BradGreen</a>\n              <span class=\"date\">January 20th</span>\n            </div>\n            <button class=\"btn btn-outline-primary btn-sm pull-xs-right\">\n              <i class=\"ion-heart\"></i> 29\n            </button>\n          </div>\n          <a href=\"\" class=\"preview-link\">\n            <h1>How to build Angular apps that scale</h1>\n            <p>Building web applications is not an easy task. It\'s even hard to make ones that scale.</p>\n            <span>Read more...</span>\n            <ul class=\"tag-list\">\n              <li class=\"tag-default tag-pill tag-outline\">programming</li>\n              <li class=\"tag-default tag-pill tag-outline\">web</li>\n            </ul>\n          </a>\n        </div>\n\n\n      </div>\n\n    <!-- End row & container divs -->\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("settings/settings.html","<div class=\"settings-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n\n        <h1 class=\"text-xs-center\">Your Settings</h1>\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"URL of profile picture\"\n                ng-model=\"$ctrl.formData.image\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                ng-model=\"$ctrl.formData.username\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control form-control-lg\"\n                rows=\"8\"\n                placeholder=\"Short bio about you\"\n                ng-model=\"$ctrl.formData.bio\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"New Password\"\n                ng-model=\"$ctrl.formData.password\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\">\n              Update Settings\n            </button>\n\n          </fieldset>\n        </form>\n\n        <!-- Line break for logout button -->\n        <hr />\n\n        <button class=\"btn btn-outline-danger\"\n          ng-click=\"$ctrl.logout()\">\n          Or click here to logout.\n        </button>\n\n      </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("components/buttons/follow-btn.html","<button\n	class=\"btn btn-sm action-btn\"\n	ng-class=\"{ \'disabled\' : $ctrl.isSubmitting, \n							\'btn-outline-secondary\' : !$ctrl.user.following,\n							\'btn-secondary\': $ctrl.user.following }\"\n	ng-click=\"$ctrl.submit()\">\n	<i class=\"ion-plus-round\"></i>\n	&nbsp;\n	{{ $ctrl.user.following ? \'Unfollow\' : \'Follow\' }} {{ $ctrl.user.username }}\n</button>");}]);