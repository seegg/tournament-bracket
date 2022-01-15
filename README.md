# [tournament-bracket](https://seegg.github.io/tournament-bracket)

#### A simple matchup bracket generator made using reactjs.

Specifiy the number of participants or provide a list of names to generate a bracket.

If the number of participants is not a power of 2, some will be automatically advanced to the next round to make it fit into this format.

Select a winner by clicking on their name, both matchups needs to be filled before a winner can be selected.

Selecting a different winner will reset all results further up the bracket involving the affected matchup.

The boxes is position mostly with flex-box and uses minimal javascript. Changing the cell and cell-container class in style.css will automatically adjust the size of layout.