import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Link } from "react-router-dom";
import { getMostPopularMoviesByYear } from "../../utils/API";

export default class MoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesArr: null,
      movieYear: new Date().getFullYear()
    };
    this.fetchFromAPI = this.fetchFromAPI.bind(this);
    this.changeYear = this.changeYear.bind(this);
  }

  componentDidMount() {
    this.fetchFromAPI();
  }

  fetchFromAPI() {
    this.setState({ users: null });
    getMostPopularMoviesByYear(this.state.movieYear).then(topMovies => {
      this.setState({ moviesArr: topMovies.results });
    });
  }

  userDetailsButton(err, data) {
    let userDetailsPath = `/description/${data.id}`;
    return (
      <Link to={userDetailsPath}>
        <button type="button" className="btn btn-primary">
          View Details
        </button>
      </Link>
    );
  }

  getYearsFromCurrentYear() {
    let currentYear = new Date().getFullYear();
    let years = [];
    for (let i = currentYear; i > currentYear - 5; i--) {
      years.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return years;
  }

  changeYear(event) {
    //set state and get new data
    let newYear = event.target.value;
    this.setState({ movieYear: newYear, moviesArr: null }, this.fetchFromAPI());
  }

  render() {
    if (this.state.moviesArr === null) {
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
            <h3 className="page-title" id="topUser">
              Movies By Year Collection
            </h3>
          </div>
          <div className="col-xs-6">
            <select
              className="form-control"
              id="select-prof"
              value={this.state.movieYear}
              onChange={this.changeYear}
            >
              <option value="">...</option>
              {this.getYearsFromCurrentYear()}
            </select>
          </div>
        </div>
        <div className="table-container">
          <BootstrapTable data={this.state.moviesArr} options={options}>
            <TableHeaderColumn
              dataField="original_title"
              width="320"
              columnClassName="tdBg"
              dataSort
              isKey
            >
              Title
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="vote_average"
              width="190"
              className="tdBg"
              columnClassName="tdBg"
              dataSort
            >
              Rating
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="createdAt"
              width="160"
              className="tdBg"
              columnClassName="tdBg"
              dataFormat={this.userDetailsButton}
            >
              User Details
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
        <div className="panel-footer panel-foot-margin" />
      </div>
    );
  }
}
