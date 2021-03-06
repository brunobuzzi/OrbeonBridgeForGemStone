render transitions
renderTransitionActionsOn: html for: aBpmArtifactInstance

	aBpmArtifactInstance isTask ifFalse: [^self].
	
	aBpmArtifactInstance processIsPausedOrAborted "if the BpmProcess has been paused or aborted --> no link to the task"
	ifFalse: [
		aBpmArtifactInstance renderHtmlOn: html for: self. "double dispatching to render an Orbeon Link or a Seaside Component"
		(aBpmArtifactInstance hasForm and: [aBpmArtifactInstance isDone not])
		ifTrue: [aBpmArtifactInstance definition getErrorsEvents do: [:errorDefinition | self renderTriggerErrorEventOn: html from: aBpmArtifactInstance event: errorDefinition]]. 

		(aBpmArtifactInstance isSubprocess not and: [aBpmArtifactInstance isDone not]) ifTrue: [self renderCloseAndSendFormOn: html for: aBpmArtifactInstance.].
		aBpmArtifactInstance isStandardLoop ifTrue: [self renderStandardLoopOn: html for: aBpmArtifactInstance].
	]