top banner
renderItemDescriptionTitleOn: html
	"The receiver render the summary of the object selected on the Lateral List "
	| iconName toolTip |

	html output: model processName. "process name"
	model isRunningWithException 
	ifTrue: [self renderFailedEvaluationAnchorOn: html].

	(model hasFinalized not and: [model canUnassign and:[(model user == self session user) and: [model hasAutomaticTaskAssignation not]]])
	ifTrue: [self renderReleaseAssignmentOn: html].

	iconName := (self componentValueAt: 'view.svg.map' ifAbsent: [false]) ifTrue: [#documentorganizationchart24Png] ifFalse: [#documentflowchart24Png].
	toolTip := (self componentValueAt: 'view.svg.map' ifAbsent: [false]) ifTrue: ['View Process Tasks'] ifFalse: ['View Process Map'].
	html anchor 
		class: 'cursor-pointer margin-left-5px';
		callback: [self viewSvgProcessMap]; 
		with: [html image url: (SEWAFIconLibrary / iconName); 
					title: (toolTip translateIn: self session);
					altText: (toolTip translateIn: self session)].

	html anchor 
		class: 'cursor-pointer';
		callback: [self downloadXPDLFile];
		with: [html image url: (SEWAFIconLibrary / #verybasicdownloadfromcloudfilled24Png); 
					title: ('Download XPDL Bizagi File' translateIn: self session);
					altText: ('Download XPDL Bizagi File' translateIn: self session)].