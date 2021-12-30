import { CloseIconButtonWrapper, StyledXIcon } from './styles'

type CloseIconButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const CloseIconButton = ({ onClick, ...props }: CloseIconButtonProps) => {
  return (
    <CloseIconButtonWrapper onClick={onClick} {...props}>
      <StyledXIcon />
    </CloseIconButtonWrapper>
  )
}

export default CloseIconButton
