import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import { getMovies } from '../../utils/API';

export default class MoviesPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moviesArr : null,
        }
        this.fetchFromAPI = this.fetchFromAPI.bind(this);
    }

    componentDidMount() {
      console.log(this.props.match.params.movieId) //Movie ID to call for movie details
        this.fetchFromAPI()
    }

    fetchFromAPI() {
        this.setState({users: null});
        getMovies().then((topMovies) => {
          this.setState({moviesArr: topMovies.results})
        });
    }

    userDetailsButton(err, data) {
        let userDetailsPath = '/description/' + data.id;
        console.log(data.id)
        return <Link to={userDetailsPath}><button type="button" className="btn btn-primary">View Details</button></Link>
    }

    render() {
        if (this.state.moviesArr === null) {
            return <div className="loading-state"></div>
        }
        const options = {
            sizePerPage: 50,
            noDataText: 'No Data Found',
            sizePerPageList: [ 25, 50, 75, 100 ]
        };
        return (
            <div>
                <div id="page-header" className="row">
                    <div className="col-xs-6">
                        <h3 className="page-title" id="topUser">Movies Collection</h3>
                    </div>
                </div>
                <div className="table-container">
                    <BootstrapTable data={ this.state.moviesArr} pagination search={ true } options={options}>
                        <TableHeaderColumn dataField='original_title'  width="320" columnClassName="tdBg" dataSort isKey>Title</TableHeaderColumn>
                        <TableHeaderColumn dataField='vote_average' width="190" className='tdBg' columnClassName="tdBg" dataSort>Rating</TableHeaderColumn>
                        <TableHeaderColumn dataField='createdAt' width="160" className='tdBg' columnClassName="tdBg" dataFormat={this.userDetailsButton}>User Details</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                <div className="panel-footer panel-foot-margin"></div>
            </div>
        );
    }

}
