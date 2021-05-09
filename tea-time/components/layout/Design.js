import { Fragment } from "react";
import MainHeader from "./MainHeader";

function Design(props) {
    return (
      <Fragment>
        <meta name="viewport" content="width=device-width, initial-scale=0.5" />
        <MainHeader />
        <main>{props.children}</main>
      </Fragment>
    );
  }
  
  export default Design;