interface IIsOverflwon {
  clientWidth: number;
  clientHeight: number;
  scrollWidth: number;
  scrollHeight: number;
}

const isOverflown = ({
  clientWidth,
  clientHeight,
  scrollWidth,
  scrollHeight,
}: IIsOverflwon) => scrollWidth > clientWidth || scrollHeight > clientHeight;

export const resizeText = ({
  element,
  parent,
}: {
  element: HTMLDivElement;
  parent: HTMLDivElement;
}) => {
  let i = 12;
  let overflow = false;
  const maxSize = 36;

  while (!overflow && i < maxSize) {
    element.style.fontSize = `${i}px`;
    overflow = isOverflown(parent);
    if (!overflow) i++;
  }

  // revert to last state where no overflow happened:
  element.style.fontSize = `${i - 1}px`;
};
