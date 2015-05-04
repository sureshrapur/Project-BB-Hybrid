'use strict';

app.activationView = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var activationViewModel = kendo.observable({
        fields: {
            activationCode: '',
        },
        submit: function() {}
    });

    parent.set('activationViewModel', activationViewModel);
})(app.activationView);