Router.route('/memo', 'memo');

Template.memo.events({
    'keyup [name=send]': function(evt, tmpl) {
        if (evt.which === 13) {
            var message = $("[name=send]").val();
            var obj = {};
            obj.message = message;
            Chatting.insert(obj);
            $("[name=send]").val('');
        }
    }
});

Template.memo.helpers({
    messages: function() {
        var chattings = Chatting.find().fetch();
        chattings = chattings.reverse();
        return Chatting.find().fetch().reverse();
    }
});
