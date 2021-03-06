double dispatch type
performTimerEventInitializationOn: aBpmProcessInstance
	"The receiver perform the creation operation in the process instance <aBpmProcessInstance>.
	This operatoin initialize the receiver inside the process <aBpmProcessInstance>"

	"attached event were already put on <BpmTimerEventMonitor> when the parent task <BpmTaskInstance> was created"
	self isAttachedEvent ifTrue: [^self].

	"then the receiver is an independent timer (no attached to any task) so it is added to the <BpmTimerEventMonitor>"
	self systemRoot startMonitoringArtifact: self.