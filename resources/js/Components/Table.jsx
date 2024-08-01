const Table = ({ columns, data }) => {
    return (
        <div>
            <DataTable columns={columns} data={data} selectableRows />
        </div>
    );
};

export default Table;
