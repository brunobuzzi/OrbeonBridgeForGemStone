test
testExecuteProcess_visaAnalizeAndRejected
	| currentTask gateway endArtifact subProcessL1 subProcessL2 |

	procInstance := procDefinition createAndStartProcessInstance: (self getUserNamed: 'andrew vo').

	self assert: (procInstance startEventName = 'visa apply start').
	"Step 1 - Form [citizen-appliance]"
	currentTask := procInstance currentActivities last.
	self processExecutionSimulator takeAndFinalizeTask: currentTask withUserNamed: 'andrew vo' withForm: self formInstance_citizen_appliance on: procInstance.
	self assert: (currentTask getDefinitionName = 'citizen-appliance').
	"Step 2 - Form [check-basic-data]"
	currentTask :=  procInstance currentActivities last.
	self processExecutionSimulator takeAndFinalizeTask: currentTask withUserNamed: 'andrew vo' withForm: self formInstance_check_basic_data on: procInstance.
	self assert: (currentTask getDefinitionName = 'check-basic-data').
	"Step 3 - Gateway Evaluation"
	gateway := procInstance executedGatewaysLast.
	self assert: (gateway getDefinitionName = 'accept basic data').
	"Step 4 - Form [check-previous-appliance]"
	currentTask := procInstance currentActivities last.
	self processExecutionSimulator takeAndFinalizeTask: currentTask withUserNamed: 'andrew vm' withForm: self formInstance_check_previous_appliance on: procInstance.
	self assert: (currentTask getDefinitionName = 'check-previous-appliance').
	"Sub Process Execution [home-office-check] starts here "
		subProcessL1 := procInstance subprocessesLast.
		self assert: (procInstance includesSubProcess: subProcessL1).
		self assert:  subProcessL1 isSubProcess.
		self assert: (subProcessL1 startEventName = 'start visa check').
		"Step 1 [subproc] - Form [check-applicant-record]"
		currentTask := subProcessL1 currentActivities last.
		self processExecutionSimulator takeAndFinalizeTask: currentTask withUserNamed: 'andrew vc' withForm: (self formInstance_check_applicant_record: subProcessL1) on: subProcessL1.
		self assert: (currentTask getDefinitionName = 'check-applicant-record').
		"Step 2 [subproc] - Form [applicant-home-office-report]"
		currentTask := subProcessL1 currentActivities last.
		self processExecutionSimulator takeAndFinalizeTask: currentTask withUserNamed: 'andrew vc' withForm: (self formInstance_applicant_home_office_report: subProcessL1) on: subProcessL1.
		self assert: (currentTask getDefinitionName = 'applicant-home-office-report').
		"Sub Process Execution [check-financial-data]"
			subProcessL2 := subProcessL1 subprocessesLast.
			self assert: (subProcessL1 includesSubProcess: subProcessL2).
			self assert:  subProcessL2 isSubProcess.
			self assert: (subProcessL2 startEventName = 'start financial check').
			"Step 1 [subproc] - Form [check-accounts]"
			currentTask := subProcessL2 currentActivities last.
			self processExecutionSimulator takeAndFinalizeTask: currentTask withUserNamed: 'andrew fo' withForm: (self formInstance_check_accounts: subProcessL2) on: subProcessL2.
			self assert: (currentTask getDefinitionName = 'check-accounts').
			"Step 2 [subproc] - Form [check-accounts]"
			currentTask := subProcessL2 currentActivities last.
			self processExecutionSimulator takeAndFinalizeTask: currentTask withUserNamed: 'andrew po' withForm: (self formInstance_check_properties: subProcessL2) on: subProcessL2.
			self assert: (currentTask getDefinitionName = 'check-properties').
			"Step 3 [subproc] - Form [check-accounts]"
			currentTask := subProcessL2 currentActivities last.
			self processExecutionSimulator takeAndFinalizeTask: currentTask withUserNamed: 'andrew do' withForm: (self formInstance_check_debts: subProcessL2) on: subProcessL2.
			self assert: (currentTask getDefinitionName = 'check-debts').
			"Step 3 [subproc] - Form [check-accounts]"
			currentTask := subProcessL2 currentActivities last.
			self processExecutionSimulator takeAndFinalizeTask: currentTask withUserNamed: 'andrew fo' withForm: (self formInstance_financial_report: subProcessL2) on: subProcessL2.
			self assert: (currentTask getDefinitionName = 'financial-report').
			"Sub Process [check-financial-data] ends and gives control to previous process"
		"Sub Process [check-applicant-record] ends and gives control to main process"
	"Top Process [visa-appliance] resume execution "
	"Step 5 - Form [analyze-appliance]"
	currentTask := procInstance currentActivities last.
	self processExecutionSimulator takeAndFinalizeTask: currentTask withUserNamed: 'andrew vm' withForm: self formInstance_analyze_appliance_2 on: procInstance.
	self assert: (currentTask getDefinitionName = 'analyze-appliance').
	"Step 6 - Gateway Evaluation"
	gateway := procInstance executedGatewaysLast.
	self assert: (gateway getDefinitionName = 'granted').
	"Step 7 - Visa has been rejected"
	self assert: (procInstance currentActivities isEmpty).

	endArtifact := procInstance endEventsAsOrderedCollection detect: [:each | each getDefinitionName = 'visa apply end'] ifNone: [self assert: false].
	self assert: endArtifact isEndEvent.