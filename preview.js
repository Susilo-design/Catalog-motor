
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

//motor and car preview

document.querySelectorAll('.motor .motor-grid').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

document.querySelectorAll('.car .car-grid').forEach(product =>{
    product.onclick = () =>{
      preveiwContainer.style.display = 'flex';
      let name = product.getAttribute('data-name');
      previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if(name == target){
          preview.classList.add('active');
        }
      });
    };
  });

//other category preview

document.querySelectorAll('.product-container .product-card').forEach(product =>{
    product.onclick = () =>{
      preveiwContainer.style.display = 'flex';
      let name = product.getAttribute('data-name');
      previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if(name == target){
          preview.classList.add('active');
        }
      });
    };
  });

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});