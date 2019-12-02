/* istanbul ignore file */
import styled from "styled-components";
import Header from "./Header";

export default styled(Header)`
  @media (max-width: 650px) {
    margin-left: -20px;
  }

  @media (max-width: 500px) {
    .title {
      display: none;
    }
  }

  height: 60px;
  font-size: 15px;

  .icon {
    margin-right: 8px;
    position: relative;
    top: 2px;
  }

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
