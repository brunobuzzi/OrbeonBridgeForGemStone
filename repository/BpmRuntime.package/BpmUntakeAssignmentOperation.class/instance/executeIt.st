action
executeIt
	"The receiver execute all steps to unassign the <BpmTaskAssignment> <assignment> from the <BpmUser> <user>"

	"the task was finalized by the user before the manager could make the untake operation"
	(user includesCurrentAssignment: assignment in: self bpmEnvironment) ifFalse: [^self].

	assignment removeFromCurrentMatrix; "remove the assignment from taken matrix"
		addToAvailableMatrix. "add to free matrix, <user> set to nil"

	"when performers are present this operation must be performed after #removeFromCurrentMatrix and #addToAvailableMatrix (see issue #948)"
	"remove the last user and role from the BpmTaskInstace"
	assignment hasPerformers ifTrue: [assignment removeLastWorker].

	"remove it from the the current assignment inbox"
	"add the assignment to released inbox"
	user moveFromCurrentToReleased: assignment in: self bpmEnvironment.

	self sendInformationMessage.