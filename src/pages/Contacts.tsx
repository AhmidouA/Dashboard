/* REACT & NPM */
import { Box, useTheme, } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";




/* Components */
import { tokens } from '@/hooks/theme';
import { mockDataContacts } from '@/data/mockData';
import Header from '@/components/header/Header';



/* Components */

const Contacts = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    const columns: GridColDef[] = [
      {field: 'id', headerName: 'ID', flex: 0.5}, 
      {field: 'registrarId', headerName: 'Register Id', flex: 0.5, cellClassName: 'name-column--cell'},
      {field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left'},
      {field: 'phone', headerName: 'Phone number', flex: 1},
      {field: 'email', headerName: 'Email', flex: 1},
      {field: 'address', headerName: 'Address', flex: 1},
      {field: 'city', headerName: 'City', flex: 1},
      {field: 'zipCode', headerName: 'ZipCide', flex: 1},
    ]
  
  
    return (
      <Box m='20px'>
        <Header title='CONTACTS' subtitle='List of Contacts for Future Reference' />
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
          }, 
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
  
          }
        }}>
          <DataGrid 
            rows={mockDataContacts}
            columns={columns}
            components={{Toolbar: GridToolbar}}
          />
        </Box>
      </Box>
    )
}

export default Contacts


