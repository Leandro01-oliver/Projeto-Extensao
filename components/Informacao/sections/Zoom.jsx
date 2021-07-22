import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function InformacaoZoom() {
    return (
        <>
            <hr />
            <section className="container-fluid bg-dark section_align_tutorial mt-5 mb-5">
                <div className="container-fluid text-center">
                    <h1 className="tile_tutotial">
                        Informações do Zoom :
                    </h1>
                    <hr className="line_tutorial_one mx-auto" />
                </div>

                <section className="container-fluid alig_custom_one ">
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_z_one">
                            <div className="text-center">
                                <img src="/assets/images/logocircularzoom.png" alt="" title="" className="img_col_tutorial_z" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_z_two">
                            <div className="text-center">
                                <h2 className="sub_tile_tutotial">
                                    Por que usar Zoom?
                                </h2>
                                <hr className="line_tutorial_two mx-auto" />
                            </div>
                            <section className="text-justify">
                                <p className="text_tutotial">
                                    Um dos motivos para se usar o zoom é pelo fato de abrigar um bate papo de chate, pode exibir sua tela, dar a possibilidade de não permitir a entrada de qualquer pessoa não ser que o anfitrião possa peritir sua entra. porém é um aplicativo que exigir uma performace razoavel do aparelho que esteje acessando o zoom.
                                </p>
                            </section>
                        </Col>
                    </Row>
                </section>

                <section className="container-fluid alig_custom_two">
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_z_one">
                            <div className="text-center">
                                <img src="/assets/images/logocircularzoom.png" alt="" title="" className="img_col_tutorial_z" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_z_two">
                            <div className="text-center">
                                <h2 className="sub_tile_tutotial">
                                    Quais as funcionalidades do Zoom ?
                                </h2>
                                <hr className="line_info_three mx-auto" />
                            </div>
                            <section className="">
                                <p className="text_tutotial">
                                    O Zoom além de um app de reunião e comunicação é suas funcionalidades de chate,compartilhamento de tela,gravação de reuniões que estão sendo iniciadas, perfil dos que usam o mesmo e outras que ele ainda pode nós entregar.
                                </p>
                            </section>
                        </Col>
                    </Row>
                    <section className="container-fluid">
                        <Row>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <div className="text-center">
                                    <h3 className="sub_tile_tutotial">Vídeo</h3>
                                    <div className="alig_img_info"></div>
                                    <img src="/assets/images/WhatsApp Image 2021-04-22 at 16.46.12 (1).jpeg" alt="" title="" className="img_ajust_apresent" />
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