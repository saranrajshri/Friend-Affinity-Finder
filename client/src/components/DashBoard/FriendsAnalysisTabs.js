import React from "react";

// Material Ui Components
import {
  Typography,
  Paper,
  Tabs,
  Tab,
  Divider,
  Grid,
  Avatar
} from "@material-ui/core/";

// Context
import UserContext from "../Context/UserContext";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class FriendsAnalysisTabs extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      isListOpen: false
    };
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue
    });
  };

  handleClick = () => {
    this.setState({
      isListOpen: !this.state.isListOpen
    });
  };
  render() {
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Moderate Positivity" />
          <Tab label="High Positivity" />
          <Tab label="Low Positivity" />
        </Tabs>
        {this.state.value === 0 && (
          <TabContainer>
            {this.context.friendsData.map((value, index) => {
              if (value.cluster === "Moderate Positivity") {
                return (
                  <div key={index}>
                    <Grid container style={styles.container}>
                      <Grid item md={1}>
                        <Avatar src={value.profile_pic_url} />
                      </Grid>
                      <Grid item md={11}>
                        <Typography
                          align="left"
                          variant="h6"
                          style={styles.userName}
                        >
                          {value.name}
                        </Typography>
                        <Typography align="left" style={styles.screenName}>
                          {"@"}
                          {value.screen_name}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container style={styles.resultsContainer}>
                      <Grid item md={8}>
                        <Typography align="left" style={styles.features}>
                          Agreeableness :{" "}
                          {(value.personality[3].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                        <Typography align="left" style={styles.features}>
                          Conscientiousness :
                          {(value.personality[1].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                        <Typography align="left" style={styles.features}>
                          Openess :{" "}
                          {(value.personality[0].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                        <Typography align="left" style={styles.features}>
                          Extraversion :{" "}
                          {(value.personality[2].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                        <Typography align="left" style={styles.features}>
                          Emotional Range :{" "}
                          {(value.personality[4].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                      </Grid>
                      <Grid item md={4}>
                        {value.stackoverflow_data.items !== undefined ? (
                          <Typography varinat="h6" style={styles.interests}>
                            Interests
                          </Typography>
                        ) : null}
                        {value.stackoverflow_data.items !== undefined
                          ? value.stackoverflow_data.items
                              .slice(0, 3)
                              .map((val, index_1) => {
                                return (
                                  <Typography key={index_1}>
                                    {val.name}
                                  </Typography>
                                );
                              })
                          : null}
                      </Grid>
                    </Grid>
                    <Divider />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </TabContainer>
        )}
        {this.state.value === 1 && (
          <TabContainer>
            {this.context.friendsData.map((value, index) => {
              if (value.cluster === "High Positivity") {
                return (
                  <div key={index}>
                    <Grid container style={styles.container}>
                      <Grid item md={1}>
                        <Avatar src={value.profile_pic_url} />
                      </Grid>
                      <Grid item md={11}>
                        <Typography
                          align="left"
                          variant="h6"
                          style={styles.userName}
                        >
                          {value.name}
                        </Typography>
                        <Typography align="left" style={styles.screenName}>
                          {"@"}
                          {value.screen_name}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container style={styles.resultsContainer}>
                      <Grid item md={8}>
                        <Typography align="left" style={styles.features}>
                          Agreeableness :{" "}
                          {(value.personality[3].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                        <Typography align="left" style={styles.features}>
                          Conscientiousness :
                          {(value.personality[1].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                        <Typography align="left" style={styles.features}>
                          Openess :{" "}
                          {(value.personality[0].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                        <Typography align="left" style={styles.features}>
                          Extraversion :{" "}
                          {(value.personality[2].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                        <Typography align="left" style={styles.features}>
                          Emotional Range :{" "}
                          {(value.personality[4].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                      </Grid>
                      <Grid item md={4}>
                        {value.stackoverflow_data.items !== undefined ? (
                          <Typography varinat="h6" style={styles.interests}>
                            Interests
                          </Typography>
                        ) : null}

                        {value.stackoverflow_data.items !== undefined
                          ? value.stackoverflow_data.items
                              .slice(0, 3)
                              .map((val, index_1) => {
                                return (
                                  <Typography key={index_1}>
                                    {val.name}
                                  </Typography>
                                );
                              })
                          : null}
                      </Grid>
                    </Grid>
                    <Divider />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </TabContainer>
        )}
        {this.state.value === 2 && (
          <TabContainer>
            {this.context.friendsData.map((value, index) => {
              if (value.cluster === "Low Positivity") {
                return (
                  <div key={index}>
                    <Grid container style={styles.container}>
                      <Grid item md={1}>
                        <Avatar src={value.profile_pic_url} />
                      </Grid>
                      <Grid item md={11}>
                        <Typography
                          align="left"
                          variant="h6"
                          style={styles.userName}
                        >
                          {value.name}
                        </Typography>
                        <Typography align="left" style={styles.screenName}>
                          {"@"}
                          {value.screen_name}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container style={styles.resultsContainer}>
                      <Grid item md={8}>
                        <Typography align="left" style={styles.features}>
                          Agreeableness :{" "}
                          {(value.personality[3].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                        <Typography align="left" style={styles.features}>
                          Conscientiousness :
                          {(value.personality[1].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                        <Typography align="left" style={styles.features}>
                          Openess :{" "}
                          {(value.personality[0].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                        <Typography align="left" style={styles.features}>
                          Extraversion :{" "}
                          {(value.personality[2].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                        <Typography align="left" style={styles.features}>
                          Emotional Range :{" "}
                          {(value.personality[4].percentile * 100).toFixed(0) +
                            "%"}
                        </Typography>
                      </Grid>
                      <Grid item md={4}>
                        {value.stackoverflow_data.items !== undefined ? (
                          <Typography varinat="h6" style={styles.interests}>
                            Interests
                          </Typography>
                        ) : null}
                        {value.stackoverflow_data.items !== undefined
                          ? value.stackoverflow_data.items
                              .slice(0, 3)
                              .map((val, index_1) => {
                                return (
                                  <Typography key={index_1}>
                                    {val.name}
                                  </Typography>
                                );
                              })
                          : null}
                      </Grid>
                    </Grid>
                    <Divider />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </TabContainer>
        )}
      </Paper>
    );
  }
}
const styles = {
  interests: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#7f8c8d"
  },
  resultsContainer: {
    marginTop: 10
  }
};
FriendsAnalysisTabs.contextType = UserContext;
export default FriendsAnalysisTabs;
