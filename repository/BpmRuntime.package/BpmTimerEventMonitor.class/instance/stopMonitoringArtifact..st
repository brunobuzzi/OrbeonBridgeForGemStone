monitor process artifact
stopMonitoringArtifact: aBpmArtifactInstance
	"The receiver stop monitoring <aBpmArtifactInstance> "

	^monitoredEvents remove: aBpmArtifactInstance ifAbsent: [EventInstanceNotFoundException signal: 'This Event is NOT being Monitored !!!']