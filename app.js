const input = document.getElementById('district');
const linkbtn = document.getElementById('linkbtn');

jSuites.dropdown(input, {
  data: data,
  autocomplete: true,
  width: '280px',
  onchange: (elem, obj) => {
    const val = obj.getValue();
    if (val) {
      linkbtn.href = val;
      linkbtn.style.visibility = 'visible';
    } else {
      linkbtn.href = '';
      linkbtn.style.visibility = '';
    }
  }
});
