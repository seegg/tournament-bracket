/**
* Add or remove classes from arrow and divider elements corresponding to the current id
* to trigger to border colour transistion.
*/
export const highlightArrows = (id: number | null | undefined, highlightClass: string, setHighlight: boolean) => {
  if (!id && id !== 0) return;
  let eles = document.getElementsByClassName('arrow-' + id);
  for (let i = 0; i < eles.length; i++) {
    if (setHighlight) {
      eles[i].classList.add(highlightClass);
    } else {
      eles[i].classList.remove(highlightClass);
    }
  }
}
