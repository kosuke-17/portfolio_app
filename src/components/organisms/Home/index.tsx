import { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import Loading from '@/components/atoms/Loading'
import PortfolioCard from '@/components/organisms/PortfolioCard'

import useHooks from './hooks'
import Grid from '@mui/material/Grid'

const StyledGridTable = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: theme.spacing(2.5),
  marginBottom: theme.spacing(2.5),
}))

const StyledGridRow = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: '60%',
  },
  [theme.breakpoints.down('md')]: {
    width: '70%',
  },
}))

const StyledGridLabel = styled(Typography)(() => ({
  fontWeight: 700,
}))

const Home: FC = () => {
  const { isLoading, error, portfolioGridRows } = useHooks()

  if (isLoading) return <Loading />
  if (error) <p>{error.message}</p>

  return (
    <>
      <StyledGridTable>
        {portfolioGridRows &&
          portfolioGridRows.map((grid) => (
            <StyledGridRow key={grid.label}>
              <StyledGridLabel variant='h5'>{grid.label}</StyledGridLabel>
              <Grid container rowSpacing={1}>
                {grid.rows &&
                  grid.rows.map((row) => (
                    <Grid item key={row.id} xs={12} sm={10} md={6}>
                      <PortfolioCard id={row.id} title={row.title} />
                    </Grid>
                  ))}
              </Grid>
            </StyledGridRow>
          ))}
      </StyledGridTable>
    </>
  )
}

export default Home
