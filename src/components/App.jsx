import React, { Component, PropTypes } from 'react';
import Todos from './Todos/Todos';
import MainLayout from '../layouts/MainLayout/MainLayout';
import moment from 'moment'
import { Table } from 'antd';
import { Input } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import reqwest from 'reqwest';


const columns = [{
  title: '航班号',
  dataIndex: 'flight',
  key: 'flight',
  fixed: 'left',
  width: 80,
  render: (text) => <a href="#">{text}</a>,
}, {
  title: '时刻',
  dataIndex: 'depTime',
  key: 'depTime',
  width: 80,
  fixed: 'left'
}];

const Test = React.createClass({
  getInitialState() {
    return {
      data: [],
      columns: columns,
      loading: false,
      arr: 'arr',
      dep: 'dep',
    };
  },
  // handleTableChange(pagination, filters, sorter) {
  //   const pager = this.state.pagination;
  //   pager.current = pagination.current;
  //   this.setState({
  //     pagination: pager,
  //   });
  //   this.fetch({
  //     results: pagination.pageSize,
  //     page: pagination.current,
  //     sortField: sorter.field,
  //     sortOrder: sorter.order,
  //     ...filters,
  //   });
  // },
  fetch(params = {}) {
    this.columns = null;
    this.setState({ loading: true });
    reqwest({
      url: 'http://localhost:3000/api',
      method: 'get',
      data: {
        ...params,
      },
      type: 'json',
    }).then(data => {
      console.log(data);
      const columns = [{
        title: '航班号',
        dataIndex: 'flight',
        key: 'flight',
        fixed: 'left',
        width: 78,
        render: (text) => <a href="#">{text}</a>,
      }, {
        title: '时刻',
        dataIndex: 'depTime',
        key: 'depTime',
        width: 78,
        fixed: 'left'
      }];
      for(let i = 0; i < data.depDates.length; i++){
        let depDate = data.depDates[i].slice(5);
        columns.push({
          title: depDate,
          dataIndex: depDate,
          key: depDate,
          width: 50,
        })
      }
      console.log(columns);
      console.log(data.longPrice);
      this.setState({
        loading: false,
        data: data.longPrice,
        columns: columns,
      });
    });
  },
  handleArrChange(e){
    this.setState({arr: e.target.value});
  },
  handleDepChange(e){
    this.setState({dep: e.target.value});
  },
  handleSearchClick(e){
    this.fetch({arrAirport: this.state.arr,
                depAirport: this.state.dep,
              });
  },
  componentDidMount() {
    // this.fetch({arrAirport: "ZUH",
    //             depAirport: "PVG",
    //           });
  },
  render() {
    return (
      <div>
          <Row>
            <Col span={22} offset={1}>
              <Table columns={this.state.columns}
              loading={this.state.loading}
              dataSource={this.state.data}
              pagination = {false}
              rowClassName={(record, index) => {
                let temp = (record.flight == 'Y87504')
                if (temp) {
                  return 'isY8'
                }}}
              scroll={{x: window.innerWidth, y: window.innerHeight }}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={1} offset={1}>
              <Input placeholder="出发" value={this.state.arr} onChange={this.handleArrChange} />
            </Col>
            <Col span={1}>
              <Input placeholder="到达" value={this.state.dep} onChange={this.handleDepChange}/>
            </Col>
            <Col span={1}>
              <Button type="primary" icon="search" onClick={this.handleSearchClick}>搜索</Button>
            </Col>
          </Row>
      </div>
    );
  },
});





const App = ({ location }) => {
  return (
    <div>
      <Test />
    </div>
  );
};

App.propTypes = {
};

export default App;
