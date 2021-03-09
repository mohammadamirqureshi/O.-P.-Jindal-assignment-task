$(document).ready(function() {
    var newDataSet =() =>{

    	// Reading query from DOM
    	
        var query = $('#queryID option:selected').val();
        var newDataSetLocal=[];

        //show all students

        if(query === 'nothing'){
            for(let i=0;i<dataSet.length;i++){
                newDataSetLocal=dataSet;
            }
        }

        //show only 2K17 batch students

        else if(query === '2K17'){
            for(let i=0;i<dataSet.length;i++){
                if(dataSet[i][1]==='2K17')
                newDataSetLocal.push(dataSet[i]);
            }
        }

        // Show only 2K16 batch student

        else if(query === '2K16'){
            for(let i=0;i<dataSet.length;i++){
                if(dataSet[i][1]==='2K16')
                newDataSetLocal.push(dataSet[i]);
            }
        }

        // Show only ECE students

        else if(query === 'ECE'){
            for(let i=0;i<dataSet.length;i++){
                if(dataSet[i][2]==='ECE')
                newDataSetLocal.push(dataSet[i]);
            }
        }

        // Show only COE Students

        else if(query === 'COE'){
            for(let i=0;i<dataSet.length;i++){
                if(dataSet[i][2]==='COE')
                newDataSetLocal.push(dataSet[i]);
            }
        }

        return newDataSetLocal;
    }


    // Show button clicked
    
    $('#show').click(function () {
       var table= $('#example').DataTable( {
        dom: 'lBfrtip',
        responsive:true,
        buttons: [
            {
                extend: 'excelHtml5',
                text: 'Download as Excel',
				title: 'Student Data',
				 download: 'open',
				 orientation:'landscape',
				  exportOptions: {
				  columns: ':visible'
				}
            }],
            destroy: true,
        data: newDataSet(),
        columns: [
            { title: "Name" },
            { title: "Batch" },
            { title: "Course" },
            { title: "CGPA" }
        ]
    } );

    // var tableTools = new $.fn.DataTable.TableTools(table);
    // $(tableTools.fnContainer()).insertBefore('#example_wrapper');



});
     
    
} );