import { deleteStorage, getNode, getProductData, insertFirst, insertLast, loadStorage, renderProduct, saveStorage, tiger } from '../lib/index.js';

// console.log(getProductData(10));

/* 메인 상단 팝업 닫기 */
const headerXbutton = document.querySelector('.headerPopup__xButton');

function handleRemovePopup(){
  const headerPopup = document.querySelector('.headerPopup')
  
  headerPopup.style.transition = 'all 0.5s ease';
  headerPopup.style.opacity = 0.5;
  headerPopup.style.transform = 'translateY(-100%)';
  setTimeout(() => {
    headerPopup.remove();
  }, 200);
}
headerXbutton.addEventListener('click',handleRemovePopup)







const swiperWrapper2 = getNode('.swiperWrapper2')

async function renderItemList(){
  const response = await tiger.get('http://localhost:3000/products')    // promise 객체
  const itemList = response.data;

	itemList.forEach((item)=>{
		renderProduct(swiperWrapper2, item)
		
  })
}

renderItemList();


