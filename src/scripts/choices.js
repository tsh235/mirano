import { debounce } from "./debounce";

const adjustElemPosition = (elem, count = 0) => {
  const rect = elem.getBoundingClientRect();
  const viewportWidth = window.innerWidth;

  if (rect.left < 0) {
    elem.style.left = '0';
    elem.style.right = 'auto';
    elem.style.transform = 'translateX(0)';
  } else if (rect.right > viewportWidth) {
    elem.style.left = 'auto';
    elem.style.right = '0';
    elem.style.transform = 'translateX(0)';
  } else {
    elem.style.left = '50%';
    elem.style.right = 'auto';
    elem.style.transform = 'translateX(-50%)';
  }

  const postRect = elem.getBoundingClientRect();

  if ((postRect.left < 0 || postRect.right > viewportWidth) && count < 3) {
    count++
    adjustElemPosition(elem, count);
  }
};

export const initChoices = () => {
  const choices = document.querySelectorAll('.choices');
  const btns = document.querySelectorAll('.choices__btn');

  const closeAllChoices = ({target}) => {
    let clickInside = target.closest('.choices');

    if (!clickInside) {
      btns.forEach(item => {
        item.classList.remove('filter__select_open');
        item.nextElementSibling.classList.remove('choices__box_open');
      });
      document.removeEventListener('click', closeAllChoices);
    }
  };
  
  choices.forEach(choice => {
    const btn = choice.querySelector('.choices__btn');
    const box = choice.querySelector('.choices__box');
  
    btn.addEventListener('click', () => {   
      if (btn.classList.contains('filter__select_open')) {
        btn.classList.remove('filter__select_open');
        box.classList.remove('choices__box_open');
      } else {
        btns.forEach(item => {
          item.classList.remove('filter__select_open');
          item.nextElementSibling.classList.remove('choices__box_open');
        });
  
        btn.classList.add('filter__select_open');
        box.classList.add('choices__box_open');
      }
      
      if (box.classList.contains('choices__box_open')) {
        document.addEventListener('click', closeAllChoices);
      } else {
        document.removeEventListener('click', closeAllChoices);
      }
  
      adjustElemPosition(box);
    });
  
    window.addEventListener('resize', debounce(() => {
      adjustElemPosition(box);
    }));
  });
};