import PropTypes from 'prop-types';
import LoadingScreen from './LoadingScreen';

const LoadingWrapper = ({ children }) => {
  const profileLoading = false;
  const cabinetLoading = false;
  const childrenStyle = profileLoading || cabinetLoading ? { display: 'none' } : {};
  return (
    <>
      {(profileLoading || cabinetLoading) && (
        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            zIndex: 1001,
            width: '100vw',
            height: '100vh'
          }}
        >
          <LoadingScreen />
        </div>
      )}
      <div style={childrenStyle}>{children}</div>
    </>
  );
};

LoadingWrapper.propTypes = {
  children: PropTypes.node
};

export default LoadingWrapper;
