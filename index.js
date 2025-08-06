document.addEventListener('DOMContentLoaded', () => {
  const imagens = document.querySelectorAll('.mosaico-galeria img') // ajustado aqui
  const modal = document.getElementById('modal-galeria')
  const imgExpandida = document.getElementById('imgExpandida')
  const fecharModal = document.getElementById('fecharModal')

  imagens.forEach((img) => {
    img.style.cursor = 'pointer'
    img.addEventListener('click', () => {
      modal.style.display = 'block'
      imgExpandida.src = img.src
      imgExpandida.alt = img.alt || 'Imagem em destaque'
    })
  })

  fecharModal.addEventListener('click', () => {
    modal.style.display = 'none'
    imgExpandida.src = ''
    imgExpandida.alt = ''
  })

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none'
      imgExpandida.src = ''
      imgExpandida.alt = ''
    }
  })
})
