other
tearDown

	super tearDown.

	Smalltalk removeKey: #Test_Temps ifAbsent: [].

	self keepTempObjectsInSystem ifTrue: [^self].

	testRoot removeFrom: 'env-ue' in: 'ue' processesName: #('Process with Deferred Scripts') rolesName: #('manager') usersName: #('alberto')