import { connect } from 'react-redux'
import ToDoLists from '../components/ToDoLists'

const mapStateToProps = (state) => ({
    lists: state.appendList.list
});

export default connect(mapStateToProps)(ToDoLists)