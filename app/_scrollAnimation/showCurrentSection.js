export function showCurrentSection(currentSection, windowHeight, setDivVerticalTranslates) {
    const x = windowHeight;

    if (currentSection === "landing") {
      setDivVerticalTranslates([0, 0, 0, 0, 0]);
      return;
    }

    if (currentSection === "skills") {
      setDivVerticalTranslates([x, 0, 0, 0, 0]);
      return;
    }

    if (currentSection === "projects") {
      setDivVerticalTranslates([x, x, 0, 0, 0]);
      return;
    }

    if (currentSection === "experience") {
      setDivVerticalTranslates([x, x, x, 0, 0]);
      return;
    }

    if (currentSection === "contact") {
      setDivVerticalTranslates([x, x, x, x, 0]);
      return;
    }
};