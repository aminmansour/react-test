import { connect } from "react-redux";
import GithubBreakdownScreen from "./GithubBreakdownScreen";

const mapStateToProps = state => ({
  login: state.login
});

export default connect(mapStateToProps, {})(GithubBreakdownScreen);
