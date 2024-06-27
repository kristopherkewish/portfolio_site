import _ from "lodash";

// MOBILE SWIPE HANDLING - START
let touchStartY = 0;

export function handleTouchStart(event) {
  touchStartY = event.touches[0].clientY;
}

export function handleTouchEnd(setCurrentSection, totalSectionNumber) {
  return _.debounce(
    undebouncedTouchEndHandler(setCurrentSection, totalSectionNumber),
    200,
    { leading: true, trailing: false },
  );
}

function undebouncedTouchEndHandler(setCurrentSection, totalSectionNumber) {
  return (event) => {
    const touchEndY = event.changedTouches[0].clientY;
    const deltaY = touchStartY - touchEndY;
    const threshold = 50; // Prevents accidentally swiping, or swiping vertically on horizontal swipes

    if (Math.abs(deltaY) < threshold) {
      return;
    }

    if (deltaY > 0) {
      nextSection(setCurrentSection, totalSectionNumber);
    } else if (deltaY < 0) {
      previousSection(setCurrentSection);
    }
  };
}
// MOBILE SWIPE HANDLING - END

export function handleScroll(setCurrentSection, totalSectionNumber) {
  return _.debounce(
    undebouncedScrollHandler(setCurrentSection, totalSectionNumber),
    50,
    { leading: true, trailing: false },
  ); // Debouncing ensures scroll handler only fires once per wheel event
}

function undebouncedScrollHandler(setCurrentSection, totalSectionNumber) {
  return (event) => {
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
