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

    {'find': 'chavismo',         'replace': 'chiquitismo'},
    {'find': 'CHAVISMO',         'replace': 'chiquitismo'},
    {'find': 'Chavismo',         'replace': 'Chiquitismo'}
];

replacements.forEach(function(elem, idx) {
    findAndReplaceDOMText(document.body, {'find': elem.find, 'replace': elem.replace});
});
