import { useAppDispatch } from 'hooks/redux';
import { useEffect } from 'react';
import { hideDialog, selectShowDialog } from 'redux/dialogSlice';
import { DialogWrapper, InnerWrapper, StyledClosedIconButton } from './styles';
import { useAppSelector } from 'hooks/redux';
import AddCommuteDialog from './AddCommuteDialog';

type DialogProps = {};

const Dialog = (props: DialogProps) => {
  const dispatch = useAppDispatch();
  const displayDialog = useAppSelector(selectShowDialog);

  useEffect(() => {
    if (!displayDialog) return;

    const handleOnKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(hideDialog());
      }
    };

    document.addEventListener('keydown', handleOnKeyDown, false);

    return () => document.removeEventListener('keydown', handleOnKeyDown, false);
  }, [displayDialog, dispatch]);

  if (!displayDialog) return null;
  return (
    <DialogWrapper {...props} data-testid="dialog-wrapper">
      <InnerWrapper>
        <StyledClosedIconButton
          data-testid="close-dialog-button"
          onClick={(e) => {
            dispatch(hideDialog());
          }}
        />
        <AddCommuteDialog />
      </InnerWrapper>
    </DialogWrapper>
  );
};

export default Dialog;
