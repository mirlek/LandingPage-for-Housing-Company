import { useSnackbar } from 'notistack';
import * as React from 'react';
import { Icon } from '@iconify/react';
import closeFill from '@iconify-icons/eva/close-fill';
import { MIconButton } from '@shared/components/@material-extend';

const InnerSnackbarUtilsConfigurator = (props) => {
  props.setUseSnackbarRef(useSnackbar());
  return null;
};

let useSnackbarRef;
const setUseSnackbarRef = (useSnackbarRefProp) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator = () => <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />;

export default {
  success(msg) {
    this.toast(msg, 'success');
  },
  warning(msg) {
    this.toast(msg, 'warning');
  },
  info(msg) {
    this.toast(msg, 'info');
  },
  error(msg) {
    this.toast(msg, 'error');
  },
  toast(msg, variant = 'default') {
    useSnackbarRef.enqueueSnackbar(msg, {
      variant,
      autoHideDuration: 10000,
      preventDuplicate: true,
      action: (key) => (
        <MIconButton size="small" onClick={() => useSnackbarRef.closeSnackbar(key)}>
          <Icon icon={closeFill} />
        </MIconButton>
      )
    });
  }
};
