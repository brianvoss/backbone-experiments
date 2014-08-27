/**
* Form Helper
*/
define([
    'jquery'
], function($){
    'use strict';
    /**
    * Extract the data values from
    * a form and return them
    * @param HTMLFormElement
    */
    function serialize(form_element){
        if (!(form_element instanceof HTMLFormElement)) {
            // TODO: throw here instead?
            return {};
        }

        var json = {};
        var $form = $(form_element);
        $form.find('input, select').each(function(){
            var val;
            if (!this.name) {
                return;
            }

            if ('radio' === this.type) {
                if (json[this.name]) { return; }
                json[this.name] = this.checked ? this.value : '';
            } else if ('checkbox' === this.type) {
                val = json[this.name];
                if (!this.checked) {
                    if (!val) {
                        json[this.name] = '';
                    }
                } else {
                    json[this.name] =
                        typeof val === 'string' ? [val, this.value] :
                            $.isArray(val) ? $.merge(val, [this.value]) : this.value;
                }
            } else {
                json[this.name] = this.value;
            }
        });
        return json;
    }

    return {
        serialize: serialize
    };
});