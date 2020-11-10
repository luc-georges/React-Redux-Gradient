import { connect } from 'react-redux';
import Gradient from '../components/Gradient'

const mapStateToProps = (state) =>({
    direction: state.direction,
    firstColor: state.firstColor,
    lastColor: state.lastColor
})

export default connect(mapStateToProps, null)(Gradient);
