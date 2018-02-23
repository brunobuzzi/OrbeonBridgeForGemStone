file out
generateProcessInstanceOutput
	| stream converter |

	stream := PrintStream on: String new.
	converter := BizagiSvgConverter convert: (fileOutObject generateProcessMapFor: user) prettyPrinted.

	stream nextPutAll: self xmlHeader, String lf.

	fileOutObject isTaskAssignment ifTrue: [stream nextPutAll: (converter generateSVGFor: user assignment: fileOutObject)].
	fileOutObject isProcessInstance ifTrue: [stream nextPutAll: (converter generateSVGFor: user process: fileOutObject)].
	fileOutObject isTimerEvent ifTrue: [stream nextPutAll: (converter generateSVGFor: user process: fileOutObject process)].
	
	self downloadSvg: stream