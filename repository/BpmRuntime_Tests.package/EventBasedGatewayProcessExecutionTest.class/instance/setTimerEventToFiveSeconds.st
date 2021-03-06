other
setTimerEventToFiveSeconds
	| timerDefinition |

	timerDefinition := receiverProcesDef getAllArtifacts detect: [:each | each isTimerEvent] ifNone: [self assert: false].
	timerDefinition setActivationBlock:  [:lastExecutedTime :currentTime :process | (lastExecutedTime plusSeconds: 5) <= currentTime].