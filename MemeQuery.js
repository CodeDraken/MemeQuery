// Just return this keyword every time
var $ = function ( target ) {
        return new MemeQuery( target );
};

function MemeQuery ( target ) {
    this.target = document.querySelector(target);
}

MemeQuery.prototype.html = function(html) {
    this.target.innerHTML = html;
    return this; 
};

$('#myHtml').html('Meeemee').html('Chainable');
