export default class User {
	constructor(JWT, AppConstants, $http, $state, $q) {
		'ngInject'; 

		this._AppConstants = AppConstants; // underscore indicates a service
		this._$http = $http; 
		this._JWT = JWT; 
		this._$state = $state; 
		this._$q = $q; 

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
			// Set the JWT 
			this._JWT.save(res.data.user.token); 
			// Store the user's info for easy lookup
			this.current = res.data.user;

			return res; 
		}
		);
	}

	// Update the current user's name, email, password, etc. 
	update(fields) {
		return this._$http({
			url: this._AppConstants.api + '/user',
			method: 'PUT',
			data: { user: fields}
		}).then(
			(res) => {
				this.current = res.data.user; 
				return res.data.user; 
			}
		);
	}

	logout() {
		this.current = null; 
		this._JWT.destroy(); 
		// Do a hard reload of current state to ensure all data is flushed
		this._$state.go(this._$state.$current, null, { reload: true });
	}

	verifyAuth() {
		let deferred = this._$q.defer(); 

		// Check for JWT token first
		if (!this._JWT.get()) {
			deferred.resolve(false);
			return deferred.promise; 
		}

		// If there's a JWT and user is already set
		if (this.current) {
			deferred.resolve(true);

		// If current user isn't set, fetch from server
		// If server !401, set current user and resolve promise
		} else {
			this._$http({
				url: this._AppConstants.api + '/user',
				method: 'GET'
				
			}).then(
				(res) => {
					this.current = res.data.user;
					deferred.resolve(true);
				},
				// IF an error, means token was invalid
				(err) => {
					this._JWT.destroy(); 
					deferred.resolve(false);
				}
				//Reject automatically handled by auth interceptor
				//Will boot them to homepage
			);
		}
		return deferred.promise;
	}

	ensureAuthIs(bool) {
		let deferred = this._$q.defer(); 

		this.verifyAuth().then((authValid)=> {
			//if it's the opposite, redirect home
			if (authValid !== bool) {
				this._$state.go('app.home');
				deferred.resolve(false); 
			} else {
				deferred.resolve(true); 
			}
		});
		return deferred.promise;
	}

}































