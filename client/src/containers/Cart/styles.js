export default theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  content: {
    flexDirection: "column"
  },
  list: {
    maxHeight: "50vh",
    overflow: "auto"
  },
  header: {
    flexDirection: "row"
  }
});
