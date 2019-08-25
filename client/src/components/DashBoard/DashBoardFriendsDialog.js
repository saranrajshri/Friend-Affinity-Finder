import React from "react";

// Context
import UserContext from "../Context/UserContext";

// Material UI Components
import {
  Dialog,
  DialogTitle,
  ListItem,
  List,
  TextField,
  Button
} from "@material-ui/core";

// SnackBar
import SnackbarAlert from "../OtherComponents/SnackBar";

class DashBoardFriendsDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      redditName: "",
      stackOverflowID: "",
      snackBarIsOpen: false,
      snackBarMessage: ""
    };
  }

  //   update the values
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateDetails = () => {
    this.context.updateFriendsRedditData(
      this.context.userData.friends[this.props.selectedFriendIndex],
      this.state.redditName
    );
    this.context.updateFriendsStackOverflowData(
      this.context.userData.friends[this.props.selectedFriendIndex],
      this.state.stackOverflowID
    );

    this.setState({
      snackBarIsOpen: true,
      snackBarMessage: "Details Updated"
    });
    this.props.handleClose();
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
        <Dialog
          onClose={this.props.handleClose}
          aria-labelledby="simple-dialog-title"
          open={this.props.isOpen}
        >
          <DialogTitle id="simple-dialog-title">
            Add Show Media Handles For{" "}
            {this.context.userData.friends[this.props.selectedFriendIndex]}
          </DialogTitle>
          <List style={styles.listBody}>
            <TextField
              id="standard-name"
              label="Reddit Username"
              margin="normal"
              name="redditName"
              onChange={this.handleChange}
              style={styles.textInput}
            />
            <TextField
              id="standard-name"
              label="StackOverflow ID"
              name="stackOverflowID"
              onChange={this.handleChange}
              margin="normal"
            />

            <ListItem>
              <Button
                variant="contained"
                color="primary"
                onClick={this.updateDetails}
              >
                Update
              </Button>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}
const styles = {
  listBody: {
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20
  },
  textInput: {
    marginRight: 20
  }
};
DashBoardFriendsDialog.contextType = UserContext;
export default DashBoardFriendsDialog;
