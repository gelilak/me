import React from 'react';

export default function Header() {
    return (
        <section>
            <div id="loading">
                <div id="spinner"></div>
            </div>
            <div id="magnify">
                <h1 onclick="closemagnify()"><i class="fas fa-times"></i></h1>
                <div id="img_here"></div>
            </div>
            
            <header id="header" class="animated slideInDown" style={{'animation-delay': '.2s'}}>
                <table>
                    <tr>
                        <td id="logo"> gelila kebede. </td>
                        <td id="navigation">
                            <a href="#bio">about</a>
                            <a href="#experience">experience</a>
                        </td>
                    </tr>
                </table>
            </header>
        </section>
    );
}