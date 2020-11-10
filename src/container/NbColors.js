import { connect } from 'react-redux';
import NbColors from '../components/NbColors'

const mapStateToProps = (state) =>({
    nombreColors: state.nbColors,
})

export default connect(mapStateToProps, null)(NbColors);
