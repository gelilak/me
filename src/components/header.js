import React from 'react';

export default function Header() {
    return (
        <section>
            
        
            <header id="header" class="animated slideInDown" style={{'animation-delay': '.2s'}}>
                <table>
                    <tr>
                        <td id="logo"> gelila kebede. </td>
                        <td id="navigation">
                            <a href="#bio">about</a>
                            <a href="#contact">contact</a>
                        </td>
                    </tr>
                </table>
            </header>
        </section>
    );
}