$(document).ready(function () {

    // Set up the click event on the button to make
    // the ajax call to add the student.
    $("#btnnn").click(function () {

        // collect the data to a Json object.
        var data = {
            LastName: $.trim($("#LastName").val()),
            FirstName: $.trim($("#FirstName").val()),
            Score: $.trim($("#Score").val())
        };

        $.ajax({
            cache: false,
            type: "POST",
            url: addStudentUrl,
            data: data,
            dataType: "json",
            success: function (data) {
                // There is no problem with the validation
                if (data.Valid) {
                    $("#divStudent").html(data.StudentsPartial);
                    $("input").val("");
                    return;
                }

                // Problem happend during the validation, display
                // the messages. The following script will display the last
                // message related to the field.
                $.each(data.Errors, function (key, value) {
                    if (value != null) {
                        $("#Err_" + key).html(value[value.length - 1].ErrorMessage);
                    }
                });
            },
            error: function (xhr) {
                alert(xhr.responseText);
                alert("Critical Error!. Failed to call the server.");
            }
        });
    });

    $("#btnClear").click(function () {
        $(".errormsg").html("");
        $("input").val("");
    });

    // Set up the change event to the textboxes, so when user
    // makes changes, clear the error messages associated to the textbox.
    $("input").keyup(function () {
        var $errorDiv = $("#Err_" + this.id);
        if ($errorDiv.html() != "") {
            $errorDiv.html("");
        }
    });
});