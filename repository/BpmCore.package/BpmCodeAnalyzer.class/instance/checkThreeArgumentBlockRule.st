code analyzer
checkThreeArgumentBlockRule
	"Receiver's block must be a THREE argument block."
	| treeSearcher resultNodes |

	treeSearcher := RBParseTreeSearcher new.
	treeSearcher 
		matches: '[:`var1 :`var2 :`var3 | | `@temps |  ``@.Stmts.]'
		do: [:aNode :answer | answer add: aNode; yourself].

	resultNodes := treeSearcher executeTree: parsedNode initialAnswer: Set new.

	resultNodes ifNotEmpty: [^self]. "the block has one argument"

	^self addBlockWarning: 'Block must have three argument'