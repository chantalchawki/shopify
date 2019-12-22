import React, { useState, useEffect } from "react";
import {
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
import CategoriesService from "../../Services/CategoriesService";
import ItemsService from "../../Services/ItemsService";

function EditItem({ classes, history, match }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(0);
  const [categories, setCategories] = useState("");

  useEffect(() => {
    loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    setCategories((await CategoriesService.getAllCategories()).data.Result);
    const item = (await ItemsService.getItem(match.params.id)).data.Result;
    setName(item.Name);
    setDescription(item.Description);
    setCategory(item.Category);
    setPrice(item.Price);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const res = await ItemsService.UpdateItem({
      Id: match.params.id,
      Name: name,
      Description: description,
      CategoryId: category.Id,
      Price: price,
    });

    if (res.status === 200) {
      history.push('/');
    }
  }

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
            value={name}
            fullWidth
            id="name"
            label="name"
            name="name"
            autoFocus
            onChange={e => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={description}
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
            value={price}
            id="price"
            onChange={e => setPrice(e.target.value)}
          />
          <Autocomplete
            id="combo-box-demo"
            options={categories}
            getOptionLabel={option => option.Name}
            style={{ width: 300 }}
            value={category}
            onChange={(event, value) => setCategory(value)}
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
            onClick={onSubmit}
          >
            Edit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default withStyles(styles)(EditItem);
