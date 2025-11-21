document.querySelectorAll('input[type="checkbox"]').forEach((toggle) => {
  toggle.addEventListener("change", () => {
    const expanded = toggle.checked;

    toggle.setAttribute("aria-expanded", expanded);

    const controlledElId = toggle.getAttribute("aria-controls");
    const controlledEl = document.getElementById(controlledElId);

    if (!controlledEl) {
      return;
    }

    controlledEl.setAttribute("aria-hidden", !expanded);
  });
});
