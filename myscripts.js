$(function () {
    $("#dialog").dialog({
        modal: true,
        autoOpen: false,
        title: "jQuery Dialog",
        width: 300,
        height: 150
    });
    $("#btnShow").click(function () {
        $('#dialog').dialog('open');
    });
});
