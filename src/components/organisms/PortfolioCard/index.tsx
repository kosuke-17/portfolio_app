import { FC } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

import Link from '@/components/atoms/Link'
import theme from '@/utils/theme'

import useHooks from './hooks'

type Props = {
  id: string
  title: string
}

const StyledAvatar = styled(Avatar)<{ width: number; height: number }>(
  ({ width, height }) => ({
    width,
    height,
    ':hover': {
      opacity: 0.5,
    },
  }),
)

const StyledPortfolioCard = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1),
}))

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'block',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
  marginLeft: theme.spacing(1),
  marginright: theme.spacing(1),
}))

const StyledCardContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}))

const StyledSubContent = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const StyledUserContent = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}))

const StyledUserName = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  ':hover': {
    color: theme.palette.primary.main,
  },
}))

const StyledFavoriteContent = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}))

const StyledFavoriteCount = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  verticalAlign: 'middle',
}))

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  ':hover': {
    color: theme.palette.primary.main,
  },
}))

const PortfolioCard: FC<Props> = ({ id, title }) => {
  const { user } = useHooks()

  return (
    <StyledPortfolioCard>
      <StyledLink href={`portfolios/${id}`}>
        <StyledCardContent>
          <StyledTitle variant='subtitle1'>{title}</StyledTitle>
          <StyledSubContent>
            <StyledUserContent>
              <StyledAvatar src={user?.image ?? ''} width={32} height={32} />
              <StyledUserName>{user?.name}</StyledUserName>
            </StyledUserContent>
            <StyledFavoriteContent>
              {true ? (
                <FavoriteBorderIcon
                  sx={{
                    color: theme.palette.primary.main,
                    verticalAlign: 'middle',
                    ':hover': {
                      color: theme.palette.primary.dark,
                    },
                  }}
                />
              ) : (
                <FavoriteIcon sx={{ verticalAlign: 'middle' }} />
              )}

              <StyledFavoriteCount>15</StyledFavoriteCount>
            </StyledFavoriteContent>
          </StyledSubContent>
        </StyledCardContent>
      </StyledLink>
    </StyledPortfolioCard>
  )
}

export default PortfolioCard
