import React from 'react';

export default function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src="/assets/images/logo_marca.png" alt="Logo do Manual para leigos na Navbar" title="Logo do Manual para leigos na Navbar" className="img_logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a className="nav-link btn_menus mt-3" href="/PageInformacao">
                  <i class="fa fa-info mr-2"></i>
                  Informações</a>
              </li>
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle btn_menus mt-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fab fa-instalod mr-2"></i>
                  Instalações e usabilidade
                </a>
                <ul className="dropdown-menu mt-2 sub_menus_one text-center" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/PageWhatsaap">WhatsApp</a></li>
                  <li><a className="dropdown-item" href="/PageMeet">Meet</a></li>
                  <li><a className="dropdown-item" href="/PageZoom">Zoom</a></li>
                  <li><a className="dropdown-item" href="/PageGmail">G-mail</a></li>
                  <li><a className="dropdown-item" href="/PagePlayStore">PlayStore</a></li>
                </ul>
              </li>
              <li className="nav-item ">
                <a className="nav-link btn_menus mt-3" href="/PageTutorial">
                  <i class="fa fa-chalkboard-teacher mr-2"></i>
                  Tutoriais
                </a>
              </li>
              <li className="nav-item dropdown li_position">
                <a className="nav-link dropdown-toggle btn_menus mt-3 mb-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa fa-th-large mx-2"></i>Análise de dados
                </a>
                <ul className="dropdown-menu sub_menus_two mb-3 text-center" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item " href="/PageFakeNews">
                      <i class="fa fa-search mr-2"></i>
                      Fake News
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/PageSegurancaInformacao">
                      <i class="fas fa-user-shield mr-2"></i>Segurança da Informação
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}