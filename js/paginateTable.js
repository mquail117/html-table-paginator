$(document).ready(function() {
    const rowsPerPage = 10;
    var numRows = countTableRows();
    var numPages = calcPagesNeeded( numRows, rowsPerPage );
    var $tableRows = getTableRows();
    
    appendPaginationElem( numPages );
    addPaginationMouseover();
    hideTableRows();
    showFirstPageRows( $tableRows, rowsPerPage );
    enablePagination( $tableRows , rowsPerPage );
  });

function countTableRows() {
    // count non-header table row elements
    return $('#table1').find('tbody tr:has(td)').length;
}
function calcPagesNeeded( numRows, rowsPerPage ) {
    // round up rows / rows per page
    return Math.ceil(numRows / rowsPerPage);
}
function appendPaginationElem( numPages ) {
    var $paginationWrapper = $('<div id="paginationWrapper"></div>');
    for (i = 0; i < numPages; i++) {
      $('<span class="pageNumber">&nbsp;' + (i + 1) + '</span>').appendTo($paginationWrapper);
    }
    $paginationWrapper.appendTo('#table1');
}
function addPaginationMouseover() {
    $('.pageNumber').hover(
        function() {
          $(this).addClass('focus');
        },
        function() {
          $(this).removeClass('focus');
        }
      );
}
function getTableRows() {
    return $('table tbody tr:has(td)');
}
function hideTableRows(){
    $('table').find('tbody tr:has(td)').hide();
}
function showFirstPageRows( $tableRows , rowsPerPage ) {
    for (var i = 0; i <= rowsPerPage - 1; i++) {
        $($tableRows[i]).show();
      }
}
function enablePagination( $tableRows , rowsPerPage ) {
    $('span').click(function(event) {
        $('#table1').find('tbody tr:has(td)').hide();
        var nBegin = ($(this).text() - 1) * rowsPerPage;
        var nEnd = $(this).text() * rowsPerPage - 1;
        for (var i = nBegin; i <= nEnd; i++) {
          $($tableRows[i]).show();
        }
      });
}
