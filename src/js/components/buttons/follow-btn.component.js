class FollowBtnCtrl {
	contructor(Profile, User, $state) {
		'ngInject';

		this._Profile = Profile; 
		this._User = User; 
		this._$state = $state; 
	}

	submit() {
		this.isSubmitting = true;

		if(!this._User.current) {
			this._$state.go('app.register');
			return; 
		}
	}
}

let FollowBtn = {
	bindings: {
		user: '='
	},
	controller: FollowBtnCtrl,
	templateUrl: 'components/buttons/follow-btn.html'
};

export default FollowBtn; 