import React from 'react';

export default function Footer() {
    return (<>
        <footer>
            <section className="text-center">
                <a href="/" ><img src="/assets/images/logo_marca.png" alt="Logo do Manual para leigos no rodápe(footer)" title="Logo do Manual para leigos no rodápe(footer)" className="img_logo_footer" /></a>
            </section>
            <section className="container-fluid text-center ">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 custom_col_footer_i">
                        <a href="/PageInformacao" className="text_menus_footer">
                            Informação
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 custom_col_footer_iu">
                        <p className="text_menus_footer">
                            Instalações e Usabilidade
                            <i class="fas fa-chevron-down ml-2"></i>
                        </p>
                        <div className="container">
                            <a href="/PageWhatsaap" className="d-block sub_menus_footer">
                                Whatssap
                            </a>
                            <a href="/PageMeet" className="d-block sub_menus_footer">
                                Meet
                            </a>
                            <a href="/PageZoom" className="d-block sub_menus_footer">
                                Zoom
                            </a>
                            <a href="/PageGmail" className="d-block sub_menus_footer">
                                G-mail
                            </a>
                            <a href="/PagePlayStore" className="d-block sub_menus_footer">
                                Play Store
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 custom_col_footer_t">
                        <a href="/PageTutorial" className="text_menus_footer">
                            Tutoriais
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 custom_col_footer_ad">
                        <p className="text_menus_footer">
                            Analise de Dados
                            <i class="fas fa-chevron-down ml-2"></i>
                        </p>
                        <div className="container">
                            <a href="/PageFakeNews" className="d-block sub_menus_footer">
                                Fake News
                            </a>
                            <a href="/PageSegurancaInformacao" className="d-block sub_menus_footer">
                                Segurança da Informação
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid text-center email_footer">
                <p className="link_email_footer">manualdastecnologias@gmail.com</p>
            </section>
            <section className="container-fluid text-center bg-dark align_copy_footer">
                <p className="mt-3 mb-3 text_copy_footer">© Copyright 2021-2021</p>
            </section>
        </footer>
    </>);
}