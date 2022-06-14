
const ModalSearch = document.querySelector('.showed-modal-search');
const imageBlocks = document.querySelectorAll('.project-img');
// const images = document.querySelectorAll('.project-image');
const ModalImg = document.querySelector('.increase-img');
const modalImage = ModalImg.querySelector('img');
// const lightzoom = document.querySelectorAll('.lightzoom');
const ProjectContent = document.querySelector('.project-content');
const ButtonVideoPlay = document.querySelector('.button-play');
const YoutubeVideo = document.querySelector('.youtube-video');
const VideoContainer = document.querySelector('.video-container');
const ButtonSearch = document.querySelector('.icon-search');

function HideShowSearch() {
  if (ModalSearch.style.display == 'block') {
    ModalSearch.style.display = 'none';
  }
  else {
    ModalSearch.style.display = 'block';
    const InputSearch = document.querySelector('.input-search');
    InputSearch.focus();
    InputSearch.value = '';
  }
}


ButtonSearch.addEventListener('click', HideShowSearch);

imageBlocks.forEach((imageBlock) => {
  const src = imageBlock.querySelector('.project-image').src;
  const lightzoom = imageBlock.querySelector('.lightzoom');

  function onLightzommClick() {
    modalImage.src = src;
    ProjectContent.style.visibility = 'hidden';
    ModalImg.style.visibility = 'visible';
  }

  lightzoom.addEventListener('click', onLightzommClick);
});


// for (var i = 0; i < images.length; i++) {
//   let tempImg = `<img src='${images[i].src}'>`;
//   console.log(tempImg.src);
//   lightzoom[i].addEventListener('click', function() {
//     ProjectContent.style.visibility = 'hidden';
//     ModalImg.style.visibility = 'visible';
//     ModalImg.innerHtml += `<img src='${images[i].src}'>`;
//     // ModalImg.innerHtml += `$<p>Privet</p>`;
//   });
// }

const CloseModalImgButton = document.querySelector('.close-modal-img-button');

function CloseModalImg() {
  ModalImg.style.visibility = 'hidden';
  ProjectContent.style.visibility = 'visible';
}

CloseModalImgButton.addEventListener('click', CloseModalImg);


document.addEventListener('keydown', function(e) {
  let keyCode = e.keyCode;
  if (keyCode === 27) {//keycode is an Integer, not a String
    ModalImg.style.visibility = 'hidden';
    ProjectContent.style.visibility = 'visible';
    VideoContainer.style.visibility = 'hidden';

  }
});

const ProjectCategories = document.querySelector('.project-categories');
const ProjectCategoriesButtons = document.querySelectorAll('.button');

function PressButton(e) {
  let target = e.target;
  if (target.classList.contains('button')) {
    for (var i = 0; i < ProjectCategoriesButtons.length; i++) {
      ProjectCategoriesButtons[i].classList.remove('pressed');
    }
    target.classList.add('pressed');
  }
}

ProjectCategories.addEventListener('click', PressButton)



function StartVideo() {
  VideoContainer.style.visibility = 'visible';
  YoutubeVideo.play() ;
}

ButtonVideoPlay.addEventListener('click', StartVideo);
