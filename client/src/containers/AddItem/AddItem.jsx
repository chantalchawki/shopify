import React, { useState, useEffect } from "react";
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
import Header from "../../components/header/Header";
import ItemsService from "../../Services/ItemsService";
import CategoriesService from "../../Services/CategoriesService";

function AddItem({ classes }) {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState("");

  useEffect(() => {
    let res = CategoriesService.getAllCategories();
    setCategories(res.data);
  }, []);

  const handleSubmit = (event, props) => {
    event.preventDefault();
    const item = {
      Name: itemName,
      Price: price,
      Description: description,
      CategoryId: categoryId
    };
    ItemsService.createItem(item);
  };
  return (
    <React.Fragment>
      <Grid item className={classes.header}>
        <Header />
      </Grid>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LibraryAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Item
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Item Name"
              name="itemName"
              autoFocus
              onChange={e => setItemName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
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
              id="price"
              onChange={e => setPrice(e.target.value)}
            />
            <Autocomplete
              id="categoriesComboBox"
              options={categories}
              getOptionLabel={option => option.title}
              style={{ width: 300 }}
              onChange={e => setCategoryId(e.target.value.id)}
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
              Add
            </Button>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default withStyles(styles)(AddItem);
