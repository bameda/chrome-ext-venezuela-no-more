replacements = [
    {'find': 'Venezuela',        'replace': 'Chiquitistán'},
    {'find': 'VENEZUELA',        'replace': 'CHIQUITISTÁN'},
    {'find': 'venezuela',        'replace': 'chiquitistán'},

    {'find': 'venezolanos',      'replace': 'chiquitistanies'},
    {'find': 'VENEZOLANOS',      'replace': 'CHIQUITISTANIES'},

    {'find': 'venezolano',       'replace': 'chiquitistaní'},
    {'find': 'VENEZOLANO',       'replace': 'CHIQUITISTANÍ'},

    {'find': 'venezolanas',      'replace': 'chiquitistanitas'},
    {'find': 'VENEZOLANAS',      'replace': 'CHIQUITISTANITAS'},

    {'find': 'venezolana',       'replace': 'chiquitistanita'},
    {'find': 'VENEZOLANA',       'replace': 'CHIQUITISTANITA'},

    {'find': 'Nicolas Maduro',   'replace': 'Chiquito de la Calzada'},
    {'find': 'nicolas naduro',   'replace': 'chiquito de la calzada'},
    {'find': 'NICOLAS MADURO',   'replace': 'CHIQUITO DE LA CALZADA'},

    {'find': 'Nicolás Maduro',   'replace': 'Chiquito de la Calzada'},
    {'find': 'nicolás naduro',   'replace': 'chiquito de la calzada'},
    {'find': 'NICOLÁS MADURO',   'replace': 'CHIQUITO DE LA CALZADA'},

    {'find': 'N. MADURO',         'replace': 'C. DE LA CALZADA'},
    {'find': 'n. maduro',         'replace': 'c. de la calzada'},
    {'find': 'N. Maduro',         'replace': 'C. de La Calzada'},

    {'find': 'MADURO',           'replace': 'CHIQUITO'},
    {'find': 'maduro',           'replace': 'chiquito'},
    {'find': 'Maduro',           'replace': 'Chiquito'},

    {'find': 'JUAN GUAIDÓ',           'replace': 'LUCAS GRIJANDER'},
    {'find': 'juan guaidó',           'replace': 'lucas grijander'},
    {'find': 'Juan Guaidó',           'replace': 'Lucas Grijander'},

    {'find': 'JUAN GUAIDO',           'replace': 'LUCAS GRIJANDER'},
    {'find': 'juan guaido',           'replace': 'lucas grijander'},
    {'find': 'Juan Guaido',           'replace': 'Lucas Grijander'},

    {'find': 'J. GUAIDÓ',           'replace': 'L. GRIJANDER'},
    {'find': 'j. guaidó',           'replace': 'l. grijander'},
    {'find': 'J. Guaidó',           'replace': 'L. Grijander'},

    {'find': 'J. GUAIDO',           'replace': 'L. GRIJANDER'},
    {'find': 'j. guaido',           'replace': 'l. grijander'},
    {'find': 'J. Guaido',           'replace': 'L. Grijander'},

    {'find': 'GUAIDÓ',           'replace': 'GRIJANDER'},
    {'find': 'guaidó',           'replace': 'grijander'},
    {'find': 'Guaidó',           'replace': 'Grijander'},

    {'find': 'GUAIDO',           'replace': 'GRIJANDER'},
    {'find': 'guaido',           'replace': 'grijander'},
    {'find': 'Guaido',           'replace': 'Grijander'},

    {'find': 'chavismo',         'replace': 'chiquitismo'},
    {'find': 'CHAVISMO',         'replace': 'chiquitismo'},
    {'find': 'Chavismo',         'replace': 'Chiquitismo'}
];

var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if(MutationObserver){
            var obs = new MutationObserver(function(mutations, observer){
				mutations[0].addedNodes.forEach(function(node, idx) {
                    callback(node);
				})
            });
            obs.observe(obj, {childList:true, subtree:true});
        }
        else if(eventListenerSupported){
            obj.addEventListener('DOMNodeInserted', callback, false);
        }
    }
})();

// replace after the page is load
replacements.forEach(function(elem, idx) {
    findAndReplaceDOMText(document.body, {'find': elem.find, 'replace': elem.replace});
});

// replace at every change
observeDOM(document.body ,function(node){
    replacements.forEach(function(elem, idx) {
        findAndReplaceDOMText(node, {'find': elem.find, 'replace': elem.replace});
    });
});
