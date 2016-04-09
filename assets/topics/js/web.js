$(document).ready(function () {
    //
    var top_name = "ALLOTJAMENT";
    var tra_origin = "GIRONA";
    var tra_destination = "PARIS";
    var host = 'http://localhost:1337';
    //var host = 'http://discuss.trabel.me:1337';

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
            console.log("TOPIC");
            console.log(data);
            $('#topic-name').text(data.top_name);
            $('#tra_origin_destination').text(data.top_tra_id.tra_origin + " - " + data.top_tra_id.tra_destination);
            $(data.wallComments).each(function (idx, itm) { //list msg

              //AJAX NOM OF CLIENT
              var user_id = itm.com_usr_id;
              $.ajax({
                type: "GET",
                dataType: "json",
                url: "/user/" + user_id,
                success: function (data2) {
                  console.log("USER NAME");
                  console.log(data2);
                  $('#wall').append(
                    '<div class="list-group-item missatge">' +
                    '<h4 class = "list-group-item-heading"> ' + data2.usr_nickname + '</h4>' +
                    '<p class = "list-group-item-text"> ' + itm.com_description + ' </p>' +
                    '</div>');
                },
                error: function (err) {
                  console.log(err);
                }
              });

              //END AJAX NOM CLIENT
            });




          $(data.topicProposals).each(function (idx, itm) { //list proposals
            $('#porposal').append(
              '<li class="list-group-item">' +
              '<span class="badge"> ' + 0 + ' </span>' +
              itm.pro_title +
              '</li>');
          });
          var travel_id = data.top_tra_id.tra_id;


          ///AJAX ALL TOPICS OF TRAVE
          $.ajax({
            type: "GET",
            dataType: "json",
            url: host + "/travel/"+travel_id,
            success: function (data) {
              console.log("TRAVEL");
              console.log(data);
              $(data.topics).each(function (idx, itm) {
                $('#topic-list').append('<li><a href="'+host+'/topics/' + itm.top_id + '?user_id='+ user_id +'">' + itm.top_name + '</a></li>');
              });
            },
            error: function (err) {
              console.log("ERRORS");
              console.log(err);
            },
          });
          //END AJAX OF TOPICS OF TRAVEL
        },
        error: function (err) {
            console.log("ERRORS");
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

            //AJAX SEND MSG
          var data = {
              com_description: text,
              com_id: new Date().getUTCMilliseconds(),
              com_top_id: topic_id,
              com_usr_id: user_id,
              com_date: new Date().toISOString().slice(0, 19).replace('T', ' ')
          };
          $.ajax({
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(data),
            url: host + "/wallcomment",

            success: function (data) {
              console.log("SUCCESS POST MSG");
              console.log(data);
            },
            error: function (err) {
              console.log("ERROR POST MSG");
              console.log(err);
            },
          });

            //END SEND MSG
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


          var data = {
            pro_id: new Date().getUTCMilliseconds(),
            pro_title: text,
            pro_description: "BETA VERSION, desde discuss no inserim descripcio al form",
            pro_top_id: topic_id,
            pro_usr_id: user_id
          };
          $.ajax({
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(data),
            url: host + "/topicproposal",

            success: function (data) {
              console.log("SUCCESS POST PROPOSAL");
              console.log(data);
            },
            error: function (err) {
              console.log("ERROR POST PROPOSAL");
              console.log(err);
            },
          });
            $('#inputBoxPorposal').modal('hide');
        }
    });
});
