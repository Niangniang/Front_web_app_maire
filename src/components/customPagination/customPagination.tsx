const CustomPagination = () => {
  const CustomPagination = ({
    pagination,
    paginationTotalRows,
    paginationPerPage,
    onChangeRowsPerPage,
    onChangePage,
  }: any) => {
    const handlePageChange = (page: number) => {
      onChangePage(page);
    };

    const handleRowsPerPageChange = (
      currentRowsPerPage: number,
      currentPage: number
    ) => {
      onChangeRowsPerPage(currentRowsPerPage, currentPage);
    };

    return (
      <div className="custom-pagination">
        <span>
          Showing {paginationPerPage} of {paginationTotalRows} rows
        </span>
        <button
          onClick={() => handlePageChange(pagination.currentPage - 1)}
          disabled={pagination.currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(pagination.currentPage + 1)}
          disabled={pagination.currentPage === pagination.totalPages}
        >
          Next
        </button>
        <select
          value={paginationPerPage}
          onChange={(e) =>
            handleRowsPerPageChange(
              Number(e.target.value),
              pagination.currentPage
            )
          }
        >
          <option value="10">10 rows</option>
          <option value="20">20 rows</option>
          <option value="30">30 rows</option>
        </select>
      </div>
    );
  };
};

export default CustomPagination;
