xpdl tasks
acceptActivityNode: aXPDLActivityNode
	"The receiver check for:
	* Activities with no name or empty name"

	(visitedActivities identityIncludes: aXPDLActivityNode) 
	ifTrue: [^self]
	ifFalse: [visitedActivities add: aXPDLActivityNode].

	self acceptXpdlNode: aXPDLActivityNode.

	(aXPDLActivityNode getName isNil or: [aXPDLActivityNode getName isEmpty])	ifTrue: [self addActivityWithNoNameItem: aXPDLActivityNode].

	aXPDLActivityNode isMultiInstanceLoopSequential ifTrue: [self addUnsupportedMultiInstanceSequentialLoopItem: aXPDLActivityNode].

	(aXPDLActivityNode loopType = 'None') 
	ifFalse: [| blockAnalysis | 
		blockAnalysis := bpmEnvironment getCodeAnalyzerForTaskLoops.
		blockAnalysis 
			blockCode: aXPDLActivityNode loopCondition;
			analyze.
		blockAnalysis codeWarnings do: [:eachString | self addLoopConditionCodeWarningItem: aXPDLActivityNode description: eachString]. 
	].

	aXPDLActivityNode outTransitionsDo: [:each | each acceptVisitor: self].

	aXPDLActivityNode attachedEvents do: [:each | each acceptVisitor: self].