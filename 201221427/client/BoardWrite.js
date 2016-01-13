
Router.route('/BoardWrite', 'BoardWrite');

Template.BoardWrite.events({
    //4
    "click #cancel": function(e, tmpl) {
        $('#작성자').val('');
        $('#제목').val('');
        $('#본문').val('');
    },
    "click #write": function(e, tmpl) {
        if (!Meteor.user()) {
            return alert('로그인을 해주세요!!!');
        }
        var obj = {};
        console.log('#본문');
        obj.작성자 = Meteor.user().emails[0].address;
        obj.제목 = $('#제목').val();
        if(obj.작성자.length <= 0 || obj.제목.length <= 0) {
            //error
            return alert('작성자와 제목을 모두 입력해주세요!!');
        }
        obj.본문 = $('#본문').val();
        console.log('#본문');

        Boards.insert(obj);
        obj.createdAt = new Date();
        obj.type = 'boardWriting';
        Logs.insert(obj);
        console.log('#본문');
        $('#작성자').val('');
        $('#제목').val('');
        $('#본문').val('');

        Router.go('/Board');
    }
});
