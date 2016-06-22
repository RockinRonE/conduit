function EditorConfig($stateProvider) {
	'ngInject';

	$stateProvider
	.state('app.editor', {
		url: '/editor/:slug',
		controller: 'EditorCtrl',
		controllerAs: '$ctrl',
		templateUrl: 'editor/editor.html',
		title: 'Editor',
		resolve: {
			auth: function(User) {
				return User.ensureAuthIs(true);
			},
			article: function(Articles, User, $state, $stateParams) {
				// If we're trying to edit an article
				if ($stateParams.slug) {
					return Articles.get($stateParams.slug).then(
						(article) => {
							// If the current user is the author, resolve the article data
							if (User.current.username === article.author.username) {
								return article; 

							// otherwise redirect to the home page
							} else {
								$state.go('app.home');
							}
						},

						// If there's an error, (article DOE, etc), redirect to homepage
						(err) => $state.go('app.home')
					);
					// If a new article, return null
				} else {
					return null; 
				}
			}
		}
	});
}

export default EditorConfig; 