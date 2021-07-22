import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function InformacaoPlayStore() {
    return (
        <>
            <hr />
            <section className="container-fluid bg-dark section_align_tutorial mt-5 mb-5">
                <div className="container-fluid text-center">
                    <h1 className="tile_tutotial">
                        Informações do PlayStore :
                    </h1>
                    <hr className="line_tutorial_one mx-auto" />
                </div>

                <section className="container-fluid alig_custom_one">
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_ps_one">
                            <div className="text-center">
                                <img src="/assets/images/logocircularplaystore.png" alt="" title="" className="img_col_tutorial_ps" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_ps_two">
                            <div className="text-center">
                                <h2 className="sub_tile_tutotial">
                                    Por que usar PlayStore?
                                </h2>
                                <hr className="line_tutorial_two mx-auto" />
                            </div>
                            <section className="text-justify">
                                <p className="text_tutotial">
                                    A playstore é uma loja de apps seja android ou ios, na verdade você deve usar por ser uma das mais famosas lojas de apps que abriga tanto android como ios, e por ser uma loja com estrema integridade na sua reputação e segurança.
                                </p>
                            </section>
                        </Col>
                    </Row>
                </section>

                <section className="container-fluid alig_custom_two">
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_ps_one">
                            <div className="text-center">
                                <img src="/assets/images/logocircularplaystore.png" alt="" title="" className="img_col_tutorial_ps" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12} className="col_custom_tutorial_ps_two">
                            <div className="text-center">
                                <h2 className="sub_tile_tutotial" >
                                    Quais as funcionalidades do PlayStore ?
                                </h2>
                                <hr className="line_tutorial_three mx-auto" />
                            </div>
                            <section className="text-justify">
                                <p className="text_tutotial">
                                    As funcionalidades da playstore são as mais diversas já que é também mais um serviço do google, uma das funcionalidade é a compra de livros, filmes, jogos e musicas dentro da loja e a atualização automatica dos apps que foram instalados em seu smarthone,table ou para desktop.
                                </p>
                            </section>
                        </Col>
                    </Row>
                    <section className="container-fluid">
                        <Row>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <div className="text-center">
                                    <h3 className="sub_tile_tutotial">Filmes :</h3>
                                    <div className="alig_img_info">
                                        <img src="/assets/images/filmes01.png" alt="" title="" className="img_ajust_apresent" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <div className="text-center">
                                    <h3 className="sub_tile_tutotial">jogos :</h3>
                                    <div className="alig_img_info">
                                        <img src="/assets/images/controle.png" alt="" title="" className="img_ajust_apresent" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <div className="text-center">
                                    <h3 className="sub_tile_tutotial">livros :</h3>
                                    <div className="alig_img_info">
                                        <img src="/assets/images/livros.png" alt="" title="" className="img_ajust_apresent" />
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