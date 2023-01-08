import React from 'react';

export default function TopSection() {
    return (
        <section>
            <table id="top_part">
                <tr>
                    <td id="about" class="animated slideInLeft">
                        <h1>hi, i'm gelila <br/> learn more about me below! </h1>
                        <table>
                            <tr>
                                <td class="animated zoomIn" style={{'animation-delay': '2.2s'}}><a class="social" href="https://www.linkedin.com/in/gelila-kebede/"><i class="fab fa-linkedin"></i></a></td>
                                <td class="animated zoomIn" style={{'animation-delay': '2.6s'}}><a class="social" href="https://www.instagram.com/gelila.kebede/"><i class="fab fa-instagram"></i></a></td>
                                <td class="animated zoomIn" style={{'animation-delay': '2.8s'}}><a class="social" href="https://github.com/gelilak"><i class="fab fa-github"></i></a></td>
                                <td class="animated zoomIn" style={{'animation-delay': '3.0s'}}><a class="social" href="https://open.spotify.com/user/gelilakebede123"><i class="fab fa-spotify"></i></a></td>
                            </tr>
                        </table>
                    </td>
                    <td id="rightImage" class="animated jackInTheBox" style={{'animation-delay': '2.2s'}}></td>
                </tr>
            </table>
        </section>
    );
}