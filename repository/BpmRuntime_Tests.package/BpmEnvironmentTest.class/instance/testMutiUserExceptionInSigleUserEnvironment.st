other
testMutiUserExceptionInSigleUserEnvironment
	"In a user single environment (areUsersMultiEnvironment: false) the same user can NOT be assigned to more than one <BpmEnvironment>.
	With the exception of 'admins' <BpmEnvironment>.
	So the rule is: a user can be assigned to 'admins' <BpmEnvironment> and other <BpmEnvironment>. A max of two if one of them is 'admins' "
	| env1 env2 newUser currentMode |

	currentMode := self defaultEnvironmentClass areUsersMultiEnvironment.
	self defaultEnvironmentClass areUsersMultiEnvironment: false.

	newUser := BpmUser getExistingOrNewUserNamed: 'alfred'.
	env1 := (BpmEnvironment newNamed: 'env1') addToCache.
	self assert: (self defaultEnvironmentClass includesEnvironmentNamed: env1 name).
	env2 := (BpmEnvironment newNamed: 'env2') addToCache.
	self assert: (self defaultEnvironmentClass includesEnvironmentNamed: env2 name).

	env1 registerUser: newUser.
	self assert: (env1 includesUserNamed: newUser username).

	[env2 registerUser: newUser] on: ImproperBpmOperationException do: [:ex | self assert: true].
	self deny: (env2 includesUserNamed: newUser username).

	"this is the exception - on a user single environment <newUser> is registed in the second environment 'admins' "
	"  'admis' is a special environment "
	self defaultEnvironmentClass getAdminsEnvironment registerUser: newUser.
	self assert: (self defaultEnvironmentClass getAdminsEnvironment includesUserNamed: newUser username).

	self defaultEnvironmentClass getAdminsEnvironment unregisterUser: newUser.
	self deny: (self defaultEnvironmentClass getAdminsEnvironment includesUserNamed: newUser username).

	env1 unregisterUser: newUser.
	self deny: (env1 includesUserNamed: newUser username).

	env1 removeFromCache.
	self deny: (self defaultEnvironmentClass includesEnvironmentNamed: env1 name).
	env2 removeFromCache.
	self deny: (self defaultEnvironmentClass includesEnvironmentNamed: env2 name).

	self defaultEnvironmentClass areUsersMultiEnvironment: currentMode.

	newUser removeFromCache.
	self assert: (BpmUser getUserNamed: newUser username) isNil.

	self defaultEnvironmentClass areUsersMultiEnvironment: currentMode.