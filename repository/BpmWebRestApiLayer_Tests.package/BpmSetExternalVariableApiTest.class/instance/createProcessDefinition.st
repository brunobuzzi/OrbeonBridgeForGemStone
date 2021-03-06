other
createProcessDefinition
	| xpdlReader processGenerator |

	xpdlReader := (self defaultXpdlReaderClass forProcessNamed: 'all gateways' withString: XPDLProcessDefinitionTemplate xpdlExample_all_gateways)
			connectProcesses;
			yourself.

	processGenerator := BpmProcessGenerator on: xpdlReader xpdlPackages.
	processGenerator mapProcess: 'all gateways' toApplication: (self getOrbeonApplicationClass getExistingApplicationOrCreateNewNamed: 'ue-test');
		generateAllProcess.

	processGenerator processes do: [:each | each addToCache].

	^processGenerator getProcessDefinitionNamed: 'all gateways' ifNone: [self assert: false].