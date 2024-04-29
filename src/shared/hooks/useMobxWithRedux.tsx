import { useSelector } from 'react-redux';

export const useMobxWithRedux = (mobx: any, selectors: any) => {
  const data = useSelector(selectors);
  mobx.updateReduxData(data);
};
