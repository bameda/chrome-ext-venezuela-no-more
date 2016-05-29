
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
];

replacements.forEach(function(elem, idx) {
    findAndReplaceDOMText(document.body, {'find': elem.find, 'replace': elem.replace});
});
