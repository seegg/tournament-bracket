/**
* Add or remove classes from arrow and divider elements corresponding to the current id
* to trigger to border colour transistion.
*/
export const highlightArrows = (id: number | null | undefined, arrowClass: string, cellClass: string, setHighlight: boolean) => {
  if (!id && id !== 0) return;
  let arrows = document.getElementsByClassName('arrow-' + id);
  let cells = document.getElementsByClassName('cell-' + id);
  for (let i = 0; i < arrows.length; i++) {
    if (setHighlight) {
      arrows[i].classList.add(arrowClass);
    } else {
      arrows[i].classList.remove(arrowClass);
    }
  }

  for (let j = 0; j < cells.length; j++) {
    if (setHighlight) {
      cells[j].classList.add(cellClass);
    } else {
      cells[j].classList.remove(cellClass);
    }
  }
}
