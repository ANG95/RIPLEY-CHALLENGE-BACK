function Pagination(totalCountData, pageParams) {
    const numPerPage = 20
    const totalData = +totalCountData || 0;
    const page = parseInt(pageParams, 10) || 0;
    const skip = (page - 1) * numPerPage;
    const limitParameter = `${skip}, ${numPerPage}`;

    return {
        limitParameter,
        totalData,
        totalNumberPage: numPerPage
    }
}
module.exports = { Pagination };