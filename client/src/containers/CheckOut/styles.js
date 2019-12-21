export default theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  header: {
    flexDirection: "row"
  },
  VisaForm: {
    padding: "2%"
  },
  checkOutForm: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});
