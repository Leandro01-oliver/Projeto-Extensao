import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function HomePageAnimaIcons() {
    return (<>
        <section className="container-fluid text-center bg-dark background_anima_icons mt-4 mb-4">
            <Row>
                <Col sm className="align_img_w">
                    <a href="/PageWhatsaap"><img src="/assets/images/logocircularwhatssap.png" className="anima_icon_section_one" alt="logo do Whatssap" width="90px" height="90px" /></a>
                </Col>
                <Col sm>
                    <a href="/PageMeet"><img src="/assets/images/logocircularmeet.png" className="anima_icon_section_two" alt="logo do Meet" width="90px" height="90px" /></a>
                </Col>
                <Col sm>
                    <a href="/PageZoom"><img src="/assets/images/logocircularzoom.png" className="anima_icon_section_three" alt="logo do Zoom" width="90px" height="90px" /></a>
                </Col>
                <Col sm>
                    <a href="/PageGmail"><img src="/assets/images/logocirculargmail.png" className="anima_icon_section_four" alt="logo do Gmail" width="90px" height="90px" /></a>
                </Col>
                <Col sm className="align_img_ps">
                    <a href="/PagePlayStore"><img src="/assets/images/logocircularplaystore.png" className="anima_icon_section_five" alt="logo do Play Store" width="90px" height="90px" /></a>
                </Col>
            </Row>
        </section>
    </>);
}