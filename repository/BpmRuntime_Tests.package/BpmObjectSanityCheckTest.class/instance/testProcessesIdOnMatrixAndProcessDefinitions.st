test
testProcessesIdOnMatrixAndProcessDefinitions
	"The receiver compare the number of processes instances contained in <BpmProcessDefinition cache> with all tasks (process id) contained in all system matrices.
	The comparision is done with system matrices so the process to take into account are the one that have orbeon or seaside task instances (see issue: #1019)"
	| fromDefnitionIds fromMatrixIds diff |

	testRoot environmentsDo: [:environment |
		fromDefnitionIds := Set new.
		(environment getAllProcessInstances "to be compared with Matrix we have to remove script only processes"
			do: [:procInst | procInst getProcessesTreeAsCollection do: [:proc | proc hasAnyOrbeonOrSeasideTaskInstance ifTrue:[fromDefnitionIds add: proc processId]]]).

		fromDefnitionIds := fromDefnitionIds asSet asSortedCollection.

		fromMatrixIds := ((environment getAllAvailableTaskAssignments collect: [:each | each processId]),
								(environment getAllTakenTaskAssignments collect: [:each | each processId]),
								(environment getAllFinishedTaskAssignments collect: [:each | each processId])) asSet asSortedCollection.

		diff := fromMatrixIds difference: fromDefnitionIds.
		self assert: diff isEmpty.

		diff := fromDefnitionIds difference: fromMatrixIds.
		self assert: diff isEmpty.
	].