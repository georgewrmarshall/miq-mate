import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import HeroBgImg from "../../images/bg1.jpg";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundImage: `url(${HeroBgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    padding: theme.spacing(10, 0, 10),
  },
  heroText: {
    color: "#fff",
  },
  heroSearch: {
    marginTop: theme.spacing(4),
    maxWidth: "500px",
    marginLeft: "auto;",
    marginRight: "auto;",
  },
}));

export const Hero = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          className={classes.heroText}
        >
          Helping Kiwis Get Home
        </Typography>
        <Typography
          component="p"
          variant="subtitle1"
          align="center"
          className={classes.heroText}
        >
          Search for your departure city to find a mate to share MIQ
        </Typography>
        <div className={classes.heroSearch}>{children}</div>
      </Container>
    </div>
  );
};
