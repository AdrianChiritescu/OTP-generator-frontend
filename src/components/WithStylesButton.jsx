import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const WithStylesButton = withStyles({
  root: {
    background: "linear-gradient(#f57948 100%,#f57948 100%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    width: 250,
    height: 48,
    padding: "0 30px",
    fontWeight: 700,
    fontSize: "1.1rem",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export default WithStylesButton;