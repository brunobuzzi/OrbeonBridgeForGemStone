process execution
performInitializationOn: aBpmProcessInstance attachTo: aBpmTaskInstance
	"The receiver perform the creation operation in the process instance <aBpmProcessInstance>.
	This operatoin initialize the receiver inside the process <aBpmProcessInstance>"

	aBpmTaskInstance attachEvent: self. 

	^self performInitializationOn: aBpmProcessInstance