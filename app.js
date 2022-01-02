const shareBtn = document.querySelectorAll('.shareBtn')
const share = document.querySelector('.share')

shareBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    share.classList.toggle('active')
  })
})