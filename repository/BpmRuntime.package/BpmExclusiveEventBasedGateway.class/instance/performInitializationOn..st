other
performInitializationOn: aBpmProcessInstance
	"The receiver perform the creation operation in the process instance <aBpmProcessInstance>.
	This operatoin initialize the receiver inside the process <aBpmProcessInstance>"

	isClosed ifTrue: [^self]. "a transition has already triggered the receiver so there is nothing to do"

	self isSplitting 
	ifTrue: [definition getNextTimers do: [:timerEvent| self registerEvent: (self createEventBasedTimerEventForGateway: timerEvent)].].

"	self isSplitting 
	ifTrue: [aBpmProcessInstance finalizeGateway: self.
				self evaluateOutgoingTransitionsOn: aBpmProcessInstance]."

	"merging is disallowed in Gateway Events - use regular gateways"
	"self isMerging ifTrue: []. "