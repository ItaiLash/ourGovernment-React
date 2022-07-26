import React from "react";
import style from "./style_shared.module.css";

function Footer() {
  return (
    <footer classsName={style.footer}>
      Copyright &copy; 2022 by Itai Lashover, liav Weiss, Amichai Kafka annd
      Shoshana Levin. Part of "Computer science course at Ariel University". Use
      for learning purposes only.
    </footer>
  );
}

export default Footer;
