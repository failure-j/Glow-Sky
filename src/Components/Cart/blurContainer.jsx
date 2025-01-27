import { useRef, useEffect } from "react";
import style from "./blurContainerstyle.module.css";
import styles from "./cartStyle.module.css";

import Cart from "./Cart";
export default function BlurContainer({ children, setToggle }) {
  const inputEl = useRef();

  function handleClick(e) {
    console.log(e.target);

    const cart = document.querySelector(`.${styles.CartContainer}`);

    if (
      inputEl.current &&
      inputEl.current.contains(e.target) &&
      !cart.contains(e.target)
    ) {
      setToggle((prev) => !prev);
    }
  }

  useEffect(() => {
    inputEl.current.addEventListener("mousedown", handleClick);
    return () => {
      if (inputEl.current) {
        inputEl.current.removeEventListener("mousedown", handleClick);
      }
    };
  }, []);

  return (
    <div ref={inputEl} className={style.container}>
      {children}
    </div>
  );
}
