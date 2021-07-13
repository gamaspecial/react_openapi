import React, { useEffect, useState } from "react";
import { Murmur, MurmursApi } from "../openapi";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 600,
  },
  inline: {
    display: "inline",
  },
}));

interface Props {
  userId: number;
}

export const MurmurList: React.FC<Props> = (props) => {
  const classes = useStyles();

  const [murmurs, setMurmurs] = useState<Murmur[]>();

  useEffect(() => {
    new MurmursApi()
      .getMurmurs(props.userId)
      .then((response) => {
        setMurmurs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [props]);

  return (
    <List className={classes.root}>
      {murmurs?.map((murmur: Murmur) => {
        return (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Test" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={murmur.postUserName}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {murmur.text}
                    </Typography>
                    <div style={{ textAlign: "right" }}>{murmur.postDate}</div>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
};
