import PropTypes from 'prop-types';

// assets
import cloudberry from 'assets/images/logo/cloudberry.png';

const CloudberryFullLogo = ({ width }) => {
    return (
        <img src={ cloudberry } width={ width } alt="cloudberry_logo" />
    )
}

CloudberryFullLogo.propTypes = {
    width: PropTypes.number
  };

export default CloudberryFullLogo;