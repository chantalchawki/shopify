export default theme => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    flexDirection: "row"
  },
  main: {
    flexWrap: "noWrap",
    flexGrow: 120,
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});
