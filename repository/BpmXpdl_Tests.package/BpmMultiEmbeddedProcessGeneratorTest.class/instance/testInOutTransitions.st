tests
testInOutTransitions
	| task processDefinition subProc1 |

	processDefinition := self getTopProcess.
	subProc1 := processDefinition getSubProcessTaskNamed: 'embedded 01' ifNone: [self assert: false].
	task := processDefinition getScriptNamed: 'script' ifNone: [self assert: false].

	self assert: (processDefinition startEventOutTransitionsLast == task inTransitionsLast).

	self assert: (task outTransitionsLast == subProc1 inTransitionsLast).
	self assert: (subProc1 outTransitionsLast == (processDefinition getEndEventNamed: 'end' ifNone: [self assert: false]) inTransitionsLast).