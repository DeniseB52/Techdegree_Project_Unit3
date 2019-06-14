
//puts `name` text field in focus when page loads
$('#name')
.ready()
.focus(); 

$('#other-title')
.hide();

$('#title').on('change', (e) => {
    if ($(this).val() === 'other') {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }

});

$('#design option')
.eq(0)
.ready()
.hide();

$('#colors-js-puns label')
.ready()
.text('Please select a T-shirt theme:');

$('#color option')
.ready()
.hide();

$('#design').change( (e) => {
    if ($('#design option:selected').val() === "js puns") {
        $('#color option:selected').removeAttr('selected');
        $('#color option[value ="cornflowerblue"]').show().attr("selected", true);
        $('#color option[value ="darkslategrey"]').show();
        $('#color option[value ="gold"]').show();
        $('#color option[value ="tomato"]').hide();
        $('#color option[value ="steelblue"]').hide();
        $('#color option[value ="dimgrey"]').hide();
      }else if($('#design option:selected').val() === "heart js") {
        $('#color option:selected').removeAttr('selected');
        $('#color option[value ="tomato"]').show().attr("selected", true);
        $('#color option[value ="steelblue"]').show();
        $('#color option[value ="dimgrey"]').show();
        $('#color option[value ="cornflowerblue"]').hide();
        $('#color option[value ="darkslategrey"]').hide();
        $('#color option[value ="gold"]').hide();
      };

// ACTIVITIES

// CREATE an element to display the total cost.

    const $totalActivitiesDisplay = $("<label><span>Total Cost: $</span></label>");
    $('.activities').append($totalActivitiesDisplay);
    let $totalActivitiesCost = 0 ;

// LISTEN for changes in the Activity section.
    
    $('.activities').change( (e) => {
        let $selectedActivities = $(e.target);
        console.log($selectedActivities);
        const $parentLabel = $selectedActivities.parent().text();
        console.log($parentLabel);

        const $dollarIndex = $($parentLabel).indexOf('$');
        console.log($dollarIndex);

        let $activityCost = $parentLabel.slice($dollarIndex);
        console.log($activityCost);

        $activityCost = parseInt($activityCost);

     });
