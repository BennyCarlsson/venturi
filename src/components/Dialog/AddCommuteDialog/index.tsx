import ChooseDestionationView from './ChooseDestionationView';
import { AddCommuteDialogWrapper } from './styles';

type AddCommuteDialogProps = {};

const AddCommuteDialog = (props: AddCommuteDialogProps) => {
  return (
    <AddCommuteDialogWrapper {...props}>
      <ChooseDestionationView />
    </AddCommuteDialogWrapper>
  );
};

export default AddCommuteDialog;
