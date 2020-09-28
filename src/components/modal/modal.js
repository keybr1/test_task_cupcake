class Modal {
  handleClear() {
    root_modal.innerHTML = "";
  }

  render() {
    let htmlModal = "";

    CATALOG.forEach(({ isbn13, subtitle, url }) => {
      if (isbn13) {
        htmlModal += `
            <tr>
              <td class="modal-element__subtitle">📚 ${subtitle}</td>
              <td class="modal-element__url"><a href="${url}" target="_blank">link to original</a></td>
            </tr>
          `;
      }
    });

    const html = `
      <div class="modal-container">
        <div class="modal__close" onclick="modalPage.handleClear();"></div> 
        <table>
          ${htmlModal}
        </table>
      </div>
    `;
    root_modal.innerHTML = html;
  }
}

const modalPage = new Modal();
