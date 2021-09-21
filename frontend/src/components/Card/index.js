import React, { useEffect, useState } from "react";
import MaterialCard from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import CircularProgress from "@material-ui/core/CircularProgress";

function Card({ title, value, loading }) {
  const classes = useStyles();

  return (
    <Box borderRadius={16}>
      <MaterialCard className={classes.card}>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="stretch"
          >
            <Grid item xs>
              <Typography variant="h5" gutterBottom>
                {title}
              </Typography>
            </Grid>
          </Grid>
          <div align="center">
            {loading ? (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px"
                }}
              />
            ) : (
              <Typography variant="h4" gutterBottom>
                {value}
              </Typography>
            )}
          </div>
        </CardContent>
      </MaterialCard>
    </Box>
  );
}

export default Card;
