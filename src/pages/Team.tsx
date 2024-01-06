/* REACT & NPM */
import { Typography, useTheme, Box} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";




/* Components */
import { tokens } from '@/hooks/theme';
import { mockDataTeam } from '@/data/mockData';
import Header from '@/components/header/Header';



const Team = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID'}, 
    {field: 'name', headerName: 'name', flex: 1, cellClassName: 'name-column--cell'},
    {field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left'},
    {field: 'phone', headerName: 'Phone number', flex: 1},
    {field: 'email', headerName: 'Email', flex: 1},
    {field: 'access', headerName: 'Access Level', flex: 1, renderCell: ({row: {access}}) => {
      return (
        <Box 
          width='60%' 
          m='0 auto' 
          p='5px' 
          display='flex' 
          justifyContent='center' 
          bgcolor={
            access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]
          }
          borderRadius='4px'
        >
          {access === 'admin' && <AdminPanelSettingsOutlinedIcon /> }
          {access === 'manager' && <SecurityOutlinedIcon /> }
          {access === 'user' && <LockOpenOutlinedIcon /> }
          <Typography color={colors.grey[100]} sx={{ml: '5px'}}>
            {access}
          </Typography>
        </Box>
      )
    }},

  ]


  return (
    <Box m='20px'>
      <Header title='TEAM' subtitle='Managing the Team Memebers' />
      <Box m='40px 0 0 0' height='75vh' sx={{
        '& .MuidataGrid-root' : {
          border: 'none' 
        },
        '& .MuiDataGrid-cell': {
          borderBottom: 'none'
        },
        '& .name-column--cell': {
          color: colors.greenAccent[300]
        }, 
        '& .MuiDataGrid-columnHeaders': {
          bgcolor: colors.blueAccent[700],
          borderBottom: 'none'
        },
        '& .MuidataGrid-virtualScroller': {
          bgcolor: colors.primary[400]
        }, 
        '& .MuiDataGrid-footerContainer': {
          borderTop: 'none',
          bgcolor: colors.blueAccent[700],
        }
      }}>
        <DataGrid 
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Team