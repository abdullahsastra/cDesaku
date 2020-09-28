/*Export Table Init*/

"use strict"; 

$(document).ready(function() {
	$('#example').DataTable( {
		paging:   false,
        dom: 'Bfrtip',
		buttons: [
			'pdf', 'print']
	} );
} );