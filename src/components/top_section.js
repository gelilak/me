import React from 'react';

export default function TopSection() {
    return (
        <section>
            <table id="top_part">
                <tr>
                    <td id="about" class="animated slideInLeft">
                        <h1>hi, i'm gelila <br/> learn more about me below! </h1>
                        <button class="btn_one"> View Resume </button><br/>
                        <table>
                            <tr>
                                <td class="animated zoomIn" style={{'animation-delay': '2.2s'}}><a class="social" href="https://www.linkedin.com/in/gelila-kebede/"><i class="fab fa-linkedin"></i></a></td>
                                <td class="animated zoomIn" style={{'animation-delay': '2.8s'}}><a class="social" href="https://github.com/gelilak"><i class="fab fa-github"></i></a></td>
                            {//issue with large spacing between linkedin and github icon coould be padding of animated zoomIn classes; not sure where source code for these classes is
                            }
                            </tr>
                        </table>
                    </td>
                    <td id="rightImage" class="animated jackInTheBox" style={{'animation-delay': '2.2s'}}></td>
                </tr>
            </table>
        </section>
    );
}