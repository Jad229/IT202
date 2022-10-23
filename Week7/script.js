const form = $("form");

$(function() {
    form.submit(function(event){
        let studentName = $("#name").val();
        let studentMajor = $("#major").val();
        alert(`Student Name: ${studentName}     Major: ${studentMajor}`);
    });
});
