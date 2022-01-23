# [tournament-bracket](https://seegg.github.io/tournament-bracket)

#### A matchup bracket generator made using reactjs.

Specifiy the number of participants or provide a list of names to generate a bracket.

Right click(context menu) to edit participant names. Only possible for first round.

Hover over a name to highlight all the matchups as well as the paths involving that participant.

Hover over the participant and click the ✔ to select them as the matchup winner.

Hover over the participant and click the ✗ to remove that result.

The bracket itself is stored as a binary tree and made available throughout the app using a context provider.
The provider acts as a sort of scuffed global state manager and is only use for accessing the bracket references. Updates are done outside of the provider to avoid triggering a re-render of every consumer which is very noticeable on large brackets.

The layout is done mostly through flex-box in css, the size and shape depends on the cell and cell-container classes.
