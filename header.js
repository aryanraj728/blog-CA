function linkSignup() {
    $(document).ready(function () {
        $("#sup").bind("click", (function () {
            $("#cls").trigger("click");
            $("#sign-up-button").trigger("click");
        }));
    });
}