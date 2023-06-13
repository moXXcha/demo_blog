import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBook,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <FontAwesomeIcon icon={faHouse} />
      <Link to="/">ホーム</Link>
      <FontAwesomeIcon icon={faBook} />
      <Link to="/createpost">記事投稿</Link>
      {isAuth ? (
        <>
        <FontAwesomeIcon icon={faRightFromBracket} />
        <Link to="/logout">ログアウト</Link>
      </>
      ) : (
        <>
          <FontAwesomeIcon icon={faRightToBracket} />
          <Link to="/login">ログイン</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
