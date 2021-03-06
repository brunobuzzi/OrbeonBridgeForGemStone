grant
applyConfiguration
	"The receiver apply the configuration into the System.
	1- Register the <BpmApplication> <application> in the <BpmEnvironment>
	2- Register the <BpmUser> <user> in the <BpmEnvironment>
	3- Create or get the existing <BpmFrontOfficeRole> <roleName> and add it to global cache
	4- Grant the <BpmUser> to the role" 

	environment registerApplication: application ifPresent: [] ifTaken: [InvalidCsvConfigurationException signal: 'The Application is already in other Environment'].
	environment registerUser: user ifPresent: [].
	
	role := (roleType = 'F') 
				ifTrue: [self systemRoot createNewOrGetExistingFrontOfficeRole: roleName in: application applicationName] 
				ifFalse: [self systemRoot createNewOrGetExistingBackOfficeRole: roleName in: application applicationName].

	role isAdmin: roleIsAdmin. 

	role grantUser: user ifPresent: [isUserGranted := true] "if the user already has the grant --> nothing is done"