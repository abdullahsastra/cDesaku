/*DataTable Init*/

"use strict"; 

$(document).ready(function() {
	"use strict";
	
	$('#datable_1').DataTable();
	$('#datable_3').DataTable();
    $('#datable_2').DataTable({ "lengthChange": false});
    $('#datapermohonan').DataTable( {
    	"ajax": {
            "url": "/api/permohonans"
        },
        "columnDefs": [ {
            "targets": -1,
            "data": "null",
            "defaultContent": "<button>Click!</button>"
        } ]
    	
    });
} );