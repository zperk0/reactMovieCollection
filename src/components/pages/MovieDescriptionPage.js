import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Link } from "react-router-dom";
import { getMovieById } from "../../utils/API";

export default class MoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: null
    };
    this.fetchFromAPI = this.fetchFromAPI.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match.params.movieId); //Movie ID to call for movie details
    this.fetchFromAPI();
  }

  fetchFromAPI() {
    this.setState({ users: null });
    getMovieById(this.props.match.params.movieId).then(movieDetails => {
      let tableObj = [];
      for (var prop in movieDetails) {
        if (!movieDetails.hasOwnProperty(prop)) continue;
        tableObj.push({ title: prop, property: movieDetails[prop] });
      }
      this.setState({ movieDetails: tableObj, movieTitle: movieDetails.title });
    });
  }

  userDetailsButton(err, data) {
    let userDetailsPath = "/description/" + data.id;
    console.log(data.id);
    return (
      <Link to={userDetailsPath}>
        <button type="button" className="btn btn-primary">View Details</button>
      </Link>
    );
  }

  render() {
    if (this.state.movieDetails === null) {
      return <div className="loading-state" />;
    }
    const options = {
      sizePerPage: 50,
      noDataText: "No Data Found",
      sizePerPageList: [25, 50, 75, 100]
    };
    return (
      <div>
        <div id="page-header" className="row">
          <div className="col-xs-6">
            <h3 className="page-title" id="topUser">{this.state.movieTitle}</h3>
          </div>
        </div>
        <div className="table-container">
          <BootstrapTable data={this.state.movieDetails} options={options}>
            <TableHeaderColumn
              dataField="title"
              width="320"
              columnClassName="tdBg"
              dataSort
              isKey
            >
              Title
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="property"
              width="190"
              className="tdBg"
              columnClassName="tdBg"
              dataSort
            >
              Details
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
        <div className="panel-footer panel-foot-margin" />
      </div>
    );
  }
}
