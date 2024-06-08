const input = document.getElementById('job');
const result = document.getElementById('result');

jSuites.dropdown(input, {
  data: data,
  autocomplete: true,
  placeholder: 'พิมพ์เลขกลุ่มอาชีพเพื่อค้นหา',
  width: '280px',
  onchange: (elem, obj) => {
    const val = obj.getValue();
    if (val.match(/^\d+$/)) {
      result.innerText = `ขออภัย ระบบยังไม่มีกลุ่มอาชีพ ${obj.getText().split(',')[0]} ทางเราจะเพิ่มกลุ่ม LINE ให้ครบทั้งประเทศโดยเร็วที่สุด รบกวนเช็คเว็บของเราอีกครั้งในวันพรุ่งนี้`;
    } else location = val;
  }
});
