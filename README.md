# [tournament-bracket](https://seegg.github.io/tournament-bracket)

#### A simple matchup bracket generator made using reactjs.

Specifiy the number of participants or provide a list of names to generate a bracket.

If the number of participants is not a power of 2, some will automatically advance to the next round to make it fit into this format.

Hover over a name to highlight all the matchups as well as the paths involving that participant.

Select a winner by clicking on their name, both matchups needs to be filled before a winner can be selected.

Selecting a different winner will reset all results further up the bracket involving the affected matchup

The bracket itself is stored as a binary tree and made available throughout the app using a context provider.
The provider acts as a sort of scuffed global state manager and is only use for accessing the bracket references. Updates are done outside of the provider to avoid triggering a re-render of every consumer which is very noticeable on large brackets.

The layout is done mostly through flex-box in css, the size and shape depends on the cell and cell-container classes.