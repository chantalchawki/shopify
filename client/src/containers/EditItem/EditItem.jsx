import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  TextField,
  Typography,
  Avatar,
  CssBaseline,
  Container
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

function EditItem({ classes }) {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [item, setItem] = useState("");
  useEffect(() => {
    setCategories([
      {
        title: "khaled"
      },
      {
        title: "ana"
      },
      {
        title: "3ayez"
      },
      {
        title: "pepsi"
      }
    ]);
    setItem({
      name: itemName,
      description: description,
      price: price
    });
  }, []);

  const x = {
    n: "kariimm",
    desc: "heeeleloooo",
    pr: "1,0"
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LibraryAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit Item
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={x.n}
            fullWidth
            id="name"
            label="name"
            name="name"
            autoFocus
            onChange={e => setItemName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={x.desc}
            name="description"
            label="Description"
            type="description"
            id="description"
            onChange={e => setDescription(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="price"
            label="Price"
            type="price"
            value={x.pr}
            id="price"
            onChange={e => setPrice(e.target.value)}
          />
          <Autocomplete
            id="combo-box-demo"
            options={categories}
            getOptionLabel={option => option.title}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField
                {...params}
                label="Combo box"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Edit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default withStyles(styles)(EditItem);
