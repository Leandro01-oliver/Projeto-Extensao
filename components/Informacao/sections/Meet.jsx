import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function InformacaoMeet() {
    return (
        <>
            <hr />
            <section className="container-fluid bg-dark section_align_tutorial mt-5 mb-5">
                <div className="container-fluid text-center">
                    <h1 className="tile_tutotial">
                        Informações do Meet :
                    </h1>
                    <hr className="line_tutorial_one mx-auto" />
                </div>

                <section className="container-fluid alig_custom_one">
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_m_one">
                            <div className="text-center">
                                <img src="/assets/images/logocircularmeet.png" alt="" title="" className="img_col_tutorial_m" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_m_two">
                            <div className="text-center">
                                <h2 className="sub_tile_tutotial">
                                    Por que usar Meet?
                                </h2>
                                <hr className="line_tutorial_two mx-auto" />
                            </div>
                            <section className="text-justify">
                                <p className="text_tutotial">
                                    Um dos motivos para se usar o meet é pela sua simplicidade na questão da usabilidade, e outros aspectos que essa tecnologia de comunição e reunião nós entrega, como a pouca exigência de requitos para se usar . Diferente de outras tecnologias que também realizam a mesma função de reunião e comunicação
                                </p>
                            </section>
                        </Col>
                    </Row>
                </section>

                <section className="container-fluid alig_custom_two">
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_m_one">
                            <div className="text-center">
                                <img src="/assets/images/logocircularmeet.png" alt="" title="" className="img_col_tutorial_m" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_m_two">
                            <div className="text-center">
                                <h2 className="sub_tile_tutotial">
                                    Quais as funcionalidades do Meet ?
                                </h2>
                                <hr className="line_info_three mx-auto" />
                            </div>
                            <section className="text-justify">
                                <p className="text_tutotial">
                                    O meet como muitos outras entrega funcionalidades de reunião e comunicação maravilhosas, como bate papo, apresentação de tela, audio, camera e entre outras que a mesma nós oferece.
                                </p>
                            </section>
                        </Col>
                    </Row>
                    <section className="container-fluid ">
                        <Row>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <div className="text-center">
                                    <h3 className="sub_tile_tutotial">Vídeo</h3>
                                    <div className="alig_img_info">
                                        <img src="/assets/images/WhatsApp Image 2021-04-22 at 16.46.12 (1).jpeg" alt="" title="" className="img_ajust_apresent" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <div className="text-center">
                                    <h3 className="sub_tile_tutotial">Audio</h3>
                                    <div className="alig_img_info">
                                        <img src="/assets/images/microfone.png" alt="" title="" className="img_ajust_apresent" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <div className="text-center">
                                    <h3 className="sub_tile_tutotial">Chate</h3>
                                    <div className="alig_img_info">
                                        <img src="/assets/images/mensagens.png" alt="" title="" className="img_ajust_apresent" />
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