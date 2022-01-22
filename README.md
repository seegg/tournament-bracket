# [tournament-bracket](https://seegg.github.io/tournament-bracket)

#### A simple matchup bracket generator made using reactjs.

Specifiy the number of participants or provide a list of names to generate a bracket.

If the number of participants is not a power of 2, a number of them will be chosen from the end of the list and directly advance to the next round to make it fit into this format.

Edit the names of participants with right-click(context menu), only possible on first round. Changing the name will also reset all results further up the bracket involving the affected matchup.

Hover over a name to highlight all the matchups as well as the paths involving that participant.

Select a winner by clicking the '>' icon to the right, both matchups needs to be filled before a winner can be selected.

Selecting a different winner will reset all results further up the bracket involving the affected matchup

The bracket itself is stored as a binary tree and made available throughout the app using a context provider.
The provider acts as a sort of scuffed global state manager and is only use for accessing the bracket references. Updates are done outside of the provider to avoid triggering a re-render of every consumer which is very noticeable on large brackets.

The layout is done mostly through flex-box in css, the size and shape depends on the cell and cell-container classes.