import PropTypes from 'prop-types';

// assets
import cloudberry_logo from 'assets/images/logo/cloudberry_logo.png';

const CloudberryLogo = ({ width }) => {
  return <img src={cloudberry_logo} width={width} alt="cloudberry_logo" />;
};

CloudberryLogo.propTypes = {
  width: PropTypes.number
};

export default CloudberryLogo;
