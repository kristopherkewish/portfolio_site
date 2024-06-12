import _ from "lodash";

export function handleScroll(setCurrentSection, totalSectionNumber) {
  return _.debounce(
    undebouncedScrollHandler(setCurrentSection, totalSectionNumber),
    50,
    { leading: true, trailing: false },
  ); // Debouncing ensures scroll handler only fires once per wheel event
}

function undebouncedScrollHandler(setCurrentSection, totalSectionNumber) {
  return (event) => {
    // const isLargeScroll = ;
    const scrollDirection = getScrollDirection(event);
    changeSection(scrollDirection, setCurrentSection, totalSectionNumber);
  };
}

function getScrollDirection(event) {
  if (event.deltaY > 0) {
    return "up";
  } else {
    return "down";
  }
}

function changeSection(scrollDirection, setCurrentSection, totalSectionNumber) {
  if (scrollDirection == "up") {
    nextSection(setCurrentSection, totalSectionNumber);
    return;
  }

  if (scrollDirection == "down") {
    previousSection(setCurrentSection);
    return;
  }
}

function nextSection(setCurrentSection, totalSectionNumber) {
  setCurrentSection((prevSection) => {
    const isLastSection = prevSection >= totalSectionNumber - 1;
    if (isLastSection) {
      return prevSection;
    }

    return prevSection + 1;
  });
}

function previousSection(setCurrentSection) {
  setCurrentSection((prevSection) => {
    const isFirstSection = prevSection <= 0;
    if (isFirstSection) {
      return prevSection;
    }

    return prevSection - 1;
  });
}
