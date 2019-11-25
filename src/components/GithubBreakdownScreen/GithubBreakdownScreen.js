import React from "react";
import { Router } from "@reach/router";
import BreakdownNavView from "./components/BreakdownNavView";
import "./style.css";
import { getData } from "./Helper";
import BreakdownSingleView from "./components/BreakdownSingleView";

class GithubBreakdownScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageStore: [],
      sizeStore: [],
      subCountStore: [],
      forkCountStore: []
    };
  }

  componentDidMount() {
    const { username, password } = this.props.login;

    const languageData = [];
    const sizeData = [];
    const subCountData = [];
    const forkCountData = [];

    getData(username, password)
      .then(data => {
        data.forEach(repo => {
          const lang = repo.language || "None Specified";
          languageData[lang] = lang in languageData ? languageData[lang] + 1 : 1;

          const sizeIndex = Math.floor(repo.size / 50);
          sizeData[sizeIndex ? sizeIndex : 0] = sizeData[sizeIndex] ? sizeData[sizeIndex] + 1 : 1;

          const subCountIndex = Math.floor(repo.subscribers_count / 5);
          subCountData[subCountIndex ? subCountIndex : 0] = subCountData[subCountIndex] ? subCountData[subCountIndex] + 1 : 1;

          const forkCountIndex = Math.floor(repo.forks_count / 2);
          forkCountData[forkCountIndex ? forkCountIndex : 0] = forkCountData[forkCountIndex] ? forkCountData[forkCountIndex] + 1 : 1;
        });

        this.setState({
          languageStore: languageData,
          sizeStore: sizeData,
          subCountStore: subCountData,
          forkCountStore: forkCountData
        });
      })
      .catch(err => console.log(err));
  }

  render() {

    const {languageStore, subCountStore, sizeStore, forkCountStore} = this.state;

    
    return (
      <div id="wrapper">
        <Router>
          <BreakdownNavView path="/" />

          <BreakdownSingleView 
            path="/language"
            title="Projects By Languages"
            rawData={languageStore} 
            xAxisLabelGenerator={value => value}
            labelIdentifier="Number of Projects with Language" />

          <BreakdownSingleView 
            path="/code-lines"
            title="Projects By Code Lines"
            rawData={sizeStore} 
            xAxisLabelGenerator={value => value+"-"+(+value+49)}
            labelIdentifier="Number of Projects with Line Count in Range" />

          <BreakdownSingleView 
            path="/subs"
            title="Projects By Sub Count"
            rawData={subCountStore} 
            xAxisLabelGenerator={value => value+"-"+(+value+4)}
            labelIdentifier = "Number of Projects with Sub Count in Range" />

          <BreakdownSingleView 
            path="/forks"
            title="Projects By Fork Count"
            rawData={forkCountStore} 
            xAxisLabelGenerator={value => value+"-"+(+value+1)}
            labelIdentifier="Number of Projects with Amount of Forks in Range" />
        </Router>
      </div>
    );
  }
}

export default GithubBreakdownScreen;
