tests
testInOutTransitions3
	| task processDefinition |

	processDefinition := self getEmbedded02Process.
	task := processDefinition getScriptNamed: 'script-embedded-02' ifNone: [self assert: false].

	self assert: (processDefinition startEventOutTransitionsLast == task inTransitionsLast).

	self assert: (task outTransitionsLast == (processDefinition getEndEventNamed: 'end embedded 02' ifNone: [self assert: false]) inTransitionsLast).