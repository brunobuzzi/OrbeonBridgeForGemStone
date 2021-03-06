distribution
getTaskQuantityDistributionIn: assigmentCollection
	| distribution |

	distribution := OrderPreservingDictionary new.

	assigmentCollection do: [:eachAssingment | | currentValue key |
		key := "eachAssingment processName, '.'," eachAssingment taskName.
		currentValue := distribution at: key ifAbsent: [0].
		distribution at: key put: currentValue + 1.
	]. 

	^distribution