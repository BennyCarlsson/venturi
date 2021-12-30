import { useAppDispatch } from 'hooks/redux'
import { useEffect } from 'react'
import { hideDialog, selectShowDialog } from 'redux/dialogSlice'
import { DialogWrapper, InnerWrapper } from './styles'
import { useAppSelector } from 'hooks/redux'
import AddCommuteDialog from './AddCommuteDialog'
import { AnimatePresence } from 'framer-motion'

type DialogProps = {}

const Dialog = (props: DialogProps) => {
  const dispatch = useAppDispatch()
  const displayDialog = useAppSelector(selectShowDialog)

  useEffect(() => {
    if (!displayDialog) return

    const handleOnKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(hideDialog())
      }
    }

    document.addEventListener('keydown', handleOnKeyDown, false)

    return () => document.removeEventListener('keydown', handleOnKeyDown, false)
  }, [displayDialog, dispatch])

  if (!displayDialog) return null

  return (
    <AnimatePresence>
      {displayDialog && (
        <DialogWrapper {...props} data-testid='dialog-wrapper'>
          <InnerWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AddCommuteDialog />
          </InnerWrapper>
        </DialogWrapper>
      )}
    </AnimatePresence>
  )
}

export default Dialog
