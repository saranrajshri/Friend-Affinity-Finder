import React from "react";

// Context
import UserContext from "../Context/UserContext";

// Material UI Components
import { Paper, Typography, Divider } from "@material-ui/core";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";

class DashBoardStackOverFlowDetails extends React.Component {
  render() {
    return (
      <div>
        <Paper style={styles.root}>
          <Typography variant="h6" align="left" style={styles.headerText}>
            <FontAwesomeIcon icon={faStackOverflow} style={styles.logo} />
            StackOverflow Interests
          </Typography>
          <Divider />
          {this.context.userData.stackoverflow_data[0].items
            .slice(0, 5)
            .map((details, index) => {
              return <Typography align="left">{details.name}</Typography>;
            })}
        </Paper>
      </div>
    );
  }
}
const styles = {
  root: {
    marginTop: 10,
    padding: 15
  },
  headerText: {
    marginBottom: 10,
    color: "#34495e",
    fontSize: 17
  },
  logo: {
    marginRight: 10
  }
};
DashBoardStackOverFlowDetails.contextType = UserContext;
export default DashBoardStackOverFlowDetails;
