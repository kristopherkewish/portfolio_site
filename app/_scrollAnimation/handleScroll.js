import _ from "lodash";

export function handleScroll(setCurrentSection, totalSectionNumber) {
    return _.debounce(undebouncedScrollHandler(setCurrentSection, totalSectionNumber), 200); // Debouncing ensures scroll handler only fires once per wheel event
}

function undebouncedScrollHandler(setCurrentSection, totalSectionNumber) {
  return (event) => {
    const scrollDirection = getScrollDirection(event);
    changeSection(scrollDirection, setCurrentSection, totalSectionNumber);
    logScroll(scrollDirection);
  }
}

function getScrollDirection(event) {
  if(event.deltaY > 0) {
    return "up"
  } else {
    return "down"
  }
 }

function changeSection(scrollDirection, setCurrentSection, totalSectionNumber) {
    if(scrollDirection == "up") {
        nextSection(setCurrentSection, totalSectionNumber);
        return;
    }

    if(scrollDirection == "down") {
        previousSection(setCurrentSection);
        return;
    }
}

function nextSection(setCurrentSection, totalSectionNumber) {
    setCurrentSection(prevSection => {
        if(prevSection >= totalSectionNumber - 1) {
            return prevSection;
        }

        return prevSection + 1
    });
}

function previousSection(setCurrentSection) {
    setCurrentSection(prevSection => {
        if(prevSection <= 0) {
            return prevSection;
        }

        return prevSection - 1
    });
}