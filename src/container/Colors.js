import { connect } from 'react-redux';
import Colors from '../components/Colors'

const mapStateToProps = (state) =>({
    direction: state.direction,
    firstColor: state.firstColor,
    lastColor: state.lastColor
})

export default connect(mapStateToProps, null)(Colors);
