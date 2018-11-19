import React, { Component } from 'react';
import ContentCard from 'components/ContentCard';
import ReactTable from 'react-table';
import { withRouter } from 'react-router-dom';
import ContentRow from 'components/ContentRow';
import ContentCol from 'components/ContentCol';
import { Button } from 'reactstrap';

class NoticeList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          pages: null,
          loading: true
        };
    }

    onClickWriteButton = () => {
        this.props.history.push('/main/pages/noticeWrite');
    }

    fetchData = (state, instance) => {
        // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
        // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
        this.setState({ loading: true });
        // Request the data however you want.  Here, we'll use our mocked service we created earlier
        this.requestData(
          state.pageSize,
          state.page,
          state.sorted,
          state.filtered
        ).then(res => {
          // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
          this.setState({
            data: res.data,
            pages: res.pages,
            loading: false
          });
        });
      }

    requestData = (pageSize, page, sorted, filtered) => {
        return new Promise((resolve, reject) => {
            const url = `https://reqres.in/api/users?page=${page+1}&per_page=${pageSize}`;
            
            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                const res = {
                    data: data.data,
                    pages: data.total_pages
                };
                resolve(res);
            });
        });
    };

    render() {
        const { data, pages, loading } = this.state;
        return (
            <div>
                <ContentCard title='Notice List'>
                    <ContentRow>
                        <ContentCol>
                            <ReactTable
                                columns={[
                                    {
                                        Header: "ID",
                                        accessor: "id",
                                        width:100,
                                        style: {
                                            textAlign:'center'
                                        }
                                    },
                                    {
                                        Header: "First Name",
                                        accessor: "first_name"
                                    },
                                    {
                                        Header: "Last Name",
                                        accessor: "last_name"
                                    }
                                ]}
                                getTdProps={(state, rowInfo, column, instance) => {
                                    return {
                                        onClick: e => {
                                            this.props.history.push(`/main/pages/noticeDetail/${rowInfo.row.id}`);
                                            
                                            // console.log("Cell - onMouseEnter", {
                                            //     state,
                                            //     rowInfo,
                                            //     column,
                                            //     instance,
                                            //     event: e
                                            // });
                                        }
                                    };
                                }}
                                manual // Forces table not to paginate or sort automatically, so we can handle it server-side
                                data={data}
                                pages={pages} // Display the total number of pages
                                loading={loading} // Display the loading overlay when we need it
                                onFetchData={this.fetchData} // Request new data when things change
                                filterable
                                defaultPageSize={10}
                                className="-striped -highlight"
                            />
                        </ContentCol>
                    </ContentRow>
                    <ContentRow>
                        <ContentCol>
                            <Button color="primary" onClick={this.onClickWriteButton}>Write</Button>
                        </ContentCol>
                    </ContentRow>
                </ContentCard>
            </div>
        );
    }
}

export default withRouter(NoticeList);