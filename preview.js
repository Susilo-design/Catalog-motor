
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

<<<<<<< HEAD
//motor and car preview

=======
>>>>>>> d90964d3f0d4db343a662a11d6bfad133f016b72
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

<<<<<<< HEAD
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
=======
//Search box

document.querySelectorAll('.result-box .data-list').forEach(product =>{
>>>>>>> d90964d3f0d4db343a662a11d6bfad133f016b72
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