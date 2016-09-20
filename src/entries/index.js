import './index.html';
import './index.less';
import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory } from 'react-router';
import App from '../components/App';
import Routes from '../routes/index';

ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Table } from 'antd';
// import reqwest from 'reqwest';
//
// const columns = [{
//   title: '姓名',
//   dataIndex: 'name',
//   sorter: true,
//   render: name => `${name.first} ${name.last}`,
//   width: '20%',
// }, {
//   title: '性别',
//   dataIndex: 'gender',
//   filters: [
//     { text: 'Male', value: 'male' },
//     { text: 'Female', value: 'female' },
//   ],
//   width: '20%',
// }, {
//   title: '邮箱',
//   dataIndex: 'email',
// }];
//
// const Test = React.createClass({
//   getInitialState() {
//     return {
//       data: [],
//       pagination: {},
//       loading: false,
//     };
//   },
//   handleTableChange(pagination, filters, sorter) {
//     const pager = this.state.pagination;
//     pager.current = pagination.current;
//     this.setState({
//       pagination: pager,
//     });
//     this.fetch({
//       results: pagination.pageSize,
//       page: pagination.current,
//       sortField: sorter.field,
//       sortOrder: sorter.order,
//       ...filters,
//     });
//   },
//   fetch(params = {}) {
//     console.log('请求参数：', params);
//     this.setState({ loading: true });
//     reqwest({
//       url: 'http://api.randomuser.me',
//       method: 'get',
//       data: {
//         results: 10,
//         ...params,
//       },
//       type: 'json',
//     }).then(data => {
//       const pagination = this.state.pagination;
//       // Read total count from server
//       // pagination.total = data.totalCount;
//       pagination.total = 200;
//       this.setState({
//         loading: false,
//         data: data.results,
//         pagination,
//       });
//     });
//   },
//   componentDidMount() {
//     this.fetch();
//   },
//   render() {
//     return (
//       <Table columns={columns}
//         rowKey={record => record.registered}
//         dataSource={this.state.data}
//         pagination={this.state.pagination}
//         loading={this.state.loading}
//         onChange={this.handleTableChange}
//       />
//     );
//   },
// });
//
// ReactDOM.render(<Test />, root);

// ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
