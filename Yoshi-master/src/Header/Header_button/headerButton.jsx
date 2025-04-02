import "./headerButton.css";

export default function HeaderButton({
  setVisibility,
  visibility,
  menuColor,
  setMenuColor,
}) {
  function visibilityFunc() {
    if (visibility === "none") {
      setVisibility("block");
      setMenuColor("white");
    } else {
      setVisibility("none");
      setMenuColor("black");
    }
  }
  return (
    <>
      <div class="header-button_menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="menu-btn"
          viewBox="0 0 16 16"
          style={{
            color: menuColor,
          }}
          onClick={visibilityFunc}
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
    </>
  );
}
