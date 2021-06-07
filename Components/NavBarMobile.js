import { useState } from "react";

export default function NavBarMobile() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="NavMobileContainer">
      <button
        className="toggleButton"
        onClick={() => {
          setIsToggled(!isToggled);
          checkToggle(isToggled, document.querySelector(".MobileMenuItems"));
        }}
      >
        Menu
      </button>
      <div className="MobileMenuItems">
        <div className="NavMobileItem">Accueil</div>
        <div className="NavMobileItem">Nos Colliers</div>
        <div className="NavMobileItem">Nos Bagues</div>
        <div className="NavMobileItem">Nos Bracellets</div>
        <div className="NavMobileItem">Nos Boucles d'oreille</div>
        <div className="NavMobileItem">Contact</div>
      </div>
    </div>
  );
}

const checkToggle = (state, element) => {
  if (state == true) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
};
