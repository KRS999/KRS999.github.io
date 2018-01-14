var ul = document.getElementById('masonry');
docfrag = document.createDocumentFragment();


var products = [];

function generateProducts (cout) {
    var newArr = [];
    for (var i = 0; i < cout; i++) {
        newArr.push({
            id: i,
			name: 'product' + i,
			img: 'img.png',
			miniAbout: 'miniAbout' + i,
			price: 100 + (i * 2),
			category: i * 4
        });
    }
    return newArr;
}

products = generateProducts(52);

function getProductsListRange (products, from, to) {
  var template = [];
  var e, a;
  
  if (products.length <= to) { to = products.length;}
  
  for (var i = from; i < to; i++) {
    e = products[i]; // i объект продукта 
    
    a = document.createElement("a");
    a.innerHTML = 
	'<div class="myWork__box col-md-4 col-sm-6">'+
	'<div class="site__wrap">' + 
			'<a href="KRS999.github.io/site-2/" target=_blank">' +
			'<div class="site site-2">' + '</div>' +
			'</a>' +
		'</div>' +
	'</div>';
	template.push(a);
    console.log(template);
  }
  
  console.log(template)
  
  if (products.length > to) {
      var btn = document.createElement('button');
      btn.innerHTML = 'Показать ещё';
      btn.addEventListener('click', function () {
          productsHTML(getProductsListRange(products, to, to + 5), to, to + 10);
          this.parentElement.removeChild(this);
      });
      template.push(btn);
  }
  
  return template;
}

function productsHTML(list, from, to) {
    var listHtml = list;

    function viewProducts (list) {
        for (var i = 0; i < list.length; i++) {
            docfrag.appendChild(list[i]);
        }
        ul.appendChild(docfrag);
    }
    
    viewProducts(listHtml);
}

productsHTML(getProductsListRange(products, 0, 5), 0, 10);