
Router.route('/FavoriteVideo', 'FavoriteVideo');

/*
Template.FavoriteVideo.helpers({
    likeCount: function() {
        return FavoriteVideo.findOne().likeCount;
    }
});


Template.FavoriteVideo.events({
    'click #like': function(e, tmpl) {
        var item = FavoriteVideo.findOne();
        item.likeCount++;
        FavoriteVideo.update({_id: item._id}, item);
    }
});*/
