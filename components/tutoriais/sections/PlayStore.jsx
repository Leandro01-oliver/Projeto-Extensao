import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function TutorialPlayStore() {
    return (
        <>
            <hr />
            <section className="container-fluid bg-dark section_align_tutorial mt-5 mb-5">
                <div className="container-fluid text-center">
                    <h1 className="tile_tutotial">
                        Saiba como utilizar o PlayStore com nosso tutorial :
                    </h1>
                    <hr className="line_tutorial_one mx-auto" />
                </div>

                <section className="container-fluid">
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_ps_one">
                            <div className="text-center">
                                <img src="/assets/images/logocircularplaystore.png" alt="" title="" className="img_col_tutorial_ps" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_ps_two">
                            <div className="text-center">
                                <h2 className="sub_tile_tutotial">
                                    Passo a Passo para usar o PlayStore :
                                </h2>
                                <hr className="line_tutorial_two mx-auto" />
                            </div>
                            <section className="text-justify">
                                <p className="text_tutotial">
                                    Aqui aparecerá a interface do PlayStore explicando o que tem na plataforma para que possa está atento para que possa utilizalo.
                                </p>
                            </section>
                        </Col>
                    </Row>
                    <section className="container-fluid">
                        <div className="container-fluid text-center">
                            <h2 className="sub_tile_tutotial">
                                Captura da foto de nosso tutorial :
                            </h2>
                            <hr className="line_tutorial_three mx-auto" />
                        </div>
                        <section className="container-fluid">
                            <Row>
                                <Col sm={12} md={12} lg={6} xl={6} className="alig_img_col_one_tutorial_one">
                                    <div className="text-center">
                                        <img src="/assets/images/tutorial_playstore
                                         1.jpg" alt="" title="" className="img_col_tutorial_ex" />
                                    </div>
                                </Col>
                                <Col sm={12} md={12} lg={6} xl={6} className="alig_img_col_one_tutorial_two">
                                    <div className="text-center">
                                        <img src="/assets/images/tutorial_playstore 2.jpg" alt="" title="" className="img_col_tutorial_ex" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={12} lg={6} xl={6} className="alig_img_col_two_tutorial_one">
                                    <div className="text-center">
                                        <img src="/assets/images/tutorial_playstore 3.jpg" alt="" title="" className="img_col_tutorial_ex" />
                                    </div>
                                </Col>
                                <Col sm={12} md={12} lg={6} xl={6} className="alig_img_col_two_tutorial_two">
                                    <div className="text-center">
                                        <img src="/assets/images/tutorial_playstore 4.jpg" alt="" title="" className="img_col_tutorial_ex" />
                                    </div>
                                </Col>
                            </Row>
                        </section>
                    </section>
                </section>
            </section>
        </>
    );
}