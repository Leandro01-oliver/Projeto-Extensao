import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function InformacaoWhatssap() {
    return (
        <>
            <section className="container-fluid bg-dark section_align_tutorial mt-5 mb-5">
                <div className="container-fluid text-center">
                    <h1 className="tile_tutotial">
                        Informações do WhatsApp :
                    </h1>
                    <hr className="line_tutorial_one mx-auto" />
                </div>

                <section className="container-fluid alig_custom_one">
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_w_one">
                            <div className="text-center">
                                <img src="/assets/images/logocircularwhatssap.png" alt="" title="" className="img_col_tutorial_w" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_w_two">
                            <div className="text-center">
                                <h2 className="sub_tile_tutotial">
                                    Por que usar WhatsApp?
                                </h2>
                                <hr className="line_tutorial_two mx-auto" />
                            </div>
                            <section className="text-justify">
                                <p className="text_tutotial">
                                    Um dos motivos mais obvios é tudo o que ele te entrega tanto de funcionalidades, quanto de números de usuário que se encontram neste App. E também por ser um App feito para que todos possam utilizalo.
                                </p>
                            </section>
                        </Col>
                    </Row>
                </section>

                <section className="container-fluid alig_custom_two">
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_w_one">
                            <div className="text-center">
                                <img src="/assets/images/logocircularwhatssap.png" alt="" title="" className="img_col_tutorial_w" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_w_two">
                            <div className="text-center">
                                <h2 className="sub_tile_tutotial">
                                    Por que o WhatsApp entrega tantas funcionalidades?
                                </h2>
                                <hr className="line_info_three mx-auto" />
                            </div>
                            <section className="text-justify">
                                <p className="text_tutotial">
                                    O WhatsApp por ser um app com multiplas utilidades seja para chamada de vídeo,menssagem,autoplay de áudio,menssagens para business e outras que esse app incrível nós oferece. todas essas funcionalidades só estão sendo capazes de serem realizadas, por que o WhatsApp busca insvestir seus esforços no que pode fácilitar a vida do usuário seja para uma simpes comunição ou levar seu negócio com business que a plataforma nós entrega.
                                </p>
                            </section>
                        </Col>
                    </Row>
                    <section className="container-fluid">
                        <Row>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <div className="text-center">
                                    <h3 className="sub_tile_tutotial">Chamada :</h3>
                                    <div className="alig_img_info">
                                        <img src="/assets/images/chamadavideo.jpg" alt="" title="" className="img_ajust_apresent" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <div className="text-center">
                                    <h3 className="sub_tile_tutotial">Menssage :</h3>
                                    <div className="alig_img_info">
                                        <img src="/assets/images/maos-segurando-smartphone-com-conversa-do-aplicati.jpeg" alt="" title="" className="img_ajust_apresent" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <div className="text-center">
                                    <h3 className="sub_tile_tutotial">Autodisplay de áudio :</h3>
                                    <div className="alig_img_info">
                                        <img src="/assets/images/audio_whatssap.png" alt="" title="" className="img_ajust_apresent" />
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