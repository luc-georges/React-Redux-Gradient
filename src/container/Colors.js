import  {connect}  from 'react-redux';
import Colors from '../components/Colors'

const mapStateToProps = (state) =>({
    direction: state.direction,
    firstColor: state.firstColor,
    lastColor: state.lastColor,
    arrow: state.arrow
});

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Colors);
