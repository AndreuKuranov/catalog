function catalog() {
  const catalogArr = [
    {
      name: 'Газосиликатные блоки', 
      link: '#', 
      list: [
        {
          name: 'Газосиликатные блоки',
          link: '#'
        }
      ]
    },
    {
      name: 'Железобетонные изделия', 
      link: '#', 
      list: [
        {
          name: 'Железобетонные изделия',
          link: '#'
        }
      ]
    },
    {
      name: 'Керамические блоки', 
      link: '#', 
      list: [
        {
          name: 'Керамические блоки',
          link: '#'
        }
      ]
    },
    {
      name: 'Кирпичи', 
      link: '#', 
      list: [
        {
          name: 'Облицовочный кирпич',
          link: '#'
        },
        {
          name: 'Керамический кирпич',
          link: '#'
        },
        {
          name: 'Фасадный кирпич',
          link: '#'
        },
        {
          name: 'Рядовой кирпич',
          link: '#'
        },
        {
          name: 'Черновой кирпич',
          link: '#'
        },
        {
          name: 'Кирпич клинкерный',
          link: '#'
        },
        {
          name: 'Кирпич рабочий',
          link: '#'
        },
        {
          name: 'Кирпич ручной формовки',
          link: '#'
        },
        {
          name: 'Строительный кирпичь',
          link: '#'
        },
        {
          name: 'Крупноформатный блок',
          link: '#'
        },
        {
          name: 'Поризованный кирпич',
          link: '#'
        },
        {
          name: 'Целевой кирпич',
          link: '#'
        },
      ]
    },
    {
      name: 'Кровельные материалы', 
      link: '#', 
      list: [
        {
          name: 'Кровельные материалы',
          link: '#'
        }
      ]
    },
    {
      name: 'Сухие смеси', 
      link: '#', 
      list: [
        {
          name: 'Сухие смеси',
          link: '#'
        }
      ]
    },
    {
      name: 'Тротуарная плитка', 
      link: '#', 
      list: [
        {
          name: 'Тротуарная плитка',
          link: '#'
        }
      ]
    },
    {
      name: 'Бордюрный камень', 
      link: '#', 
      list: [
        {
          name: 'Бордюрный камень',
          link: '#'
        }
      ]
    },
  ]
  
  let buttonCatalog = document.querySelector('.button--catalog');
  let catalog = document.querySelector('.catalog');
  let catalogListLeft = document.querySelector('.catalog__list--left');
  
  const checkClass = (element, cl) => element.classList.contains(cl);
  
  buttonCatalog.addEventListener('click', function(e) {
    catalog.classList.toggle('catalog--open');
  
    const f = (e) => {
      let x = [];
  
      for (let item of e.path) {
        for (let i of item.classList) {
          x.push(i);
        }
  
        if (checkClass(item, 'body')) {
          break
        }
      }
  
      if (!x.some(item => item === 'catalog')) {
        catalog.classList.remove('catalog--open');
        document.body.removeEventListener('click', f)
      }
    }
  
    if (catalog.classList.contains('catalog--open')) {
      setTimeout(() => {
        document.body.addEventListener('click', f);
      }, 0);
    } else {
      document.body.removeEventListener('click', f)
    }
  });
  
  let catalogListRight = document.createElement('ul');
  catalogListRight.classList.add('catalog__list', 'catalog__list--right');
  
  function getListContent(arr) {
    let fragment = new DocumentFragment();
  
    for(let item of arr) {
      let catalogItem = document.createElement('li');
      catalogItem.classList.add('catalog__item');
  
      let catalogLink = document.createElement('a');
      catalogLink.classList.add('catalog__link', 'catalog__link--right');
      catalogLink.href = item.link;
      catalogLink.textContent = item.name;
  
      catalogItem.append(catalogLink)
  
      fragment.append(catalogItem);
    }
  
    return fragment;
  }
  
  const colorLink = () => {
    let color = catalogListLeft.querySelector('.catalog__link--color');
  
    if (color) {
      color.classList.remove('catalog__link--color');
    } 
  }
  
  catalog.addEventListener('mouseover', function(e) {
    if (checkClass(e.target, 'catalog__link--left')) {
      colorLink();
  
      e.target.classList.add('catalog__link--color');
  
      catalogListRight.remove();
  
      let catalogListRightAll = catalogListRight.querySelectorAll('.catalog__item');
      Array.from(catalogListRightAll).forEach(item => item.remove());
  
      for (let i of catalogArr) {
        if (i.name === e.target.textContent) {
          catalogListRight.append(getListContent(i.list))
        }
      }
  
      catalog.append(catalogListRight);
    }
  });
  
  catalog.addEventListener('mouseleave', function() {
    catalogListRight.remove();
    colorLink();
  });
}

catalog();