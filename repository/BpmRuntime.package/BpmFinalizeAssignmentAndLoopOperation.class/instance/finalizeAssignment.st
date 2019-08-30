action
finalizeAssignment
	"The receiver finalize the assingment and do a Loop.
	If the loop condition <aBpmCodeCondition> is <true>: the loop keep running
	If the loop condition <aBpmCodeCondition> is <false>: the loop is interrupted "
	| finishedMatrix currentMatrix task taskDefinition takenMatrix |

	task := assignment task.
	taskDefinition := task definition.

	self sendInformationMessage.

	((taskDefinition evaluateLoopIn: assignment process) result and: [taskDefinition loopMaximum > task numberOfIterations])
	ifTrue: [task addIterationBy: user.
				assignment finalizeWithoutEndingTask. "finalize the assignment but does NOT finalize the task"
				isFinalized := true.
				"remove the assignment from taken matrix"
				takenMatrix := assignment process getTakenProcessMatrix.
				takenMatrix removeAssignment: assignment.
				user moveFromCurrentToFinished: assignment in: self bpmEnvironment. "<user> move from current assignments to finished <assignment> "
				currentMatrix := self defaultAvailableTasksMatrixClass getMatrixForApplicationNamed: assignment applicationName.
				currentMatrix addTask: task. "a new Assignment is created for the same Task but is another cycle in the Loop"
				task createNewLoopForPerformers. "store current performers information and create newone for the next loop"
				"add the assignment to finished matrix"
				finishedMatrix := self defaultFinishedTasksMatrixClass getMatrixForApplicationNamed: assignment applicationName.
				finishedMatrix addAssignment: assignment.]
	ifFalse: [(BpmFinalizeAssignmentAndResumeOperation on: assignment by: user) executeIt].