//===============
//Navbar control
//===============
document.addEventListener('DOMContentLoaded', () => {
  const serviceButtons = document.querySelectorAll('.services > button');

  serviceButtons.forEach(button => {
    button.type = 'button';
    button.addEventListener('click', e => {
      e.stopPropagation();
      const parent = button.parentElement;

      document.querySelectorAll('.services.active')
        .forEach(svc => svc !== parent && svc.classList.remove('active'));

      parent.classList.toggle('active');
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.services')) {
      document.querySelectorAll('.services.active')
        .forEach(svc => svc.classList.remove('active'));
    }
  });
});

//=================================
//Content for html offline schedule
//=================================

document.addEventListener('DOMContentLoaded', () => {
  const c1_title = document.querySelector('.c1-h2');
  const c1_p = document.querySelector('.c1-p');
  const c1_h3 = document.querySelector('.c1-h3');

  const c2_title = document.querySelector('.c2-h2');
  const c2_p = document.querySelector('.c2-p');
  const c2_h3 = document.querySelector('.c2-h3');

  const c3_title = document.querySelector('.c3-h2');
  const c3_p = document.querySelector('.c3-p');
  const c3_h3 = document.querySelector('.c3-h3');

  if (c1_title) c1_title.innerHTML = 'Tanggal contoh1';
  if (c1_p) c1_p.innerHTML = 'Ini hanyalah contoh contoh teks untuk nanti akan ditaruh di card informations';
  if (c1_h3) c1_h3.innerHTML = 'cimol depok cinere';

  if (c2_title) c2_title.innerHTML = 'Tanggal contoh1';
  if (c2_p) c2_p.innerHTML = 'Ini hanyalah contoh contoh teks untuk nanti akan ditaruh di card informations';
  if (c2_h3) c2_h3.innerHTML = 'cimol depok cinere';

  if (c3_title) c3_title.innerHTML = 'Tanggal contoh1';
  if (c3_p) c3_p.innerHTML = 'Ini hanyalah contoh contoh teks untuk nanti akan ditaruh di card informations';
  if (c3_h3) c3_h3.innerHTML = 'cimol depok cinere';
});