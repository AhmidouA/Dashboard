/* REACT & NPM */
import { Box, useTheme, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';





/* Components */
import { tokens } from '@/hooks/theme';
import { mockDataInvoices } from '@/data/mockData';
import Header from '@/components/header/Header';



/* Components */

const Invoices = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    const columns: GridColDef[] = [
      {field: 'id', headerName: 'ID'}, 
      {field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell'},
      {field: 'phone', headerName: 'Phone number', flex: 1},
      {field: 'email', headerName: 'Email', flex: 1},
      {field: 'cost', headerName: 'Cost', flex: 1, renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
            {params.row.cost} €
        </Typography>
      )},
      {field: 'date', headerName: 'Date', flex: 1},
    ]
  
  
    return (
      <Box m='20px'>
        <Header title='INVOICES' subtitle='List of Invoice Balances' />
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
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
  
          }
        }}>
          <DataGrid 
            checkboxSelection
            rows={mockDataInvoices}
            columns={columns}
          />
        </Box>
      </Box>
    )
}

export default Invoices


