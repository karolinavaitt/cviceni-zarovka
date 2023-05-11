export const Bulb = (props) => {
  const { isOn } = props;

  const bulbElm = document.createElement("div");
  bulbElm.classList.add("bulb");

  if (isOn) {
    bulbElm.classList.add("bulb--on");
  }

  bulbElm.addEventListener("click", () => {
    bulbElm.replaceWith(
      Bulb({
        isOn: !isOn,
      })
    );
  });

  return bulbElm;
};
