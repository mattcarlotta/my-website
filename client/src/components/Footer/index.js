/* istanbul ignore file */
import styled from "styled-components";
import Footer from "./Footer";

export default styled(Footer)`
  @media (max-width: 650px) {
    margin-left: -20px;
  }

  height: 60px;
  background-color: #01406c;
  font-size: 15px;
  margin-top: 30px;

  ul {
  list-style-type: none;
  margin: 0 auto;
  padding-top: 5px;
  color: #1295f3;

    li {
      display: block;
      float: left;
      position: relative;
      height: 40px;
      margin-top: 15px;
    }

    li > a {
      padding: 10px 15px;
      color: #1295f3;
      transition: all 0.5s;
      text-decoration: none;

      &:hover {
        cursor: pointer;
        text-decoration: none;
        color: #ffffff;
      }

      &:focus {
        outline: none !important;
        text-decoration: none;
      }
    }
  }
}
`;
