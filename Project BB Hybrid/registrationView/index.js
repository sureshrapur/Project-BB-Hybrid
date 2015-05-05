'use strict';

app.registrationView = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var registrationViewModel = kendo.observable({
        fields: {
            tel1: '',
            tel: '',
            dropdownlist: '',
        },
        submit: function() {}
    });

    parent.set('registrationViewModel', registrationViewModel);
})(app.registrationView);