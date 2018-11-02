function paginateTable() {
    const rowsPerPage = 10;
    paginatorClassId = 'paginator';
    table = '#table_1'
    $table = $('#table_1');
    rowIdentifier = 'tr:has(td)';
    $paginationContainer = $('<div id="paginationWrapper"></div>');
    paginatorPrefix = '<span class="paginator">&nbsp;';
    paginatorSuffix = '</span>';
    
    
    numRows = countTableRows(),
    numPages = calcPagesNeeded( numRows, rowsPerPage ),
    $tableRows = getTableRows();
        
    createPaginator( numPages );
    addPaginationMouseover();
    hideTableRows();
    showFirstPageRows( $tableRows, rowsPerPage );
    enablePagination( $tableRows , rowsPerPage );
}
function countTableRows() {
    return $($table).find(rowIdentifier).length;
}
function calcPagesNeeded( numRows, rowsPerPage ) {
    return Math.ceil(numRows / rowsPerPage);
}
function getTableRows() {
    return $(rowIdentifier);
}
function createPaginator( numPages ) {
    for (i = 0; i < numPages; i++) {
      $(paginatorPrefix + (i + 1) + paginatorSuffix).appendTo($paginationContainer);
    }
    $paginationContainer.appendTo(table);
}
function addPaginationMouseover() {
    $('.' + paginatorClassId).hover(
        function() {
          $(this).addClass('focus');
        },
        function() {
          $(this).removeClass('focus');
        }
      );
}
function hideTableRows(){
    $(table).find(rowIdentifier).hide();
}
function showFirstPageRows( $tableRows , rowsPerPage ) {
    for (var i = 0; i <= rowsPerPage - 1; i++) {
        $($tableRows[i]).show();
      }
}
function enablePagination( $tableRows , rowsPerPage ) {
    $('.' + paginatorClassId).click(function(event) {
        $($table).find(rowIdentifier).hide();
        var nBegin = ($(this).text() - 1) * rowsPerPage;
        var nEnd = $(this).text() * rowsPerPage - 1;
        for (var i = nBegin; i <= nEnd; i++) {
          $($tableRows[i]).show();
        }
      });
}
