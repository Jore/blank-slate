import { setState } from './handlers';

const updateModalState = data => {
  const { name: id } = data;
  const container = 'modal';
  const change = 'modal';

  const { name, close } = data;
  const active = (close) ? undefined : name;

  setState({ id, change, active, container });
};

export default {
  updateState: updateModalState,
};
