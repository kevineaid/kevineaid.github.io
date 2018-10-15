
$( document ).ready(function() {


    var faqCount = 1;
    //FAQ Tabs
    $('#add-faq').click(function(){
        var faq = '<div class="card"> '+ 
                    ' <div class="card-body"> ' +
                        ' <h4>Faq ' + faqCount + '</h4> ' +
                        ' <div class="form-group"><button type="button" class="btn btn-sm btn-danger close-faq" style="position:absolute; right:20px; top:30px;"' +
                        '>Delete</button> ' +
                            ' <label class="form-label">NAME </label> ' +
                            ' <input type="text" class="form-control" name="example-text-input" placeholder="ex: What is the minimum age for rafting?"> ' +
                            ' <textarea class="content" name="faq-' + faqCount + '" id="faq-'+ faqCount +'"></textarea> ' +
                        ' </div></div></div>';
        $('.new-faq-wrap').append(faq);
        var idfaq = '#faq-' + faqCount;
        $(idfaq).richText();
        faqCount++;
    });


    //Pricing Tabs
    $("#booking-require").change(function() {
        if(this.checked) {
            $('#close-booking-field').show();
            $('#booking-tabs').show();
        }
        else {
            $('#booking-tabs').hide();
            $('#close-booking-field').hide();
        }
    });


    $('#limitation').hide();
    $("#limitation-check").change(function() {
        if(this.checked) {
            $('#limitation').show();
        }
        else {
            $('#limitation').hide();
        }
    });


    var bookingCount = 1;
    $('#add-booking').click(function(){
        var booking = '<div class="card"><div class="card-body"><div class="row"><div class="col-6"> ' +
            ' <h4>Field ' + bookingCount + '</h4></div><div class="col-6 text-right">' +
            ' <a href="#" class="btn btn-danger delete-booking">DELETE</a></div></div> ' +
        ' <div class="form-group"><label class="form-label">FORM KEY</label> ' +
        ' <input type="text" class="form-control" name="form-key-'+ bookingCount +'"> </div>'+
        ' <div class="form-group"><label class="form-label">LABEL</label> ' +
        ' <input type="text" class="form-control" name="booking-label-'+ bookingCount +'"></div>' +
        ' <div class="form-group"><div class="form-group m-0"><div class="form-label">Checkboxes</div><div class="custom-controls-stacked">' +
            '<label class="custom-control custom-checkbox">' +
                '<input type="checkbox" class="custom-control-input" name="pub-participant-check-'+ bookingCount+'" value="option1"> ' +
                '<span class="custom-control-label">PUBLISHED PER PARTICIPANT</span></label> ' +
            '<label class="custom-control custom-checkbox">' +
                '<input type="checkbox" class="custom-control-input" name="req-participant-check-'+ bookingCount+'" value="option1" > ' +
                '<span class="custom-control-label">REQUIRED PER PARTICIPANT</span></label> ' +
            '<label class="custom-control custom-checkbox">' +
                '<input type="checkbox" class="custom-control-input" name="pun-booking-check-'+ bookingCount+'" value="option1" > ' +
                '<span class="custom-control-label">PUBLISHED PER BOOKING</span></label> ' +
            '<label class="custom-control custom-checkbox">' +
                '<input type="checkbox" class="custom-control-input" name="per-booking-check-'+ bookingCount+'" value="option1" > ' +
                '<span class="custom-control-label">REQUIRED PER BOOKING</span></label> ' +
            '</div></div></div>' +
        ' <div class="form-group"><div class="form-group mb-0"><label class="form-label">OPTIONS</label>' +
                '<textarea rows="5" class="form-control" name="option-'+bookingCount+'" style="min-height:100px;" placeholder="Enter About your description"></textarea>' +
        ' </div></div></div></div>';
        $('.booking-field-wrap').append(booking);
        bookingCount++;
    });

    $('.close-faq').click(function(){
        console.log("remove");
        //$(this).closest(".card").remove();
    });
    $('.card').on('click', '.close-faq', function(e) {
        
        $(this).closest('.card').remove();
        // do whatever
    });
    $('.card').on('click', '.delete-booking', function(e) {
        $(this).closest('.card').remove();
        // do whatever
    });
    $('tr').on('click', '.delete-timeslot', function(e) {
        $(this).closest('tr').remove();
        // do whatever
    });

    $('.moving-tab').hide();
    $('.wizard-card .nav-pills > li > a.active').closest('li').addClass('active');
    
    $('.wizard-card .nav-pills > li > a').click(function(){
        $('.wizard-card .nav-pills > li > a').closest('li').removeClass('active');
        
        $(this).closest('li').addClass('active');
    });
    
        

});

