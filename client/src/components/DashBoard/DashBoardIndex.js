import React from "react";

// Context
import UserContext from "../Context/UserContext";

// MaterialUI Components
import { Grid, Container } from "@material-ui/core";

// Components
import DashBoardProfileDetails from "./DashBoardProfileDetails";
import DashBoardUserAnalysis from "./DashBoardUserAnalysis";
import DashBoardUserFriendsList from "./DashBoardUserFriendsList";
import DashBoardRedditDetails from "./DashBoardRedditDetails";
import DashBoardStackOverFlowDetails from "./DashBoardStackOverFlowDetails";

class DashBoardIndex extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
              <DashBoardProfileDetails />
              {this.context.userData.subreddits[0] !== undefined ? (
                <DashBoardRedditDetails />
              ) : null}
              {this.context.userData.stackoverflow_data[0] !== undefined ? (
                <DashBoardStackOverFlowDetails />
              ) : null}
            </Grid>
            <Grid item md={6} xs={12}>
              <DashBoardUserAnalysis />
            </Grid>
            <Grid item md={3} xs={12}>
              <DashBoardUserFriendsList />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

const styles = {
  root: {
    marginTop: "2%"
  }
};
DashBoardIndex.contextType = UserContext;
export default DashBoardIndex;
