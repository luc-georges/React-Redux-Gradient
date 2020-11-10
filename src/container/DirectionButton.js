import DirectionButton from '../components/DirectionButton'
import { toDirection, arrowDirection } from '../store/actions';
import {connect} from 'react-redux'

const mapStateToProps = null

const mapDispatchToProps = (dispatch,props) => ({
    toDirection: () =>{
        dispatch(toDirection(props.directionId));
    },
    arrowDirection: () => {
        dispatch(arrowDirection(props.arrows));
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(DirectionButton)