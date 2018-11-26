test
testExecuteProcess_non_block_condition
	| currentTask gateway |

	self setNonBlockCondition.
	procInstance := procDefinition createAndStartProcessInstance: (self getUserNamed: 'alberto').

	self assert: (procInstance startEvent getDefinitionName = 'start').
	"Step 1 - Form [task-1]"
	currentTask := procInstance currentActivities last.
	"The non boolean result will produce an exception"
	[[self processExecutionSimulator takeAndFinalizeTask: currentTask withUserNamed: 'alberto' withForm: self formInstance_boolean_exit on: procInstance]
		on: EvaluationNotBlockException 
		do: [:ex | ex pass. self assert: procInstance isPaused.] ] on: NoNextArtifactBpmException do: [:ex | ex pass. self assert: true].
	self assert: procInstance isPaused.
	self assert: (currentTask getDefinitionName = 'all-field-types').
	"Step 2 - Gateway Evaluation"
	gateway := procInstance executedGateways asOrderedCollection last.
	self assert: (gateway getDefinitionName = 'gateway split').
	self assert: procInstance isPaused.

	"The gateway has an invalid condition --> the process is paused --> the gateway has no next transition --> NoNextArtifactBpmException --> message to the user"
	self assert: (((self getUserNamed: 'alberto') getSystemNotificationsIn: procInstance bpmEnvironment) anySatisfy: [:each | each processId = procInstance processId])