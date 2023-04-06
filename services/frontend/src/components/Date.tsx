import ImageIcon from '@mui/icons-material/Image'
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid'
import { useDate } from '../hooks/useDate'
import Stations from '../resources/Stations'

type DateProps = {
    date: string
}

const StationNameGetter = ({ value }: GridValueGetterParams) => {
    const station = Stations.filter(item => item.id === value).pop()
    return station ? station.name : value
}

const OpenBase64Image = (base64: string) => {
    const img = new Image()
    img.src = `data:image/png;base64,${base64}`
    ;(window.open())?.document.write(img.outerHTML)
}

const columns: GridColDef[] = [
    { field: 'TrainNumber', headerName: 'Train' },
    {
        field: 'Departure',
        headerName: 'Departure',
        width: 150,
        valueGetter: StationNameGetter
    },
    {
        field: 'Destination',
        headerName: 'Destination',
        width: 150,
        valueGetter: StationNameGetter
    },
    { field: 'Operator', headerName: 'Operator' },
    {
        field: 'DelayedConnections',
        headerName: 'Delayed',
        valueGetter: ({ value }: GridValueGetterParams) => `${
            Math.max(...value.map((item: any) => item.MinutesDelayed))
        } minutes`
    },
    {
        field: 'image',
        headerName: 'Image',
        align: 'center',
        headerAlign: 'center',
        filterable: false,
        sortable: false,
        renderCell: ({ value }: GridRenderCellParams) => {
            return <ImageIcon
                onClick={() => OpenBase64Image(value)}/>
        }
    }
]

// const ToolbarGrid = () =>

const Date = ({ date }: DateProps) => {
    const { data, isLoading, isError } = useDate(date)
    if (!data) return <div>Laddar...</div>

    console.log(data[1])

    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={data.map((item: any, index: number) => ({ id: index, image: 'xx', ...item }))}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                autoHeight
            />
        </div>
    )
}

export default Date
