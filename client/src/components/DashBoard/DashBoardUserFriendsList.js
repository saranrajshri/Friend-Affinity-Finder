import React from "react";

// Context
import UserContext from "../Context/UserContext";

// MaterialUI Components
import { Paper, Typography, Divider, Grid } from "@material-ui/core";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class DashBoardUserAnalysis extends React.Component {
  render() {
    return (
      <Paper style={styles.root}>
        <Typography variant="h6" style={styles.headerText}>
          Friends List
        </Typography>
        <Divider />
        <br />
        {this.context.userData.friends.map((value, index) => {
          return (
            <div key={index}>
              <Typography align="left" style={styles.friendsName}>
                {value}
              </Typography>
            </div>
          );
        })}
      </Paper>
    );
  }
}
const styles = {
  root: {
    padding: 15
  },
  friendsName: {
    color: "#2c3e50"
  },
  headerText: {
    color: "#34495e"
  },
  optionsIcons: {
    color: "#7f8c8d",
    marginRight: 15
  }
};
DashBoardUserAnalysis.contextType = UserContext;
export default DashBoardUserAnalysis;
