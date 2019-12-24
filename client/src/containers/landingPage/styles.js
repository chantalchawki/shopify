export default theme => ({
  content: {
    display: "flex",
    flex: "row",
    flexWrap: "wrap",
    padding: theme.spacing(3),
    alignSelf: "flex-start"
  },
  root: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  header: {
    flexDirection: "row"
  },
  main: {
    flexGrow: 1
  },
  sideMenu: {
    borderRight: "ridge",
    minHeight: "91vh"
  },
  addIcon: {
    position: "fixed",
    right: 0,
    bottom: 0,
    padding: "20px"
  }
});
