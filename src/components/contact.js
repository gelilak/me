import React from 'react';

export default function Contact() {
    return (
        <section>
           <div id="contact">
                <h1>contact</h1>
                    <table>
                        <tr>
                            <td>
                                <div id="inner_div">
                                    <table id="inner_table">
                                        <tr>
                                            <td><i class="fas fa-phone"></i> &nbsp; +1 234 567 8910</td>
                                        </tr>
                                        <tr>
                                            <td><i class="fas fa-at"></i> &nbsp; yourname@email.com</td>
                                        </tr>
                                        <tr>
                                            <td><i class="fas fa-fax"></i> &nbsp; +1 234 567 8910</td>
                                        </tr>
                                        <tr>
                                            <td><i class="fas fa-map-marker-alt"></i>
                                            <div id="address">
                                                Street 123,<br/>
                                                blah blah city,<br/>
                                                blah blah country
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <a class="social" href="https://www.linkedin.com/in/gelila-kebede/"><i class="fab fa-linkedin"></i></a>
                                            <a class="social" href="https://www.instagram.com/gelila.kebede/"><i class="fab fa-instagram"></i></a>
                                            <a class="social" href="https://github.com/gelilak"><i class="fab fa-github"></i></a>
                                            <a class="social" href="https://open.spotify.com/user/gelilakebede123"><i class="fab fa-spotify"></i></a>
                                        </tr>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </table>
            </div>
        </section>
    );
}