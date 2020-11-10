import  {connect}  from 'react-redux';
import ColorsCSS from '../components/ColorsCSS'

const mapStateToProps = (state) =>({
    direction: state.direction,
    firstColor: state.firstColor,
    lastColor: state.lastColor
});

export default connect(mapStateToProps, null)(ColorsCSS);
