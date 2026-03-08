var allCards = [];

document.addEventListener('DOMContentLoaded', function() {
  buildCards(document.getElementById('content'), allCards);

  function populateSelect(id, field) {
    var sel = document.getElementById(id);
    if (!sel) return;
    var vals = [];
    requirements.forEach(function(r) {
      if (r[field] && vals.indexOf(r[field]) === -1) vals.push(r[field]);
    });
    vals.sort();
    vals.forEach(function(v) {
      var o = document.createElement('option');
      o.value = v;
      o.textContent = v;
      sel.appendChild(o);
    });
  }

  populateSelect('f-instrument', 'instrument');
  populateSelect('f-role',       'role');
  populateSelect('f-topic',      'topic');
  populateSelect('f-principle',  'principle');
  populateSelect('f-kr',         'kr');

  function applyFilters() {
    var fI = document.getElementById('f-instrument').value;
    var fR = document.getElementById('f-role').value;
    var fT = document.getElementById('f-topic').value;
    var fP = document.getElementById('f-principle').value;
    var fK = document.getElementById('f-kr').value;
    var visible = 0;

    allCards.forEach(function(item) {
      var c = item.card;
      var show = (!fI || c.dataset.instrument === fI) &&
                 (!fR || c.dataset.role       === fR) &&
                 (!fT || c.dataset.topic      === fT) &&
                 (!fP || c.dataset.principle  === fP) &&
                 (!fK || c.dataset.kr         === fK);
      c.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    document.querySelectorAll('.kr-section').forEach(function(sec) {
      var hasVisible = false;
      sec.querySelectorAll('.req-card').forEach(function(c) {
        if (c.style.display !== 'none') hasVisible = true;
      });
      sec.style.display = hasVisible ? '' : 'none';
    });

    document.getElementById('result-count').textContent =
      visible + ' of ' + requirements.length + ' requirements';
    document.getElementById('no-results').style.display =
      visible === 0 ? 'block' : 'none';
  }

  function clearFilters() {
    ['f-instrument','f-role','f-topic','f-principle','f-kr'].forEach(function(id) {
      document.getElementById(id).value = '';
    });
    applyFilters();
  }

  ['f-instrument','f-role','f-topic','f-principle','f-kr'].forEach(function(id) {
    document.getElementById(id).addEventListener('change', applyFilters);
  });
  document.getElementById('btn-clear').addEventListener('click', clearFilters);
  document.getElementById('no-results-clear').addEventListener('click', clearFilters);

  applyFilters();
});
