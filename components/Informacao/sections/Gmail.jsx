import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function InformacaoGmail() {
    return (
        <>
            <hr />
            <section className="container-fluid bg-dark section_align_tutorial mt-5 mb-5">
                <div className="container-fluid text-center">
                    <h1 className="tile_tutotial">
                        Informações do G-mail :
                    </h1>
                    <hr className="line_tutorial_one mx-auto" />
                </div>

                <section className="container-fluid alig_custom_one">
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_g_one">
                            <div className="text-center">
                                <img src="/assets/images/logocirculargmail.png" alt="" title="" className="img_col_tutorial_g" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_g_two">
                            <div className="text-center">
                                <h2 className="sub_tile_tutotial">
                                    Por que usar G-mail?
                                </h2>
                                <hr className="line_tutorial_two mx-auto" />
                            </div>
                            <section className="text-justify">
                                <p className="text_tutotial">
                                    O motivo principal para se usar é por conta do google já que ele detem direitos do g-mail, uma tecnologia desenvolvida pelo mesmo e com o g-mail você pode se conectar com outros serviços qu ele nós possibilitam usalos.
                                </p>
                            </section>
                        </Col>
                    </Row>
                </section>

                <section className="container-fluid alig_custom_two">
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_g_one">
                            <div className="text-center">
                                <img src="/assets/images/logocirculargmail.png" alt="" title="" className="img_col_tutorial_g" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_g_two">
                            <div className="text-center">
                                <h2 className="sub_tile_tutotial" >
                                    Quais as funcionalidades do G-mail ?
                                </h2>
                                <hr className="line_info_three mx-auto" />
                            </div>
                            <section className="text-justify">
                                <p className="text_tutotial">
                                    O g-mail por ter relação com os serviços do google ele têm diversas funcionalidades, como enviar arquivos do word,zip e entre outro que pode ser enviado a um outro gmail ou email,caixa de entrega que fica todos os arquivos ou vídeos que lhe foram enviados e racunhos que podem ser arquivos ou outros e entre outras que o gmail tem.
                                </p>
                            </section>
                        </Col>
                    </Row>
                    <section className="container-fluid">
                        <Row>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <div className="text-center">
                                    <h3 className="sub_tile_tutotial">Caixa de entrada :</h3>
                                    <div className="alig_img_info">
                                        <img src="/assets/images/imagem.png" alt="" title="" className="img_ajust_apresent" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <div className="text-center">
                                    <h3 className="sub_tile_tutotial">Enviar :</h3>
                                    <div className="alig_img_info">
                                        <img src="/assets/images/enviar.png" alt="" title="" className="img_ajust_apresent" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <div className="text-center">
                                    <div className="alig_img_info">
                                        <h3 className="sub_tile_tutotial">Rascunhos :</h3>
                                        <img src="/assets/images/anexo.png" alt="" title="" className="img_ajust_apresent" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </section>
                </section>
            </section>
        </>
    );
}