$(document).ready(function () {
    //
    var top_name = "ALLOTJAMENT";
    var tra_origin = "GIRONA";
    var tra_destination = "PARIS";
    //var host = 'http://localhost:1337';
    var host = 'http://discuss.trabel.me:1337';

  var url = window.location.href;
  var string1 = url.substring(url.lastIndexOf('/') + 1);
  var topic_id = string1.substring(0,string1.lastIndexOf('?'));
  console.log(topic_id);

  //GET URL parameters
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
    var user_id = getUrlParameter('user_id');
    console.log(user_id);

    ////////
    //AJAX//
    ////////
    //GET TOPIC
    $.ajax({
        type: "GET",
        dataType: "json",
        url: host + "/topic/"+topic_id,
        success: function (data) {
            console.log(data);
            $('#topic-name').text(data.top_name);
            $('#tra_origin_destination').text(data.top_tra_id.tra_origin + " - " + data.top_tra_id.tra_destination);
            $(data.wallComments).each(function (idx, itm) {
              $('#wall').append(
                '<div class="list-group-item missatge">' +
                '<h4 class = "list-group-item-heading"> ' + itm.com_usr_id + '</h4>' +
                '<p class = "list-group-item-text"> ' + itm.com_description + ' </p>' +
                '</div>');
            });
        },
        error: function (err) {
            console.log(err);
        },
    });

    //GET TOPIC OF TRAVEL
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "",
        success: function (data) {
            $(data.topicporposal).each(function (idx, itm) {
                $('#topic-list').append('<li><a href="http://discuss.trabel.me/topics/' + itm.top_id + '"></a>' + itm.top_name + '</li>');
            });
        },
        error: function (err) {
            console.log(err);
        },
    });

    //GET TRAVEL
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "",
        success: function (data) {

        },
        error: function (err) {
            console.log(err);
        },
    });

    //GET MESSAGES
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "",
        success: function (data) {
            $(data.wallcomment).each(function (idx, itm) {
                $('#wall').append(
                        '<div class="list-group-item missatge">' +
                        '<h4 class = "list-group-item-heading"> ' + itm.com_usr_id + '</h4>' +
                        '<p class = "list-group-item-text"> ' + itm.com_description + ' </p>' +
                        '</div>');
            });
            $('#tra_origin_destination').text(tra_origin + " - " + tra_destination);
        },
        error: function (err) {
            console.log(err);
        },
    });

    //GET PORPOSALS
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "",
        success: function (data) {
            $(data.topicporposal).each(function (idx, itm) {
                $('#porposal').append(
                        '<li class="list-group-item">' +
                        '<span class="badge"> ' + 0 + ' </span>' +
                        itm.pro_description +
                        '</li>');
            });
            $('#tra_origin_destination').text(tra_origin + " - " + tra_destination);
        },
        error: function (err) {
            console.log(err);
        },
    });

    ///////////
    //MESSAGE//
    ///////////
    //Show pop-up
    $('#addMessage').click(function () {
        $('#inputBoxMessage').modal('show');
    });
    //Send message
    $('#submitMessage').click(function () {
        var user = "Thyplock";
        var text = $('#messageAdd').val();
        if (text !== '') {
            $('#wall').append(
                    '<div class="list-group-item missatge">' +
                    '<h4 class = "list-group-item-heading"> ' + user + '</h4>' +
                    '<p class = "list-group-item-text"> ' + text + ' </p>' +
                    '</div>');
            $('#inputBoxMessage').modal('hide');
        }
    });

    ////////////
    //PORPOSAL//
    ////////////
    //Show pop-up
    $('#addPorposal').click(function () {
        $('#inputBoxPorposal').modal('show');
    });
    //Send posposal
    $('#submitPorposal').click(function () {
        var user = "Thyplock";
        var text = $('#messagePorposal').val();
        var punctuation = 0;
        if (text !== '') {
            $('#porposal').append(
                    '<li class="list-group-item">' +
                    '<span class="badge"> ' + punctuation + ' </span>' +
                    text +
                    '</li>');
            $('#inputBoxPorposal').modal('hide');
        }
    });
});
