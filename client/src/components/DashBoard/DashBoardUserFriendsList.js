import React from "react";

// Context
import UserContext from "../Context/UserContext";

// MaterialUI Components
import { Paper, Typography, Divider, Grid } from "@material-ui/core";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

// Dialog Box component
import DashBoardFriendsDialog from "./DashBoardFriendsDialog";
// SnackBar
import SnackbarAlert from "../OtherComponents/SnackBar";

class DashBoardUserAnalysis extends React.Component {
  constructor() {
    super();
    this.state = {
      dialogBoxIsOpen: false,
      selectedFriendIndex: ""
    };
  }

  // show dialog box
  showDialogBox = index => {
    this.setState({
      dialogBoxIsOpen: true,
      selectedFriendIndex: index
    });
  };

  // remove friend from the list
  removeFriend = index => {
    var newFriendsData = this.context.userData;
    // Remove Friend Data
    newFriendsData.friends.splice(index, 1);
    // send the new friends Data to context
    this.context.updateFriendsListData(newFriendsData);

    this.setState({
      snackBarIsOpen: true,
      snackBarMessage: "Removed Successfully !"
    });
  };

  render() {
    return (
      <div>
        <SnackbarAlert
          isOpen={this.state.snackBarIsOpen}
          message={this.state.snackBarMessage}
          handleClose={e => {
            this.setState({ snackBarIsOpen: false });
          }}
        />
        <Paper style={styles.root}>
          <DashBoardFriendsDialog
            isOpen={this.state.dialogBoxIsOpen}
            selectedFriendIndex={this.state.selectedFriendIndex}
            handleClose={e => this.setState({ dialogBoxIsOpen: false })}
          />
          <Typography variant="h6" style={styles.headerText}>
            Friends List
          </Typography>
          <Divider />
          <br />
          {this.context.userData.friends.map((value, index) => {
            return (
              <div key={index}>
                <Grid container>
                  <Grid item md={8} xs={8}>
                    <Typography align="left" style={styles.friendsName}>
                      {value}
                    </Typography>
                  </Grid>
                  <Grid item md={4} xs={4}>
                    <FontAwesomeIcon
                      icon={faUserEdit}
                      style={styles.optionsIcons}
                      onClick={() => this.showDialogBox(index)}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={styles.optionsIcons}
                      onClick={() => {
                        this.removeFriend(index);
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </Paper>
      </div>
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
