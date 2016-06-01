
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
	
	{'find': 'Nicolas Maduro',       'replace': 'Chiquito de la Calzada'},
	{'find': 'nicolas naduro',       'replace': 'chiquito de la calzada'},
	{'find': 'NICOLAS MADURO',       'replace': 'CHIQUITO DE LA CALZADA'},
	
	{'find': 'N.MADURO',       'replace': 'C. de la CALZADA'},
	{'find': 'n.maduro',       'replace': 'c. de la calzada'},
	{'find': 'N.Maduro',       'replace': 'C. de la Calzada'},
	
	{'find': 'MADURO',       'replace': 'CHIQUITO'},
	{'find': 'maduro',       'replace': 'chiquito'},
	{'find': 'Maduro',       'replace': 'Chiquito'}
];

replacements.forEach(function(elem, idx) {
	findAndReplaceDOMText(document.body, {'find': elem.find, 'replace': elem.replace});
});
