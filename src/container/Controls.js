import Controls from '../components/Controls'
import {connect} from 'react-redux'
import {randomHexColor} from '../utils'
import {randFirst, randLast} from '../store/actions'


const mapStateToProps = (state) =>({
    direction : state.direction
});

const mapDispatchToProps = (dispatch) => ({
    randFirst: () =>{
        dispatch(randFirst(randomHexColor()))
    },
    randLast: () => {
        dispatch(randLast(randomHexColor()))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Controls)