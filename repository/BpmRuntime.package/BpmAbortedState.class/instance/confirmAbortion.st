execution
confirmAbortion
"
    - Remove all tasks from BpmAvailabeTasksMatrix, BpmTakenTasksMatrix, BpmFinishedTasksMatrix
    - Remove assignments from BpmUsers.
    - Remove timer events from BpmTimerEventMonitor
	- Remove BpmProcessInstance from BpmProcessDefinition processInstances
	- Remove all AppFieldValue subinstances from BpmProcessDefinition formFieldInstances
    - What else ?
"

	isConfirmed ifFalse: [^AbortionNotConfirmedException signal: 'The Aborted state must be confirmed before execution'].

	self removeTakenAssignmentsFromUsers.

	self removeAllAssigmentsFromAvailableMatrix.
	self removeAllAssigmentsFromTakenMatrix.
	self removeAllAssigmentsFromFinishedMatrix.

	self removeTimerEventsFromEventMonitor.

	self removeAppFieldValuesFromProcessDefinition.

	process addToAbortedProcess.