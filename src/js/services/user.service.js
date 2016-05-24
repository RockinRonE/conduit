export default class User {
	constructor(AppConstants, $http) {
		'ngInject'; 

		this._AppConstants = AppConstants; // underscore indicates a service
		this._$http = $http; 

		//Object to store our user properties
		this.current = null; 
	}

	//Try to authenticate by registering or loggin in

	attemptAuth(type, credentials) {
		let route = (type === 'login') ? '/login' : '';
		return this._$http({
			url: this._AppConstants.api + '/users' + route,
			method: 'POST',
			data: {
				user: credentials
			}
		}).then(
		//on success
		(res) => {
			// Store the user's info for easy lookup
			this.current = res.data.user;

			return res; 
		}
		);
	}

}