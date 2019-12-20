export default theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: "white",
    textDecoration: "none"
  },
  btn: {
    background: "darkorange",
    marginLeft: 5
  },
  icon: {
    marginLeft: 10
  }
});
